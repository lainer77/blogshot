import React from "react";
import * as constants from "../../contants/constants";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TutorialImages from "../img/TutorialImages";

import { pTr } from "../../styles/typography";

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: pTr(29)
    },
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
        padding: "15px 0"
    }
}));
const TutorialArea4 = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.title}>
                {constants.INFO.TUTORIAL.PAGE4.TITLE.split("\n").map(
                    (line, i) => {
                        return (
                            <span key={i + "area4"}>
                                {line}
                                <br />
                            </span>
                        );
                    }
                )}
            </Typography>
            <div className={classes.img}>
                <TutorialImages
                    style={{ width: pTr(281), height: pTr(194) }}
                    id={4}
                />
            </div>
            <Typography className={classes.content}>
                {constants.INFO.TUTORIAL.PAGE4.DESCRIPTION.split("\n").map(
                    (line, i) => {
                        return (
                            <span key={i + "area4"}>
                                {line}
                                <br />
                            </span>
                        );
                    }
                )}
            </Typography>
        </div>
    );
};

export default TutorialArea4;
