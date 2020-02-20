import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Button as B, Typography } from "@material-ui/core";

import styled from "styled-components";

import { pTr } from "../../styles/typography";
import SignUpPanel from "../panel/SignUpPanel";
import { set_kakao_info, set_kakao_logout } from "../../reducers/kakaoinfo";
import { get_myhome_info } from "../../reducers/mypageinfo";
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
        font-size: 12px;
        letter-spacing: 0;
        line-height: 20px;
        color: rgb(129 129 129);
        padding-right: 20px;
        margin-top: 10px;
    }
`;
const Contant = styled.div`
    && {
        overflow: auto;
        padding: 31px 20px 48px;
        background-color: white;
    }
`;
const Root = styled.div`
    && {
        margin-top: 65px;
    }
`;
const Button = styled(B)`
    width: 100%;
    color: white;
    background-color: rgb(20 82 123);
    height: 50px;
    font-size: 18px;
    &:hover {
        background-color: rgb(20 82 123);
    }
`;
const Link = styled(B)`
    && {
        padding: ${pTr(10)} 0;
        text-decoration: underline;
        font-size: ${pTr(14)};
        letter-spacing: 0;
        line-height: ${pTr(20)};
        color: rgb(36 153 254);
        display: flex;
        margin: 10px 0px;
        width: 100%;
        height: 43px;
        background-color: white;
    }
`;
//#endregion

const data = {
    name_label: "고객님의 성함",
    email_label: "이메일주소",
    phone_label: "휴대전화번호"
};
const SignArea = props => {
    const { kakaoProp, userName } = props;
    const [name, setName] = useState(userName);
    const [email, setEmail] = useState(kakaoProp && kakaoProp.kakao_email);
    const [phone, setPhone] = useState(
        kakaoProp && kakaoProp.kakao_phone_number
    );
    const router = useRouter();

    const handleClick = () => {
        router.replace("/mypage").then(value => {
            if (value) {
                props.set_kakao_info(
                    { name: name },
                    "회원정보가 수정되었습니다."
                );
                props.get_myhome_info(localStorage.getItem("jwt_token"));
            }
        });
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
                    회원님의 정보를 카카오로부터 제공받기 때문에, 성함 이외의
                    정보는 직접 수정하실 필요가 없습니다.
                </Text>
                <SignUpPanel
                    setName={setName}
                    setPhone={setPhone}
                    setEmail={setEmail}
                    name={name}
                    email={email}
                    phone={phone}
                    {...data}
                />
                <Button onClick={handleClick}>수정</Button>
            </Contant>

            <Link
                onClick={() => {
                    props.set_kakao_logout(localStorage.getItem("jwt_token"));
                }}
            >
                <a>로그아웃</a>
            </Link>
            <Link
                onClick={() => {
                    router.push("/mypage/sign_out", "/mypage/sign");
                }}
            >
                <a style={{ color: "black" }}>회원탈퇴</a>
            </Link>
        </Root>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        { set_kakao_info, set_kakao_logout, get_myhome_info },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(SignArea);
