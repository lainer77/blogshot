import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, List } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        height: "100%",
        width: "100%",
        padding: 0
    },
    list: {
        width: "100%",
        position: "relative",
        overflow: "auto",
        padding: 0
    },
    ul: {
        width: "100%",
        padding: 0
    },
    li: {
        width: "100%",
        padding: 0
    },
    item: { padding: 0 }
}));
export default props => {
    const classes = useStyles();

    let resultList;
    if (props.children ? props.children.length > 1 : false)
        resultList = props.children.map((child, index) => (
            <li className={classes.li} key={`section-${index}`}>
                <ul className={classes.ul}>
                    <ListItem className={classes.item}>{child}</ListItem>
                </ul>
            </li>
        ));
    else
        resultList = (
            <li className={classes.li}>
                <ul className={classes.ul}>
                    <ListItem className={classes.item}>
                        {props.children}
                    </ListItem>
                </ul>
            </li>
        );
    return <List className={classes.list}>{resultList}</List>;
};
