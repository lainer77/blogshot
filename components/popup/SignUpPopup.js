import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Button as B, Typography } from "@material-ui/core";

import Layout from "../layouts/PopupLayout";
import styled from "styled-components";
import theme from "../../theme";

import { pTr, BASE_COLOR } from "../../styles/typography";
import CancelTitleIcon from "../Icon/CancelTitleIcon";
import SignUpPanel from "../panel/SignUpPanel";
import { set_kakao_info } from "../../reducers/kakaoinfo";

const useStyles = makeStyles(theme => ({
    root: {},
    imgs: {
        display: "flex",
        justifyContent: "center",
        padding: `${pTr(8)} 0`
    }
}));
function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        // height: pTr(568),
        width: "100%",
        height: "100%",
        maxWidth: "1024px"
    };
}

//#region
const MenuButtonStyle = styled(IconButton)`
    && {
        color: inherit;
        padding: ${pTr(20)};
        position: absolute;
        left: 0;
    }
`;
const ClearIconStyle = styled(CancelTitleIcon)`
    && {
        pointer-events: none;
        display: flex;
        color: white;
    }
`;

const Header = styled.div`
    && {
        height: ${pTr(85)};
        background-color: ${BASE_COLOR};
        display: flex;
        justify-content: center;
        align-items: center;
        & p {
            color: white;
            font-size: ${pTr(20)};
            font-weight: bold;
            line-height: ${pTr(24)};
            letter-spacing: 0;
        }
    }
`;
const Title = styled(Typography)`
    && {
        font-size: 26px;
        letter-spacing: 0;
        color: rgb(0 0 0);
    }
`;
const Body = styled.div`
    && {
        overflow: auto;
        height: calc(100% - 85px);
        padding: 31px 20px;
    }
`;
const PaperStyle = styled.div`
    && {
        position: absolute;
        background-color: ${theme.palette.background.paper};
        box-shadow: ${theme.shadows[0]};
        outline: "none";
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
//#endregion

const data = {
    name_label: "고객님의 성함을 알려주세요.",
    email_label: "이메일주소",
    phone_label: "휴대전화번호"
};
const SignUpPopup = props => {
    const { open, onClose, setOpen, kakaoProp } = props;
    const [name, setName] = useState();
    const [email, setEmail] = useState(kakaoProp && kakaoProp.kakao_email);
    const [phone, setPhone] = useState(
        kakaoProp && kakaoProp.kakao_phone_number
    );

    const handleClick = () => {
        props.set_kakao_info({ name: name });
        onClose();
    };

    useEffect(() => {
        if (kakaoProp) {
            kakaoProp.kakao_email && setEmail(kakaoProp.kakao_email);
        }
    }, [kakaoProp]);

    return (
        <PaperStyle style={getModalStyle()}>
            <Header>
                <MenuButtonStyle aria-label="menu" onClick={onClose}>
                    <ClearIconStyle />
                </MenuButtonStyle>
                <p>회원가입</p>
            </Header>
            <Body>
                <Title>이제 다 됐습니다.</Title>
                <SignUpPanel
                    setName={setName}
                    setPhone={setPhone}
                    setEmail={setEmail}
                    name={name}
                    email={email}
                    phone={phone}
                    {...data}
                />
                <Button onClick={handleClick}>가입완료하기</Button>
            </Body>
        </PaperStyle>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({ set_kakao_info }, dispatch);

export default function Index(props) {
    const { open, setOpen, ...others } = props;
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Layout
            open={open}
            setOpen={setOpen}
            handleClose={handleClose}
            content={connect(mapStateToProps, mapDispatchToProps)(SignUpPopup)}
            // disableScrollLock={true}
            {...others}
        />
    );
}
