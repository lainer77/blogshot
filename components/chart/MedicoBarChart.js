import React, { PureComponent, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/styles";

import { BarChart, Bar } from "recharts";
import { Typography, Popper } from "@material-ui/core";
import { BASE_COLOR } from "../../styles/typography";
import styled from "styled-components";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline"
    },
    paper: {
        backgroundColor: "rgba(255, 255, 255, 0)",
        paddingBottom: "30px",
        boxShadow: "none"
    },
    typography: {
        color: "white",
        fontSize: "12px"
    }
}));

const Label = styled(Typography)`
    && {
        color: ${BASE_COLOR};
        font-size: 10px;
        line-height: 24px;
        letter-spacing: 0;
    }
`;

const Traiangle = styled.div`
    && {
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 12px solid black;
        position: absolute;
        right: 46%;
        top: 35px;
        align-self: center;
        transform: ${props => {
            return `rotate(${!props.expanded ? 180 : 0}deg)`;
        }};
    }
`;
const Chart = props => {
    const classes = useStyles();
    const { data, chartProps, barProps, rootProps, dispopable } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = event => {
        const is_mobile =
            window.navigator.userAgent.indexOf("Mobile") < 0 ? true : false;
        if (event.currentTarget != anchorEl && !dispopable && is_mobile) {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleClose = e => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div className={classes.root} id="medico-chart" {...rootProps}>
            <Label>{data[0].year}</Label>
            <span
                id="medico-span"
                onMouseEnter={handleClick}
                onMouseLeave={handleClose}
            >
                <BarChart
                    width={200}
                    height={70}
                    data={data}
                    margin={{
                        top: 10,
                        right: 5,
                        left: 5,
                        bottom: -5
                    }}
                    {...chartProps}
                >
                    <Bar
                        dataKey="cnt_paper"
                        isAnimationActive={false}
                        fill={BASE_COLOR}
                        barSize={6}
                        maxBarSize={100}
                        {...barProps}
                    />
                </BarChart>
            </span>
            <Label>{data[data.length - 1].year}</Label>
            <Popper
                classes={{ paper: classes.paper }}
                PaperProps={{ id: "paper-popup" }}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                placement="top"
            >
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        padding: "10px",
                        backgroundColor: "black",
                        borderRadius: "4px"
                    }}
                >
                    <Typography className={classes.typography}>
                        {`연도별 업적팩트 : ${data[0].year} - ${data[data.length - 1].year}`}
                    </Typography>
                </div>
                <Traiangle id="traiangle-popup"></Traiangle>
            </Popper>
        </div>
    );
};

export default Chart;
