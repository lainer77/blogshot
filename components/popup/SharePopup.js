import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Layout from "../layouts/PopupLayout";
import styled from "styled-components";
import theme from "../../theme";

import KakaoIcon from "../Icon/KakaoIcon";
import SNSIcon from "../Icon/SNSIcon";
import UrlIcon from "../Icon/UrlIcon";
import CancelIcon from "../Icon/CancelIconBlack";

import { message_open } from "../../reducers/utilsinfo";

import { pTr } from "../../styles/typography";
import { Typography, IconButton } from "@material-ui/core";
import copy from "copy-to-clipboard";
import { HOME_URL, BASE_URL } from "../../contants/constants";
import axios from "axios";

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
        margin-bottom: ${pTr(20)};
    }
`;
const Body = styled(Typography)`
    && {
        display: flex;
        justify-content: center;
    }
`;
const Cancel = styled(IconButton)`
    && {
        position: absolute;
        padding: 10px;
        right: 0;
        top: 0%;
    }
`;
const ButtonContainerStyle = {
    textAlign: "center",
    padding: `0`,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
};
const IconButtonStyle = {
    padding: 0
};
const IconStyle = {
    width: pTr(48),
    height: pTr(48)
};
const LabelStyle = {
    fontSize: pTr(14),
    fontHeight: pTr(20),
    letterSpacing: 0
};
function checkMobile() {
    var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기

    if (varUA.indexOf("android") > -1) {
        //안드로이드
        return "android";
    } else if (
        varUA.indexOf("iphone") > -1 ||
        varUA.indexOf("ipad") > -1 ||
        varUA.indexOf("ipod") > -1
    ) {
        //IOS
        return "ios";
    } else {
        //아이폰, 안드로이드 외
        return "other";
    }
}

const KaKao = ({
    onClose,
    selected_doctor,
    selected_hospital,
    getTemporaryToken
}) => {
    let selected_name = selected_doctor || selected_hospital;
    if (selected_doctor) selected_name = selected_name + "님";
    const msg = `믿을 수 있는 의사 찾기 - 메디코스코프 : ${selected_name} 정보 보기`;
    useEffect(() => {
        if (!Kakao.isInitialized())
            Kakao.init("d8cb17ff38c4464473b0b225340d4c2a");
    }, []);
    return (
        <div style={ButtonContainerStyle}>
            <IconButton
                style={IconButtonStyle}
                onClick={() => {
                    onClose();
                    getTemporaryToken(({ token }) => {
                        let href = window.location.href + `&token=${token}`;
                        if (Kakao) {
                            Kakao.Link.sendDefault({
                                objectType: "feed",
                                content: {
                                    title: "Medicoscope", // 콘텐츠의 타이틀
                                    imageUrl: "",
                                    link: {
                                        webUrl: href,
                                        mobileWebUrl: href
                                    },
                                    description: msg // 콘텐츠 상세설명
                                },
                                buttonTitle: "이동하기",
                                buttons: [
                                    {
                                        title: "이동하기",
                                        link: {
                                            webUrl: href,
                                            mobileWebUrl: href
                                        }
                                    }
                                ],
                                installTalk: true
                            });
                        }
                    });
                }}
            >
                <KakaoIcon style={IconStyle} />
            </IconButton>
            <span style={LabelStyle}>카카오톡</span>
        </div>
    );
};
const Sns = ({
    onClose,
    selected_doctor,
    selected_hospital,
    getTemporaryToken
}) => {
    let selected_name = selected_doctor || selected_hospital;
    if (selected_doctor) selected_name = selected_name + "님";
    return (
        <div style={ButtonContainerStyle}>
            <IconButton
                style={IconButtonStyle}
                onClick={() => {
                    if (selected_name) {
                        getTemporaryToken(({ token }) => {
                            let href = window.location.href + `&token=${token}`;
                            location.href =
                                "sms:" +
                                (checkMobile() == "ios" ? "&" : "?") +
                                "body=" +
                                `믿을 수 있는 의사 찾기 - 메디코스코프 : ${selected_name} 정보 보기 ${href}`;
                        });
                    }
                    onClose();
                }}
            >
                <SNSIcon style={IconStyle} />
            </IconButton>
            <span style={LabelStyle}>문자메시지</span>
        </div>
    );
};
const Url = ({ onClose, message_open, getTemporaryToken }) => {
    return (
        <div style={ButtonContainerStyle}>
            <IconButton
                style={IconButtonStyle}
                onClick={() => {
                    getTemporaryToken(({ token }) => {
                        let href = window.location.href + `&token=${token}`;
                        copy(href);
                        message_open(`URL이 복사되었습니다.`);
                        onClose();
                    });
                }}
            >
                <UrlIcon style={IconStyle} />
            </IconButton>
            <span style={LabelStyle}>URL복사</span>
        </div>
    );
};

const exUrl = "/my/share";
const ReviewPopup = props => {
    const {
        bodyProps,
        titleProps,
        cancelProps,
        selected_doctor,
        selected_hospital = "삼성서울병원",
        onClose,
        message_open
    } = props;
    const getTemporaryToken = cb => {
        let selected_view;
        let selected_id;
        if (sessionStorage.getItem("selected_view") == "doctor") {
            selected_view = "doctor";
            selected_id = props.selected_doctor_id;
        } else if (sessionStorage.getItem("selected_view") == "hospital") {
            selected_view = "hospital";
            selected_id = props.selected_hospital_id;
        }

        const encodeForm = data => {
            return Object.keys(data)
                .map(
                    key =>
                        encodeURIComponent(key) +
                        "=" +
                        encodeURIComponent(data[key])
                )
                .join("&");
        };
        axios
            .post(
                `https://${BASE_URL + exUrl}`,
                encodeForm({ url: `/v1/${selected_view}/${selected_id}` }),
                {
                    headers: {
                        "X-Api-Key": localStorage.getItem("jwt_token")
                    }
                }
            )
            .then(res => {
                if (res.data.code == 0) {
                    if (res.data.msg) {
                        cb({ token: res.data.msg });
                    }
                }
            })
            .catch(error => {});
    };
    return (
        <PaperStyle style={getModalStyle()}>
            <Content>
                <Title {...titleProps}>공유하기</Title>
                <Body {...bodyProps}>
                    <KaKao
                        onClose={onClose}
                        selected_doctor={selected_doctor}
                        selected_hospital={selected_hospital}
                        getTemporaryToken={getTemporaryToken}
                    ></KaKao>
                    <Sns
                        onClose={onClose}
                        selected_doctor={selected_doctor}
                        selected_hospital={selected_hospital}
                        getTemporaryToken={getTemporaryToken}
                    ></Sns>
                    <Url
                        onClose={onClose}
                        message_open={message_open}
                        selected_doctor={selected_doctor}
                        selected_hospital={selected_hospital}
                        getTemporaryToken={getTemporaryToken}
                    ></Url>
                </Body>
            </Content>
            <Cancel onClick={onClose} {...cancelProps}>
                <CancelIcon></CancelIcon>
            </Cancel>
        </PaperStyle>
    );
};

function Index(props) {
    const { open, onClose, ...other } = props;

    const handleClose = () => {
        onClose();
    };
    return (
        <Layout
            open={props.open}
            handleClose={handleClose}
            content={ReviewPopup}
            {...other}
        />
    );
}

const mapStateToProps = state => {
    return {
        selected_doctor: state.doctorinfo.data.name_kor,
        selected_hospital: state.hospitalinfo.data.name,
        selected_doctor_id: state.doctorinfo.selected_doctor_id,
        selected_hospital_id: state.hospitalinfo.selected_hospital_id
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({ message_open }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);
