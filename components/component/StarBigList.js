import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/styles";

import { IconButton as IB } from "@material-ui/core";
import StarBigIcon from "../Icon/StarBigIcon";

import { pTr } from "../../styles/typography";

const useStyles = makeStyles(theme => ({
    big_icons: {
        "& img": {
            width: pTr(24),
            height: pTr(24),
            margin: `${pTr(5)} ${pTr(3.5)}`
        }
    }
}));
const IconButton = styled(IB)`
    && {
        padding: 0;
        margin: 0;
    }
`;
const StarBigList = ({
    score = 0,
    onScoreChange = () => {},
    select = false
}) => {
    const classes = useStyles();
    const selectList = [1, 2, 3, 4, 5];
    const [selectedPoint, setSelectedPoint] = useState(score);
    useEffect(() => {
        if (select) setSelectedPoint(score);
    }, [score]);
    return (
        <div className={classes.big_icons}>
            {selectList.map((x, i) => {
                return (
                    <IconButton
                        key={i}
                        onClick={e => {
                            setSelectedPoint(x);
                            if (onScoreChange) onScoreChange(x);
                        }}
                    >
                        <StarBigIcon selected={x <= selectedPoint} />
                    </IconButton>
                );
            })}
        </div>
    );
};

export default StarBigList;
