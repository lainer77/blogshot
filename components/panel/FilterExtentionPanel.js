import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

import { pTr } from "../../styles/typography";
const ExpansionPanel = withStyles({
    root: {
        boxShadow: "none",
        "&:not(:last-child)": {
            borderBottom: 0
        },
        "&:before": {
            display: "none"
        },
        "&$expanded": {
            // margin: "auto"
        }
    },
    expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: "white",
        marginBottom: -1,
        padding: 0,
        // position: "static",
        "&$expanded": {
            margin: 0,
            padding: 0
        }
    },
    content: {
        margin: 0,
        "&$expanded": {
            margin: `${pTr(12)} 0`
        }
    },
    expanded: {
        "&$expanded": {
            margin: 0,
            padding: 0
        }
    }
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
    root: {
        borderTop: `1px solid lightgrey`,
        padding: 0
    }
}))(MuiExpansionPanelDetails);

export default function CustomizedExpansionPanels(props) {
    return (
        <div>
            <ExpansionPanel
                expanded={props.expanded}
                // role={{ opensearch: props.openSearch }}
            >
                <ExpansionPanelSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                >
                    {props.Summary}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>{props.Details}</ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}
