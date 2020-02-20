import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, ButtonBase } from "@material-ui/core";
import { pTr } from "../../styles/typography";
import styled from "styled-components";
import Divider from "../component/DividerMargin";
import { bindActionCreators } from "redux";
import ProfileIcon from "../Icon/ProfileIcon";
import { connect } from "react-redux";
import LinkIcon from "../Icon/LinkIcon";
import { useRouter } from "next/router";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        backgroundColor: "white",
        marginTop: "78px"
    },
    context: {
        padding: `${pTr(15)} ${pTr(20)}`,
        width: "100%"
    },
    oneline: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
});

const UserName = styled(Typography)`
    && {
        font-size: ${pTr(14)};
        line-height: ${pTr(20)};
        letter-spacing: 0;
    }
`;
const UserImg = styled(ProfileIcon)`
    && {
        background-color: lightgray;
        border-radius: 50%;
        width: ${pTr(34)};
        height: ${pTr(34)};
    }
`;

function MypageArea1(props) {
    const classes = useStyles();
    const router = useRouter();
    const { user } = props;
    const [profileUrl, setProfileUrl] = useState("");

    useEffect(() => {
        if (localStorage && localStorage.getItem("photo_url") && !profileUrl)
            setProfileUrl(localStorage.getItem("photo_url"));
    }, []);

    const handleClick = () => {
        router.push("/mypage/sign");
    };

    return (
        <div className={classes.root}>
            <ButtonBase className={classes.context} onClick={handleClick}>
                <div className={classes.oneline} style={{ width: "100%" }}>
                    <div className={classes.oneline}>
                        <UserImg
                            src={
                                user
                                    ? profileUrl || user.photo_url
                                    : profileUrl || ""
                            }
                        />
                        <div style={{ padding: pTr(5) }} />
                        <UserName>{user ? user.name : ""}</UserName>
                    </div>
                    <LinkIcon style={{ width: "22px", height: "22px" }} />
                </div>
            </ButtonBase>
            <Divider />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        user: state.mypageinfo.user
    };
};
// const mapDispatchToProps = dispatch =>
//     bindActionCreators({ tags_set, get_area_requset }, dispatch);

export default React.memo(
    connect(
        mapStateToProps
        // mapDispatchToProps
    )(MypageArea1)
);
