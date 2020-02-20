import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography, Button } from "@material-ui/core";

import StarList from "./StarList";
import StarBigList from "./StarBigList";

import { pTr } from "../../styles/typography";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        flexGrow: 1
    },
    content: {
        "& div": {
            backgroundColor: "rgb(244 244 244)"
        }
    },
    review: {
        textAlign: "center",
        padding: `${pTr(15)} ${pTr(30)}`,
        borderBottom: `1px solid lightgray`
    },
    review_text: {
        fontSize: pTr(12),
        letterSpacing: 0,
        fontWeight: "bold",
        margin: pTr(5)
    },
    review_button: {
        margin: `20px 0 10px`,
        padding: `0 ${pTr(10)}`,
        color: "white",
        fontSize: pTr(14),
        lineHeight: pTr(24),
        letterSpacing: 0,
        backgroundColor: "black",
        width: "100%",
        height: pTr(35)
    },

    review_header: {
        padding: `${pTr(25)} ${pTr(20)}`,
        borderBottom: `1px solid lightgray`,
        height: pTr(90)
    },
    label: {
        fontSize: pTr(12),
        letterSpacing: 0,
        fontWeight: "bold"
    },
    oneline: {
        display: "flex",
        justifyContent: "space-between"
    },
    text1: {
        fontSize: pTr(10),
        lineHeight: pTr(9),
        letterSpacing: 0,
        marginTop: pTr(7),
        "& span": {
            fontWeight: "bold"
        }
    }
}));

const Review = props => {
    const classes = useStyles();
    const { data, doctor_name, my_doctor_review, onReview, setScore } = props;
    const [point, setPoint] = useState(0);
    return (
        <div className={classes.review}>
            <Typography className={classes.review_text}>
                {doctor_name} MD에 대한 나의 만족도
            </Typography>
            <StarBigList
                onScoreChange={value => {
                    setScore(value * 2);
                    setPoint(value * 2);
                }}
                score={point / 2}
                select={true}
            />
            <Button
                className={classes.review_button}
                variant="outlined"
                onClick={onReview}
            >
                리뷰하기
            </Button>
        </div>
    );
};

const ReviewHeader = props => {
    const classes = useStyles();
    const { data } = props;
    return (
        <div className={classes.review_header}>
            {data && data.review_total_cnt >= 5 ? (
                <Typography className={classes.label}>환자만족도</Typography>
            ) : (
                <Typography className={classes.label}>
                    평균을 표시하기에는 아직 리뷰가 모자랍니다.
                </Typography>
            )}
            <div className={classes.oneline}>
                {data && data.review_total_cnt >= 5 ? (
                    <StarList
                        score={data ? data.review_score_overall / 2 : 0}
                        select={false}
                    />
                ) : null}
                <Typography className={classes.text1}>
                    <span>{data ? data.review_total_cnt : 0}</span>건의 리뷰가
                    있습니다.
                </Typography>
            </div>
        </div>
    );
};
function ReviewContainer(props) {
    const classes = useStyles();
    const { children, item, ...others } = props;
    return (
        <div className={classes.root}>
            {props.is_review ? null : <Review {...others} />}
            <ReviewHeader data={props.data} />
            <div classes={classes.content}>{children}</div>
        </div>
    );
}

export default ReviewContainer;
