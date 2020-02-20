import React, { useState, useEffect } from "react";
import Router from "next/router";
import { connect } from "react-redux";
import styled from "styled-components";

import ProfileIcon from "../Icon/ProfileIcon";

import { Typography, Button as B } from "@material-ui/core";

import { pTr } from "../../styles/typography";

import KakaoLoginPopup from "../popup/KakaoLoginPopup";
//#region Styles

const RootStyle = styled.div`
    && {
        flex-grow: 1;
        margin: ${pTr(20)} ${pTr(10)};
        display: flex;
        justify-content: space-between;
    }
`;
const Button = styled(B)`
    && {
        display: flex;
        justify-content: space-between;
        width: 100%;
        text-align: left;
        padding: 0;
        padding-right: 5px;
    }
`;

//#endregion

//#region variables

//#endregion

const LogON = props => {
    const [profileUrl, setProfileUrl] = useState("");

    useEffect(() => {
        if (props.is_login) {
            setProfileUrl(localStorage.getItem("photo_url"));
        }
    }, [props.is_login, localStorage.getItem("photo_url")]);
    const handleClick = () => {
        Router.push({
            pathname: "/" + "mypage"
        });
    };
    return (
        <Button onClick={handleClick}>
            <div>
                <Typography
                    style={{
                        fontSize: pTr(14),
                        lineHeight: pTr(20),
                        letterSpacing: 0,
                        fontWeight: "bold"
                    }}
                >
                    마이페이지
                </Typography>
                <Typography
                    style={{
                        fontSize: pTr(12),
                        letterSpacing: 0,
                        opacity: "0.5"
                    }}
                >
                    관심 의사, 나의 리뷰 등
                </Typography>
            </div>
            <UserImg src={profileUrl} />
        </Button>
    );
};
const LogOFF = props => {
    const [popupOpen, setPopupOpen] = useState(false);
    const PopupOpen = () => {
        setPopupOpen(true);
    };
    const PopupClose = () => {
        setPopupOpen(false);
    };
    useEffect(() => {
        if (!props.login) {
            // if (localStorage.getItem("jwt_token")) {
            //     props.set_kakao_login({
            //         jwt_token: localStorage.getItem("jwt_token")
            //     });
            // }
        } else {
            PopupClose();
        }
    }, [props.login]);
    return (
        <>
            <Button onClick={PopupOpen}>
                <div>
                    <Typography
                        style={{
                            fontSize: pTr(14),
                            lineHeight: pTr(20),
                            letterSpacing: 0,
                            fontWeight: "bold"
                        }}
                    >
                        로그인
                    </Typography>
                    <Typography
                        style={{
                            fontSize: pTr(12),
                            letterSpacing: 0,
                            opacity: "0.5"
                        }}
                    >
                        카카오톡 로그인으로 빠르게 시작해보세요.
                    </Typography>
                </div>
            </Button>
            <KakaoLoginPopup
                open={popupOpen}
                onClose={PopupClose}
                otherAreaClose={true}
            ></KakaoLoginPopup>
        </>
    );
};
const UserImg = styled(ProfileIcon)`
    && {
        background-color: lightgray;
        border-radius: 50%;
        width: ${pTr(34)};
        height: ${pTr(34)};
    }
`;

function SearchAppBar(props) {
    return (
        <RootStyle>
            {props.is_login ? (
                <LogON login={props.login} is_login={props.is_login}></LogON>
            ) : (
                <LogOFF login={props.login}></LogOFF>
            )}
        </RootStyle>
    );
}

const mapStateToProps = state => {
    return {
        login: state.kakaoinfo.login,
        is_login: state.kakaoinfo.is_login
    };
};

export default connect(mapStateToProps)(SearchAppBar);
