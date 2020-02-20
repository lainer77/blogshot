import React from "react";
import Router from "next/router";
import { makeStyles } from "@material-ui/styles";

import { Typography, Card, CardActionArea } from "@material-ui/core";

import MapIcon from "../Icon/MapIcon";
import { pTr, BASE_COLOR } from "../../styles/typography";
import { scratch } from "../../contants/utils";
import MedicoBarChart from "../chart/MedicoBarChart";
import BookMarkIcon from "../Icon/BookMarkIcon";
import { numberFormat } from "../../logic/searchValidation";

const useStyles = makeStyles(theme => ({
    root: {
        width: "calc(100% - 20px)",
        margin: `${pTr(5)} ${pTr(10)}`,
        backgroundColor: "white",
        maxWidth: "1024px",
        boxShadow: "0px 2px 4px 0px rgba(0,0,0,0.2)"
    },
    actionArea: {
        width: "100%",
        padding: `${pTr(10)} ${pTr(20)}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start"
    },
    name: {
        fontSize: pTr(20),
        lineHeight: "20px",
        letterSpacing: 0,
        fontWeight: "bold",
        padding: "10px 0"
    },
    department: {
        fontSize: pTr(12),
        width: "90%",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        lineHeight: pTr(20),
        letterSpacing: 0
    },
    button: {
        margin: `${pTr(5)} ${pTr(0)}`,
        minHeight: pTr(24),
        fontSize: pTr(10),
        color: BASE_COLOR,
        padding: 0
    },
    buttontext: {
        fontSize: pTr(14),
        fontStyle: "light",
        lineHeight: pTr(20),
        letterSpacing: "0",
        minHeight: pTr(20),
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden"
    },
    location: {
        marginLeft: pTr(5),
        fontSize: pTr(12),
        lineHeight: pTr(20),
        letterSpacing: 0,
        verticalAlign: "text-bottom",
        display: "inline",
        color: "rgb(125 125 125)"
    },
    item_left: {
        display: "inline-block",
        width: "70%"
    },
    item_right: {
        fontSize: "22px",
        lineHeight: "20px",
        letterSpacing: 0,
        color: BASE_COLOR,
        marginTop: "10px"
    },
    chartContant: {
        padding: "15px 0",
        width: "fit-content"
    },
    bookMark: {
        position: "absolute",
        right: "20px",
        width: "16px",
        height: "20px",
        top: "0px"
    }
}));

function SearchResultItem(props) {
    const classes = useStyles();
    const { data = {} } = props;
    const {
        name_kor,
        score_searchText,
        specialtys,
        current_hospital_name,
        current_hospital_juso_short,
        clinic,
        study_last,
        is_check = false,
        searchText_research
    } = data;

    const chartProps = {
        width: 115,
        height: 20,
        margin: {
            top: 0,
            right: 5,
            left: 5,
            bottom: 0
        }
    };

    let specialty = specialtys;
    if (specialty == "") specialty = "업데이트 예정";

    const handleOnItemClick = e => {
        if (props.is_login) {
            Router.push(
                {
                    pathname: "/" + "doctor",
                    query: {
                        selected_doctor_id: props.data.id,
                        score_searchText: score_searchText
                    }
                },
                undefined,
                { prefetch: true }
            );
        } else {
            if (props.PopupOpen) props.PopupOpen();
        }
    };
    return (
        <Card className={classes.root} style={props.rootProps}>
            <CardActionArea className={classes.actionArea}>
                <div className={classes.item_left} onClick={handleOnItemClick}>
                    <Typography className={classes.name}>
                        {props.is_login ? name_kor : scratch(name_kor)}
                    </Typography>
                    <Typography className={classes.department}>
                        {clinic}
                        {study_last != "" ? " / " + study_last : null}
                    </Typography>
                    <div className={classes.button}>
                        <Typography className={classes.buttontext}>
                            {Array.isArray(specialty)
                                ? specialty.map(x => {
                                      let ret;
                                      ret = `#${x} `;
                                      return ret;
                                  })
                                : ""}
                        </Typography>
                    </div>

                    {props.variunt == "location" ||
                    !searchText_research ? null : (
                        <div className={classes.chartContant}>
                            {searchText_research ? (
                                <MedicoBarChart
                                    data={searchText_research.year_paper}
                                    dispopable={true}
                                    chartProps={chartProps}
                                    barProps={{ barSize: 4 }}
                                ></MedicoBarChart>
                            ) : null}
                        </div>
                    )}

                    {props.variunt == "location" ? null : (
                        <div>
                            <MapIcon />
                            <Typography className={classes.location}>
                                {props.is_login
                                    ? current_hospital_name
                                        ? current_hospital_name + " / "
                                        : null
                                    : "소속병원 확인은 로그인이 필요합니다."}
                                {current_hospital_juso_short}
                            </Typography>
                        </div>
                    )}
                </div>

                <Typography className={classes.item_right}>
                    {(typeof score_searchText === "number" &&
                        numberFormat(score_searchText)) ||
                        "-"}
                </Typography>

                {is_check ? (
                    <BookMarkIcon
                        className={classes.bookMark}
                        is_check={is_check}
                    ></BookMarkIcon>
                ) : null}
            </CardActionArea>
        </Card>
    );
}

export default SearchResultItem;
