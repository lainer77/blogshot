import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography, Button, Box } from "@material-ui/core";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import HeartIcon from "../Icon/HeartIcon";
import ReviewPopup from "../popup/ReviewHPopup";
import KakaoLoginPopup from "../popup/KakaoLoginPopup";
import { hospital_review_request } from "../../reducers/hospitalinfo";
import {
    message_open,
    whether_open,
    whether_result
} from "../../reducers/utilsinfo";
import { set_kakao_login } from "../../reducers/kakaoinfo";

import { pTr } from "../../styles/typography";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        flexGrow: 1
    },
    review: {
        textAlign: "center",
        padding: `${pTr(15)} ${pTr(38)}`,
        borderBottom: `1px solid lightgray`
    },
    review_text: {
        fontSize: pTr(12),
        letterSpacing: 0,
        fontWeight: "bold",
        margin: pTr(5)
    },
    review_middle: {
        padding: `${pTr(10)} 0`
    },
    review_header: {
        padding: `${pTr(30)} ${pTr(40)}`
    },
    label: {
        fontSize: pTr(10),
        letterSpacing: 0,
        marginTop: "5px",
        textAlign: "left"
    },
    oneline: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    text1: {
        fontSize: pTr(12),
        lineHeight: pTr(18),
        letterSpacing: 0,
        marginTop: pTr(2),
        "& span": {
            fontWeight: "bold"
        }
    },
    icon: {
        height: pTr(35),
        "& img": {
            width: pTr(40),
            height: pTr(35)
        }
    },
    boxs: {
        margin: `${pTr(10)} 0`
    },
    boxline: {
        "& span": {
            fontWeight: "bold"
        },
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
        "& button": {
            fontSize: pTr(12),
            letterSpacing: 0,
            lineHeight: 0,
            margin: pTr(5),
            padding: pTr(3),
            borderRadius: pTr(6),
            height: pTr(24),
            borderColor: "black"
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
    score: {
        fontSize: "34px",
        lineHeight: "24px",
        letterSpacing: 0,
        fontWeight: "800",
        width: "97px"
    }
}));
const ReviewBtn = styled(Button)`
    && {
        margin: ${pTr(10)} 0;
        font-size: ${pTr(12)};
        line-height: ${pTr(18)};
        letter-spacing: 0;
        color: white;
        background-color: black;
        width: 100%;
        height: ${pTr(35)};
        border-radius: 6px;
    }
`;
const HeartBtn = styled(Button)`
    && {
        background-color: ${props =>
            props.selected == props.id ? "black" : "white"};
        font-size: ${pTr(20)};
        letter-spacing: 0;
        color: ${props => (props.selected == props.id ? "white" : "black")};
        width: 100%;
        height: ${pTr(100)};
        margin: 0;
        display: inline-block;
        border-radius: 6px;
    }
`;
const selectionValid = state => {
    if (state == "긍정적") return "posi";
    else if (state == "부정적") return "negu";
    else if (state == "posi") return true;
    else if (state == "negu") return false;
    else return null;
};
const HIcon = props => {
    const classes = useStyles();
    return (
        <div className={classes.icon}>
            <HeartIcon selected={props.selected} />
        </div>
    );
};
const ReviewFalse = props => {
    const classes = useStyles();

    const [selections, setSelections] = useState({
        score_overall_txt: props.score_overall_txt || "posi",
        score_kindJikwon_txt: props.score_kindJikwon_txt || "--",
        score_goodjob_txt: props.score_goodjob_txt || "--",
        score_cleanplace_txt: props.score_cleanplace_txt || "--"
    });
    const onSelect = e => {
        setSelections({ ...selections, score_overall_txt: e.currentTarget.id });
    };

    const [open, setOpen] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const onOpen = () => {
        if (props.is_login) setOpen(true);
        else {
            PopupOpen();
        }
    };
    const onClose = () => {
        setOpen(false);
    };
    const PopupOpen = () => {
        setPopupOpen(true);
    };
    const PopupClose = () => {
        setPopupOpen(false);
    };

    useEffect(() => {
        if (!props.is_login) {
            if (localStorage.getItem("jwt_token")) {
                props.set_kakao_login({
                    jwt_token: localStorage.getItem("jwt_token")
                });
            }
        } else {
            PopupClose();
        }
    }, [props.is_login]);

    const onReviewSelections = params => {
        let pramsSend = {};
        if (params.score_overall_txt) {
            pramsSend.score_overall = selectionValid(params.score_overall_txt);
            setSelections({
                ...selections,
                score_overall_txt: params.score_overall_txt
            });
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
        props.review_request("post", props.review_id, pramsSend);
        // props.message_open("소중한 리뷰 감사드립니다!");

        onClose();
    };

    return (
        <div className={classes.review}>
            <Typography className={classes.review_text}>
                이 병원에서의 진료경험, 어떠셨나요?
            </Typography>
            <div className={classes.review_middle}>
                <div className={classes.oneline}>
                    <HeartBtn
                        id="posi"
                        selected={selections.score_overall_txt}
                        variant="outlined"
                        onClick={onSelect}
                    >
                        <HIcon selected={true} />
                        긍정적
                    </HeartBtn>
                    <div style={{ padding: pTr(5) }} />
                    <HeartBtn
                        id="negu"
                        variant="outlined"
                        selected={selections.score_overall_txt}
                        onClick={onSelect}
                    >
                        <HIcon selected={false} />
                        부정적
                    </HeartBtn>
                </div>
            </div>
            <ReviewBtn variant="outlined" onClick={onOpen}>
                리뷰하기
            </ReviewBtn>
            <ReviewPopup
                open={open}
                onClose={onClose}
                onSelections={onReviewSelections}
                selections={selections}
                changeText="리뷰 남기기"
            ></ReviewPopup>
            <KakaoLoginPopup
                open={popupOpen}
                onClose={PopupClose}
                otherAreaClose={true}
            ></KakaoLoginPopup>
        </div>
    );
};
const BoxItem = ({ classes, col, row }) => (
    <Box className={classes.box}>
        <Typography className={classes.col}>{col}</Typography>
        <Typography className={classes.row}>
            <span
                onClick={() => {
                    handleMyReview();
                }}
            >
                {row}
            </span>
        </Typography>
    </Box>
);
const BoxContent = props => {
    const classes = useStyles();
    return (
        <div className={classes.boxs}>
            <BoxItem
                classes={classes}
                col="종합"
                row={props.score_overall_txt}
            />
            <div className={classes.boxline}>
                <BoxItem
                    classes={classes}
                    col="친절함"
                    row={props.score_kindJikwon_txt}
                />
                <BoxItem
                    classes={classes}
                    col="정확함"
                    row={props.score_goodjob_txt}
                />
                <BoxItem
                    classes={classes}
                    col="청결함"
                    row={props.score_cleanplace_txt}
                />
            </div>
        </div>
    );
};
const Content2 = props => {
    const classes = useStyles();
    const { updatedAt, review_id, ...dataOthers } = props.data;

    const [open, setOpen] = useState(false);
    const onOpen = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const reviewDelete = () => {
        props.whether_open({
            ok: "확인",
            cancel: "취소",
            msg: "정말 삭제하시겠습니까?",
            value: review_id
        });
        // props.review_request("del", review_id);
    };

    useEffect(() => {
        if (props.whetherResult.state) {
            if (
                props.whetherResult.state == "ok" &&
                review_id == props.whetherResult.value
            ) {
                props.review_request("del", review_id);
            } else if (props.whetherResult.state == "cancel") {
            }
            props.whether_result(null);
        }
    }, [props.whetherResult.state]);

    const [selections, setSelections] = useState({
        score_overall_txt:
            selectionValid(props.data.score_overall_txt) || "posi",
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
        props.review_request("put", review_id, pramsSend).then(value => {
            if (value) onClose();
        });
    };

    return (
        <div>
            <Typography className={classes.label}>{props.updatedAt}</Typography>
            <BoxContent {...dataOthers} />

            <span className={classes.buttons}>
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
            </span>
            <ReviewPopup
                open={open}
                onClose={onClose}
                onSelections={onReviewSelections}
                selections={selections}
                changeText="수정"
            ></ReviewPopup>
        </div>
    );
};
const ReviewTrue = props => {
    const classes = useStyles();
    const { data, ...others } = props;

    return (
        <div className={classes.review}>
            <Typography className={classes.review_text}>
                이 병원에 대해 이미 리뷰하셨습니다.
            </Typography>
            {props.data && props.data[0] ? (
                <Content2 data={props.data[0]} {...others}></Content2>
            ) : null}
        </div>
    );
};

const ReviewHeader = props => {
    const classes = useStyles();
    const {
        cnt_review_people = 0,
        score_overall = 0,
        score_overall_txt
    } = props.hospital_all_review ? props.hospital_all_review : {};
    return (
        <div className={classes.review_header}>
            <Typography className={classes.label}>리뷰어 선호도</Typography>
            <div className={classes.oneline}>
                {cnt_review_people < 10 ? null : (
                    <Typography className={classes.score}>
                        {score_overall}%
                    </Typography>
                )}

                <div
                    style={{
                        padding: `${pTr(4)} 0 ${pTr(4)} 0`
                    }}
                >
                    <Typography className={classes.text1}>
                        <span>
                            {cnt_review_people < 10
                                ? "평점을 표시할만큼 리뷰가 충분하지 않습니다."
                                : score_overall_txt || 0}
                        </span>
                    </Typography>
                    <Typography className={classes.text1}>
                        리뷰참여: {cnt_review_people || 0}명
                    </Typography>
                </div>
            </div>
        </div>
    );
};
function ReviewContainer(props) {
    const classes = useStyles();
    const {
        children,
        is_review,
        data,
        hospital_review_request,
        message_open,
        hospital_all_review,
        ...others
    } = props;

    return (
        <div className={classes.root}>
            {is_review ? (
                <ReviewTrue
                    data={data}
                    review_request={hospital_review_request}
                    message_open={message_open}
                    {...others}
                />
            ) : (
                <ReviewFalse
                    review_request={hospital_review_request}
                    message_open={message_open}
                    {...others}
                />
            )}
            {<ReviewHeader hospital_all_review={hospital_all_review} />}
            <div classes={classes.content}>{children}</div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        hospital_all_review: state.hospitalinfo.data.hospital_all_review,
        whetherResult: state.utilsinfo.whetherResult,
        is_login: state.kakaoinfo.is_login
    };
};
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            hospital_review_request,
            message_open,
            whether_open,
            whether_result,
            set_kakao_login
        },
        dispatch
    );

export default React.memo(
    connect(mapStateToProps, mapDispatchToProps)(ReviewContainer)
);
