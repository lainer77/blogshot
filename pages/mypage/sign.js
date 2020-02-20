import { useEffect, useState } from "react";
import Router from "next/router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Layout from "../../components/layouts/Layout";

import SignArea from "../../components/area/SignArea";
import ActionMyBar from "../../components/component/ActionMyBar";

import { set_loading } from "../../reducers/utilsinfo";
import { get_myhome_info } from "../../reducers/mypageinfo";
import { set_selected_tab } from "../../reducers/searchinfo";

const Index = props => {
    const [kakaoProp, setKakaoProp] = useState();
    useEffect(() => {
        if (props.is_login && localStorage.getItem("jwt_token")) {
            props.get_myhome_info(localStorage.getItem("jwt_token"));
            setKakaoProp(JSON.parse(localStorage.getItem("kakaoProp")));
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
                minHeight: "calc(100vh - 90px)"
            }}
        >
            <ActionMyBar homeEnable={false} title="마이페이지" />
            <SignArea
                kakaoProp={kakaoProp}
                userName={props.user && props.user.name}
            />
        </div>
    );

    return <Layout cookies={props.cookies} content={MyPage} />;
};

const mapStateToProps = state => {
    return {
        is_login: state.kakaoinfo.is_login,
        login: state.kakaoinfo.login,
        user: state.mypageinfo.user
    };
};
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        { get_myhome_info, set_loading, set_selected_tab },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Index);
