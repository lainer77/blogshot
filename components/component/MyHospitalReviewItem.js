import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/styles";
import { Typography, Box, Button } from "@material-ui/core";

import ReviewPopup from "../popup/ReviewHPopup";

import { pTr, BASE_COLOR } from "../../styles/typography";
import Router from "next/router";
import { numberFormat } from "../../logic/searchValidation";

const useStyles = makeStyles(theme => ({
    oneline: {
        display: "flex",
        justifyContent: "space-between"
    },
    review_content_item: {
        padding: `${pTr(20)} ${pTr(20)} ${pTr(0)} ${pTr(20)}`,
        width: "100%",
        backgroundColor: "white",
        margin: "5px 0",
        boxShadow: "0px 1px 0px 0px rgba(226, 226, 226, 0.5)"
    },
    name: {
        fontSize: pTr(14),
        lineHeight: pTr(20),
        letterSpacing: 0,
        cursor: "pointer"
    },
    label: {
        fontSize: pTr(10),
        lineHeight: pTr(9),
        letterSpacing: 0,
        fontWeight: "lighter",
        color: "rgb(45 47 49)"
    },
    text: {
        fontSize: pTr(10),
        lineHeight: pTr(20),
        letterSpacing: 0
    },
    boxs: {
        margin: `${pTr(10)} 0`
    },
    boxline: {
        display: "flex"
    },
    box: {
        width: "100%",
        textAlign: "center"
    },
    col: {
        backgroundColor: "rgb(242 246 251)",
        fontSize: pTr(10),
        lineHeight: pTr(24),
        letterSpacing: 0,
        border: `0.5px solid lightgray`,
        marginTop: "-1px",
        marginLeft: "-1px"
    },
    row: {
        fontSize: pTr(10),
        lineHeight: pTr(24),
        letterSpacing: 0,
        border: `0.5px solid lightgray`,
        fontWeight: "bold",
        marginTop: "-1px",
        marginLeft: "-1px"
    },
    buttons: {
        paddingBottom: pTr(15),
        "& button": {
            fontSize: pTr(12),
            letterSpacing: 0,
            lineHeight: 0,
            margin: pTr(5),
            padding: pTr(3),
            borderRadius: pTr(6),
            height: pTr(24)
        }
    },
    button1: {},
    button2: {
        color: "white",
        backgroundColor: "black",
        "&:hover": {
            color: "white",
            backgroundColor: "black"
        }
    },
    score_text: {
        color: BASE_COLOR,
        fontSize: "12px",
        lineHeight: "20px",
        letterSpacing: 0,
        textAlign: "right"
    },
    score: {
        color: BASE_COLOR,
        fontSize: "22px",
        lineHeight: "20px",
        letterSpacing: 0,
        fontWeight: "bold",
        textAlign: "right"
    }
}));
const BoxItem = ({ classes, col, row }) => (
    <Box className={classes.box}>
        <Typography className={classes.col}>{col}</Typography>
        <Typography className={classes.row}>
            <span>{row}</span>
        </Typography>
    </Box>
);
const BoxContent = props => {
    const classes = useStyles();
    const {
        score_cleanplace_txt,
        score_goodjob_txt,
        score_kindJikwon_txt,
        score_overall_txt
    } = props;

    return (
        <div className={classes.boxs}>
            <BoxItem classes={classes} col="종합" row={score_overall_txt} />
            <div className={classes.boxline}>
                <BoxItem
                    classes={classes}
                    col="친절함"
                    row={score_kindJikwon_txt}
                />
                <BoxItem
                    classes={classes}
                    col="정확함"
                    row={score_goodjob_txt}
                />
                <BoxItem
                    classes={classes}
                    col="청결함"
                    row={score_cleanplace_txt}
                />
            </div>
        </div>
    );
};
const Content1 = props => {
    const classes = useStyles();
    const { name, juso, score_hospital } = props.data;

    return (
        <div className={classes.oneline}>
            <div>
                <Typography
                    className={classes.name}
                    onClick={props.handleNameClick}
                >
                    {name || ""}
                </Typography>
                <Typography className={classes.text}>{juso || ""}</Typography>
            </div>
            <div>
                <Typography className={classes.score_text}>병원팩트</Typography>
                <Typography className={classes.score}>
                    {numberFormat(score_hospital) || 0}
                </Typography>
            </div>
        </div>
    );
};
const Content2 = props => {
    const classes = useStyles();
    const { updatedAt, review_id, review_request, ...othersData } = props.data;
    const { whether_open, whether_result, whetherResult } = props;
    const [open, setOpen] = useState(false);
    const onOpen = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const reviewDelete = () => {
        // props.review_request("del", review_id);
        whether_open({
            ok: "확인",
            cancel: "취소",
            msg: "정말 삭제하시겠습니까?",
            value: review_id
        });
    };

    useEffect(() => {
        if (whetherResult.state) {
            if (
                whetherResult.state == "ok" &&
                review_id == whetherResult.value
            ) {
                props.review_request("del", whetherResult.value);
                props.message_open("리뷰가 삭제되었습니다.");
            } else if (whetherResult.state == "cancel") {
            }
            whether_result(null);
        }
    }, [whetherResult.state]);
    const selectionValid = state => {
        if (state == "긍정적") return "posi";
        else if (state == "부정적") return "negu";
        else if (state == "posi") return true;
        else if (state == "negu") return false;
        else return null;
    };
    const [selections, setSelections] = useState({
        score_overall_txt: selectionValid(props.data.score_overall_txt) || "--",
        score_kindJikwon_txt:
            selectionValid(props.data.score_kindJikwon_txt) || "--",
        score_goodjob_txt: selectionValid(props.data.score_goodjob_txt) || "--",
        score_cleanplace_txt:
            selectionValid(props.data.score_cleanplace_txt) || "--"
    });
    const onReviewSelections = params => {
        let pramsSend = {};
        setSelections({
            ...selections,
            ...params
        });
        if (params.score_overall_txt) {
            pramsSend.score_overall = selectionValid(params.score_overall_txt);
        } else {
            pramsSend.score_overall = selectionValid(
                selections.score_overall_txt
            );
        }
        if (params.score_goodjob_txt != "--" && params.score_goodjob_txt != "")
            pramsSend = {
                ...pramsSend,
                score_goodjob: selectionValid(params.score_goodjob_txt)
            };
        if (params.score_cleanplace_txt != "--")
            pramsSend = {
                ...pramsSend,
                score_cleanplace: selectionValid(params.score_cleanplace_txt)
            };
        if (params.score_kindJikwon_txt != "--")
            pramsSend = {
                ...pramsSend,
                score_kindJikwon: selectionValid(params.score_kindJikwon_txt)
            };
        props.review_request("put", review_id, pramsSend);
        props.message_open("리뷰가 수정되었습니다.");
        onClose();
    };
    return (
        <div>
            <Typography className={classes.label}>{updatedAt || ""}</Typography>
            <BoxContent {...othersData} />

            <div
                className={classes.buttons}
                variant="contained"
                display="block"
                align="center"
            >
                <Button
                    className={classes.button1}
                    variant="outlined"
                    onClick={reviewDelete}
                >
                    삭제
                </Button>
                <Button
                    className={classes.button2}
                    variant="outlined"
                    onClick={onOpen}
                >
                    수정
                </Button>
            </div>
            <ReviewPopup
                open={open}
                onClose={onClose}
                onSelections={onReviewSelections}
                selections={selections}
                changeText="수정"
                data={othersData}
            ></ReviewPopup>
        </div>
    );
};
const ContentItem = props => {
    const classes = useStyles();
    const { review_list, ...others } = props;

    const data1 = {
        review_id: review_list.review_id,
        hospital_id: review_list.hospital_id,
        name: review_list.name,
        juso: review_list.juso,
        score_hospital: review_list.score_hospital
    };
    const data2 = {
        review_id: review_list.review_id,
        hospital_id: review_list.hospital_id,
        score_cleanplace_txt: review_list.score_cleanplace_txt,
        score_goodjob_txt: review_list.score_goodjob_txt,
        score_overall_txt: review_list.score_overall_txt,
        score_kindJikwon_txt: review_list.score_kindJikwon_txt,
        updatedAt: review_list.updatedAt,
        name: review_list.name,
        juso: review_list.juso
    };

    const handleNameClick = e => {
        Router.push({
            pathname: "/" + "hospital",
            query: {
                selected_hospital_id: review_list.hospital_id
            }
        });
    };

    return (
        <div className={classes.review_content_item}>
            <Content1
                data={data1}
                handleNameClick={handleNameClick}
                {...others}
            />
            <Content2
                data={data2}
                review_request={props.review_request}
                message_open={props.message_open}
                {...others}
            />
        </div>
    );
};

export default ContentItem;
