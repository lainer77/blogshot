import React from "react";
import * as constants from "../../contants/constants";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TutorialImages from "../img/TutorialImages";

import { TextLoder } from "../../contants/utils";

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
        marginTop: pTr(26),
        marginBottom: pTr(30)
    }
}));
const TutorialArea1 = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Typography className={classes.title}>
                    {TextLoder(constants.INFO.TUTORIAL.PAGE1.TITLE)}
                </Typography>
                <div className={classes.img}>
                    <TutorialImages
                        style={{ width: pTr(224), height: pTr(168) }}
                        id={1}
                    />
                </div>
            </div>
            <Typography className={classes.content}>
                {constants.INFO.TUTORIAL.PAGE1.DESCRIPTION}
            </Typography>
        </div>
    );
};

export default TutorialArea1;
