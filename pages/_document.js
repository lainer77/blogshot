import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";
import flush from "styled-jsx/server";
import { ServerStyleSheet } from "styled-components";

export default class RootDocument extends Document {
  static async getInitialProps(ctx) {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    // ctx.renderPage = () =>
    //     originalRenderPage({
    //         enhanceApp: App => props => sheets.collect(<App {...props} />)
    //     });
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props =>
          sheet.collectStyles(sheets.collect(<App {...props} />))
      });

    const initialProps = await Document.getInitialProps(ctx);

    const styles = sheets.getStyleElement();
    const style = sheet.getStyleElement();
    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: (
        <React.Fragment>
          {/* {...originalRenderPage} */}
          {initialProps.styles}
          {styles}
          {style}
          {flush() || null}
        </React.Fragment>
      )
    };
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta property="og:title" content="BlogShot" />
          <meta property="og:site_name" content="BlogShot" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="BlogShot" />

          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css"
          ></link>
          <script async src="//developers.kakao.com/sdk/js/kakao.min.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
