import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Layout from "../components/layouts/Layout";
import ActionBar from "../components/component/ActionBar";
import DoctorArea1 from "../components/area/DoctorArea_1";
import DoctorArea2 from "../components/area/DoctorArea_2";
import DoctorArea3 from "../components/area/DoctorArea_3";

import TopIcon from "../components/Icon/TopIcon";

import {
    selected_doctor,
    get_doctor_all_review,
    doctor_review_request
} from "../reducers/doctorinfo";
import {
    set_favorite_doctors,
    get_favorite_doctors
} from "../reducers/mypageinfo";
import { set_selected_tab } from "../reducers/searchinfo";
const DoctorPage = React.memo(props => {
    const data = props.data;
    const data1 = {
        name_kor: data.name_kor,
        clinic: data.clinic,
        current_hospital_name: data.current_hospital_name,
        study_last: data.study_last
    };
    const data2 = {
        score_medicofact: data.score_medicofact,
        score_searchText: data.score_searchText,
        current_hospital_id: data.current_hospital_id,
        homepage_url: data.homepage_url,
        searchText: props.searchText || props.cookies.searchText,
        searchText_research: data.searchText_research,
        info: data.info
    };
    const data3 = {
        doctor_name: data.name_kor,
        score_medicofact: data.score_medicofact,
        clinic: data.clinic,
        info: data.info,
        doctor_id: props.id,
        searchText_research: data.searchText_research,
        searchText: props.searchText || props.cookies.searchText
    };

    const [is_mark, setIs_mark] = useState(false);
    const handleBookmark = value => {
        props.set_favorite_doctors(props.id, value ? "post" : "delete");
    };
    useEffect(() => {
        if (props.favorite_doctors[0] && props.favorite_doctors.length > 0) {
            let find = props.favorite_doctors.find(x => x.id == props.id);
            setIs_mark(find ? true : false);
        }
    }, [props.favorite_doctors]);

    return (
        <div>
            <ActionBar handleBookmark={handleBookmark} is_mark={is_mark} />
            <div>
                <DoctorArea1 data={data1} />
                <DoctorArea2 data={data2} is_login={props.is_login} />
                <DoctorArea3
                    data={data3}
                    get_doctor_all_review={get_doctor_all_review}
                    is_login={props.is_login}
                    handleLoadReview={props.handleLoadReview}
                />
            </div>
            <TopIcon />
        </div>
    );
});

const Index = props => {
    const router = useRouter();
    const {
        data,
        selected_doctor,
        searchText,
        selected_tab,
        ...others
    } = props;

    const handleLoadReview = () => {
        if (router.query.selected_doctor_id) {
            props.get_doctor_all_review(router.query.selected_doctor_id);
            props.doctor_review_request("get", null, null, false);
        }
    };

    useEffect(() => {
        if (props.is_login || router.query.token) {
            if (props.is_login == true && router.query.token) {
                router.replace({
                    pathname: router.pathname,
                    query: {
                        selected_doctor_id: router.query.selected_doctor_id,
                        score_searchText: router.query.score_searchText
                    }
                });
            }
            let st;
            if (sessionStorage.getItem("searchType") == "질병명")
                st = props.cookies.searchText || props.searchText;
            props.selected_doctor(
                router.query.selected_doctor_id,
                router.query.score_searchText,
                st,
                router.query.token
            );
            props.get_favorite_doctors();
        }
        if (
            !props.is_login &&
            !localStorage.getItem("jwt_token") &&
            !router.query.token
        ) {
            alert("현재 로그인 상태가 아닙니다. 홈화면으로 돌아갑니다.");
            router.push("/");
            return;
        }
    }, [props.is_login]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [props.selected_doctor_id]);
    useEffect(() => {
        props.set_selected_tab("doctor");
        sessionStorage.setItem("selected_view", "doctor");
    }, []);

    return (
        <Layout
            cookies={props.cookies}
            content={
                <DoctorPage
                    data={props.data}
                    id={router.query.selected_doctor_id}
                    searchText={selected_tab == "doctor" ? searchText : null}
                    handleLoadReview={handleLoadReview}
                    {...others}
                />
            }
        />
    );
};

const mapStateToProps = state => {
    if (state.doctorinfo.selected_state == "try")
        return {
            searchText: state.searchinfo.searchText,
            selected_tab: state.searchinfo.selected_tab,
            selected_doctor_id: state.doctorinfo.selected_doctor_id,
            selected_state: state.doctorinfo.selected_state,
            data: {},
            is_login: state.kakaoinfo.is_login,
            favorite_doctors: state.mypageinfo.favorite_doctors
        };
    return {
        searchText: state.searchinfo.searchText,
        selected_tab: state.searchinfo.selected_tab,
        selected_doctor_id: state.doctorinfo.selected_doctor_id,
        selected_state: state.doctorinfo.selected_state,
        data: state.doctorinfo.data,
        is_login: state.kakaoinfo.is_login,
        favorite_doctors: state.mypageinfo.favorite_doctors
    };
};
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            selected_doctor,
            set_favorite_doctors,
            get_favorite_doctors,
            get_doctor_all_review,
            doctor_review_request,
            set_selected_tab
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Index);
