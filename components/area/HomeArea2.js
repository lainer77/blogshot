import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import DoubleTab from "../tab/DoubleTab";
import { connect } from "react-redux";
import Router from "next/router";
import styled from "styled-components";

import { pTr, BASE_COLOR } from "../../styles/typography";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  button: {
    boxShadow: "0 0 0 0",
    borderRadius: 0,
    borderWidth: "1px",
    backgroundColor: "rgb(255 255 255)",
    color: "rgb(45 47 49)",
    borderColor: "rgb(217 217 217)",
    font: `350 ${pTr(14)} NanumSquare`,
    borderRadius: "4px",
    margin: pTr(5),
    minWidth: pTr(76),
    minHeight: pTr(38),
    letterSpacing: 0,
    "&:hover": {
      backgroundColor: BASE_COLOR,
      color: "white"
    }
  },
  button2: {
    boxShadow: "0 0 0 0",
    borderRadius: 0,
    padding: 0,
    borderWidth: "1px",
    backgroundColor: "rgb(255 255 255)",
    color: "rgb(45 47 49)",
    borderColor: "rgb(217 217 217)",
    font: `350 ${pTr(14)} NanumSquare`,
    borderRadius: "4px",
    margin: pTr(5),
    minWidth: pTr(162),
    minHeight: pTr(38),
    letterSpacing: 0,
    "&:hover": {
      backgroundColor: BASE_COLOR,
      color: "white"
    }
  }
});

const GridGutterA = styled.div`
  && {
    padding: ${pTr(15)};
    text-align: center;
    @media (min-width: 374px) {
      text-align-last: left;
      padding: ${pTr(15)} -webkit-calc(50% - 10px - 162px);
      padding: ${pTr(15)} -moz-calc(50% - 10px - 162px);
      padding: ${pTr(15)} calc(50% - 10px - 162px);
    }
    @media (min-width: 546px) {
      text-align-last: left;
      padding: ${pTr(15)} -webkit-calc(50% - 15px - 243px);
      padding: ${pTr(15)} -moz-calc(50% - 15px - 243px);
      padding: ${pTr(15)} calc(50% - 15px - 243px);
    }
    @media (min-width: 718px) {
      text-align-last: left;
      padding: ${pTr(15)} -webkit-calc(50% - 20px - 324px);
      padding: ${pTr(15)} -moz-calc(50% - 20px - 324px);
      padding: ${pTr(15)} calc(50% - 20px - 324px);
    }
    @media (min-width: 890px) {
      text-align-last: left;
      padding: ${pTr(15)} -webkit-calc(50% - 25px - 405px);
      padding: ${pTr(15)} -moz-calc(50% - 25px - 405px);
      padding: ${pTr(15)} calc(50% - 25px - 405px);
    }
  }
`;
const GridGutterB = styled.div`
  && {
    padding: ${pTr(15)};
    text-align: left;
  }
`;

const pathname = "search";
const ButtonGridA = props => {
  const classes = useStyles();
  return <GridGutterA></GridGutterA>;
};

const ButtonGridB = props => {
  const classes = useStyles();

  return <GridGutterB></GridGutterB>;
};

function HomeArea2(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DoubleTab
        contentA={<ButtonGridA tagsByDepartment={props.tagsByDepartment} />}
        contentB={<ButtonGridB tagsByDisease={props.tagsByDisease} />}
      />
    </div>
  );
}
const mapStateToProps = state => {
  return {
    tagsByDisease: state.homeinfo.tagsByDisease,
    tagsByDepartment: state.homeinfo.tagsByDepartment
  };
};

export default connect(mapStateToProps)(HomeArea2);
