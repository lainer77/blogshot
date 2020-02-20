import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Divider from "../component/DividerMargin";

import { connect } from "react-redux";
import { pTr } from "../../styles/typography";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        margin: "5px 0",
        backgroundColor: "white"
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        padding: `${pTr(10)} ${pTr(20)}`,
        "& p": {
            fontSize: pTr(14),
            lineHeight: pTr(20),
            letterSpacing: 0,
            fontWeight: "bold"
        }
    }
});

function MypageArea3(props) {
    const classes = useStyles();
    const { saved_doctors } = props;

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Typography>관심 의사</Typography>
                <Typography>
                    <span>
                        {saved_doctors ? saved_doctors.cnt_saved_doctors : 0}
                    </span>{" "}
                    명
                </Typography>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        saved_doctors: state.mypageinfo.saved_doctors
    };
};
// const mapDispatchToProps = dispatch =>
//     bindActionCreators({ set_favorite_doctors }, dispatch);

export default connect(
    mapStateToProps
    // mapDispatchToProps
)(MypageArea3);
