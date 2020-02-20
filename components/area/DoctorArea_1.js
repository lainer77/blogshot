import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import { pTr, BASE_COLOR } from "../../styles/typography";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        backgroundColor: "rgb(255 255 255)"
    },
    context: {
        textAlign: "-webkit-center",
        paddingTop: pTr(73),
        paddingBottom: "24px"
    },
    display: {
        fontSize: pTr(20),
        lineHeight: pTr(24),
        letterSpacing: 0,
        fontWeight: "bold",
        margin: pTr(10)
    },
    text1: {
        fontSize: pTr(28),
        marginTop: pTr(10),
        letterSpacing: 0,
        lineHeight: pTr(24),
        fontWeight: "bold"
    },
    text2: {
        fontSize: pTr(14),
        marginTop: pTr(20),
        letterSpacing: 0,
        lineHeight: pTr(24)
    },
    text3: {
        fontSize: pTr(12),
        marginTop: pTr(3),
        letterSpacing: 0,
        lineHeight: pTr(24),
        color: BASE_COLOR
    },
    button: {
        marginTop: pTr(9),
        border: "1px solid lightgray",
        borderRadius: pTr(4),
        width: "fit-content",
        maxWidth: "70%",
        padding: `${pTr(3)} ${pTr(8)}`,
        "& p": {
            fontSize: pTr(12),
            letterSpacing: 0,
            lineHeight: pTr(18),
            color: "rgb(110 110 110)",
            textAlign: "left"
        }
    }
});

export default memo(props => {
    const classes = useStyles();
    const { name_kor, clinic, study_last, current_hospital_name } = props.data;
    return (
        <div className={classes.root}>
            <div className={classes.context}>
                <Typography className={classes.text1}>{name_kor}</Typography>
                <Typography className={classes.text2}>{clinic}</Typography>
                <div className={classes.button}>
                    <Typography>{study_last || "미확인"}</Typography>
                </div>
                <Typography className={classes.text3}>
                    {current_hospital_name}
                </Typography>
            </div>
        </div>
    );
});
