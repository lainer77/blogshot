import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SwipeableViews from "react-swipeable-views";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";

import Layout from "../layouts/PopupLayout";
import theme from "../../theme";
import CancelIcon from "../Icon/CancelIcon";

import { pTr, BASE_COLOR, getWindow } from "../../styles/typography";
import { message_open } from "../../reducers/utilsinfo";
import { IconButton, Typography, AppBar } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {},
    imgs: {
        display: "flex",
        justifyContent: "left",
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
        height: "100vh",
        width: "100vw"
    };
}

//#region styled
const PaperStyle = styled.div`
    && {
        position: absolute;
        background-color: black;
        box-shadow: ${theme.shadows[0]};
        outline: "none";
    }
`;
const CancelButton = props => {
    return (
        <IconButton {...props}>
            <CancelIcon {...props}></CancelIcon>
        </IconButton>
    );
};

let swipeOptions;
const ReviewPopup = props => {
    const classes = useStyles();
    const { open, data, selectedIndex = 0, onClose } = props;

    let [swipeButton, setSwipeButton] = useState(selectedIndex);
    const [imgHeight, setImgHeight] = useState(0);
    if (!swipeOptions)
        swipeOptions = {
            continuous: false,
            transitionEnd: index => {
                setSwipeButton(index);
            }
        };
    const swipeSlide = index => {
        setSwipeButton(index);
    };
    return (
        <PaperStyle style={getModalStyle()}>
            <AppBar
                style={{
                    height: "61px",
                    opacity: 0.5,
                    backgroundColor: "black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "sticky",
                    width: "100%",
                    zIndex: 100,
                    maxWidth: "1024px"
                }}
            >
                <Typography
                    style={{
                        color: "white",
                        fontSize: "14px",
                        letterSpacing: 0,
                        lineHeight: "24px"
                    }}
                >
                    사진 {swipeButton + 1}/{data.length}
                </Typography>
                <CancelButton
                    style={{ position: "absolute", right: "8px" }}
                    onClick={onClose}
                ></CancelButton>
            </AppBar>

            <SwipeableViews
                className={classes.carousel}
                enableMouseEvents
                index={swipeButton}
                onChangeIndex={index => setSwipeButton(index)}
            >
                {data.map(x => {
                    return (
                        <div
                            style={{
                                height: "100vh",
                                display: "flex"
                            }}
                        >
                            <img
                                src={x}
                                style={{ width: "100%", margin: "auto" }}
                            ></img>
                        </div>
                    );
                })}
            </SwipeableViews>
        </PaperStyle>
    );
};

const mapStateToProps = state => {
    let id = state.doctorinfo.selected_doctor_id;
    return {};
};
const mapDispatchToProps = dispatch =>
    bindActionCreators({ message_open }, dispatch);

const ReviewPopupConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewPopup);

export default function Index(props) {
    const { open, onClose, ...others } = props;
    return (
        <Layout
            open={open}
            handleClose={onClose}
            content={ReviewPopupConnect}
            otherAreaClose={true}
            {...others}
        />
    );
}
