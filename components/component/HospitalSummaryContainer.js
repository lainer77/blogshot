import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/styles";

import { Typography } from "@material-ui/core";

import Divider from "../component/DividerMargin";
import TimeIcon from "../Icon/TimeIcon";

import { pTr } from "../../styles/typography";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        flexGrow: 1
    },
    oneline: {
        display: "flex",
        justifyContent: "left",
        alignItems: "top"
    },
    content: { padding: pTr(20) },
    label: {
        fontSize: pTr(12),
        letterSpacing: 0,
        fontWeight: "bold",
        marginBottom: pTr(9)
    },
    children: {
        fontSize: pTr(10),
        letterSpacing: 0,
        width: pTr(70),
        backgroundColor: "rgb(242 246 251)",
        paddingBottom: pTr(7),
        paddingTop: pTr(7),
        marginTop: "-1px",
        border: `0.5px solid rgb(211 211 211)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    data: {
        fontSize: pTr(10),
        letterSpacing: 0,
        padding: pTr(7),
        paddingLeft: pTr(10),
        paddingRight: pTr(10),
        marginTop: "-1px", // dorber cross remove
        marginLeft: "-1px", // dorber cross remove
        border: `0.5px solid rgb(211 211 211)`,
        width: "100%"
    },
    text1: {
        fontSize: pTr(10),
        letterSpacing: 0
    },
    time_root: {
        border: `1px solid rgb(91 91 91)`, // dorber cross remove
        marginBottom: pTr(10)
    },
    time_label: {
        backgroundColor: "rgb(91 91 91)",
        color: "white",
        fontSize: pTr(10),
        letterSpacing: 0,
        fontWeight: "bold",
        display: "flex",
        alignItems: "center"
    },
    time_content: {
        padding: `${pTr(10)} ${pTr(20)}`
    },
    text2: {
        fontSize: pTr(10),
        letterSpacing: 0,
        backgroundColor: "rgb(224 224 224)",
        borderRadius: pTr(10.5),
        minWidth: pTr(57),
        height: pTr(21),
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    text3: {
        fontSize: pTr(10),
        letterSpacing: 0,
        backgroundColor: "rgb(224 224 224)",
        borderRadius: pTr(10.5),
        minWidth: pTr(93),
        height: pTr(21),
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    text4: {
        fontSize: pTr(14),
        letterSpacing: 0
    },
    time_text: {
        fontSize: pTr(16),
        letterSpacing: 0,
        marginLeft: pTr(10),
        lineHeight: pTr(20),
        "& span": {
            color: "rgb(147 152 162)",
            fontSize: pTr(10),
            letterSpacing: 0
        },
        "& li": {
            color: "rgb(255 116 0)",
            lineHeight: pTr(32),
            fontSize: pTr(10),
            letterSpacing: 0
        }
    }
}));
const InfoItem = props => {
    const classes = useStyles();
    return (
        <div className={classes.oneline}>
            <Typography className={classes.children} style={props.leftStyle}>
                {props.children}
            </Typography>
            <Typography className={classes.data}>
                {props.data ? props.data : "-"}
            </Typography>
        </div>
    );
};
const TimeItem = props => {
    const classes = useStyles();
    return (
        <div className={classes.time_root}>
            <Typography className={classes.time_label}>
                <TimeIcon
                    style={{
                        width: pTr(14),
                        height: pTr(14),
                        margin: `${pTr(10)} ${pTr(6)} ${pTr(10)} ${pTr(10)}`
                    }}
                />
                {props.label}
            </Typography>
            <div className={classes.time_content}>{props.children}</div>
        </div>
    );
};
const Info = props => {
    const classes = useStyles();
    const { info } = props;
    return (
        <div className={classes.content}>
            <Typography className={classes.label}>기본 정보</Typography>
            <InfoItem data={info.medical_type}>분류</InfoItem>
            <InfoItem data={info.juso}>주소</InfoItem>
            <InfoItem data={info.phone_num}>전화</InfoItem>
            <InfoItem data={info.homepage_url}>홈페이지</InfoItem>
            <InfoItem data={info.cnt_parking_seats}>주차가능대수</InfoItem>
            <InfoItem data={info.parkingCondition}>주차안내</InfoItem>
        </div>
    );
};
const Departments = props => {
    const classes = useStyles();
    const { info } = props;
    let keys = Object.keys(info);
    return (
        <div className={classes.content}>
            <Typography className={classes.label}>
                진료과목 및 전문의수
            </Typography>
            {keys.map((x, i) => {
                return (
                    <Typography className={classes.text1} key={i + "-list"}>
                        <li>{`${info[i].name}(${info[i].cnt})`}</li>
                    </Typography>
                );
            })}
        </div>
    );
};
const SpecialTreatments = props => {
    const classes = useStyles();
    const { info } = props;
    let keys = Object.keys(info);
    return (
        <div className={classes.content}>
            <Typography className={classes.label}>특수진료 정보</Typography>
            {keys.map((x, i) => {
                return (
                    <Typography className={classes.text1} key={i + "-list"}>
                        <li>{info[i]}</li>
                    </Typography>
                );
            })}
        </div>
    );
};
const OpeningHour = props => {
    const classes = useStyles();
    const { info } = props;
    let workCnt = 0;
    info.working.forEach((element, index) => {
        if (index != 0 && element.value != info.working[index - 1]) workCnt++;
    });
    let weekdayLaunch = info.launch.find(x => x.name == "평일");
    let weekendLaunch = info.launch.find(x => x.name == "주말");
    let weekday = info.working.find(x => x.name == "월요일");
    let weekdayObject = weekday.value;
    let weekdayReception;
    let weekdayReceptionCut;
    let weekdayReceptionArray;
    let weekendReception;
    let weekendReceptionCut;
    let UIS = {
        WorkCnt: null,
        Weekday: null,
        WeekdayLaunch: null,
        WeekendLaunch: null,
        WeekdayReception: null,
        WeekendReception: null
    };
    weekdayReception = info.reception.find(x => x.name == "평일");
    if (weekdayReception) {
        weekdayReceptionCut = weekdayReception.value
            .replace("오전", "AM")
            .replace("오후", "PM");
        weekdayReceptionArray = weekdayReceptionCut.split(" ");
    }
    weekendReception = info.reception.find(x => x.name == "토요일");
    if (weekendReception) {
        weekendReceptionCut = weekendReception.value
            .replace("오전", "AM")
            .replace("오후", "PM");
    }

    UIS.WeekdayLaunch = weekdayLaunch ? (
        <Typography className={classes.time_text}>
            <span>
                {`${weekdayLaunch.name} 점심시간 ${weekdayLaunch.value}`}
            </span>
        </Typography>
    ) : null;

    UIS.WeekendLaunch = weekendLaunch ? (
        <Typography className={classes.time_text}>
            <span>
                {`${weekendLaunch.name} 점심시간 ${weekendLaunch.value}`}
            </span>
        </Typography>
    ) : null;

    UIS.WorkCnt =
        workCnt > 3 ? (
            <div className={classes.oneline}>
                <Typography className={classes.text2}>평일</Typography>
                <div>
                    <Typography className={classes.time_text}>
                        <span> AM </span>
                        {`${weekdayObject.time_start} ~ `}
                        <span> PM </span>
                        {weekdayObject.time_end}
                    </Typography>
                    {UIS.WeekdayLaunch}
                </div>
            </div>
        ) : null;

    UIS.WeekdayReception = weekdayReceptionCut ? (
        <div className={classes.oneline}>
            <Typography className={classes.text2}>평일 접수</Typography>
            <div>
                <Typography className={classes.time_text}>
                    {/* <span> AM </span>
                            {`${weekdayReceptionArray[1][0]} ~ `}
                            <span> PM </span>
                            {weekdayReceptionArray[4][0]} */}
                    {weekdayReceptionCut}
                </Typography>
            </div>
        </div>
    ) : null;
    UIS.WeekendReception = weekendReceptionCut ? (
        <div className={classes.oneline}>
            <Typography className={classes.text2}>토요일 접수</Typography>
            <div>
                <Typography className={classes.time_text}>
                    {/* <span> AM </span>09:00 ~ <span> PM </span>14:30 */}
                    {weekendReceptionCut}
                </Typography>
            </div>
        </div>
    ) : null;

    return (
        <div className={classes.content}>
            <Typography className={classes.label}>진료 시간</Typography>
            <TimeItem label="진료시간안내">
                <div style={{ padding: pTr(10) }} />
                {UIS.WorkCnt}
                {info.working.map((x, i) => {
                    let timeValue = x.value;
                    if (
                        // true
                        x.value.time_start !== weekday.value.time_start ||
                        x.value.time_end !== weekday.value.time_end
                    )
                        return (
                            <div key={`weekday-time-${i}`}>
                                <div
                                    style={{
                                        padding: pTr(5)
                                    }}
                                />
                                <div className={classes.oneline}>
                                    <Typography className={classes.text2}>
                                        {x.name}
                                    </Typography>
                                    <div>
                                        <Typography
                                            className={classes.time_text}
                                        >
                                            <span> AM </span>
                                            {`${timeValue.time_start} ~ `}
                                            <span> PM </span>
                                            {timeValue.time_end}
                                        </Typography>
                                        {UIS.WeekendLaunch}
                                    </div>
                                </div>
                            </div>
                        );
                })}
                <Typography
                    className={classes.time_text}
                    style={{ marginLeft: pTr(70) }}
                >
                    <li>일요일 공휴일, 국경일은 휴뮤입니다.</li>
                </Typography>
            </TimeItem>
            {weekdayReceptionCut || weekendReceptionCut ? (
                <TimeItem label="진료접수시간">
                    <div style={{ padding: pTr(2.5) }} />

                    {UIS.WeekdayReception}

                    {weekdayReceptionCut ? (
                        <div style={{ padding: pTr(5) }} />
                    ) : null}

                    {UIS.WeekendReception}

                    <div style={{ padding: pTr(2.5) }} />
                </TimeItem>
            ) : null}
        </div>
    );
};
const Emergency = props => {
    const classes = useStyles();
    const { info } = props;
    const cution1 = <div style={{ padding: pTr(5) }} />;
    const cution2 = <div style={{ padding: pTr(4) }} />;
    const ItemEmergency = (left, right) => (
        <div className={classes.oneline}>
            <Typography className={classes.text3}>{left}</Typography>
            {cution1}
            <Typography className={classes.text4}>{right}</Typography>
        </div>
    );
    return (
        <div className={classes.content}>
            <Typography className={classes.label}>응급실 정보</Typography>
            <TimeItem label="주간/야간응급실정보">
                {info.emergency_dayTime_tel.map((x, i) => (
                    <div key={`emergency-dayTime-tel-${i}`}>
                        {ItemEmergency(`주간응급실전화${i + 1}`, x)}
                        {cution2}
                    </div>
                ))}
                {info.emergency_nightTime_tel.map((x, i) => (
                    <div key={`emergency-nightTime-tel-${i}`}>
                        {ItemEmergency(`야간응급실전화${i + 1}`, x)}
                        {info.emergency_nightTime_tel.length - 1 == i
                            ? null
                            : cution2}
                    </div>
                ))}
            </TimeItem>
        </div>
    );
};
const Rooms = props => {
    const classes = useStyles();
    const { info } = props;
    let keys = Object.keys(info);
    return (
        <div className={classes.content}>
            <Typography className={classes.label}>시설 정보</Typography>
            {keys.map((x, i) => {
                return (
                    <InfoItem
                        key={i + "item"}
                        leftStyle={{
                            width: pTr(110)
                        }}
                        data={`${info[i].cnt}`}
                    >
                        {info[i].name}
                    </InfoItem>
                );
            })}
        </div>
    );
};
const MedicalDevices = props => {
    const classes = useStyles();
    const { info } = props;
    let keys = Object.keys(info);
    return (
        <div className={classes.content}>
            <Typography className={classes.label}>의료장비 보유현황</Typography>
            {keys.map((x, i) => {
                return (
                    <Typography className={classes.text1} key={i + "-list"}>
                        <li>{`${info[i].name}(${info[i].cnt})`}</li>
                    </Typography>
                );
            })}
        </div>
    );
};
const NursingGrades = props => {
    const classes = useStyles();
    const { info } = props;
    let keys = Object.keys(info);
    return (
        <div className={classes.content}>
            <Typography className={classes.label}>
                간호등급 정보(유형별)
            </Typography>
            {keys.map((x, i) => {
                return (
                    <InfoItem
                        key={i + "item"}
                        leftStyle={{
                            width: pTr(110)
                        }}
                        data={info[i].value + `등급(${info[i].base_year})`}
                    >
                        {info[i].name}
                    </InfoItem>
                );
            })}
        </div>
    );
};
const SpecialHospitals = props => {
    const classes = useStyles();
    const { info } = props;
    let keys = Object.keys(info);
    return (
        <div className={classes.content}>
            <Typography className={classes.label}>전분병원지정분야</Typography>
            {keys.map((x, i) => {
                return (
                    <Typography className={classes.text1} key={i + "-list"}>
                        <li>{`${info[i].name}(${info[i].cnt})`}</li>
                    </Typography>
                );
            })}
        </div>
    );
};
const YakjeGrades = props => {
    const classes = useStyles();
    const { info } = props;
    let keys = Object.keys(info);
    return (
        <div className={classes.content}>
            <Typography className={classes.label}>약제평가정보</Typography>
            {keys.map((x, i) => {
                return (
                    <InfoItem
                        key={i + "item"}
                        leftStyle={{
                            width: pTr(150)
                        }}
                        data={info[i].value + `등급(${info[i].base_year})`}
                    >
                        {info[i].name}
                    </InfoItem>
                );
            })}
        </div>
    );
};

function SummaryContainer(props) {
    const classes = useStyles();
    const { data } = props;
    let info;
    let departments_and_doctors_cnt;
    let special_treatments;
    let opening_hour;
    let emergency;
    let cnt_rooms;
    let cnt_medical_devices;
    let nursing_grades;
    let special_hospitals;
    let yakje_grades;
    if (data) {
        info = {
            medical_type: data.medical_type,
            juso: data.juso,
            phone_num: data.phone_num,
            cnt_parking_seats: data.cnt_parking_seats,
            parkingCondition: data.parkingCondition,
            homepage_url: data.homepage_url
        };
        departments_and_doctors_cnt = data.departments_and_doctors_cnt;
        special_treatments = data.special_treatments;
        opening_hour = data.opening_hour;
        emergency = data.emergency;
        cnt_rooms = data.cnt_rooms;
        cnt_medical_devices = data.cnt_medical_devices;
        nursing_grades = data.nursing_grades;
        special_hospitals = data.special_hospitals;
        yakje_grades = data.yakje_grades;
    }
    const verification = (vate, Vate) => {
        if (!vate) return null;
        if (vate.length <= 0) return null;
        if (vate.launch && vate.reception && vate.working)
            if (
                vate.launch.length <= 0 &&
                vate.reception.length <= 0 &&
                vate.working.length <= 0
            )
                return null;
        if (vate.emergency_dayTime_tel && vate.emergency_nightTime_tel)
            if (
                vate.emergency_dayTime_tel.length <= 0 &&
                vate.emergency_nightTime_tel.length <= 0
            )
                return null;

        return (
            <div>
                <Vate info={vate} />
                <Divider />
            </div>
        );
    };
    return (
        <div className={classes.root}>
            {verification(info, Info)}
            {verification(departments_and_doctors_cnt, Departments)}
            {verification(special_treatments, SpecialTreatments)}
            {verification(opening_hour, OpeningHour)}
            {verification(emergency, Emergency)}
            {verification(cnt_rooms, Rooms)}
            {verification(cnt_medical_devices, MedicalDevices)}
            {verification(nursing_grades, NursingGrades)}
            {verification(special_hospitals, SpecialHospitals)}
            {verification(yakje_grades, YakjeGrades)}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        data: state.hospitalinfo.data.info
    };
};

export default connect(mapStateToProps)(SummaryContainer);
