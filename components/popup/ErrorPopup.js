import React, { useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";

import { Button as B, Typography } from "@material-ui/core";

import Layout from "../layouts/PopupLayout";
import { pTr, pInt } from "../../styles/typography";

import { error_close, set_loading } from "../../reducers/utilsinfo";

import theme from "../../theme";
import { useRouter } from "next/router";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    // height: pTr(568)
    width: pTr(299),
    borderRadius: pTr(6)
  };
}

//#region
const PaperStyle = styled.div`
  && {
    position: absolute;
    background-color: ${theme.palette.background.paper};
    box-shadow: ${theme.shadows[0]};
    outline: "none";
  }
`;
const Content = styled.div`
  && {
    text-align: center;
    padding: ${pTr(10)} ${pTr(10)};
  }
`;
const Body = styled(Typography)`
  && {
    font-size: ${pTr(18)};
    line-height: ${pInt(24)}px;
    letter-spacing: 0;
    text-align: left;
    margin: ${pTr(30)};
  }
`;
const Button = styled(B)`
  && {
    background-color: ${props => props.color};
    color: ${props => (props.color == "black" ? "white" : "black")};
    width: 100%;
    max-width: 126px;
    height: 35px;
    border: 1px solid rgb(41 41 41);
    display: inline-block;
  }
`;
let thispath;
const ErrorPopup = props => {
  const { bodyProps, onClose, is_error, errorObj, error_close } = props;
  const router = useRouter();
  useEffect(() => {
    if (!thispath) thispath = router.pathname;
    else if (thispath != router.pathname) {
      error_close();
      onClose();
    }
  }, [router.pathname]);
  useEffect(() => {
    if (!is_error) {
      onClose();
    }
  }, [is_error]);
  return (
    <PaperStyle style={getModalStyle()}>
      <Content>
        <Body {...bodyProps}>{errorObj.msg}</Body>
        <Button
          color="white"
          onClick={() => {
            error_close();
            onClose();
            props.set_loading(true);
            router.push("/").finally(x => {
              props.set_loading(false);
            });
          }}
        >
          {errorObj.cancel}
        </Button>
        <span style={{ paddingLeft: "7px" }}></span>
        <Button
          color="black"
          onClick={() => {
            error_close();
            onClose();
            router.reload();
          }}
        >
          {errorObj.ok}
        </Button>
      </Content>
    </PaperStyle>
  );
};
const mapStateToProps = state => {
  return {
    is_error: state.utilsinfo.is_error,
    errorObj: state.utilsinfo.errorObj
  };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ error_close, set_loading }, dispatch);

const ErrorPopupConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorPopup);

export default function Index(props) {
  const { open, onClose, ...others } = props;
  return (
    <Layout
      open={open}
      handleClose={onClose}
      content={ErrorPopupConnect}
      {...others}
    />
  );
}
