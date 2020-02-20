import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, List } from "@material-ui/core";
import Divider from "../component/DividerMargin";

import { pTr } from "../../styles/typography";
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        height: "100%",
        // width: "100%",
        padding: 0
    },
    list: {
        // margin: "-1.5em",
        width: "100%",
        position: "relative",
        overflow: "auto",
        padding: 0
    },
    ul: {
        padding: 0
    },
    li: {
        padding: 0,
        display: "block"
    },
    item: { padding: 0 }
}));

export default props => {
    const classes = useStyles();
    const {
        limit,
        liProps,
        ulProps,
        itemProps,
        lineProps,
        linedisable,
        listProps,
        disbutton
    } = props;
    let resultList = [];
    let keyChildren;
    if (props.children != null) keyChildren = Object.keys(props.children);
    if (props.children != null && keyChildren[0] != "$$typeof")
        keyChildren.map((item, index) => {
            if (limit ? index < limit : true)
                resultList.push(
                    <li
                        className={classes.li}
                        key={`section-${index}`}
                        {...liProps}
                    >
                        <ul className={classes.ul} {...ulProps}>
                            <ListItem
                                className={classes.item}
                                button={!disbutton}
                                {...itemProps}
                            >
                                {props.children[item]}
                            </ListItem>
                            {!linedisable && keyChildren.length - 1 != index ? (
                                <Divider left={pTr(20)} {...lineProps} />
                            ) : null}
                        </ul>
                    </li>
                );
        });
    return (
        <List className={classes.list} {...listProps}>
            {resultList}
        </List>
    );
};
