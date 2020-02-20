import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";

import Layout from "../layouts/PopupLayout";
import styled from "styled-components";
import theme from "../../theme";

import { pTr, BASE_COLOR } from "../../styles/typography";
import HeartIcon from "../Icon/HeartIcon";

const useStyles = makeStyles(theme => ({
    root: {}
}));
function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        width: pTr(335),
        borderRadius: pTr(6)
    };
}

//#region
const Header = styled.div`
    && {
        height: ${pTr(40)};
        background-color: ${BASE_COLOR};
        border-top-right-radius: ${pTr(6)};
        border-top-left-radius: ${pTr(6)};
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
        padding: ${pTr(20)};
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
const Title = styled(Typography)`
    & {
        font-size: ${pTr(18)};
        line-height: ${pTr(24)};
        letter-spacing: ${0};
        & span {
            font-weight: bold;
        }
    }
`;
const HospitalName = styled(Typography)`
    & {
        font-size: ${pTr(14)};
        line-height: ${pTr(18)};
        letter-spacing: ${0};
        margin: 0 auto;
        word-wrap: break-word;
        margin-top: ${pTr(8)};
        & span {
            font-weight: bold;
        }
    }
`;
const HeartBtn = styled(Button)`
    && {
        background-color: ${props =>
            props.selected == props.id ? "black" : "white"};
        font-size: ${pTr(20)};
        letter-spacing: 0;
        color: ${props => (props.selected == props.id ? "white" : "black")};
        margin: 0;
        width: 100%;
        & span {
            display: flex;
            align-items: center;
        }
        padding: ${props => props.padding};
    }
`;
const Label = styled(Typography)`
    && {
        font-size: ${pTr(14)};
        line-height: ${pTr(18)};
        letter-spacing: ${0};
        margin: ${pTr(12)} 0;
        font-weight: bold;
        & span {
            font-weight: normal;
            font-size: ${pTr(12)};
        }
    }
`;
const CancelBtn = styled(Button)`
    && {
        width: 100%;
        color: white;
        background-color: rgb(149 150 152);
        margin-top: ${pTr(20)};
        font-size: ${pTr(14)};
        line-height: ${pTr(24)};
        letter-spacing: 0;
    }
`;
const ReviewSendBtn = styled(Button)`
    && {
        width: 100%;
        color: white;
        background-color: black;
        margin-top: ${pTr(20)};
        font-size: ${pTr(14)};
        line-height: ${pTr(24)};
        letter-spacing: 0;
    }
`;
//#endregion
const HIcon = styled(props => (
    <div
        style={{
            marginRight: pTr(10)
        }}
        {...props}
    >
        <HeartIcon selected={props.selected} />
    </div>
))`
    width: 30px;
    height: 26px;
    & img {
        width: 30px;
        height: 26px;
    }
`;

const ReviewButton = props => {
    const [selected, setSelected] = useState(props.selected);
    useEffect(() => {
        if (props.is_nocancel) {
            setSelected(props.selected || "posi");
            props.setSelection(props.selected || "posi");
        }
    }, [props.is_nocancel]);
    const onSelect = e => {
        if (props.is_nocancel) {
            if (selected) {
                setSelected(e.currentTarget.id);
                props.setSelection(props.id, e.currentTarget.id);
            }
        } else {
            if (selected == "--" || selected != e.currentTarget.id) {
                setSelected(e.currentTarget.id);
                props.setSelection(props.id, e.currentTarget.id);
            } else {
                setSelected("--");
                props.setSelection(props.id, "--");
            }
        }
    };
    const rootStyle = { display: "flex", justifyContent: "center" };
    return (
        <div style={rootStyle}>
            <HeartBtn
                id="posi"
                variant="outlined"
                selected={selected}
                onClick={onSelect}
                padding={props.padding}
            >
                <HIcon selected={true} />
                긍정적
            </HeartBtn>
            <div style={{ padding: "5px" }} />
            <HeartBtn
                id="negu"
                variant="outlined"
                selected={selected}
                onClick={onSelect}
                padding={props.padding}
            >
                <HIcon selected={false} />
                부정적
            </HeartBtn>
        </div>
    );
};

const ReviewPopup = props => {
    const [selections, setSelections] = useState(
        props.selections,
        props.setSelections
    );
    const setSelection = (id, state) => {
        setSelections({ ...selections, [id]: state });
    };
    const Submit = () => {
        props.onSelections(selections);
    };
    return (
        <PaperStyle style={getModalStyle()}>
            <Header>
                <Typography>리뷰하기</Typography>
            </Header>
            <Body>
                <Title>
                    <span>이 병원에서의 진료경험, 어떠셨나요?</span>
                </Title>
                <HospitalName>
                    <span>{props.data ? props.data.name : ""}</span>
                    <br />
                    {props.data ? props.data.juso : ""}
                </HospitalName>
                <Label>종합</Label>
                <ReviewButton
                    id="score_overall_txt"
                    padding="10px 15px"
                    selected={selections.score_overall_txt}
                    setSelection={setSelection}
                    is_nocancel={true}
                ></ReviewButton>
                <Label>
                    상세평가&nbsp;&nbsp;
                    <span>한 한목 이상 평가해주세요. (탭에서 선택/해제)</span>
                </Label>
                <Label>
                    <span>직원들이 친절함</span>
                </Label>
                <ReviewButton
                    id="score_kindJikwon_txt"
                    padding="4px 15px"
                    selected={selections.score_kindJikwon_txt}
                    setSelection={setSelection}
                ></ReviewButton>
                <Label>
                    <span>정확한 일처리</span>
                </Label>
                <ReviewButton
                    id="score_goodjob_txt"
                    selected={selections.score_goodjob_txt}
                    setSelection={setSelection}
                ></ReviewButton>
                <Label>
                    <span>시설의 청결함</span>
                </Label>
                <ReviewButton
                    id="score_cleanplace_txt"
                    selected={selections.score_cleanplace_txt}
                    setSelection={setSelection}
                ></ReviewButton>
                <div style={{ marginTop: pTr(15), display: "flex" }}>
                    <CancelBtn onClick={props.onClose}>취소</CancelBtn>
                    <div style={{ padding: "5px" }}></div>
                    <ReviewSendBtn onClick={Submit}>
                        {props.changeText || "수정"}
                    </ReviewSendBtn>
                </div>
            </Body>
        </PaperStyle>
    );
};

export default function Index(props) {
    const { open, onClose, ...others } = props;
    return (
        <Layout
            open={props.open}
            // open={true}
            handleClose={props.onClose}
            content={ReviewPopup}
            {...others}
        />
    );
}
