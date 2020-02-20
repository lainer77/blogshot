import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { bindActionCreators } from "redux";
import { animateScroll as scroll } from "react-scroll";

import styled from "styled-components";

import TopIcon from "../components/Icon/TopIcon";
import Layout from "../components/layouts/Layout";
import AppBar from "../components/component/AppBar";
import SearchArea1 from "../components/area/SearchArea_1";
import SearchArea2 from "../components/area/SearchArea_2";
import KakaoLoginPopup from "../components/popup/KakaoLoginPopup";

import { search_requset } from "../reducers/searchinfo";
import { set_kakao_login } from "../reducers/kakaoinfo";
import { get_favorite_doctors } from "../reducers/mypageinfo";
import { full_search_doctor_list } from "../reducers/hospitalinfo";

import { isSafari } from "../contants/utils";
import { pTr, BASE_COLOR } from "../styles/typography";

let searchKey;

const Root = styled.div`
    && {
        min-height: 100vh;
        background-color: rgb(243 243 243);
    }
`;

const Header = styled.div`
    && {
        flex-grow: 1;
        top: 0;
        left: 0;
        right: 0;
        position: ${props => (props.safari ? "-webkit-sticky" : "sticky")};
        z-index: 2;
        padding: ${pTr(20)} ${pTr(20)} ${pTr(20)} ${pTr(20)};
        background-color: ${BASE_COLOR};
    }
`;

const SearchPage = React.memo(props => {
    const {
        router,
        doubleTab,
        PopupOpen,
        popupOpen,
        PopupClose,
        is_login
    } = props;

    const [safari, setSafari] = useState(false);

    useEffect(() => {
        setSafari(isSafari);
    }, []);

    return (
        <Root id="search">
            <Header safari={safari}>
                <AppBar />
            </Header>
            <SearchArea1
                search={
                    router.query.searchText
                        ? router.query.searchText
                        : router.query.name
                }
            />
            <SearchArea2
                doubleTab={doubleTab}
                PopupOpen={PopupOpen}
                ext_search={props.ext_search}
            />

            <KakaoLoginPopup
                open={popupOpen}
                onClose={PopupClose}
                otherAreaClose={true}
                is_login={is_login}
            ></KakaoLoginPopup>

            <TopIcon></TopIcon>
        </Root>
    );
});

const Index = props => {
    const router = useRouter();

    const [doubleTab, setDoubleTab] = useState(true);
    const [popupOpen, setPopupOpen] = useState(false);

    const PopupOpen = () => {
        if (!popupOpen) setPopupOpen(true);
    };
    const PopupClose = () => {
        if (popupOpen) setPopupOpen(false);
    };
    const getRouterQuery = () => {
        let ret = {};
        if (router.query.searchType) {
            ret.searchType = router.query.searchType;
        }
        if (router.query.searchText) {
            ret.searchText = router.query.searchText;
        }
        if (router.query.id) {
            ret.medical_departments_id = router.query.id;
        }
        if (router.query.areas_id) {
            ret.areas_id = router.query.areas_id;
        }
        if (router.query.name) {
            ret.name = router.query.name;
        }
        return ret;
    };

    // 질병 검색 | 의사/병원 검색 | 필터 검색
    useEffect(() => {
        let is_search = false;
        let search_type = "onSearch";
        let param = {};
        let filterable;
        if (
            (router.query.id && searchKey == router.query.id) ||
            (router.query.searchText && searchKey == router.query.searchText)
        ) {
            return;
        }
        // 검색어 변화 감지
        if (
            router.query.searchType &&
            router.query.searchType != props.searchType
        ) {
            is_search = true;
        }
        if (
            (router.query.id &&
                props.medical_departments_id != router.query.id) ||
            (is_search && router.query.id)
        ) {
            searchKey = router.query.id;
            is_search = true;
        } else if (router.query.searchText) {
            is_search = true;

            searchKey = router.query.searchText;
        }
        if (
            (router.query.searchText &&
                props.searchText != router.query.searchText) ||
            (is_search && router.query.searchText)
        ) {
            searchKey = router.query.searchText;
            if (!sessionStorage.getItem("filterable") || !props.searchText)
                is_search = true;
        } else if (router.query.id) {
            is_search = true;
            searchKey = router.query.id;
        }

        if (is_search) {
            sessionStorage.removeItem("filterable");
            param = getRouterQuery();
            props.search_requset(param);
        }
        // else {
        //     filterable = sessionStorage.getItem("filterable");
        //     if (!filterable && !router.query.hospital_id && !router.query.id) {
        //         console.log(
        //             "!filterable && !router.query.hospital_id",
        //             !filterable && !router.query.hospital_id
        //         );
        //         param = getRouterQuery();
        //         props.search_requset(param);
        //     }
        // }

        setExt_search(false);
    }, [router.query]);

    // 병원 소속 의사, 모두 보기
    const [ext_search, setExt_search] = useState(false);
    useEffect(() => {
        if (router.query.hospital_id) {
            setDoubleTab(true);
            props.full_search_doctor_list(router.query.hospital_id, {
                name: router.query.name,
                is_full_search: true,
                filterable: router.query.filterable || 0
            });
            setExt_search(true);
        }
    }, [router.query.hospital_id]);

    useEffect(() => {
        scroll.scrollToTop({ to: "top", duration: 0 });
        if (localStorage.getItem("jwt_token")) {
            PopupClose();
        } else {
            PopupOpen();
        }
        if (props.is_login) props.get_favorite_doctors();
    }, [props.is_login]);

    useEffect(() => {
        var date = new Date();

        date.setTime(date.getTime() + 1 * 1 * 1 * 1 * 1000);
        let cookie = `searchText=${encodeURIComponent(
            props.cookies.searchText
        ) || ""}; expires=${date.toUTCString()};`;

        document.cookie = cookie;
    }, []);

    return (
        <Layout
            cookies={props.cookies}
            content={
                <SearchPage
                    {...props}
                    router={router}
                    popupOpen={popupOpen}
                    PopupOpen={PopupOpen}
                    PopupClose={PopupClose}
                    doubleTab={doubleTab}
                    ext_search={ext_search}
                ></SearchPage>
            }
        />
    );
};

const mapStateToProps = state => {
    return {
        searchText: state.searchinfo.searchText,
        searchType: state.searchinfo.searchType,
        medical_departments_id: state.searchinfo.medical_departments_id,
        login: state.kakaoinfo.login,
        is_login: state.kakaoinfo.is_login
    };
};
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            search_requset,
            set_kakao_login,
            full_search_doctor_list,
            get_favorite_doctors
        },
        dispatch
    );

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Index));
