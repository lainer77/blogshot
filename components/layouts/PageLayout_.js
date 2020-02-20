import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Router, { useRouter } from "next/router";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { animateScroll as scroll, Events } from "react-scroll";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button, MobileStepper, IconButton } from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

import ListContent from "../list/ListContent";

import { BASE_COLOR } from "../../styles/typography";
import { SEARCH_REQUST_RESULT_LIMIT } from "../../contants/constants";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    stepper: {
        padding: "5px",
        backgroundColor: "white",
        fontSize: 0
    },
    steps: {},
    button: {
        fontSize: "12px",
        lineHeight: "20px",
        letterSpacing: 0,
        fontWeight: "normal",
        color: BASE_COLOR
    }
}));
const StepBtn = styled(IconButton)`
    && {
        background-color: ${props => (props.activeStep ? BASE_COLOR : "white")};
        color: ${props => (props.activeStep ? "white" : BASE_COLOR)};
        padding: 3px 6px;
        border-radius: 3px;
        width: 21px;
        font-size: 14px;
        letter-spacing: 0;
        line-height: 20px;
    }
`;
const Step = ({ index = 0, activeStep, onClick, ...others }) => {
    return (
        <StepBtn
            activeStep={activeStep}
            onClick={() => {
                onClick(index);
            }}
            {...others}
        >
            {index + 1}
        </StepBtn>
    );
};
const Steps = ({
    classes = {},
    maxSteps = 0,
    activeStep = 0,
    setIndex = () => {},
    router
}) => {
    const [limitStep, setLimitStep] = useState(maxSteps - (maxSteps % 5));
    const [activeUp, setActiveUp] = useState(0);
    const [key, setKey] = useState();

    useEffect(() => {
        let activeType = true;
        if (activeStep >= activeUp) activeType = true;
        else if (activeStep < activeUp) activeType = false;
        if (
            !(activeStep + 1 == maxSteps) &&
            (activeStep + 1) % (limitStep + 1) == 0
        )
            setLimitStep(limitStep + 5);
        else if ((activeStep + 1) % (limitStep - 5) == 0 && !activeType)
            setLimitStep(limitStep - 5);
        else if (
            activeStep == 0 &&
            limitStep != maxSteps + (5 - (maxSteps % 5))
        ) {
            setLimitStep(5);
        } else if (activeStep == maxSteps - 1 && limitStep != 5) {
            let num = maxSteps + (5 - (maxSteps % 5));
            if (num > maxSteps) num = maxSteps;
            setLimitStep(num);
        }
        setActiveUp(activeStep);
    }, [activeStep]);

    useEffect(() => {
        let isReset = false;
        if (router.query.id && key != router.query.id) {
            setKey(router.query.id);
            isReset = true;
        } else if (router.query.searchText && key != router.query.searchText) {
            setKey(router.query.searchText);
            isReset = true;
        }
        if (isReset) {
            setActiveUp(0);
            setLimitStep(5);
        }
    }, [router.query.id, router.query.searchText]);
    let aryIndex = 5;
    if (maxSteps < 5) aryIndex = maxSteps;
    if (maxSteps < limitStep) {
        aryIndex = 5 + maxSteps - limitStep;
    }
    if (aryIndex < 5) {
        aryIndex = aryIndex - 1;
    }
    const handleIndex = value => {
        setIndex(value);

        // final index select
        if (activeStep != value && maxSteps == value + 1) {
            let num = maxSteps + (5 - (maxSteps % 5));
            setLimitStep(num);
        }
        // first index select
        if (activeStep != 0 && value == 0) {
            setLimitStep(5);
        }
    };
    return (
        <span
            className={classes.steps}
            style={{
                position: "relative",
                top: "-32px"
            }}
        >
            {maxSteps != 1 && 5 < limitStep ? (
                <Step
                    id={"step-frist"}
                    key={"step-frist"}
                    index={0}
                    activeStep={activeStep == 0}
                    onClick={handleIndex}
                ></Step>
            ) : null}
            {5 < limitStep ? " .  .  . " : null}
            {[...new Array(aryIndex)].map((_, index) => {
                let stepIndex;
                if (limitStep > 5) stepIndex = index + limitStep - 5;
                else stepIndex = index;
                return (
                    <Step
                        id={"step-" + index}
                        key={"step-" + index}
                        index={stepIndex}
                        activeStep={activeStep == stepIndex}
                        onClick={handleIndex}
                    ></Step>
                );
            })}
            {!(activeStep + 2 == maxSteps) &&
            !(limitStep >= maxSteps) &&
            (activeStep + 1) % 5 == 0 ? (
                <Step
                    id={"step-add"}
                    key={"step-add"}
                    index={activeStep + 1}
                    activeStep={activeStep == activeStep + 1}
                    onClick={handleIndex}
                ></Step>
            ) : null}
            {maxSteps - 1 > limitStep ? " .  .  . " : null}
            {maxSteps != 1 && (maxSteps > limitStep || maxSteps < limitStep) ? (
                <Step
                    id={"step-final"}
                    key={"step-final"}
                    index={maxSteps - 1}
                    activeStep={activeStep == maxSteps - 1}
                    onClick={handleIndex}
                ></Step>
            ) : null}
        </span>
    );
};
const stepOffset = SEARCH_REQUST_RESULT_LIMIT;
const Layout = props => {
    const classes = useStyles();
    const theme = useTheme();
    const router = useRouter();
    const { cnt_list, children, cur_cnt_list } = props;
    const [activeStep, setActiveStep] = React.useState(0);
    const [curStep, setCurStep] = useState(stepOffset);
    const maxSteps = Math.ceil(cnt_list / stepOffset);
    let child;
    const [key, setKey] = useState();

    const handleNext = () => {
        scroll.scrollToTop({ to: "top", duration: 0 });
        setActiveStep(prevActiveStep => prevActiveStep + 5);
        if ((activeStep + 1) * stepOffset == curStep) {
            props.onNextClick();
            setCurStep(curStep + stepOffset);
        }
    };

    const handleBack = () => {
        scroll.scrollToTop({ to: "top", duration: 0 });
        setActiveStep(prevActiveStep => prevActiveStep - 5);
    };

    const handleIndex = value => {
        setTimeout(() => {
            scroll.scrollToTop({ to: "top", duration: 0 });
        }, 2000);
        setActiveStep(value);
        if (
            (value - activeStep) * stepOffset > 0 &&
            (value + 1) * stepOffset > curStep &&
            cur_cnt_list < cnt_list
        ) {
            props.onNextClick({
                offset: curStep,
                limit: (value - activeStep) * stepOffset
            });
            setCurStep(curStep + (value - activeStep) * stepOffset);
        }
    };

    if (Array.isArray(children)) {
        let start = activeStep * stepOffset;
        let end = (activeStep + 1) * stepOffset;
        if (end > cnt_list) end = cnt_list;
        child = props.children.slice(start, end);
    }
    // reset (target => step index)
    useEffect(() => {
        let isReset = false;
        if (router.query.id && key != router.query.id) {
            setKey(router.query.id);
            isReset = true;
        } else if (router.query.searchText && key != router.query.searchText) {
            setKey(router.query.searchText);
            isReset = true;
        }
        if (isReset) {
            if (key) {
                setActiveStep(0);
                setCurStep(stepOffset);
            } else {
                setCurStep(cur_cnt_list);
            }
        }
    }, [router.query.id, router.query.searchText]);

    return (
        <div id="popup-layout" className={classes.root}>
            <ListContent
                linedisable
                disbutton
                itemProps={{
                    style: {
                        backgroundColor: "rgb(240 240 240)"
                    }
                }}
                listProps={{
                    style: {
                        marginTop: "5px",
                        marginBottom: "5px"
                    }
                }}
            >
                {child || props.children}
            </ListContent>
            <MobileStepper
                className={classes.stepper}
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={
                    <Button
                        className={classes.button}
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        다음
                        {theme.direction === "rtl" ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button
                        className={classes.button}
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                        // color={BASE_COLOR}
                    >
                        {theme.direction === "rtl" ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        이전
                    </Button>
                }
            />
            <Steps
                classes={classes}
                maxSteps={maxSteps}
                activeStep={activeStep}
                setIndex={handleIndex}
                router={router}
            ></Steps>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        cnt_page: Math.ceil(ownProps.cnt_list / stepOffset)
    };
};
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
