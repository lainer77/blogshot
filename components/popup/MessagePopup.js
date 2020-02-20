import React, { useEffect } from "react";

import styled from "styled-components";
import theme from "../../theme";

import { pTr, getWindow } from "../../styles/typography";
import { Typography, Fade, Paper } from "@material-ui/core";

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        borderRadius: pTr(6)
    };
}

//#region
const PaperStyle = styled(Paper)`
    && {
        position: fixed;
        background-color: ${theme.palette.background.paper};
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: ${pTr(17)} ${pTr(5)};
        width: 90%;
        max-width: 900px;

        /* border: 1px solid black; */
    }
`;
const Content = styled(Typography)`
    && {
        text-align: center;
        font-size: ${pTr(16)};
        line-height: ${pTr(24)};
        letter-spacing: 0;
    }
`;
const ReviewPopup = props => {
    const { children, open, onClose } = props;
    useEffect(() => {
        setTimeout(x => {
            onClose();
        }, 2000);
    }, [open]);
    return (
        <Fade in={props.open}>
            <PaperStyle style={getModalStyle()}>
                <Content>{children}</Content>
            </PaperStyle>
        </Fade>
    );
};

export default function Index(props) {
    const { open, onClose, ...other } = props;

    return (
        <ReviewPopup
            open={props.open}
            // open={true}
            onClose={onClose}
            {...other}
        />
    );
}
