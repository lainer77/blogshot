import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { add_cookie } from "../../reducers/utilsinfo";

import { Typography, Divider } from "@material-ui/core";

import { pTr } from "../../styles/typography";
import Router from "next/router";

const RootStyle = styled.div`
    && {
        flex-grow: 1;
        padding-left: ${pTr(20)};
        width: 100%;
    }
`;
const TitleStyle = styled(Typography)`
    && {
        margin-top: ${pTr(20)};
        font-size: ${pTr(18)};
    }
`;
const Precautions = styled(Typography)`
    && {
        margin-top: ${pTr(20)};
        font-size: ${pTr(11)};
        font-weight: bold;
        padding-right: 15px;
    }
`;
const LiStyle = styled(Typography)`
    && {
        font-size: ${pTr(14)};
        color: rgb(147 152 162);
        line-height: ${pTr(30)};
    }
`;

const RecentSearchList = props => {
    const handleClick = e => {
        let value = e.currentTarget.dataset.value;

        props.setOpen(false);
        props.add_cookie("recent", value);
        Router.push({
            pathname: "/" + "search",
            query: {
                searchText: value,
                searchType: sessionStorage.getItem("searchType") || "질병명"
            }
        });
    };
    return (
        <div style={{ marginTop: pTr(13) }}>
            {props.recent
                ? props.recent.map((x, i) => {
                      return (
                          <LiStyle
                              key={"recent-" + i}
                              data-value={x}
                              onClick={handleClick}
                          >
                              {x}
                          </LiStyle>
                      );
                  })
                : null}
        </div>
    );
};
function RecentSearches(props) {
    return (
        <RootStyle>
            <TitleStyle>최근검색</TitleStyle>
            <Precautions>
                ※ 선택하시는 최근 검색어에 맞는 검색모드(질병/수술명 또는
                의사/병원명)인지 확인 바랍니다.
            </Precautions>
            <div style={{ marginTop: pTr(13) }}>
                <RecentSearchList {...props}></RecentSearchList>
            </div>
        </RootStyle>
    );
}

const mapStateToProps = state => {
    return {
        recent: state.utilsinfo.cookies["recent"] || null,
        searchType: state.searchinfo.searchType
    };
};
const mapDispatchToProps = dispatch =>
    bindActionCreators({ add_cookie }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RecentSearches);
