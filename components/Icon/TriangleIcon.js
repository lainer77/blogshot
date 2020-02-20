import React from "react";

export default function TriangleIcon(props) {
    return props.direction != "left" ? (
        <img
            style={props.style}
            src="/static/btnTriangleLeft.png"
            alt="my image"
        />
    ) : (
        <img
            style={props.style}
            src="/static/btnTriangleRight.png"
            alt="my image"
        />
    );
}
