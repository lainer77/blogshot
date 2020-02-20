import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import SwipeableViews from "react-swipeable-views";
import { Button, Box } from "@material-ui/core";

import Layout from "../layouts/PopupLayout";
import styled from "styled-components";
import theme from "../../theme";
import Page1 from "../area/TutorialArea_1";
import Page2 from "../area/TutorialArea_2";
import Page3 from "../area/TutorialArea_3";
import Page4 from "../area/TutorialArea_4";

import KakaoLogin from "../kakao/KakaoLogin";
import { makeStyles } from "@material-ui/styles";

import { pTr } from "../../styles/typography";

const useStyles = makeStyles(theme => ({
    buttons: {
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        bottom: "18px",
        left: "15px"
    }
}));
function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        height: pTr(462),
        width: pTr(335),
        borderRadius: pTr(6)
    };
}

const PaperStyle = styled.div`
    && {
        position: absolute;
        background-color: ${theme.palette.background.paper};
        box-shadow: 0 0 0 0;
        outline: "none";
        padding-bottom: ${pTr(18)};
        border: 1px solid transparent;
    }
`;
const AfterButton = styled(Button)`
    && {
        max-height: ${pTr(50)};
        font-size: ${pTr(12)};
        line-height: ${pTr(24)};
        letter-spacing: 0;
        color: rgb(130 130 130);
        margin: 0 4px;
        width: ${pTr(145)};
    }
`;
const KakaoButton = styled(Button)`
    && {
        padding: 0;
        margin: 0 4px;
        & button {
            width: ${pTr(145)};
            height: ${pTr(50)};
            font-size: ${pTr(12)};
            line-height: ${pTr(24)};
            letter-spacing: 0;
        }
    }
`;
const SkipButton = styled(Button)`
    && {
        font-size: ${pTr(14)};
        letter-spacing: 0;
        line-height: ${pTr(24)};
        position: absolute;
        right: 15px;
        bottom: 15px;
    }
`;
const Dots = styled.div`
    && {
        display: flex;
        left: 41%;
        position: absolute;
        bottom: -30px;
    }
`;
let swipeOptions;
const TutorialPopup = props => {
    const classes = useStyles();
    let [swipeButton, setSwipeButton] = useState(0);
    if (!swipeOptions)
        swipeOptions = {
            continuous: false,
            transitionEnd: index => {
                setSwipeButton(index);
            }
        };
    const SwipeButton = props => {
        return (
            <Box
                style={{
                    width: pTr(16),
                    height: pTr(16),
                    display: "inline-block"
                }}
                onClick={() => {
                    setSwipeButton(props.index);
                }}
            >
                <Box
                    style={{
                        backgroundColor: props.en
                            ? "rgb(12 125 201)"
                            : "rgb(216 216 216)",
                        width: pTr(8),
                        height: pTr(8),
                        borderRadius: pTr(6),
                        borderStyle: "none",
                        margin: `${pTr(5)} ${pTr(5)} ${pTr(5)} ${pTr(5)}`,
                        padding: 4,
                        display: "inline-block"
                    }}
                />
            </Box>
        );
    };
    const swipeSlide = index => {
        setSwipeButton(index);
    };
    return (
        <PaperStyle style={getModalStyle()}>
            <SwipeableViews
                className={classes.carousel}
                enableMouseEvents
                index={swipeButton}
                onChangeIndex={index => setSwipeButton(index)}
            >
                <div>
                    <Page1 onSwipte={swipeSlide} />
                </div>
                <div>
                    <Page2 onSwipte={swipeSlide} />
                </div>
                <div>
                    <Page3 onSwipte={swipeSlide} />
                </div>
                <div>
                    <Page4 onSwipte={swipeSlide} />
                </div>
            </SwipeableViews>
            {swipeButton == 3 ? (
                <div className={classes.buttons}>
                    <AfterButton variant="outlined" onClick={props.onClose}>
                        나중에 가입하기
                    </AfterButton>
                    <KakaoButton onClick={props.onClose}>
                        <KakaoLogin open={true}>카카오톡으로 시작!</KakaoLogin>
                    </KakaoButton>
                </div>
            ) : (
                <SkipButton
                    onClick={() => {
                        swipeSlide(3);
                    }}
                >
                    SKIP >
                </SkipButton>
            )}
            <Dots>
                <SwipeButton index={0} en={swipeButton === 0} />
                <SwipeButton index={1} en={swipeButton === 1} />
                <SwipeButton index={2} en={swipeButton === 2} />
                <SwipeButton index={3} en={swipeButton === 3} />
            </Dots>
        </PaperStyle>
    );
};
function Index(props) {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        if (props.is_login) handleClose();
    }, [props.is_login]);
    return (
        <Layout open={open} handleClose={handleClose} content={TutorialPopup} />
    );
}

const mapStateToProps = state => {
    return {
        login: state.kakaoinfo.login,
        is_login: state.kakaoinfo.is_login
    };
};

export default connect(mapStateToProps)(Index);
