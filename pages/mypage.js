import { useEffect } from "react";
import Router from "next/router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Layout from "../components/layouts/Layout";

import ActionMyBar from "../components/component/ActionMyBar";
import MypageArea1 from "../components/area/MypageArea_1";
import MypageArea2 from "../components/area/MypageArea_2";
import MypageArea3 from "../components/area/MypageArea_3";
import MypageArea4 from "../components/area/MypageArea_4";

import { set_loading } from "../reducers/utilsinfo";
import { get_myhome_info } from "../reducers/mypageinfo";
import { set_selected_tab } from "../reducers/searchinfo";

const Index = props => {
    useEffect(() => {
        if (props.is_login && localStorage.getItem("jwt_token")) {
            props.get_myhome_info(localStorage.getItem("jwt_token"));
        } else {
            setTimeout(x => {
                if (!props.is_login) Router.push("/");
                props.set_loading(false);
            }, 1000);
        }

        sessionStorage.removeItem("filterable");
    }, [props.is_login]);
    const MyPage = (
        <div
            style={{
                backgroundColor: "rgb(240 240 240)",
                minHeight: "calc(100vh)"
            }}
        >
            <ActionMyBar homeEnable={true} title="마이페이지" />
            <MypageArea1 />
            <MypageArea2 set_selected_tab={props.set_selected_tab} />
            <MypageArea3 />
            <MypageArea4 />
        </div>
    );
    return <Layout cookies={props.cookies} content={MyPage} />;
};

const mapStateToProps = state => {
    return {
        is_login: state.kakaoinfo.is_login
    };
};
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        { get_myhome_info, set_loading, set_selected_tab },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Index);
