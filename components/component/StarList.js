import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/styles";

import StarIcon from "../Icon/StarIcon";

import { pTr } from "../../styles/typography";
import { IconButton as IB } from "@material-ui/core";
import styled from "styled-components";

const useStyles = makeStyles(theme => ({
    icons: {
        "& img": {
            width: pTr(14),
            height: pTr(14),
            margin: `${pTr(5)} ${pTr(2)}`
        }
    }
}));
const IconButton = styled(IB)`
    && {
        padding: 0;
        margin: 0;
    }
`;
const StarList = ({
    onChangePoint = function() {},
    score = 0,
    select = true
}) => {
    const classes = useStyles();
    const selectList = [1, 2, 3, 4, 5];
    const [selectedPoint, setSelectedPoint] = useState(score);
    useEffect(() => {
        if (!select) {
            setSelectedPoint(score);
        }
    }, [score]);
    return (
        <div className={classes.icons}>
            {selectList.map((x, i) => {
                return (
                    <IconButton
                        key={i}
                        onClick={e => {
                            if (select) {
                                setSelectedPoint(x);
                                if (onChangePoint) onChangePoint(x);
                            }
                        }}
                    >
                        <StarIcon selected={x <= selectedPoint} />
                    </IconButton>
                );
            })}
        </div>
    );
};

export default StarList;
