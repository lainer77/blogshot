import React from "react";

export default function StarBigIcon(props) {
    return props.selected ? (
        <img
            style={props.style}
            src="/static/starBigSelect.png"
            alt="my image"
        />
    ) : (
        <img style={props.style} src="/static/starBig.png" alt="my image" />
    );
}
