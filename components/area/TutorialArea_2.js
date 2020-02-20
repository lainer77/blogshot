import React from "react";
import * as constants from "../../contants/constants";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TutorialImages from "../img/TutorialImages";

import styled from "styled-components";

import { pTr } from "../../styles/typography";

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: pTr(29)
    },
    header: {},
    title: {
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
        padding: "27px 0"
    }
}));
const TutorialArea2 = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Typography className={classes.title}>
                    {constants.INFO.TUTORIAL.PAGE2.TITLE.split("\n").map(
                        (line, i) => {
                            return (
                                <span key={i + "area2"}>
                                    {line}
                                    <br />
                                </span>
                            );
                        }
                    )}
                </Typography>
                <div className={classes.img}>
                    <TutorialImages
                        style={{ width: pTr(232), height: pTr(170) }}
                        id={2}
                    />
                </div>
            </div>
            <Typography className={classes.content}>
                {constants.INFO.TUTORIAL.PAGE2.DESCRIPTION}
            </Typography>
        </div>
    );
};

export default TutorialArea2;
