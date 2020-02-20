import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

import styled from "styled-components";
import { pTr } from "../../styles/typography";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        height: pTr(162),
        backgroundColor: "gray",
        textAlign: "center",
        verticalAlign: "center"
    },
    box: {
        height: pTr(81),
        backgroundColor: "gray",
        verticalAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default function HomeArea4() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box className={classes.box}>메디코스코프를 소개시켜줘</Box>
            <Box className={classes.box}>메디이벤트 제안서</Box>
        </div>
    );
}
