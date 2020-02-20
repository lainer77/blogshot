import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button, IconButton } from "@material-ui/core";

import Layout from "../layouts/PopupLayout";
import styled from "styled-components";
import theme from "../../theme";

import { pTr, BASE_COLOR } from "../../styles/typography";
import RecentIndexTable from "../component/RecentIndexTable";
import MyPageInput from "../component/MyPageInput";
import MenuIcon from "../Icon/MenuIcon";
import CancelIcon from "../Icon/CancelIcon";

const useStyles = makeStyles(theme => ({
    root: {},
    imgs: {
        display: "flex",
        justifyContent: "center",
        padding: `${pTr(8)} 0`
    }
}));
function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        // height: pTr(568),
        width: "100%",
        height: "100%",
        maxWidth: "1024px"
    };
}

//#region
const Header = styled.div`
    && {
        height: ${pTr(85)};
        background-color: ${BASE_COLOR};
        display: flex;
        justify-content: center;
        align-items: center;
        & p {
            color: white;
            font-size: ${pTr(18)};
            line-height: ${pTr(24)};
            letter-spacing: 0;
        }
    }
`;
const Body = styled.div`
    && {
        /* padding: ${pTr(20)}; */
        overflow:auto;
        height:calc(100% - 85px);
    }
`;
const PaperStyle = styled.div`
    && {
        position: absolute;
        background-color: ${theme.palette.background.paper};
        box-shadow: ${theme.shadows[0]};
        outline: "none";
    }
`;
const MenuButtonStyle = styled(IconButton)`
    && {
        color: inherit;
        padding: ${pTr(20)};
    }
`;
const ClearIconStyle = styled(CancelIcon)`
    && {
        pointer-events: none;
        display: flex;
        color: white;
    }
`;
//#endregion

const SearchPopup = props => {
    const classes = useStyles();
    const { open, onClose, setOpen } = props;

    const OnMenuCloseClick = () => {
        onClose();
    };
    return (
        <PaperStyle style={getModalStyle()}>
            <Header>
                <MenuButtonStyle aria-label="menu" onClick={OnMenuCloseClick}>
                    <ClearIconStyle />
                </MenuButtonStyle>
                <MyPageInput open={open} setOpen={setOpen} />
            </Header>
            <Body>
                <RecentIndexTable setOpen={setOpen} />
            </Body>
        </PaperStyle>
    );
};

export default function Index(props) {
    const { open, setOpen, ...others } = props;
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Layout
            open={open}
            setOpen={setOpen}
            handleClose={handleClose}
            content={SearchPopup}
            // disableScrollLock={true}
            {...others}
        />
    );
}
