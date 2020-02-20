import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import makeStore from "../stores";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme";
import Seo from "../components/public/seo";
import cookies from "next-cookies";
import { get_cookie_all } from "../reducers/utilsinfo";
import { validate_token } from "../reducers/kakaoinfo";
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
    if (localStorage.getItem("jwt_token")) {
      validate_token()(this.props.store.dispatch).then(valid => {
        if (!valid)
          this.props.store.dispatch({
            type: "FIXED_LOGIN",
            payload: {
              loginInfo: {
                jwt_token: localStorage.getItem("jwt_token")
              }
            }
          });
      });
    }
    get_cookie_all(localStorage)(
      this.props.store.dispatch,
      this.props.store.getState
    );
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
        <meta
          name="keywords"
          content="medicoscope,병원,doctor,hospital,의사,메디코스코프,메디코,medico,Medicoscope,Medico,medical,department,질병,진료"
        />
      </Head>
    );
  }

  render() {
    const { Component, pageProps, store, cookies, ...others } = this.props;
    return (
      <Container>
        <CssBaseline />
        {this.renderHead()}
        <Seo title="MakeStory" description="MakeStroy Game Hub" />
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
      </Container>
    );
  }
}
export default withRedux(makeStore, { debug: false })(BlogApp);
