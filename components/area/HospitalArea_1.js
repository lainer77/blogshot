import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import { pTr } from "../../styles/typography";

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    context: {
        textAlign: "-webkit-center",
        paddingTop: pTr(52),
        paddingBottom: pTr(10)
    },
    display: {
        fontSize: pTr(20),
        lineHeight: pTr(24),
        letterSpacing: 0,
        fontWeight: "bold",
        margin: pTr(10)
    },
    text1: {
        fontSize: pTr(24),
        marginTop: pTr(10),
        letterSpacing: 0,
        lineHeight: pTr(24),
        fontWeight: "bold"
    },
    text2: {
        fontSize: pTr(14),
        marginTop: pTr(4),
        letterSpacing: 0,
        lineHeight: pTr(24)
    }
});

function HospitalArea1(props) {
    const classes = useStyles();
    const { name, juso } = props;
    return (
        <div className={classes.root}>
            <div className={classes.context}>
                <Typography className={classes.text1}>{name || ""}</Typography>
                <Typography className={classes.text2}>{juso || ""}</Typography>
            </div>
        </div>
    );
}
export default React.memo(HospitalArea1);
