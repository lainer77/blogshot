import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import DoubleTab from "../tab/DoubleTab";
import ResultDoctorItem from "../component/ResultDoctorItem";
import ResultHospitalItem from "../component/ResultHospitalItem";
import PageLayout from "../layouts/PageLayout";

import {
    set_selected_tab,
    search_more_requset
} from "../../reducers/searchinfo";
import { more_search_doctor_list } from "../../reducers/hospitalinfo";
import { pTr } from "../../styles/typography";
import { numberFormat } from "../../logic/searchValidation";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: "100%",
        padding: 0,
        textAlign: "center",
        backgroundColor: "rgb(243 243 243)"
    },
    progress: {
        margin: theme.spacing(2)
    },
    more: {
        padding: `${pTr(10)} ${pTr(38)} ${pTr(20)} ${pTr(38)}`,
        backgroundColor: "rgb(255 255 255)"
    },
    more_btn: {
        fontSize: pTr(12),
        lineHeight: pTr(24),
        letterSpacing: 0
    }
}));

const ContentA = React.memo(props => {
    const {
        is_login,
        PopupOpen,
        chartAStyle,
        search_more_requset,
        cnt_doctor
    } = props;
    let list_doctor = props.list_doctor;
    if (props.favorite_doctors[0] && props.favorite_doctors.length > 0)
        list_doctor.forEach((item, index) => {
            if (props.favorite_doctors.find(x => x.id === item.id)) {
                list_doctor[index].is_check = true;
            }
        });
    const keys = Object.keys(list_doctor);
    return (
        <>
            <PageLayout
                cnt_list={cnt_doctor}
                cur_cnt_list={list_doctor.length}
                onNextClick={param => search_more_requset(param)}
            >
                {keys.map((x, i) => {
                    return (
                        <ResultDoctorItem
                            key={i + "chart"}
                            data={list_doctor[x]}
                            chartStyle={chartAStyle}
                            is_login={is_login}
                            PopupOpen={PopupOpen}
                        />
                    );
                })}
            </PageLayout>
        </>
    );
});
const ContentB = props => {
    const {
        list_hospital,
        is_login,
        PopupOpen,
        cnt_hospital,
        search_more_requset
    } = props;
    if (props.list_hospital) {
        const keys = Object.keys(list_hospital);
        return (
            <>
                <PageLayout
                    cnt_list={cnt_hospital}
                    cur_cnt_list={list_hospital.length}
                    onNextClick={param => search_more_requset(param)}
                >
                    {keys.map((x, i) => {
                        return (
                            <ResultHospitalItem
                                key={i + "chart"}
                                data={list_hospital[x]}
                                is_login={is_login}
                                PopupOpen={PopupOpen}
                            />
                        );
                    })}
                </PageLayout>
            </>
        );
    } else return null;
};
function SearchArea2(props) {
    const classes = useStyles();
    const keys = Object.keys(props.list_doctor);
    useEffect(() => {
        if (props.list_doctor && keys && keys.length <= 0) {
            props.set_selected_tab("hospital");
        } else if (props.list_hospital.length <= 0) {
            props.set_selected_tab("doctor");
        }
    }, [props.list_doctor, props.list_hospital]);
    const chartAStyle = {
        height: 82,
        width: 82,
        marginTop: pTr(10),
        marginBotton: pTr(-10)
    };

    const contentA = (
        <ContentA
            list_doctor={props.list_doctor}
            cnt_doctor={props.cnt_doctor}
            search_more_requset={props.search_more_requset}
            is_login={props.is_login}
            chartAStyle={chartAStyle}
            PopupOpen={props.PopupOpen}
            favorite_doctors={props.favorite_doctors}
        />
    );
    const contentB = (
        <ContentB
            list_hospital={props.list_hospital}
            cnt_hospital={props.cnt_hospital}
            search_more_requset={props.search_more_requset}
            is_login={props.is_login}
            chartAStyle={chartAStyle}
            PopupOpen={props.PopupOpen}
        />
    );
    return (
        <div className={props.classes || classes.root}>
            {props.search_state == "search" ? (
                <div style={{ width: "100vh - 86px" }} />
            ) : (
                <DoubleTab
                    leftTitle={`의사(${numberFormat(props.cnt_doctor)})`}
                    rightTitle={`병원(${numberFormat(props.cnt_hospital)})`}
                    errMsg="이런, 검색결과가 없습니다..."
                    boxColor="white"
                    contentA={contentA}
                    contentB={contentB}
                    selectTab={props.set_selected_tab}
                    doubleTab={props.doubleTab}
                />
            )}
        </div>
    );
}

function mapStateToProps(state) {
    const is_filter_doctor =
        state.doctorinfo.is_filter.area ||
        state.doctorinfo.is_filter.department ||
        state.doctorinfo.is_filter.universitie;
    const is_filter_hospital = state.hospitalinfo.is_filter.area;
    return {
        list_doctor: is_filter_doctor
            ? state.doctorinfo.filter_doctor
            : state.doctorinfo.list_doctor,
        cnt_doctor: is_filter_doctor
            ? state.doctorinfo.cnt_doctor_filter
            : state.doctorinfo.cnt_doctor,
        list_hospital: is_filter_hospital
            ? state.hospitalinfo.filter_hospital
            : state.hospitalinfo.list_hospital,
        cnt_hospital: is_filter_hospital
            ? state.hospitalinfo.cnt_hospital_filter
            : state.hospitalinfo.cnt_hospital,
        is_login: state.kakaoinfo.is_login,
        favorite_doctors: state.mypageinfo.favorite_doctors,
        search_state: state.searchinfo.search_state
    };
}
const mapDispatchToProps = (dispatch, ownProps) =>
    bindActionCreators(
        {
            set_selected_tab,
            search_more_requset: ownProps.ext_search
                ? more_search_doctor_list
                : search_more_requset
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(SearchArea2);
