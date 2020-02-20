import clsx from "clsx";
import React, { useState, useEffect } from "react";

import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { pTr, pTx } from "../../styles/typography";
import { emailValidate, phoneValidate } from "../../validation";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        marginTop: pTr(17)
    },
    textField: {
        width: "100%",
        margin: `${pTr(5)} 0`,
        "& input": {
            padding: 0,
            paddingLeft: pTr(10),
            fontSize: pTr(12),
            height: pTr(32)
        }
    },
    textField2: {
        width: "100%",
        marginTop: pTr(15),
        "& textarea": {
            fontSize: pTr(12),
            lineHeight: pTr(20),
            letterSpacing: 0
            // padding: `${pTr(6)} ${pTr(10)}`
        },
        "& div": {
            padding: pTr(10)
        }
    },
    popover: {
        pointerEvents: "none"
    },
    paper: {
        padding: theme.spacing(1)
    }
}));
const CustomizedInputs = props => {
    const [state, setState] = useState({
        email: "",
        title: "",
        contents: "",
        email_validate: 0,
        phone: "",
        phone_validate: 0
    });
    const classes = useStyles(state);
    useEffect(() => {
        if (props.sendOn) {
            if (phoneValidate(state.phone) && emailValidate(state.email)) {
                props.setState({
                    ...props.state,
                    phone: state.phone,
                    email: state.email,
                    title: state.title,
                    contents: state.contents
                });
            } else {
                alert("이메일 혹은 전화번호의 입력값이 올바르지 않습니다.");
            }
            props.setSendOn({
                inputList: false
            });
        }
    }, [props.sendOn]);
    const handleCheckEmail = e => {
        let email = e.currentTarget.value;
        let validate;
        if (state.email != "" && email != "") validate = emailValidate(email);
        if (validate == undefined || validate)
            setState({ ...state, email_validate: 1 });
        else {
            setState({ ...state, email_validate: 2 });
            alert("이메일 형식이 올바르지 않습니다.");
        }
    };
    const handleCheckPhone = e => {
        let phone = e.currentTarget.value;
        let validate;
        if (state.phone != "" && phone != "") validate = phoneValidate(phone);
        if (
            typeof parseInt(phone) === "number" &&
            !validate &&
            phone.match(/^\d{11}$/)
        ) {
            validate = true;
            phone =
                phone.substr(0, 3) +
                "-" +
                phone.substr(3, 4) +
                "-" +
                phone.substr(7, 4);
        }
        if (validate == undefined || validate)
            setState({ ...state, phone_validate: 1, phone: phone });
        else {
            setState({ ...state, phone_validate: 2 });
            alert("전화번호 형식이 올바르지 않습니다.");
        }
        return true;
    };
    return (
        <div className={classes.root} noValidate>
            <TextField
                id="outlined-with-placeholder"
                aria-haspopup="true"
                placeholder="이메일"
                className={classes.textField}
                error={state.email_validate == 2}
                type="email"
                name="email"
                autoComplete="email"
                variant="outlined"
                style={{ marginTop: pTr(10) }}
                onChange={e => {
                    setState({
                        ...state,
                        email: e.target.value
                    });
                }}
                onFocus={e => {
                    setState({
                        ...state,
                        email_validate: 0
                    });
                }}
                onBlur={handleCheckEmail}
            />

            <TextField
                id="outlined-dense"
                type="tel"
                aria-haspopup="true"
                placeholder="전화번호"
                className={clsx(classes.textField)}
                error={state.phone_validate == 2}
                autoComplete="tel"
                variant="outlined"
                value={state.phone}
                onChange={e => {
                    setState({
                        ...state,
                        phone: e.target.value
                    });
                }}
                onFocus={e => {
                    setState({
                        ...state,
                        phone_validate: 0
                    });
                }}
                onBlur={handleCheckPhone}
            />
            <TextField
                id="outlined-dense"
                placeholder="제목"
                className={clsx(classes.textField)}
                variant="outlined"
                onChange={e => {
                    setState({
                        ...state,
                        title: e.target.value
                    });
                }}
            />
            <TextField
                id="outlined-dense"
                placeholder="문의 혹은 제안하실 내용을 입력해주세요."
                multiline
                rows="10"
                className={clsx(classes.textField2)}
                onChange={e => {
                    setState({
                        ...state,
                        contents: e.target.value
                    });
                }}
                variant="outlined"
                inputprops={{ padding: `${pTr(6)} ${pTr(10)}` }}
            />
        </div>
    );
};
export default CustomizedInputs;
