import React, { useRef, useState, useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";

import { Button as B, Typography } from "@material-ui/core";

import Layout from "../layouts/PopupLayout";
import { pTr, pInt } from "../../styles/typography";

import { whether_close, whether_result } from "../../reducers/utilsinfo";

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
        border: 1px solid rgb(41 41 41);
        display: inline-block;
    }
`;
const WhetherPopup = props => {
    const {
        bodyProps,
        onClose,
        is_whether,
        whetherObj,
        whether_close,
        whether_result
    } = props;
    useEffect(() => {
        if (!is_whether) {
            onClose();
        }
    }, [is_whether]);
    return (
        <PaperStyle style={getModalStyle()}>
            <Content>
                <Body {...bodyProps}>{whetherObj.msg}</Body>
                <Button
                    color="white"
                    onClick={() => {
                        whether_close();
                        whether_result({
                            state: "cancel",
                            value: whetherObj.value
                        });
                    }}
                >
                    {whetherObj.cancel}
                </Button>
                <span style={{ paddingLeft: "7px" }}></span>
                <Button
                    color="black"
                    onClick={() => {
                        whether_close();
                        whether_result({
                            state: "ok",
                            value: whetherObj.value
                        });
                    }}
                >
                    {whetherObj.ok}
                </Button>
            </Content>
        </PaperStyle>
    );
};
const mapStateToProps = state => {
    return {
        is_whether: state.utilsinfo.is_whether,
        whetherObj: state.utilsinfo.whetherObj
    };
};
const mapDispatchToProps = dispatch =>
    bindActionCreators({ whether_close, whether_result }, dispatch);

const WhetherPopupConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(WhetherPopup);

export default function Index(props) {
    const { open, onClose, ...others } = props;
    return (
        <Layout
            open={open}
            handleClose={onClose}
            content={WhetherPopupConnect}
            {...others}
        />
    );
}
