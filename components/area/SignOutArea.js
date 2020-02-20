import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Button as B, Typography } from "@material-ui/core";

import styled from "styled-components";

import { pTr } from "../../styles/typography";
import SignUpPanel from "../panel/SignUpPanel";
import { set_kakao_info, set_kakao_logout } from "../../reducers/kakaoinfo";
import { useRouter } from "next/router";

//#region
const Title = styled(Typography)`
    && {
        font-size: 26px;
        letter-spacing: 0;
        line-height: 26px;
        color: rgb(0 0 0);
    }
`;
const Text = styled(Typography)`
    && {
        font-size: 14px;
        letter-spacing: 0;
        line-height: 23px;
        padding-right: 20px;
        margin-top: 35px;
        font-weight: bold;
    }
`;
const Contant = styled.div`
    && {
        overflow: auto;
        padding: 31px 20px 48px;
        background-color: white;
    }
`;
const Context = styled.div`
    && {
        font-size: 14px;
        letter-spacing: 0;
        line-height: 20px;
        color: rgb(41 41 41);
        padding-right: 20px;
        margin-top: 64px;
    }
`;
const Root = styled.div`
    && {
        margin-top: 65px;
    }
`;
//#endregion

const SignArea = props => {
    const { kakaoProp, userName } = props;
    const [name, setName] = useState(userName);
    const [email, setEmail] = useState(kakaoProp && kakaoProp.kakao_email);
    const [phone, setPhone] = useState(
        kakaoProp && kakaoProp.kakao_phone_number
    );
    const router = useRouter();

    const handleClick = () => {
        props.set_kakao_info({ name: name });
    };

    useEffect(() => {
        if (kakaoProp) {
            kakaoProp.kakao_email && setEmail(kakaoProp.kakao_email);
        }
    }, [kakaoProp]);

    return (
        <Root>
            <Contant>
                <Title>계정정보</Title>
                <Text>
                    본 서비스는 카카오계정을 연동하여 회원정보를 제공받고
                    있습니다. 따라서 회원탈퇴를 위해서는 아래와 같이 카카오톡
                    에서 서비스 연결을 해지하시기 바랍니다.
                </Text>
                <Context>
                    1. 카카오톡의 계정관리 메뉴에서 ‘계정연결’ 메뉴의 ‘연결된
                    서비스관리’에 들어갑니다.
                    <br />
                    <br />
                    2. ‘외부서비스’의 ‘전체보기’로 들어가 ‘메디코스코프’를
                    찾습니다.
                    <br />
                    <br />
                    3. ‘연결끊기’ 또는 ‘모든 정보 삭제’를 선택하여 해지신청을
                    완료합니다.
                </Context>
            </Contant>
        </Root>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({ set_kakao_info, set_kakao_logout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignArea);
