import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { VIEWPORT_RESPONSIVE_FONT_SIZE } from "../../styles/typography";
import { useRouter } from "next/router";

const IpadSize = "768px";
const IpadProSize = "1024px";

const Layout = props => {
  const route = useRouter();
  useEffect(() => {
    if (localStorage.getItem("rjt")) {
    } else if (route.pathname !== "/login" && route.pathname !== "/signup") {
      route.push("/login", "/");
    }
  }, []);
  return (
    <div id="layout">
      {props.content}
      <style jsx>{`
        p {
          color: black;
        }
        div {
          background: white;
        }
        /* @media (max-width: 375px) {
                div {
                    background: white;
                }
            } */
      `}</style>
      <style global jsx>{`
            html {
                /* font-size: ${VIEWPORT_RESPONSIVE_FONT_SIZE}; */
                font-size: 16px;
                height: 100%;
                background: gray;
                max-width: 1024px;
                margin: 0 auto;

            }

            /* @media (min-width: ${IpadSize}) {
                html {
                    font-size: 42px;
                }
            } */
            body {
                height: 100%;
                font-size: 16px;
                max-width: 1024px;
                background: white;
            }
            body		{ font-family: 'NanumSquare', sans-serif; }
            .normal		{ font-weight: 400 }
            .bold		{ font-weight: 700 }
            .bolder		{ font-weight: 800 }
            .light		{ font-weight: 300 }
        `}</style>
    </div>
  );
};

export default Layout;
