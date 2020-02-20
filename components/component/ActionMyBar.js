import React, { useState, useEffect } from "react";
import Router from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import BackIcon from "../Icon/BackIcon";
import BookMarkIcon from "../Icon/BookMarkIcon";
import HomeIcon from "../Icon/HomeIcon";
import ShareIcon from "../Icon/ShareIcon";
import SharePopup from "../popup/SharePopup";

import { pTr, BASE_COLOR } from "../../styles/typography";
import { Typography } from "@material-ui/core";
import { isSafari } from "../../contants/utils";

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1
    },
    menuButton: {
        padding: `4px ${pTr(10)}`,
        margin: 0
    },
    AppBar: {
        backgroundColor: BASE_COLOR,
        color: "black",
        maxWidth: "1024px",
        boxShadow: "0 0 0 0",
        left: "auto",
        right: "auto",
        verticalAlign: "middle"
    },
    toolbar: {
        minHeight: pTr(42),
        display: "flex",
        justifyContent: "space-between",
        padding: "18px 0"
    },
    label: {
        padding: `0 ${pTr(10)}`
    },
    share: {
        padding: 0
    },
    title: {
        fontWeight: "bold",
        fontSize: "20px",
        lineHeight: "24px",
        letterSpacing: 0,
        color: "white"
    }
}));

const PrimarySearchAppBar = props => {
    const classes = useStyles();
    const { homeEnable = false, title } = props;

    const [sharePopup, setSharePopup] = useState(false);
    const onOpen = () => {
        setSharePopup(true);
    };
    const onClose = () => {
        setSharePopup(false);
    };
    const pageMoveHome = () => {
        Router.push("/");
    };
    const [is_mark, setIs_mark] = useState(props.is_mark || false);
    useEffect(() => {
        setIs_mark(props.is_mark);
    }, [props.is_mark]);
    const onBookmarkClick = () => {
        props.handleBookmark(!is_mark);
        setIs_mark(!is_mark);
    };

    return (
        <div className={classes.grow}>
            <AppBar className={classes.AppBar}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => Router.back()}
                    >
                        <BackIcon
                            style={{
                                width: pTr(11),
                                height: pTr(20)
                            }}
                            color="white"
                        />
                    </IconButton>
                    <Typography
                        className={classes.title}
                        style={{ margin: homeEnable ? "0" : "0 auto" }}
                    >
                        {title}
                    </Typography>
                    {homeEnable ? (
                        <div className={classes.share}>
                            <IconButton
                                aria-label="show more"
                                aria-haspopup="true"
                                color="inherit"
                                onClick={pageMoveHome}
                            >
                                <HomeIcon
                                    style={{
                                        width: pTr(20),
                                        height: pTr(18)
                                    }}
                                    color="white"
                                />
                            </IconButton>
                        </div>
                    ) : null}
                </Toolbar>
            </AppBar>
        </div>
    );
};
export default PrimarySearchAppBar;
