import { useEffect } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import copy from "copy-to-clipboard";

import Layout from "../components/layouts/Layout";
import TopIcon from "../components/Icon/TopIcon";
import ActionBar from "../components/component/ActionBar";
import HospitalArea_1 from "../components/area/HospitalArea_1";
import HospitalArea_2 from "../components/area/HospitalArea_2";
import HospitalArea_3 from "../components/area/HospitalArea_3";
import HospitalArea_4 from "../components/area/HospitalArea_4";

import {
    selected_hospital,
    hospital_review_request,
    get_hostpital_all_review
} from "../reducers/hospitalinfo";
import { message_open } from "../reducers/utilsinfo";
import { set_selected_tab } from "../reducers/searchinfo";

const HospitalPage = props => {
    const data = props.data;
    let data1;
    let data2;
    let data3;
    let data4;
    if (data) {
        data1 = {
            name: data.name,
            juso: data.juso
        };
        data2 = {
            score_hospital: data.score_hospital,
            score_hospital_description: data.score_hospital_description,
            score_review: data.score_review
        };
        data3 = {};
        data4 = {
            geo_location: data.geo_location,
            name: data.name,
            juso: data.juso,
            hospital_review_list: props.hospital_review_list
        };
    }

    const handelPhoneTel = () => {
        window.open(`tel:${data.phone_num}`);
    };

    const handleUrlCopy = () => {
        // const url = `http://map.naver.com/index.nhn?query=${btoa(
        //     unescape(encodeURIComponent(data.juso))
        // )}&enc=b64&level=10&lng=${data.geo_location.lng}&lat=${
        //     data.geo_location.lat
        // }&pinType=SITE;`;
        const url = `http://map.naver.com/v5/search/${data.name}`;
        props.message_open("Url 주소가 복사되었습니다.");

        copy(url);
    };
    const handleAppMove = () => {
        // const url = `http://map.naver.com/index.nhn?query=${data.juso}&enc=utf8&level=2&lng=${data.geo_location.lng}&lat=${data.geo_location.lat}&pinTitle=${data.name}&pinType=SITE;`;
        const url = `http://map.naver.com/v5/search/${data.name}`;
        window.open(url);
    };

    return (
        <div>
            <ActionBar labelEnable={false} />

            <div>
                <HospitalArea_1 {...data1} />
                <HospitalArea_2 {...data2} />
                <HospitalArea_3
                    {...data3}
                    handleAppMove={handleAppMove}
                    handelPhoneTel={handelPhoneTel}
                />
                <HospitalArea_4
                    data={data4}
                    hospital_all_review={props.hospital_all_review}
                    handleUrlCopy={handleUrlCopy}
                    handleAppMove={handleAppMove}
                    getAllReview={props.getAllReview}
                />
            </div>
            <TopIcon></TopIcon>
        </div>
    );
};

const Index = props => {
    const router = useRouter();

    const getAllReview = () => {
        if (!props.hospital_all_review)
            props.get_hostpital_all_review(router.query.selected_hospital_id);
    };

    useEffect(() => {
        if (
            !props.is_login &&
            !localStorage.getItem("jwt_token") &&
            !router.query.token
        ) {
            alert("현재 로그인 상태가 아닙니다. 홈화면으로 돌아갑니다.");
            router.push("/");
            return;
        }

        props.selected_hospital(router.query.selected_hospital_id);
        window.scrollTo(0, 0);
        // doctor is tab A
        props.set_selected_tab("doctor");
        sessionStorage.setItem("selected_view", "hospital");
    }, []);
    useEffect(() => {
        if (
            (props.hospital_review_list <= 0 &&
                props.hospital_review_state == "stay") ||
            router.query.selected_hospital_id != props.selected_hospital_id
        )
            props.hospital_review_request("get");
    }, [
        props.hospital_review_list,
        props.hospital_review_state,
        props.selected_hospital_id
    ]);

    useEffect(() => {
        if (props.is_login || router.query.token) {
            if (props.is_login == true && router.query.token) {
                router.replace({
                    pathname: router.pathname,
                    query: {
                        selected_hospital_id: router.query.selected_hospital_id
                    }
                });
            }
        }
    }, [props.is_login]);

    return (
        <Layout
            cookies={props.cookies}
            content={
                <HospitalPage
                    data={props.data}
                    hospital_review_list={props.hospital_review_list}
                    hospital_all_review={props.hospital_all_review}
                    message_open={props.message_open}
                    getAllReview={getAllReview}
                />
            }
        />
    );
};

const mapStateToProps = state => {
    const selected_hospital_id = state.hospitalinfo.selected_hospital_id;
    return {
        data:
            Object.keys(state.hospitalinfo.data).length > 0
                ? state.hospitalinfo.data
                : null,
        selected_hospital_id: state.hospitalinfo.selected_hospital_id,
        hospital_review_list:
            state.hospitalinfo.hospital_review_list.length > 0
                ? state.hospitalinfo.hospital_review_list.filter(
                      x => x.hospital_id == selected_hospital_id
                  )
                : [],
        hospital_review_state: state.hospitalinfo.hospital_review_state,
        is_login: state.kakaoinfo.is_login,
        hospital_all_review: state.hospitalinfo.data.hospital_all_review
    };
};
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            selected_hospital,
            hospital_review_request,
            get_hostpital_all_review,
            message_open,
            set_selected_tab
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Index);
