import React, { useState, useEffect } from "react";
import Router from "next/router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import BackIcon from "../Icon/BackIcon";
import BookMarkIcon from "../Icon/BookMarkIcon";
import HomeIcon from "../Icon/HomeIcon";
import ShareIcon from "../Icon/ShareIcon";
import SharePopup from "../popup/SharePopup";

import { pTr } from "../../styles/typography";
import { message_open } from "../../reducers/utilsinfo";

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1
    },
    menuButton: {
        padding: `4px ${pTr(10)}`,
        margin: 0
    },
    AppBar: {
        backgroundColor: "white",
        color: "black",
        position: "fixed",
        maxWidth: "1024px",
        boxShadow: "0 0 0 0",
        left: "auto",
        right: "auto",
        height: pTr(42),
        verticalAlign: "middle"
    },
    label: {
        padding: `0 ${pTr(10)}`
    },
    share: {
        padding: 0
    }
}));

const PrimarySearchAppBar = props => {
    const classes = useStyles();
    const {
        labelEnable = true,
        shareEnable = true,
        homeEnable = false,
        is_login = true
    } = props;

    const [sharePopup, setSharePopup] = useState(false);
    const [is_mark, setIs_mark] = useState(props.is_mark || false);
    const [_is_login, setIs_login] = useState(is_login);

    const onOpen = () => {
        setSharePopup(true);
    };
    const onClose = () => {
        setSharePopup(false);
    };
    const pageMoveHome = () => {
        Router.push("/");
    };

    const onBookmarkClick = () => {
        props.handleBookmark(!is_mark);
        setIs_mark(!is_mark);
        props.message_open(
            is_mark
                ? "관심정보 등록을 해제했습니다."
                : "관심정보로 등록했습니다."
        );
    };

    useEffect(() => {
        setIs_mark(props.is_mark);
    }, [props.is_mark]);
    useEffect(() => {
        setIs_login(is_login);
    }, [is_login]);

    return (
        <div className={classes.grow}>
            <AppBar className={classes.AppBar}>
                <Toolbar style={{ minHeight: pTr(42) }}>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() =>
                            !_is_login ? Router.push("/") : Router.back()
                        }
                    >
                        <BackIcon
                            style={{
                                width: pTr(11),
                                height: pTr(20)
                            }}
                            color="black"
                        />
                    </IconButton>
                    <div className={classes.grow} />
                    {labelEnable && _is_login ? (
                        <div className={classes.label}>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                                onClick={onBookmarkClick}
                            >
                                <BookMarkIcon
                                    style={{
                                        width: pTr(16),
                                        height: pTr(20)
                                    }}
                                    is_check={is_mark}
                                />
                            </IconButton>
                        </div>
                    ) : null}
                    {shareEnable && _is_login ? (
                        <div className={classes.share}>
                            <IconButton
                                aria-label="show more"
                                aria-haspopup="true"
                                color="inherit"
                                onClick={onOpen}
                            >
                                <ShareIcon
                                    style={{
                                        width: pTr(19),
                                        height: pTr(20)
                                    }}
                                />
                            </IconButton>
                            <SharePopup
                                open={sharePopup}
                                onClose={onClose}
                            ></SharePopup>
                        </div>
                    ) : null}
                    {homeEnable && _is_login ? (
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
                                    color="black"
                                />
                            </IconButton>
                        </div>
                    ) : null}
                </Toolbar>
            </AppBar>
        </div>
    );
};
// export default PrimarySearchAppBar;

const mapStateToProps = state => {
    return {
        is_login: state.kakaoinfo.is_login
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({ message_open }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PrimarySearchAppBar);
