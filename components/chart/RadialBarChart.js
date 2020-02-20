import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import { Typography as Typo } from "@material-ui/core";
import { pTr, BASE_COLOR } from "../../styles/typography";
import { set_loading, message_open } from "../../reducers/utilsinfo";
import styled from "styled-components";
import { numberFormat } from "../../logic/searchValidation";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    label: {
        color: BASE_COLOR,
        fontSize: pTr(14),
        letterSpacing: 0,
        lineHeight: pTr(20),
        paddingRight: pTr(10)
    },
    inlabel: {
        color: BASE_COLOR,
        fontSize: pTr(12),
        letterSpacing: 0,
        lineHeight: pTr(20),
        paddingRight: pTr(10)
    }
}));
let data = [
    {
        uv: 0,
        fill: BASE_COLOR
    }
];
const Content = styled.div`
    && {
        border: ${props =>
            props.type === "label" ? "1px solid lightgray" : ""};
        height: fit-content;
        display: ${props => (props.type === "label" ? "flex" : "")};
        align-items: center;
        border-radius: ${pTr(3)};
    }
`;
const ChartStyle = styled(RadialBarChart)`
    && {
        background-color: inherit;
    }
`;
const types = { LABEL: "label", INLABEL: "inlabel", TEXT: "text" };
const sizeType = type => {
    if (type === "label") return 26;
    else if (type === "inlabel") return 70;
    else if (type === "text") return 26;
};
const sizeRadius = type => {
    if (type === "label") return { inner: "120%", outer: "270%" };
    else if (type === "inlabel") return { inner: "100%", outer: "140%" };
    else if (type === "text") return { inner: "120%", outer: "270%" };
};
const Chart = props => {
    const classes = useStyles();
    let type = props.type || types.INLABEL;
    let radius;

    let score =
        parseFloat(props.score).toFixed(props.scoreFix || 1) !== "NaN"
            ? parseFloat(props.score).toFixed(props.scoreFix || 1)
            : "미확인";
    let sco = score.split(".");
    if (sco[1] && sco[1].length === 1 && sco[1] === "0") score = sco[0];

    score = score.replace(/(0+$)/, "");
    if (score == 0 || score == "0" || score == "0.") score = "미확인";
    else {
        score = parseFloat(score);
    }

    data[0].uv = score == "미확인" ? 0 : score;
    data[0].name = score;
    if (props.fill) data[0].fill = props.fill;

    radius = sizeRadius(type);

    return (
        <div className={classes.root}>
            <Content type={type}>
                <ChartStyle
                    type={type}
                    width={props.width || sizeType(type)}
                    height={props.height || sizeType(type)}
                    innerRadius={radius.inner}
                    outerRadius={radius.outer}
                    data={data}
                    startAngle={90}
                    endAngle={-270}
                >
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        angleAxisId={0}
                        tick={false}
                    />
                    <RadialBar
                        key={props.animationId}
                        barSize={100}
                        background={{ fill: "rgb(218 218 218)" }}
                        minAngle={0}
                        isUpdateAnimationActive
                        label={{
                            position: "center",
                            fill: BASE_COLOR,
                            fontSize: props.fontSize || pTr(14),
                            letterSpacing: 0
                        }}
                        dataKey="uv"
                        onAnimationEnd={() => {
                            // props.set_loading(false);
                            //   if (props.msg !== "")
                            props.message_open();
                        }}
                    />
                </ChartStyle>
            </Content>
        </div>
    );
};

// export default Chart;
// message_open()(dispatch, getState);
const mapStateToProps = (state, ownProps) => {
    return {
        loading: state.utilsinfo.loading,
        msg: state.utilsinfo.msg,
        animationId: `radial-bar-${ownProps.score}`
    };
};
const mapDispatchToProps = dispatch =>
    bindActionCreators({ set_loading, message_open }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
