import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import styled from "styled-components";

const useStyles = makeStyles(theme => ({
    root: {},
    input: {
        padding: "15px 10px"
    },
    inputs: {
        padding: "25px 0 35px"
    }
}));

const TextF = props => {
    const classes = useStyles();
    const { label, value, ...others } = props;

    return (
        <TextField
            id="standard-full-width"
            label={label}
            // placeholder="Placeholder"
            // helperText="Full width!"
            margin="normal"
            defaultValue={value}
            InputLabelProps={{
                shrink: true,
                style: {
                    fontSize: "14px",
                    lineHeight: "20px",
                    letterSpacing: 0,
                    color: "rgb(41 41 41)",
                    transform: "scale(1)"
                }
            }}
            InputProps={{
                style: {
                    fontSize: "16px",
                    fontWeight: "bold",
                    lineHeight: "20px",
                    letterSpacing: 0,
                    color: "rgb(41 41 41)",
                    marginTop: "30px",
                    borderRadius: 0
                },
                classes: { input: classes.input }
            }}
            {...others}
        />
    );
};

const SignUpPanel = props => {
    const classes = useStyles();

    const {
        name_label,
        name,
        email,
        email_label,
        phone,
        phone_label,
        setName,
        setEmail,
        setPhone
    } = props;

    const [disabledes, setDisabledes] = useState({
        dis_email: false,
        dis_phone: false
    });
    useEffect(() => {
        let params = {};
        if (phone) {
            params.dis_phone = true;
        }
        if (email) {
            params.dis_email = true;
        }
        setDisabledes(params);
    }, []);

    return (
        <div className={classes.root}>
            <div className={classes.inputs}>
                <TextF
                    label={name_label}
                    value={name}
                    fullWidth
                    onChange={e => {
                        setName(e.currentTarget.value);
                    }}
                />
                <TextF
                    label={email_label}
                    value={email}
                    // disabled={disabledes.dis_email}
                    disabled={true}
                    // variant={disabledes.dis_email ? "filled" : "standard"}
                    variant={"filled"}
                    fullWidth
                    onChange={e => {
                        setEmail(e.currentTarget.value);
                    }}
                    type="email"
                />
                <TextF
                    label={phone_label}
                    value={phone}
                    // disabled={disabledes.dis_phone}
                    disabled={true}
                    // variant={disabledes.dis_phone ? "filled" : "standard"}
                    variant={"filled"}
                    fullWidth
                    onChange={e => {
                        setPhone(e.currentTarget.value);
                    }}
                    type="text"
                />
            </div>
        </div>
    );
};

export default SignUpPanel;
