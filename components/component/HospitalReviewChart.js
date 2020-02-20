import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

import { pTr } from "../../styles/typography";

const useStyles = makeStyles(theme => ({
    oneline: {
        display: "flex",
        justifyContent: "space-between"
    },
    review_content_item: {
        width: "100%",
        padding: `0 ${pTr(38)} ${pTr(39)} ${pTr(38)}`
    },
    context: {
        paddingRight: "42px",
        paddingLeft: "15px",
        alignItems: "center"
    },
    text: {
        fontSize: pTr(12),
        lineHeight: pTr(18),
        letterSpacing: 0
    },
    label: {
        fontSize: pTr(10),
        letterSpacing: 0,
        margin: `0 0 ${pTr(5)} 0`
    },
    items: {
        border: `1px solid rgb(183 183 183)`,
        borderRadius: pTr(6),
        padding: pTr(20)
    },
    score: {
        fontSize: "34px",
        letterSpacing: 0,
        lineHeight: "24px",
        fontWeight: "800",
        padding: "10px 0",
        width: "97px"
    }
}));

const Item = props => {
    const classes = useStyles();
    return (
        <div>
            <Typography className={classes.label}>{props.label}</Typography>

            <div className={classes.oneline}>
                <Typography className={classes.score}>
                    {props.score || 0}%
                </Typography>
                <div className={classes.context}>
                    <Typography className={classes.text}>
                        {props.children}
                    </Typography>
                </div>
            </div>
        </div>
    );
};

const ContentItem = props => {
    const classes = useStyles();
    const Cushion = () => <div style={{ padding: pTr(7) }} />;
    const {
        cnt_score_cleanplace = 0,
        cnt_score_goodjob = 0,
        cnt_score_kindJikwon = 0,
        score_cleanplace = 0,
        score_goodjob = 0,
        score_kindJikwon = 0,
        score_cleanplace_txt,
        score_goodjob_txt,
        score_kindJikwon_txt
    } = props.hospital_all_review ? props.hospital_all_review : {};
    return (
        <div className={classes.review_content_item}>
            <div className={classes.items}>
                <Item
                    label="친절함"
                    score={cnt_score_kindJikwon < 10 ? null : score_kindJikwon}
                >
                    {cnt_score_kindJikwon < 10
                        ? `평점을 표시할만큼 리뷰가 충분하지 않습니다.`
                        : score_kindJikwon_txt}
                </Item>
                <Cushion />
                <Item
                    label="정확성"
                    score={cnt_score_kindJikwon < 10 ? null : score_goodjob}
                >
                    {cnt_score_goodjob < 10
                        ? `평점을 표시할만큼 리뷰가 충분하지 않습니다.`
                        : score_goodjob_txt}
                </Item>
                <Cushion />
                <Item
                    label="쾌적함"
                    score={cnt_score_kindJikwon < 10 ? null : score_cleanplace}
                >
                    {cnt_score_cleanplace < 10
                        ? `평점을 표시할만큼 리뷰가 충분하지 않습니다.`
                        : score_cleanplace_txt}
                </Item>
            </div>
        </div>
    );
};

export default React.memo(ContentItem);
