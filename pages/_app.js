import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import makeStore from "../stores";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme";
import Seo from "../components/public/seo";
import cookies from "next-cookies";
import { setDispatch, setStateFuc } from "../logic/errorLogic";
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider
} from "@material-ui/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

class BlogApp extends App {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
    setDispatch(this.props.store.dispatch);
    setStateFuc(this.props.store.getState);
  }
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    const cookie = cookies(ctx);
    return { pageProps, cookies: cookie };
  }

  renderHead() {
    return (
      <Head>
        <meta
          name="viewport"
          content="width=device-width height=device-height, initial-scale=1 user-scalable=no maximum-scale=1 minimum-scale=1"
        />
      </Head>
    );
  }

  render() {
    const { Component, pageProps, store, cookies, ...others } = this.props;
    return (
      <>
        <CssBaseline />
        {this.renderHead()}
        <Seo title="BlogShot" description="blogshot" />
        <StylesProvider injectFirst>
          <StyledThemeProvider theme={theme}>
            <MuiThemeProvider theme={theme}>
              <Provider store={store}>
                <Component
                  {...pageProps}
                  store={store}
                  cookies={cookies}
                  {...others}
                />
              </Provider>
            </MuiThemeProvider>
          </StyledThemeProvider>
        </StylesProvider>
      </>
    );
  }
}
export default withRedux(makeStore, { debug: false })(BlogApp);
