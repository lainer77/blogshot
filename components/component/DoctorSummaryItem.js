import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

import RadialBarChart from "../chart/RadialBarChart";

import Divider from "../component/DividerMargin";

import { pTr, BASE_COLOR } from "../../styles/typography";

const useStyles = makeStyles(theme => ({
    oneline: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%"
    },
    root: { padding: `${pTr(5)} ${pTr(20)}`, width: "100%" },
    title: {
        fontSize: pTr(12),
        letterSpacing: 0,
        color: BASE_COLOR
    },
    authors: {
        fontSize: pTr(10),
        letterSpacing: 0,
        lineHeight: pTr(12),
        marginTop: pTr(4),
        maxWidth: "70%",
        fontWeight: "lighter"
    },
    pub_date: {
        fontSize: pTr(10),
        letterSpacing: 0,
        lineHeight: pTr(12),
        fontWeight: "bold",
        marginTop: pTr(20)
    },
    pub_journal: {
        fontSize: pTr(10),
        letterSpacing: 0,
        lineHeight: pTr(12),
        marginTop: pTr(10),
        fontWeight: "lighter"
    }
}));
const ContentItem = props => {
    const classes = useStyles();
    const { title, authors, pub_date, pub_journal, score, so } = props.papers;
    return (
        <div className={classes.root}>
            <Typography className={classes.title}>{title}</Typography>
            <div className={classes.oneline}>
                <div>
                    <Typography className={classes.authors}>
                        {authors.map(x => {
                            return `${x}; `;
                        })}
                    </Typography>
                    <Typography className={classes.pub_date}>
                        {pub_date}
                    </Typography>
                    <Typography className={classes.pub_journal}>
                        {so}
                    </Typography>
                </div>

                <RadialBarChart
                    score={score}
                    width={50}
                    height={50}
                    fontSize={12}
                    scoreFix={2}
                />
            </div>
            <Divider left={pTr(-20)} right={pTr(-20)} top={pTr(20)} />
        </div>
    );
};

export default ContentItem;
