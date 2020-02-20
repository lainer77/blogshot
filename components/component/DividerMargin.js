import React from "react";
import { Divider } from "@material-ui/core";

export default function DividerMargin(props) {
    return (
        <Divider
            style={{
                marginTop: props.top,
                marginLeft: props.left,
                marginBottom: props.bottom,
                marginRight: props.right,
                ...props.style
            }}
        />
    );
}
