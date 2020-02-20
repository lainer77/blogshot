import styled from "styled-components";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button as B } from "@material-ui/core";

import { pTr, BASE_COLOR } from "../../styles/typography";
import Seletions from "../component/Seletions";
import InputField from "../component/InputField";
import { ask_send } from "../../reducers/contactinfo";
import { message_open } from "../../reducers/utilsinfo";
import { emailValidate, phoneValidate } from "../../validation";
import Router from "next/router";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        marginTop: pTr(64)
    },
    content: {
        padding: pTr(20)
    },
    text: {
        fontSize: pTr(14),
        lineHeight: pTr(20),
        letterSpacing: 0,
        marginBottom: pTr(18)
    },
    center: { textAlign: "center" }
});
const Button = styled(B)`
    && {
        margin: ${pTr(20)} ${pTr(0)} ${pTr(0)} ${pTr(0)};
        width: 100%;
        max-width: 335px;
        background-color: ${BASE_COLOR};
        font-size: ${pTr(18)};
        line-height: ${pTr(24)};
        letter-spacing: 0;
        height: ${pTr(50)};
        color: white;
        &:focus {
            background-color: ${BASE_COLOR};
            color: white;
        }
    }
`;
function ContactArea1(props) {
    const classes = useStyles();
    const [sendOn, setSendOn] = useState({
        inputList: false,
        selections: false
    });
    const [state, setState] = useState({
        category: "문의 및 제안 유형 선택",
        email: "",
        phone: "",
        title: "",
        contents: ""
    });
    const handleChange = e => {
        let value = e.target.value;
        setState({ ...state, category: value });
    };
    const handleSetSendOn = bOn => {
        setSendOn({ ...state, ...bOn });
    };
    useEffect(() => {
        if (sendOn.inputList == false) {
            if (phoneValidate(state.phone) && emailValidate(state.email)) {
                props.ask_send(state);
                Router.replace("/").then(() => {
                    setTimeout(() => {
                        props.message_open(
                            <div>
                                문의사항을 관리자에게 전송하였습니다.
                                <br />
                                감사합니다.
                            </div>
                        );
                    }, 1000);
                });
            }
        }
    }, [sendOn.inputList]);
    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <Typography className={classes.text}>
                    의사 및 병원정보의 신규등록 및 기존 정보의 수정, <br />
                    기타 이용에 대한 문의사항을 보내주시기 바랍니다.
                </Typography>
                <Seletions
                    formClassName={classes.formControl}
                    handleChange={handleChange}
                >
                    <option value="문의 및 제안 유형 선택">
                        문의 및 제안 유형 선택
                    </option>
                    <option value="신규 등록 신청">신규 등록 신청</option>
                    <option value="기존 정보 수정 신청">
                        기존 정보 수정 신청
                    </option>
                    <option value="제휴 문의">제휴 문의</option>
                    <option value="기타">기타</option>
                </Seletions>
                <InputField
                    setState={setState}
                    state={state}
                    sendOn={sendOn.inputList}
                    setSendOn={handleSetSendOn}
                />
                <div className={classes.center}>
                    <Button
                        variant="outlined"
                        onClick={() => {
                            setSendOn({
                                ...sendOn,
                                inputList: true,
                                selections: true
                            });
                        }}
                    >
                        보내기
                    </Button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        // tagsByDisease: state.homeinfo.tagsByDisease
    };
};
const mapDispatchToProps = dispatch =>
    bindActionCreators({ ask_send, message_open }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContactArea1);
