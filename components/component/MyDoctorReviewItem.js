import React from "react";
import Router from "next/router";

import { makeStyles } from "@material-ui/styles";
import { Typography, Button as B } from "@material-ui/core";

import DoctorReviewItem from "../component/DoctorReviewItem";

import { pTr } from "../../styles/typography";
import styled from "styled-components";

const useStyles = makeStyles(theme => ({
    oneline: {
        display: "flex",
        justifyContent: "space-between"
    },
    review_content_item: {
        padding: `${pTr(10)} ${pTr(5)} ${pTr(0)} ${pTr(5)}`,
        width: "100%",
        margin: "5px 0",
        backgroundColor: "white",
        boxShadow: "0px 1px 0px 0px rgba(226, 226, 226, 0.5)"
    },
    name: {
        fontSize: pTr(14),
        lineHeight: pTr(20),
        letterSpacing: 0,
        cursor: "pointer"
    },
    context: { paddingLeft: pTr(15), marginBottom: pTr(-7) },
    text: {
        fontSize: pTr(10),
        lineHeight: pTr(20),
        letterSpacing: 0
    },
    buttons: {
        paddingBottom: pTr(15),
        "& button": {
            fontSize: pTr(12),
            letterSpacing: 0,
            lineHeight: 0,
            margin: pTr(5),
            padding: pTr(3),
            borderRadius: pTr(6),
            height: pTr(24)
        }
    },
    button1: {},
    button2: {
        color: "white",
        backgroundColor: "black",
        "&:hover": {
            color: "white",
            backgroundColor: "black"
        }
    }
}));
const Button = styled(B)`
    && {
    }
`;
const Content1 = props => {
    const classes = useStyles();
    return (
        <div className={classes.oneline}>
            <div className={classes.context}>
                <Typography
                    className={classes.name}
                    onClick={props.handleNameClick}
                >
                    {props.name}
                </Typography>
                <Typography className={classes.text}>
                    {`${props.clinic} ${
                        props.doctor_study_last ? " / " + doctor_study_last : ""
                    }`}
                </Typography>
            </div>
        </div>
    );
};
const ContentItem = props => {
    const classes = useStyles();
    const doctor = props.review_list.doctor;
    const data1 = {
        name: doctor.doctor_name,
        clinic: doctor.doctor_clinic,
        study_last: doctor.doctor_study_last
    };
    const handleNameClick = e => {
        Router.push({
            pathname: "/" + "doctor",
            query: {
                selected_doctor_id: doctor.doctor_id
            }
        });
    };
    return (
        <div className={classes.review_content_item}>
            <Content1 {...data1} handleNameClick={handleNameClick} />
            <DoctorReviewItem
                profileEnable={false}
                data={props.review_list}
                is_review={true}
                myReviewDelete={props.myReviewDelete}
                onOpen={props.onOpenPopup}
                whether_open={props.whether_open}
            />
        </div>
    );
};

export default ContentItem;
