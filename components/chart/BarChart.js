import React, { PureComponent } from "react";
import { makeStyles } from "@material-ui/styles";

import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar
} from "recharts";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        flexGrow: 1,
        display: "flex",
        justifyContent: "center"
    }
}));

class CustomizedAxisTick extends PureComponent {
    render() {
        const { x, y, stroke, payload } = this.props;

        return (
            <g transform={`translate(${x},${y})`}>
                <text
                    x={0}
                    y={0}
                    dy={10}
                    textAnchor="end"
                    fill="#666"
                    transform="rotate(-61)"
                    fontSize="8"
                >
                    {payload.value}
                </text>
            </g>
        );
    }
}
const Chart = props => {
    const classes = useStyles();
    const { data } = props;
    return (
        <div className={classes.root}>
            <BarChart
                width={300}
                height={100}
                data={data}
                margin={{
                    top: 10,
                    right: 0,
                    left: -50,
                    bottom: -5
                }}
            >
                <XAxis
                    dataKey="year"
                    tickSize={0}
                    interval={0}
                    tick={<CustomizedAxisTick />}
                    label={<Typography></Typography>}
                />
                <YAxis tick={false} />
                <Bar dataKey="cnt_paper" fill="rgb(85 1 158)" barSize={10} />
            </BarChart>
        </div>
    );
};

export default Chart;
