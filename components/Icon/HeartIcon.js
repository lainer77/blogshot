import React from "react";

export default function HeartIcon(props) {
    return props.selected ? (
        <img style={props.style} src="/static/blueHeart.png" alt="my image" />
    ) : (
        <img style={props.style} src="/static/redHeart.png" alt="my image" />
    );
}
