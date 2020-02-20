import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import { pTr, BASE_COLOR } from "../../styles/typography";
import { numberFormat } from "../../logic/searchValidation";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        justifyContent: "center"
    },
    title1: {
        fontSize: pTr(34),
        fontWeight: "bold",
        lineHeight: "24px",
        letterSpacing: 0,
        color: BASE_COLOR,
        padding: "5px 0"
    },
    title2: {
        fontSize: pTr(34),
        fontWeight: "bold",
        lineHeight: "24px",
        letterSpacing: 0,
        padding: "5px 0"
    },
    text1: {
        padding: `${pTr(5)} 0 2px`,
        fontSize: pTr(12),
        fontWeight: "bold",
        letterSpacing: 0,
        color: BASE_COLOR
    },
    text2: {
        fontSize: pTr(12),
        lineHeight: pTr(18),
        letterSpacing: 0,
        color: BASE_COLOR,
        width: pTr(154),
        textAlign: "center",
        margin: "0 auto"
    },
    text3: {
        padding: `${pTr(5)} 0 2px`,
        fontSize: pTr(12),
        fontWeight: "bold",
        letterSpacing: 0
    },
    text4: {
        fontSize: pTr(12),
        lineHeight: pTr(17),
        letterSpacing: 0,
        textAlign: "center",
        margin: "0 auto"
    },
    context1: {
        margin: `${pTr(15)} 0`,
        textAlign: "center"
    },
    context2: {
        margin: `${pTr(37)} 45px ${pTr(27)}`,
        textAlign: "center",
        backgroundColor: "rgb(237 237 237)",
        borderRadius: "8px",
        padding: "7px 5px 15px"
    }
});

function HospitalArea2(props) {
    const classes = useStyles();
    const { score_hospital, score_hospital_description, score_review } = props;
    return (
        <div className={classes.root}>
            <div className={classes.context1}>
                <Typography className={classes.title1}>
                    {(typeof score_hospital === "number" &&
                        numberFormat(score_hospital)) ||
                        score_hospital}
                </Typography>
                <Typography className={classes.text1}>병원팩트</Typography>
                <Typography className={classes.text2}>
                    {(typeof score_hospital_description === "number" &&
                        numberFormat(score_hospital_description)) ||
                        score_hospital_description}
                </Typography>
            </div>
            {score_review ? (
                <div className={classes.context1}>
                    <div className={classes.title2}>{score_review}</div>
                    <Typography className={classes.text3}>
                        리뷰어 선호도
                    </Typography>
                    <Typography className={classes.text4}>
                        {!score_review
                            ? "평점을 표시할만큼 리뷰가 충분하지 않습니다."
                            : `리뷰의 ${score_review}%가 이 병원에 긍정적인 평가`}
                    </Typography>
                </div>
            ) : (
                <div className={classes.context2}>
                    <div className={classes.title2}>{score_review}</div>
                    <Typography className={classes.text3}>
                        리뷰어 선호도
                    </Typography>
                    <Typography className={classes.text4}>
                        {!score_review
                            ? "평점을 표시할만큼 리뷰가 충분하지 않습니다."
                            : `리뷰의 ${score_review}%가 이 병원에 긍정적인 평가`}
                    </Typography>
                </div>
            )}
        </div>
    );
}
export default React.memo(HospitalArea2);
