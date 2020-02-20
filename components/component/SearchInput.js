import React, { useEffect } from "react";
import { makeStyles, ThemeProvider, withStyles } from "@material-ui/styles";
import Router from "next/router";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SearchAutocomplete from "./SearchAutocomplete";

import { Typography, Switch } from "@material-ui/core";

import { add_cookie } from "../../reducers/utilsinfo";
import { search_ajax, set_search_type } from "../../reducers/searchinfo";
import theme from "../../theme";
import { pTr, BASE_COLOR } from "../../styles/typography";

//#region Styles

const useStyles = makeStyles(theme => {
    return {
        inputRoot: {
            width: "100%",
            zIndex: 3,
            "& input": {
                fontSize: pTr(12)
            }
        },
        inputInput: {
            margin: `0 ${pTr(14)} 0 ${pTr(14)}`,
            color: "black",
            width: "100%",
            fontSize: pTr(12),
            zIndex: 3
        },
        inputInput2: {
            margin: `0 ${pTr(14)} 0 ${pTr(14)}`,
            color: "white",
            width: "100%",
            fontSize: pTr(12),
            zIndex: 3
        },
        toggle: { marginRight: "37px" }
    };
});

const RootStyle = styled.div`
    && {
        flex-grow: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
const Search = styled.div`
    && {
        position: relative;
        margin-left: 0;
        margin-right: ${theme.spacing(2)};
        width: 90%;
    }
`;
const ToggleLabel = styled(Typography)`
    && {
        font-size: "12px";
        letter-spacing: 0;
        color: white;
        position: absolute;
        top: 16px;
        /* margin-left: 14px; */
        margin-left: ${props => (props.checked ? "14px" : "25px")};
    }
`;
//#endregion

//#region variables

const pathname = "search";

//#endregion

const AntSwitch = withStyles(theme => ({
    root: {
        width: "92px",
        height: "24px",
        padding: 0,
        display: "flex",
        itemAlign: "center"
    },
    switchBase: {
        padding: 2,
        backgroundColor: BASE_COLOR,
        color: theme.palette.common.white,
        borderColor: theme.palette.common.white,
        marginTop: "2px",
        marginLeft: "2px",
        "&$checked": {
            transform: "translateX(1px)",
            color: theme.palette.common.white,
            marginLeft: "70px",
            // marginRight: "2px",
            // right: "auto",
            borderColor: theme.palette.common.white,
            "& + $track": {
                opacity: 1,
                backgroundColor: BASE_COLOR,
                borderColor: theme.palette.common.white
            }
        }
    },
    thumb: {
        width: 16,
        height: 16,
        boxShadow: "none"
    },
    track: {
        border: `1px solid white`,
        borderRadius: "12px",
        opacity: 1,
        backgroundColor: BASE_COLOR
    },
    checked: {}
}))(Switch);

function SearchAppBar(props) {
    const classes = useStyles();
    const { open, setOpen, noneClick, anchorEl } = props;
    const [searchChange, setSearchChange] = React.useState(null);
    const [is_push, setIs_push] = React.useState(false);
    const [checked, setChecked] = React.useState(
        props.searchType == "질병명" ? true : false
    );
    const [searchType, setSearchType] = React.useState("질병명");
    const [inputEl, setInputEl] = React.useState(null);

    const handleChange = () => {
        setChecked(!checked);
        sessionStorage.setItem(
            "searchType",
            !checked ? "질병명" : "의사/병원명"
        );
        // props.set_search_type(!checked ? "질병명" : "의사/병원명");
        let el = inputEl;
        if (!el) {
            el = document.getElementById("react-autosuggest-popup");
            setInputEl(el);
        }
        el.focus();
    };

    const OnClose = () => {
        setOpen(false);
    };

    const handleClick = newPlacement => event => {
        setOpen(true);
    };

    const pushEvent = value => {
        if (!value) {
            OnClose();
            return;
        }

        setIs_push(true);
        setSearchChange(value);
        props.add_cookie("recent", value);
        let query = {
            searchText: value
        };
        query.searchType = sessionStorage.getItem("searchType") || "질병명";
        Router.push(
            {
                pathname: "/" + pathname,
                query: query
            },
            undefined,
            { prefetch: true }
        );
    };

    const handleEnter = e => {
        if (e.key === "Enter") {
            pushEvent(searchChange);
        }
    };

    useEffect(() => {
        if (sessionStorage.getItem("searchType")) {
            setChecked(
                sessionStorage.getItem("searchType") == "질병명" ? true : false
            );
            setSearchType(sessionStorage.getItem("searchType"));
        } else setChecked(true);
    }, [props.searchType]);

    useEffect(() => {
        if (is_push) {
            OnClose();
            setIs_push(false);
        }
    }, [is_push]);

    return (
        <RootStyle onClick={handleClick()}>
            <Search>
                <ThemeProvider theme={{ color: open ? "white" : "black" }}>
                    <SearchAutocomplete
                        disabled={noneClick ? true : false}
                        placeholder={
                            checked
                                ? "질병, 수술명으로 찾습니다"
                                : "의사명, 병원명으로 찾습니다"
                        }
                        type={pathname}
                        open={open}
                        onChange={setSearchChange}
                        ajax={search_ajax}
                        onKeyDown={handleEnter}
                        pushEvent={pushEvent}
                        classes={{
                            inputRoot: classes.inputRoot,
                            inputinput: open
                                ? classes.inputInput2
                                : classes.inputInput
                        }}
                        inputProps={{
                            "aria-label": pathname,
                            id: props.inputId || "react-autosuggest-simple"
                        }}
                        anchorEl={anchorEl}
                        searchType={searchType}
                    ></SearchAutocomplete>
                </ThemeProvider>
            </Search>
            {open ? (
                <span className={classes.toggle} onClick={handleChange}>
                    <AntSwitch checked={checked} onChange={handleChange} />
                    <ToggleLabel checked={checked} style={{ fontSize: "12px" }}>
                        {checked ? "질병/수술명" : "의사/병원명"}
                    </ToggleLabel>
                </span>
            ) : null}
        </RootStyle>
    );
}

const mapStateToProps = state => {
    return {
        recent: state.utilsinfo.cookies["recent"] || null,
        searchType: state.searchinfo.searchType
    };
};
const mapDispatchToProps = dispatch =>
    bindActionCreators({ add_cookie, set_search_type }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchAppBar);
