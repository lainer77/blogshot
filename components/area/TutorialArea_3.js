import React from "react";
import * as constants from "../../contants/constants";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TutorialImages from "../img/TutorialImages";

import styled from "styled-components";

import { pTr } from "../../styles/typography";

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: pTr(29)
    },
    title: {
        paddingBottom: pTr(6),
        fontSize: pTr(18),
        lineHeight: pTr(24),
        letterSpacing: 0,
        textAlign: "center"
    },
    content: {
        fontSize: pTr(12),
        lineHeight: pTr(24),
        letterSpacing: 0,
        padding: "0 30px"
    },
    img: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px 0"
    }
}));
const TutorialArea3 = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.title}>
                {constants.INFO.TUTORIAL.PAGE3.TITLE.split("\n").map(
                    (line, i) => {
                        return (
                            <span key={i + "area3"}>
                                {line}
                                <br />
                            </span>
                        );
                    }
                )}
            </Typography>
            <div className={classes.img}>
                <TutorialImages
                    style={{ width: pTr(262), height: pTr(182) }}
                    id={3}
                />
            </div>
            <Typography className={classes.content}>
                {constants.INFO.TUTORIAL.PAGE3.DESCRIPTION}
            </Typography>
        </div>
    );
};

export default TutorialArea3;
