import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const ExpansionPanel = withStyles({
    root: {
        border: "1px solid rgba(0, 0, 0, .125)",
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
        backgroundColor: "rgb(240 240 240)",
        borderBottom: "0px solid rgba(0, 0, 0, .125)",
        marginBottom: -1,
        minHeight: 56,
        padding: "0 20px",
        "&$expanded": {
            minHeight: 56,
            borderBottom: "1px solid rgba(0, 0, 0, .125)"
        }
    },
    content: {
        "& p": {
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "bold",
            letterSpacing: 0
        },
        "&$expanded": {
            margin: "10px 0"
        }
    },
    expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
    root: {
        padding: `0px 0`
    }
}))(MuiExpansionPanelDetails);
const Traiangle = styled.div`
    && {
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 12px solid
            ${props => {
                return `${
                    !props.expanded ? "rgb(130 130 130)" : "rgb(0 49 82)"
                }`;
            }};
        position: absolute;
        right: 20px;
        align-self: center;
        transform: ${props => {
            return `rotate(${!props.expanded ? 180 : 0}deg)`;
        }};
    }
`;
export default function CustomizedExpansionPanels(props) {
    const [expanded, setExpanded] = React.useState(false);
    const classes = props.classes;

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
        if (props.setExpanded) props.setExpanded(newExpanded ? panel : false);
    };
    useEffect(() => {
        setExpanded(false);
    }, [props.expanded]);
    let is_expanded = expanded === `panel1${props.datas[0].title}`;
    if (!Array.isArray(props.children))
        return (
            <ExpansionPanel
                square
                expanded={expanded === `panel1${props.datas[0].title}`}
                onChange={handleChange(`panel1${props.datas[0].title}`)}
                classes={{
                    root: classes.rootRoot
                }}
            >
                <ExpansionPanelSummary
                    classes={{
                        root: classes.summaryRoot,
                        content: classes.summaryContent
                    }}
                    aria-controls={`panel1d-content-${props.datas[0].title}`}
                    id={`panel1d-header-${props.datas[0].title}`}
                >
                    <Typography>
                        {(props.datas[0] && props.datas[0].title) || ""}
                    </Typography>
                    <Traiangle expanded={is_expanded}></Traiangle>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>{props.children}</ExpansionPanelDetails>
                {/* <ExpansionPanelDetails>{child}</ExpansionPanelDetails> */}
            </ExpansionPanel>
        );
    return (
        <div>
            {props.children.map((child, index) => {
                let is_expanded = expanded === `panel${index + 1}`;
                return (
                    <ExpansionPanel
                        square
                        key={`panel${index + 1}d`}
                        expanded={expanded === `panel${index + 1}`}
                        onChange={handleChange(`panel${index + 1}`)}
                    >
                        <ExpansionPanelSummary
                            aria-controls={`panel${index + 1}d-content`}
                            id={`panel${index + 1}d-header`}
                        >
                            <Typography>
                                {(props.datas[index] &&
                                    props.datas[index].title) ||
                                    ""}
                            </Typography>
                            <Traiangle expanded={is_expanded}></Traiangle>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>{child}</ExpansionPanelDetails>
                        {/* <ExpansionPanelDetails>{child}</ExpansionPanelDetails> */}
                    </ExpansionPanel>
                );
            })}
        </div>
    );
}
