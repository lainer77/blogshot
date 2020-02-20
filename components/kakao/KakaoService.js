import React, { useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import styled from "styled-components";

import { pTr } from "../../styles/typography";

import { set_kakao_info, set_kakao_login } from "../../reducers/kakaoinfo";
import { message_open, set_loading } from "../../reducers/utilsinfo";
const useStyles = makeStyles(theme => ({
    title: {
        fontSize: pTr(18),
        lineHeight: pTr(24),
        letterSpacing: 0
    },
    content: {
        fontSize: pTr(12),
        lineHeight: pTr(24),
        letterSpacing: 0,
        marginBottom: pTr(32)
    },
    img: {
        "& img": {
            height: pTr(35),
            width: pTr(300),
            display: "flex",
            marginTop: pTr(-35)
        }
    },
    button: {}
}));
const KakaoButton = styled(Button)`
    && {
        height: ${pTr(35)};
        width: 100%;
        font-size: ${pTr(14)};
        line-height: ${pTr(24)};
        letter-spacing: 0;
        background-color: rgb(252 197 36);
    }
`;
const KakaoLogin = props => {
    const classes = useStyles();
    const get_status = () => {
        if (Kakao)
            return Kakao.Auth.getStatusInfo(res => {
                if (!props.login && res.status === "connected")
                    loginWithKakao();
            });
        return "not Kakao";
    };
    useEffect(() => {
        if (Kakao) {
            Kakao.init("d8cb17ff38c4464473b0b225340d4c2a"); //서버용
        }
    }, []);
    const loginWithKakao = () => {
        let jwt_token = localStorage.getItem(jwt_token);
        if (!jwt_token) {
            Kakao.Auth.login({
                success: function(authObj) {
                    props.set_kakao_login(authObj);
                    setTimeout(() => {
                        props.message_open("로그인되었습니다!");
                    }, 1500);
                },
                fail: function(err) {
                    props.message_open("로그인에 실패했습니다!");
                },
                persistRefreshToken: false
            });
        }
    };
    return (
        <div className={classes.img}>
            <KakaoButton
                id="custom-login-btn"
                className={classes.button}
                onClick={loginWithKakao}
            >
                {props.children}
            </KakaoButton>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        profile: state.kakaoinfo.seaprofilerchText,
        login: state.kakaoinfo.login,
        loading: state.utilsinfo.loading
    };
};
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        { set_kakao_info, set_kakao_login, message_open, set_loading },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(KakaoLogin);
