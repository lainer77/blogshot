import Router from "next/router";
import { useEffect } from "react";
import Layout from "../components/layouts/Layout";
import ActionMyBar from "../components/component/ActionMyBar";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MyreviewArea1 from "../components/area/MyreviewArea_1";
import MyreviewArea2 from "../components/area/MyreviewArea_2";

import { doctor_review_request } from "../reducers/doctorinfo";
import { hospital_review_request } from "../reducers/hospitalinfo";

const Index = props => {
    useEffect(() => {
        if (props.is_login && localStorage.getItem("jwt_token")) {
            props.hospital_review_request("get", null, null, false);
            props.doctor_review_request("get", null, null, false);
        }
    }, [props.is_login]);
    const MyReview = (
        <div
            style={{
                backgroundColor: "rgb(240 240 240)",
                minHeight: "100vh"
            }}
        >
            <ActionMyBar
                labelEnable={false}
                shareEnable={false}
                homeEnable={true}
                title={"나의 리뷰"}
            />
            <MyreviewArea1 />
            <MyreviewArea2 />
        </div>
    );
    return <Layout cookies={props.cookies} content={MyReview} />;
};

const mapStateToProps = state => {
    return {
        is_login: state.kakaoinfo.is_login
    };
};
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        { hospital_review_request, doctor_review_request },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Index);
