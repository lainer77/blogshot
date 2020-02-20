import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Divider, Typography, Box, Tab, Tabs } from "@material-ui/core";
import { connect } from "react-redux";

import styled from "styled-components";
import { pTr, BASE_COLOR } from "../../styles/typography";

const AntTabs = withStyles(theme => ({
  root: {
    flexGrow: 1,
    borderBottom: `1px solid #e8e8e8`,
    backgroundColor: theme.palette.background.paper,
    height: pTr(36)
  },
  indicator: {
    backgroundColor: BASE_COLOR,
    color: BASE_COLOR,
    height: pTr(3)
  }
}))(Tabs);

const AntTab = withStyles(theme => ({
  root: {
    textTransform: "none",
    fontSize: pTr(14),
    color: "rgb(93 93 93)",
    "&:focus": {
      color: BASE_COLOR
    }
  }
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  padding: {
    padding: pTr(20)
  },
  box: {
    backgroundColor: "rgb(246 246 246)"
  }
}));

function TabPanel(props) {
  const { children, value, index, boxColor, ...other } = props;

  return (
    <div
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box
        style={{
          backgroundColor: boxColor ? boxColor : "rgb(246 246 246)",
          width: "100%",
          margin: 0,
          padding: 0
        }}
        p={pTr(15)}
      >
        {children}
      </Box>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const DoContant = styled.div`
  && {
    max-width: 300px;
    text-align: left;
    background-color: inherit;
    color: rgb(90 90 90);
    margin: 0 auto;
    padding: 27px 25px 25px 25px;
    border: 1px solid rgb(90 90 90);
    border-radius: 8px;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0;
  }
`;
const DoTitle = styled(Typography)`
  && {
    font-size: 14px;
    line-height: 20px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -45%);
    background-color: rgb(245 245 245);
    color: rgb(90 90 90);
  }
`;

function DoubleTab(props) {
  const classes = useStyles();
  const {
    selectTab,
    leftTitle,
    rightTitle,
    contentA,
    contentB,
    boxColor,
    errMsg,
    selected_tab,
    doubleTab = true
  } = props;
  const [value, setValue] = React.useState(0);
  useEffect(() => {
    if (selected_tab) setValue(selected_tab == "doctor" ? 0 : 1);
  }, [selected_tab]);
  const handleChange = useCallback((event, newValue) => {
    if (selectTab) selectTab(newValue == 0 ? "doctor" : "hospital");
    setValue(newValue);
  }, []);
  if (
    leftTitle &&
    rightTitle &&
    errMsg &&
    leftTitle.replace(/[^0-9]/g, "") == 0 &&
    rightTitle.replace(/[^0-9]/g, "") == 0
  ) {
    const resultStyleHelp = {
      paddingTop: "30%",
      paddingBottom: "30%",
      height: "100%",
      backgroundColor: "inherit"
    };
    const fontStyle = {
      fontSize: pTr(18),
      lineHeight: "20px",
      letterSpacing: 0,
      backgroundColor: "inherit"
    };
    return (
      <div
        style={{
          backgroundColor: "rgb(243 243 243)",
          paddingBottom: "27px"
        }}
      >
        <Divider />
        <div style={resultStyleHelp}>
          <Typography style={fontStyle}>{errMsg}</Typography>
        </div>
        <div>
          <DoTitle>{"<이렇게 해보세요>"}</DoTitle>
          <DoContant>
            - 검색시 자동완성키워드를 사용해보세요.
            <br />
            - 좀 더 넓은 범위로 찾아보세요
            <br /> &nbsp; (예 : 회전근개 → 어깨)
            <br />
            - 의사명이나 병원명을 찾으실 때는, 검색모드를 '의사/병원명'으로
            선택해주세요.
            <br />
          </DoContant>
        </div>
      </div>
    );
  }
  if (
    leftTitle &&
    leftTitle.replace(/[^0-9]/g, "") != "" &&
    leftTitle.replace(/[^0-9]/g, "") == 0
  )
    return (
      <div>
        <Divider />
        {contentB}
      </div>
    );
  if (
    rightTitle &&
    rightTitle.replace(/[^0-9]/g, "") != "" &&
    rightTitle.replace(/[^0-9]/g, "") == 0
  )
    return (
      <div>
        <Divider />
        {contentA}
      </div>
    );
  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <Divider />
        {doubleTab ? (
          <div>
            <AntTabs
              value={value}
              onChange={handleChange}
              // textColor={BASE_COLOR}
              aria-label="ant"
              variant="fullWidth"
            >
              <AntTab label={leftTitle ? leftTitle : "게임리스트"} />
              <AntTab label={rightTitle ? rightTitle : "기획"} />
            </AntTabs>
            <TabPanel id="tab-a" value={value} index={0} boxColor={boxColor}>
              {contentA ? contentA : null}
            </TabPanel>
            <TabPanel id="tab-b" value={value} index={1} boxColor={boxColor}>
              {contentB ? contentB : null}
            </TabPanel>
          </div>
        ) : contentA ? (
          contentA
        ) : null}
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    selected_tab:
      state.searchinfo.selected_tab == undefined
        ? "doctor"
        : state.searchinfo.selected_tab
  };
}

export default connect(mapStateToProps)(DoubleTab);
