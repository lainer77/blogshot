import React, { useEffect, useState } from "react";

import styled from "styled-components";
import Layout from "../layouts/PopupLayout";
import theme from "../../theme";

import { pTr } from "../../styles/typography";
import { Typography, Fade, Paper } from "@material-ui/core";
import LoadIcon from "../Icon/LoadIcon";

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
const PaperStyle = styled.div`
    && {
        position: absolute;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        outline: "none";
        width: fit-content;
        /* border: 1px solid black; */
    }
`;
const LoadingPopup = props => {
    const { children, loading, onClose } = props;
    return (
        <PaperStyle style={getModalStyle()}>
            <LoadIcon
                style={{ width: "120px", height: "120px" }}
                loading={loading}
            ></LoadIcon>
        </PaperStyle>
    );
};

export default function Index(props) {
    const { loading, onClose, ...other } = props;
    const [visibility, setVisibility] = useState("hidden");
    useEffect(() => {
        if (loading) {
            setVisibility("visible");
        } else {
            setVisibility("hidden");
        }
    }, [loading]);
    return (
        <Layout
            open={loading}
            onClose={onClose}
            content={LoadingPopup}
            loading={loading}
            visibility={visibility}
            {...other}
        />
    );
}
