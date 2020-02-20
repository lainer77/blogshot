import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

import { pTr } from "../../styles/typography";

import Divider from "../component/DividerMargin";
import ListOpenIcon from "../Icon/ListOpenIcon";

const useStyles = makeStyles(theme => ({
    details: {
        alignItems: "center",
        backgroundColor: "rgb(242 246 251)"
    },
    column: {
        flexBasis: "33.33%"
    },
    link: {
        color: "rbg(22 147 255)",
        padding: `${pTr(8)} 0`,
        textAlign: "center",
        // textDecoration: "none",
        textDecoration: "underline"
    },
    heading: {
        "& span": {
            fontWeight: "bold"
        }
    }
}));

const ExpansionPanel = withStyles({
    root: {
        width: "100%",
        padding: 0,
        margin: 0,
        boxShadow: "none",
        "&:not(:last-child)": {
            borderBottom: 0
        },
        "&:before": {
            display: "none"
        },
        "&$expanded": {
            margin: "auto"
        }
    },
    expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        width: "100%",
        maxWidth: "1024px",
        padding: 0,
        margin: 0,
        marginBottom: pTr(9),
        // marginBottom: -1,
        minHeight: pTr(20),
        "&$expanded": {
            minHeight: pTr(20)
        },
        "& div": {
            margin: 0,
            padding: 0
        }
    },
    content: {
        "&$expanded": {
            margin: 0
        }
    },
    expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
    root: {
        padding: 0,
        maxWidth: "1024px",
        verticalAlign: "middle",
        display: "block",
        textAlign: "center",
        backgroundColor: "rgb(242 246 251)"
    }
}))(MuiExpansionPanelDetails);
function ControlledExpansionPanels(props) {
    const classes = useStyles();
    const { expanded, setExpanded } = props;
    const [icon, setIcon] = useState(expanded);
    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        setIcon(isExpanded ? panel : false);
    };
    return (
        <div>
            <ExpansionPanel
                expanded={expanded === props.pannelName}
                onChange={handleChange(props.pannelName)}
            >
                <ExpansionPanelSummary
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                >
                    <div className={classes.heading}>{props.children}</div>
                    <ListOpenIcon
                        style={{
                            marginLeft: pTr(10),
                            marginTop: pTr(6),
                            width: pTr(14),
                            height: pTr(9),
                            transform: `rotate(${expanded ? 0 : 0.5}turn)`
                        }}
                    />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                    <div className={classes.column}>{props.leftContent}</div>
                </ExpansionPanelDetails>
                <Divider left={pTr(-20)} right={pTr(-20)} />

                {/* <ExpansionPanelDetails
                    style={{
                        padding: `${pTr(8)} ${0}`
                    }}
                >
                    <Typography variant="caption">
                        <a
                            className={classes.link}
                            onClick={
                                props.setLimitFull ? props.setLimitFull : null
                            }
                        >
                            모두 보기
                        </a>
                    </Typography>
                </ExpansionPanelDetails> */}
                <Divider left={pTr(-20)} right={pTr(-20)} />
            </ExpansionPanel>
        </div>
    );
}
export default React.memo(ControlledExpansionPanels);
