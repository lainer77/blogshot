import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { Divider, Tab, Tabs, AppBar, Typography, Box } from "@material-ui/core";
import { connect } from "react-redux";

import styled from "styled-components";
import { pTr, BASE_COLOR } from "../../styles/typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  padding: {
    padding: pTr(20)
  },
  box: {
    backgroundColor: "rgb(246 246 246)"
  },
  errorRoot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}
function Tabss({
  errMsg = "",
  titles = [""],
  contents = [{}],
  selected_tab = ""
}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = useCallback((event, newValue) => {
    setValue(newValue);
  }, []);

  const handleChangeIndex = index => {
    setValue(index);
  };
  let contentCountMissMatch = false;

  if (contentCountMissMatch) {
    return <div className={classes.errorRoot}></div>;
  }

  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <Divider />
        <div>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
              variant="fullWidth"
            >
              {titles.map((title, index) => (
                <Tab key={title + index} label={title} {...a11yProps(index)} />
              ))}
            </Tabs>
          </AppBar>
          <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
            {contents.map((content, index) => (
              <TabPanel
                key={titles[index] + "-" + index}
                value={value}
                index={index}
              >
                {content}
              </TabPanel>
            ))}
          </SwipeableViews>
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Tabss);
