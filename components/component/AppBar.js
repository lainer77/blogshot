import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import styled from "styled-components";
import PropTypes from "prop-types";
import { animateScroll as scroll, Events } from "react-scroll";

import {
    AppBar,
    Toolbar,
    IconButton,
    Popper,
    Paper,
    Fade
} from "@material-ui/core";

import MenuIcon from "../Icon/MenuIcon";
import CancelIcon from "../Icon/CancelIcon";

import SearchInput from "./SearchInput";
import MyPageInput from "./MyPageInput";
import RecentSearches from "./RecentSearches";
import RecentIndexTable from "./RecentIndexTable";
import SearchPopup from "../popup/SearchPopup";
import MenuPopup from "../popup/MenuPopup";

import { pTr, getWindow, pInt } from "../../styles/typography";

//#region Styles

const useStyles = makeStyles(theme => ({
    typography: {
        padding: theme.spacing(2),
        verticalAlign: "center"
    },
    AppBar: {
        backgroundColor: "white",
        borderRadius: pTr(6),
        position: "static",
        height: pTr(46),
        boxShadow: `0 ${pTr(2)} ${pTr(8)} 0 rgba(0,0,0,0.1), 0 0 ${pTr(
            3
        )} 0 rgba(0,0,0,0.11)`
        // color: "white"
    },
    toolbar: {
        minHeight: 0
    }
}));

const RootStyle = styled.div`
    && {
        flex-grow: 1;
        background-color: "white";
    }
`;
const MenuButtonStyle = styled(IconButton)`
    && {
        color: inherit;
        padding: ${pTr(20)};
    }
`;
const SearchIconStyle = styled(MenuIcon)`
    && {
        height: ${pTr(14)};
        width: ${pTr(17)};
        pointer-events: none;
        display: flex;
        color: black;
    }
`;

//#endregion

//#region variables

//#endregion

Events.scrollEvent.register("end", function(to, element) {
    // disableScroll.on();
});

function SearchAppBar(props) {
    const classes = useStyles();
    const [searchOpen, setSearchOpen] = useState(false);
    const [myProfileOpen, setMyProfileOpen] = useState(false);

    const whatOpen = () => searchOpen + myProfileOpen == 1;

    const OnMenuCloseClick = () => {
        if (searchOpen) setSearchOpen(false);
        else if (myProfileOpen) setMyProfileOpen(false);
        else setMyProfileOpen(true);
    };
    if (whatOpen()) {
        scroll.scrollToTop({ to: "top", duration: 0 });
    } else {
        // disableScroll.off();
    }
    return (
        <RootStyle>
            <AppBar className={classes.AppBar}>
                <Toolbar className={classes.toolbar}>
                    <MenuButtonStyle
                        edge="start"
                        aria-label="menu"
                        onClick={OnMenuCloseClick}
                    >
                        <SearchIconStyle />
                    </MenuButtonStyle>
                    <SearchInput
                        open={searchOpen}
                        setOpen={setSearchOpen}
                        noneClick={true}
                    />
                </Toolbar>
            </AppBar>
            <SearchPopup
                open={searchOpen}
                setOpen={setSearchOpen}
            ></SearchPopup>
            <MenuPopup
                open={myProfileOpen}
                setOpen={setMyProfileOpen}
            ></MenuPopup>
        </RootStyle>
    );
}

export default SearchAppBar;
