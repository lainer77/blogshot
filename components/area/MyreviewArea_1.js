import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import { pTr } from "../../styles/typography";
import styled from "styled-components";
import Divider from "../component/DividerMargin";
import { bindActionCreators } from "redux";
import ProfileIcon from "../Icon/ProfileIcon";
import { connect } from "react-redux";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        backgroundColor: "white",
        marginTop: "62px"
    },
    context: {
        padding: `${pTr(15)} ${pTr(20)}`
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
    const { user } = props;
    const [profileUrl, setProfileUrl] = useState("");
    useEffect(() => {
        if (localStorage && localStorage.getItem("photo_url") && !profileUrl)
            setProfileUrl(localStorage.getItem("photo_url"));
    }, []);
    return (
        <div className={classes.root}>
            <div className={classes.context}>
                <div className={classes.oneline}>
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
                </div>
            </div>
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
