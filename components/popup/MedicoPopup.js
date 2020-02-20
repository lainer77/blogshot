import React, { useRef, useState, useLayoutEffect } from "react";

import Layout from "../layouts/PopupLayout";
import styled from "styled-components";
import theme from "../../theme";

import { pTr, pInt } from "../../styles/typography";
import { Button, Typography } from "@material-ui/core";

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
        padding: ${pTr(20)} ${pTr(10)};
    }
`;
const Title = styled.div`
    && {
        font-weight: bold;
        font-size: ${pTr(22)};
        letter-spacing: 0;
        margin: ${pTr(10)} 0;
    }
`;
const Body = styled(Typography)`
    && {
        font-size: ${pTr(14)};
        line-height: ${pInt(24)}px;
        letter-spacing: 0;
        margin: 0 ${pTr(8)};
        margin-top: ${pTr(8)};
        margin-bottom: ${pTr(20)};
        max-height: ${pTr(350)};
        text-align: left;
        & label {
            font-weight: bold;
        }
        overflow: scroll;
    }
`;
const Cancel = styled(Button)`
    && {
        width: 100%;
        font-size: ${pTr(12)};
        line-height: ${pTr(24)};
        letter-spacing: 0;
        height: ${pTr(35)};
        border-color: rgb(45 45 45);
    }
`;
const ReviewPopup = props => {
    const { bodyProps, titleProps, cancelProps, onClose } = props;
    return (
        <PaperStyle style={getModalStyle()}>
            <Content>
                <Title {...titleProps}>{props.title}</Title>
                <Body {...bodyProps}>{props.children}</Body>
                <Cancel {...cancelProps} variant="outlined" onClick={onClose}>
                    닫기
                </Cancel>
            </Content>
        </PaperStyle>
    );
};

export default function Index(props) {
    const { open, onClose, ...other } = props;

    return (
        <Layout
            open={props.open}
            // open={true}
            handleClose={onClose}
            content={ReviewPopup}
            {...other}
        />
    );
}
