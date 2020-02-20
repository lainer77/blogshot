import React, { useRef, useState, useEffect } from "react";

import Layout from "../layouts/PopupLayout";
import styled from "styled-components";
import theme from "../../theme";

import { pTr, pInt } from "../../styles/typography";
import { Button, Typography } from "@material-ui/core";
import KakaoLogin from "../kakao/KakaoLogin";
import { get_status } from "../../reducers/kakaoinfo";

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
const KakaoLoginPopup = props => {
    const { bodyProps, onClose, is_login } = props;
    useEffect(() => {
        if (is_login) {
            onClose();
        }
    }, [is_login]);
    return (
        <PaperStyle style={getModalStyle()}>
            <Content>
                <Body {...bodyProps}>
                    로그인 후 정확한 의료진 정보를 확인해 주세요!
                </Body>
                <KakaoLogin open={true}>카카오톡으로 로그인</KakaoLogin>
            </Content>
        </PaperStyle>
    );
};

export default function Index(props) {
    const { open, onClose, ...others } = props;
    return (
        <Layout
            open={open}
            handleClose={onClose}
            content={KakaoLoginPopup}
            {...others}
        />
    );
}
