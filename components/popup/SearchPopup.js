import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";

import Layout from "../layouts/PopupLayout";
import styled from "styled-components";
import theme from "../../theme";

import { pTr, BASE_COLOR } from "../../styles/typography";
import RecentSearches from "../component/RecentSearches";
import SearchInput from "../component/SearchInput";
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
        width: "100%",
        height: "100%",
        maxWidth: "1024px"
    };
}

//#region
const Header = styled.div`
    && {
        height: ${pTr(50)};
        background-color: ${BASE_COLOR};
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
const Body = styled.div`
    && {
        /* padding: ${pTr(20)}; */
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
        margin-left: ${pTr(18)};
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
    const [anchorEl, setAnchorEl] = React.useState(null);

    const OnMenuCloseClick = () => {
        onClose();
    };
    return (
        <PaperStyle style={getModalStyle()}>
            <Header
                onClick={e => {
                    setAnchorEl(e.currentTarget);
                }}
            >
                <MenuButtonStyle aria-label="menu" onClick={OnMenuCloseClick}>
                    <ClearIconStyle />
                </MenuButtonStyle>
                <SearchInput
                    open={open}
                    setOpen={setOpen}
                    anchorEl={anchorEl}
                    inputId="react-autosuggest-popup"
                />
            </Header>
            <Body>
                <RecentSearches setOpen={setOpen} onClose={onClose} />
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
            {...others}
        />
    );
}
