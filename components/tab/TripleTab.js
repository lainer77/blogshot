import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Divider, Typography, Box, Tab, Tabs } from "@material-ui/core";
import { pTr, BASE_COLOR } from "../../styles/typography";

const AntTabs = withStyles(theme => ({
    root: {
        flexGrow: 1,
        borderBottom: `1.5px solid #e8e8e8`,
        backgroundColor: theme.palette.background.paper,
        height: pTr(36)
    },
    indicator: {
        backgroundColor: BASE_COLOR,
        height: pTr(3)
    }
}))(Tabs);

const AntTab = withStyles(theme => ({
    root: {
        textTransform: "none",
        letterSpacing: 0,
        fontSize: pTr(14),
        color: "rgb(93 93 93)",
        "&:focus": {
            color: BASE_COLOR,
            fontWeight: "bold"
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
        <Typography
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
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

export default function TripleTab(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
        if (props.handleChange) {
            props.handleChange(newValue);
        }
    }

    return (
        <div className={classes.root}>
            <div className={classes.box}>
                <Divider />
                <AntTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="ant"
                    variant="fullWidth"
                >
                    <AntTab
                        label={props.leftTitle ? props.leftTitle : "개요"}
                    />
                    <AntTab
                        label={props.middleTitle ? props.middleTitle : "위치"}
                    />
                    <AntTab
                        label={props.rightTitle ? props.rightTitle : "리뷰"}
                    />
                </AntTabs>
                <TabPanel value={value} index={0} boxColor={props.boxColor}>
                    {props.contentA ? props.contentA : null}
                </TabPanel>
                <TabPanel value={value} index={1} boxColor={props.boxColor}>
                    {props.contentB ? props.contentB : null}
                </TabPanel>
                <TabPanel value={value} index={2} boxColor={props.boxColor}>
                    {props.contentC ? props.contentC : null}
                </TabPanel>
            </div>
        </div>
    );
}
