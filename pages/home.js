import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/styles";

import { tags_set } from "../reducers/homeinfo";
import { get_area_requset, set_selected_tab } from "../reducers/searchinfo";
import { validate_token } from "../reducers/kakaoinfo";
import { pTr, BASE_COLOR } from "../styles/typography";

import HomeArea1 from "../components/area/HomeArea1";
import HomeArea2 from "../components/area/HomeArea2";
// import AppBar from "../components/component/AppBar";
import SignUpPopup from "../components/popup/SignUpPopup";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "calc(100vh - 89px)"
  },
  appbar: {
    flexGrow: 1,
    top: 0,
    left: 0,
    right: 0,
    position: "sticky",
    zIndex: 1,
    padding: `${pTr(20)} ${pTr(20)} ${pTr(20)} ${pTr(20)}`,
    backgroundColor: BASE_COLOR
  }
}));

const HomePage = props => {
  const classes = useStyles();

  const [signUpPopup, setSignUpPopup] = useState(false);

  useEffect(() => {
    if (props.tagsByDisease.length <= 0) {
      props.tags_set();
    }
    props.set_selected_tab("doctor");

    sessionStorage.removeItem("filterable");
    props.validate_token();
  }, []);

  useEffect(() => {
    props.validate_token(undefined, true).then(value => {
      if (value && props.is_login) setSignUpPopup(true);
    });
  }, [props.is_login]);

  return (
    <div className={classes.root}>
      {/* <div className={classes.appbar}>
        <AppBar />
      </div> */}
      <HomeArea1 />
      <HomeArea2 />

      <SignUpPopup
        open={signUpPopup}
        setOpen={setSignUpPopup}
        kakaoProp={props.login && props.login.kakaoProp}
      ></SignUpPopup>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tagsByDisease: state.homeinfo.tagsByDisease,
    login: state.kakaoinfo.login,
    is_login: state.kakaoinfo.is_login,
    is_validateNo: state.kakaoinfo.is_validateNo
  };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { tags_set, get_area_requset, set_selected_tab, validate_token },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
