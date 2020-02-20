import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { pTr } from "../../styles/typography";
import Router from "next/router";

// import { set_favorite_doctors } from "../../reducers/mypageinfo";
// import { set_favorite_doctors } from "../../reducers/hospitalinfo";
// import { set_favorite_doctors } from "../../reducers/doctorinfo";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        padding: pTr(10),
        backgroundColor: "white"
    },
    label: {
        fontSize: pTr(14),
        lineHeight: pTr(20),
        letterSpacing: 0,
        margin: `${pTr(5)} ${pTr(10)}`,
        fontWeight: "bold"
    },
    boxs: {
        display: "flex",
        "& span": {
            fontWeight: "bold"
        },
        padding: `${pTr(5)} ${pTr(10)}`
    },
    box: {
        width: "100%",
        border: `1px solid lightgray`,
        textAlign: "center",
        "& p": {
            fontSize: pTr(14),
            lineHeight: pTr(24),
            letterSpacing: 0
        }
    },
    col: {
        backgroundColor: "rgb(220 224 228)"
    },
    row: { padding: "10px 0" }
});

function MypageArea2(props) {
    const classes = useStyles();
    const { review_cnt } = props;

    const handleMyReview = tab => {
        Router.push(
            {
                pathname: "/myreview",
                query: { tab }
            },
            "/myreview"
        );
    };

    return (
        <div className={classes.root}>
            <Typography className={classes.label}>나의 리뷰</Typography>
            <div className={classes.boxs}>
                <Box className={classes.box}>
                    <Typography className={classes.col}>의사</Typography>
                    <Typography
                        className={classes.row}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            if (review_cnt && review_cnt.cnt_doctors > 0) {
                                handleMyReview("doctor");
                                props.set_selected_tab("doctor");
                            }
                        }}
                    >
                        <span>{review_cnt ? review_cnt.cnt_doctors : 0}</span>
                        &nbsp;건
                    </Typography>
                </Box>
                <Box className={classes.box} style={{ marginLeft: pTr(-1) }}>
                    <Typography className={classes.col}>병원</Typography>
                    <Typography
                        className={classes.row}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            if (review_cnt && review_cnt.cnt_hospitals > 0) {
                                handleMyReview("hospital");
                                props.set_selected_tab("hospital");
                            }
                        }}
                    >
                        <span>{review_cnt ? review_cnt.cnt_hospitals : 0}</span>
                        &nbsp;건
                    </Typography>
                </Box>
            </div>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        favorite_doctors: state.mypageinfo.favorite_doctors,
        review_cnt: state.mypageinfo.review_cnt
    };
};
// const mapDispatchToProps = dispatch =>
//     bindActionCreators({ set_favorite_doctors }, dispatch);

export default connect(
    mapStateToProps
    // mapDispatchToProps
)(MypageArea2);
