import React, { Component } from "react";
import * as constants from "../../contants/constants";
import styled from "styled-components";
import {
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    Divider
} from "@material-ui/core";

import { pTr } from "../../styles/typography";
import Router from "next/router";

//#region Styles
const RootStyle = styled.div`
    height: ${pTr(90)};
    flex-grow: 1;
`;
const CardStyle = styled(Card)`
    && {
        border-radius: 0;
        margin: 0;
        padding: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
`;

const InfoStyle = styled(Typography)`
    && {
        color: rgb(148 148 148);
        width: fit-content;
        font-size: ${pTr(10)};
        letter-spacing: 0;
    }
`;
const TypographyStyle = styled(Typography)`
    && {
        color: white;
        text-align: right;
        font-size: ${pTr(10)};
        letter-spacing: 0;
        line-height: 0;
        font-weight: bold;
    }
`;

const ButtonStyle = styled(Button)`
    && {
        margin: 0;
        padding: 0;
        height: 100%;
        width: fit-content;
    }
`;

const CardContentStyle = styled(CardContent)`
    && {
        color: white;
        background-color: black;
        padding: ${pTr(20)};
        height: ${pTr(90)};
    }
`;
//#endregion

export default class ComponyInfo extends Component {
    handlePushTerms = () => {
        Router.push("/terms");
    };
    handlePushPolicy = () => {
        Router.push("/policy");
    };
    render() {
        return (
            <RootStyle>
                <CardStyle>
                    <CardContentStyle>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                verticalAlign: "center"
                            }}
                        >
                            <InfoStyle
                                style={{
                                    paddingTop: "0.5em"
                                }}
                            >
                                {constants.INFO.FOOTER.COMPANY}
                            </InfoStyle>
                            <div>
                                <ButtonStyle onClick={this.handlePushTerms}>
                                    <TypographyStyle
                                        style={{
                                            marginRight: "-2em"
                                        }}
                                    >
                                        이용약관
                                    </TypographyStyle>
                                </ButtonStyle>
                                <div
                                    style={{
                                        display: "inline-flex",
                                        borderLeft: `1px solid gray`,
                                        height: pTr(10),
                                        WebkitAlignContent: "center",
                                        marginRight: pTr(9),
                                        marginLeft: pTr(3),
                                        verticalAlign: "middle"
                                    }}
                                />
                                <ButtonStyle onClick={this.handlePushPolicy}>
                                    <TypographyStyle>
                                        개인정보처리방침
                                    </TypographyStyle>
                                </ButtonStyle>
                            </div>
                        </div>
                        <InfoStyle>{constants.INFO.FOOTER.ADDRESS}</InfoStyle>
                        <InfoStyle
                            style={{
                                paddingTop: pTr(4),
                                color: "rgb(152 152 152)"
                            }}
                        >
                            {constants.INFO.FOOTER.COPYRIGHT}
                        </InfoStyle>
                    </CardContentStyle>
                </CardStyle>
            </RootStyle>
        );
    }
}
