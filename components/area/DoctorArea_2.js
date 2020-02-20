import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import Router from "next/router";

import { pTr, BASE_COLOR } from "../../styles/typography";
import { INFO } from "../../contants/constants";
import { TextLoder } from "../../contants/utils";

import MedicoBarChart from "../chart/MedicoBarChart";
import MedicoPopup from "../popup/MedicoPopup";
import { numberFormat } from "../../logic/searchValidation";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        backgroundColor: "rgb(246 246 246)",
        borderTop: `0.2px solid lightgray`,
        padding: pTr(5),
        textAlign: "center"
    },
    context1: {
        margin: pTr(5),
        display: "flex",
        justifyContent: "space-evenly"
    },
    context2: {
        padding: "28px",
        width: "100%"
    },
    text1: {
        display: "inline-block",
        padding: `${pTr(0)} ${pTr(20)}`,
        color: BASE_COLOR
    },
    text2: {
        display: "inline-block",
        fontSize: "34px",
        lineHeight: "24px",
        letterSpacing: 0,
        fontWeight: "bold"
    },
    text3: {
        fontSize: "12px",
        lineHeight: "24px",
        letterSpacing: 0,
        fontWeight: "bold"
    },
    text4: {
        fontSize: "14px",
        lineHeight: "24px",
        letterSpacing: 0,
        color: "rgb(22 147 255)"
    },
    button1: {
        backgroundColor: "rgb(255 255 255)",
        color: "rgb(41 41 41)",
        margin: pTr(5),
        fontSize: pTr(12),
        letterSpacing: 0,
        lineHeight: pTr(24),
        width: pTr(158),
        border: "1px solid rgb(41 41 41)"
    },
    button2: {
        backgroundColor: BASE_COLOR,
        color: "rgb(255 255 255)",
        margin: pTr(5),
        fontSize: pTr(12),
        letterSpacing: 0,
        lineHeight: pTr(24),
        width: pTr(158),
        "&:hover": {
            backgroundColor: BASE_COLOR,
            color: "rgb(255 255 255)"
        }
    }
});

const pathname = "hospital";

export default function DoctorArea2(props) {
    const classes = useStyles();
    const {
        score_medicofact,
        score_searchText,
        current_hospital_name,
        current_hospital_id,
        homepage_url,
        searchText,
        info,
        searchText_research
    } = props.data;
    const [is_searchText, setIs_searchText] = useState(false);
    const [year_paper, setYear_paper] = useState();
    useEffect(() => {
        if (info && info.research && info.research.year_paper) {
            setYear_paper(info.research.year_paper);
        }
    }, [info]);
    useEffect(() => {
        if (searchText) {
            var date = new Date();

            date.setTime(date.getTime() + 1 * 60 * 60 * 24 * 1000);

            let cookie = `searchText=${encodeURIComponent(searchText) ||
                ""}; expires=${date.toUTCString()};`;

            document.cookie = cookie;
            let searchType = sessionStorage.getItem("searchType");
            if (searchType == "질병명") setIs_searchText(true);
            else setIs_searchText(false);
        }
    }, []);

    const [open, setOpen] = useState(false);
    const mobalOpen = () => {
        setOpen(true);
    };
    const mobalClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            {(score_searchText || score_medicofact) && (
                <div className={classes.context2} onClick={mobalOpen}>
                    {is_searchText ? (
                        <div className={classes.text1}>
                            <Typography className={classes.text2}>
                                {numberFormat(parseFloat(score_searchText))}
                            </Typography>
                            <Typography className={classes.text3}>
                                {INFO.DOCTOR.FACT.feat.title}
                            </Typography>
                        </div>
                    ) : (
                        <div className={classes.text1}>
                            <Typography className={classes.text2}>
                                {numberFormat(parseFloat(score_medicofact))}
                            </Typography>
                            <Typography className={classes.text3}>
                                {INFO.DOCTOR.FACT.medico.title}
                            </Typography>
                        </div>
                    )}
                </div>
            )}
            <MedicoPopup
                open={open}
                onClose={mobalClose}
                title={
                    is_searchText
                        ? INFO.DOCTOR.FACT.feat.title
                        : INFO.DOCTOR.FACT.medico.title
                }
            >
                {TextLoder(
                    is_searchText
                        ? INFO.DOCTOR.FACT.feat.content
                        : INFO.DOCTOR.FACT.medico.content
                )}
            </MedicoPopup>
            {is_searchText && searchText ? (
                <Typography
                    className={classes.text4}
                >{`#${searchText}`}</Typography>
            ) : null}

            <div className={classes.text2}>
                {is_searchText ? (
                    searchText_research ? (
                        <MedicoBarChart
                            data={searchText_research.year_paper}
                        ></MedicoBarChart>
                    ) : null
                ) : year_paper ? (
                    <MedicoBarChart data={year_paper}></MedicoBarChart>
                ) : null}
            </div>
            {(score_searchText || score_medicofact) && (
                <div style={{ padding: "15px" }}></div>
            )}
            {props.is_login ? (
                <div className={classes.context1}>
                    <Button
                        className={classes.button1}
                        variant="outlined"
                        onClick={() => {
                            Router.push({
                                pathname: "/" + pathname,
                                query: {
                                    selected_hospital_id: current_hospital_id
                                }
                            });
                        }}
                    >
                        소속 병원정보 보기
                    </Button>
                    <Button
                        className={classes.button2}
                        href={homepage_url}
                        variant="outlined"
                    >
                        진료예약
                    </Button>
                </div>
            ) : null}
        </div>
    );
}
