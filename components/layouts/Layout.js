import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Footer from "../public/footer";
import { VIEWPORT_RESPONSIVE_FONT_SIZE } from "../../styles/typography";
import {
  message_close,
  set_loading,
  error_close,
  whether_close
} from "../../reducers/utilsinfo";
import MessagePopup from "../popup/MessagePopup";
import ErrorPopup from "../popup/ErrorPopup";
import WhetherPopup from "../popup/WhetherPopup";
import LoadingPopup from "../popup/LoadingPopup";
import Router from "next/router";
import axios from "axios";

const IpadSize = "768px";
const IpadProSize = "1024px";

const Layout = props => {
  return (
    <div id="layout">
      {props.content}
      <MessagePopup open={props.open} onClose={props.message_close}>
        {props.msg}
      </MessagePopup>
      <ErrorPopup open={props.is_error} onClose={props.error_close}>
        {props.errorObj ? props.errorObj.msg : ""}
      </ErrorPopup>
      <WhetherPopup open={props.is_whether} onClose={props.whether_close}>
        {props.whetherObj ? props.whetherObj.msg : ""}
      </WhetherPopup>
      <LoadingPopup loading={props.loading} onLoad={props.set_loading} />
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
            input[type="text"] {
                -webkit-appearance: none;
                outline: none;
            }
            *:focus {
                outline: none;
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

const mapStateToProps = state => {
  return {
    open: state.utilsinfo.open,
    msg: state.utilsinfo.msg,
    loading: state.utilsinfo.loading,
    is_error: state.utilsinfo.is_error,
    errorObj: state.utilsinfo.errorObj,
    is_whether: state.utilsinfo.is_whether,
    whetherObj: state.utilsinfo.whetherObj
  };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { message_close, set_loading, error_close, whether_close },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
