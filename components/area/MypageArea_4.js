import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import ResultDoctorItem from "../component/ResultDoctorItem";
import ListContent from "../list/ListContent";
import { pTr } from "../../styles/typography";

import { set_kakao_logout } from "../../reducers/kakaoinfo";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        position: "relative"
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        padding: `${pTr(10)} ${pTr(20)}`,
        "& p": {
            fontSize: pTr(14),
            lineHeight: pTr(20),
            letterSpacing: 0
        },
        "& span": {
            fontWeight: "bold"
        }
    }
});

const LogoutLink = styled(Button)`
    && {
        margin: 0 auto;
        padding: ${pTr(10)} 0;
        text-decoration: underline;
        font-size: ${pTr(14)};
        letter-spacing: 0;
        line-height: ${pTr(20)};
        color: rgb(36 153 254);
    }
`;

const LinkLast = styled.div`
    && {
        display: flex;
        justify-content: center;
        background-color: white;
        position: sticky;
        width: 100%;
        bottom: 0;
        max-width: 1024px;
        margin-top: calc(100% + 7px);
    }
`;

function MypageArea4(props) {
    const classes = useStyles();
    const { saved_doctors } = props;

    return (
        <div className={classes.root}>
            <ListContent>
                {saved_doctors
                    ? saved_doctors.saved_doctors_list.map((item, index) => {
                          return (
                              <ResultDoctorItem
                                  key={`saved-doctor-${index}`}
                                  data={item}
                                  is_login={props.is_login}
                              />
                          );
                      })
                    : null}
            </ListContent>
            <LinkLast>
                <LogoutLink
                    onClick={() => {
                        props.set_kakao_logout(
                            localStorage.getItem("jwt_token")
                        );
                    }}
                >
                    <a>로그아웃</a>
                </LogoutLink>
            </LinkLast>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        saved_doctors: state.mypageinfo.saved_doctors,
        is_login: state.kakaoinfo.is_login
    };
};
const mapDispatchToProps = dispatch =>
    bindActionCreators({ set_kakao_logout }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MypageArea4);
