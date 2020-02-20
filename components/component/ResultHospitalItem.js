import React, { useEffect } from "react";
import Router from "next/router";
import { makeStyles } from "@material-ui/styles";
import {
    Typography,
    Card,
    CircularProgress,
    CardActionArea
} from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import MapIcon from "../Icon/MapIcon";
import ExtentionPanel from "../panel/HospitalExtentionPanel";
import ListContent from "../list/ListContent";
import InDoctorItem from "./InDoctorItem";
import { scratch2 } from "../../contants/utils";
import { pTr, BASE_COLOR } from "../../styles/typography";

import { extention_doctor_list } from "../../reducers/hospitalinfo";
import { numberFormat } from "../../logic/searchValidation";

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: "1024px",
        flexGrow: 1,
        width: "100%",
        textAlign: "center"
    },
    link: {
        color: "rgb(22 147 255)",
        padding: `${pTr(15)} 0`,
        textAlign: "center",
        textDecoration: "underline",
        fontSize: "14px",
        letterSpacing: 0,
        lineHeight: "24px"
    },
    card: {
        maxWidth: "1024px",
        margin: "5px 10px",
        width: "calc(100%-20px)",
        boxShadow: "0px 2px 4px 0px rgba(0,0,0,0.2)"
    },
    actionArea: {
        backgroundColor: "wihte"
    },
    grow: {
        flexGrow: 1
    },
    button: {
        fontSize: pTr(14),
        padding: 0,
        textAlign: "left",
        minHeight: pTr(20),
        height: pTr(20),
        lineHeight: pTr(20),
        letterSpacing: "0",
        "& p": {
            fontSize: pTr(14),
            lineHeight: pTr(20),
            letterSpacing: "0"
        }
    },
    address: {
        display: "inline",
        marginLeft: pTr(5),
        fontSize: pTr(12),
        lineHeight: pTr(20),
        letterSpacing: 0,
        verticalAlign: "text-bottom",
        color: "rgb(125 133 149)",
        width: "50%"
    },
    extanded: {
        marginTop: pTr(3)
    },
    display: {
        textAlign: "left"
    },
    context: {
        marginTop: pTr(20)
    },
    heading: {
        marginLeft: pTr(20),
        fontSize: pTr(10),
        lineHeight: pTr(20),
        letterSpacing: 0,
        paddingBottom: "5px",
        textAlign: "left",
        "& span": {
            fontWeight: "bold"
        }
    },
    content: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between"
    }
}));

const SearchResultItem = props => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const { name, juso, id } = props.data;
    const [expandedDoctorData, setExpandedDoctorData] = React.useState([]);
    useEffect(() => {
        if (
            props.extend_doctor_list.length > 0 &&
            id === props.extend_doctor_list[0].current_hospital_id
        )
            setExpandedDoctorData(props.extend_doctor_list);
        else {
            setExpanded(false);
            // setExpandedDoctorData([]);
        }
    }, [props.extend_doctor_list]);
    const keys = Object.keys(expandedDoctorData);
    const handlePageMove = () => {
        if (props.is_login)
            Router.push({
                pathname: "/" + "hospital",
                query: {
                    selected_hospital_id: id
                }
            });
        else {
            if (props.PopupOpen) props.PopupOpen();
        }
    };
    const setExpandedEvent = e => {
        setExpanded(e);
        if (
            e &&
            (expandedDoctorData.length <= 0 ||
                id !== expandedDoctorData[0].current_hospital_id)
        ) {
            setExpandedDoctorData([]);
            props.extention_doctor_list(id);
        }
    };
    const setFullSearch = e => {
        if (props.is_login)
            Router.push({
                pathname: "/" + "search",
                query: { hospital_id: id, name: name },
                as: "/search/in_hopital"
            });
        else {
            if (props.PopupOpen) props.PopupOpen();
        }
    };
    const resultDoctorItemStyle = {
        // height: pTr(92),
        // width: getWindow().innerWidth,
        width: "100%",
        margin: 0,
        // paddingTop: `${pTr(10)} ${pTr(0)}`,
        backgroundColor: "rgb(242 246 251)"
    };
    const EPLeftContent = (
        <ListContent limit={5}>
            {keys.length > 0 ? (
                keys.map((x, i) => {
                    return (
                        <InDoctorItem
                            key={i + "chart"}
                            rootProps={resultDoctorItemStyle}
                            variunt="location"
                            data={expandedDoctorData[x]}
                            innerRadius={22}
                            chartName={"blue2"}
                            is_login={props.is_login}
                            PopupOpen={props.PopupOpen}
                        />
                    );
                })
            ) : (
                <CircularProgress></CircularProgress>
            )}
        </ListContent>
    );
    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardActionArea className={classes.actionArea}>
                    <div
                        style={{
                            padding: `${pTr(20)} ${pTr(20)} ${pTr(0)} ${pTr(
                                20
                            )}`
                        }}
                    >
                        <div className={classes.display}>
                            <div
                                className={classes.content}
                                onClick={handlePageMove}
                            >
                                <div className={classes.button}>
                                    <Typography
                                        style={{
                                            fontSize: "16px",
                                            letterSpacing: 0,
                                            lineHeight: "20px",
                                            fontWeight: "bold"
                                        }}
                                    >
                                        {props.is_login ? name : scratch2(name)}
                                    </Typography>
                                </div>
                                <Typography
                                    style={{
                                        fontSize: "22px",
                                        lineHeight: "20px",
                                        letterSpacing: 0,
                                        color: BASE_COLOR
                                    }}
                                >
                                    {(typeof props.data.score_hospital ===
                                        "number" &&
                                        numberFormat(
                                            props.data.score_hospital
                                        )) ||
                                        "-"}
                                </Typography>
                            </div>
                            <div className={classes.context}>
                                {props.is_login ? <MapIcon /> : null}
                                <Typography className={classes.address}>
                                    {props.is_login
                                        ? juso
                                        : "병원명과 주소 확인은 로그인이 필요합니다."}
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div className={classes.extanded}>
                        {props.data.cnt_hospital_doctors > 0 ? (
                            <ExtentionPanel
                                pannelName={name}
                                expanded={expanded}
                                setLimitFull={setFullSearch}
                                setExpanded={setExpandedEvent}
                                leftContent={EPLeftContent}
                            >
                                <Typography className={classes.heading}>
                                    메디코스코프 등록 의사&nbsp;
                                    <span>
                                        {props.data.cnt_hospital_doctors}
                                    </span>
                                    명
                                </Typography>
                            </ExtentionPanel>
                        ) : (
                            <Typography className={classes.heading}>
                                메디코스코프 등록 의사&nbsp;
                                <span>{props.data.cnt_hospital_doctors}</span>명
                            </Typography>
                        )}
                    </div>
                </CardActionArea>
            </Card>
            {expanded ? (
                <Typography className={classes.link} onClick={setFullSearch}>
                    모두 보기
                </Typography>
            ) : null}
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        extend_doctor_list: state.hospitalinfo.extend_doctor_list,
        extended_hospital_id: state.hospitalinfo.extended_hospital_id
    };
};
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            extention_doctor_list
        },
        dispatch
    );

export default React.memo(
    connect(mapStateToProps, mapDispatchToProps)(SearchResultItem)
);
