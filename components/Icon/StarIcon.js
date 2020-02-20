import React from "react";

export default function StarIcon(props) {
    return props.selected ? (
        <img style={props.style} src="/static/starSelect.png" alt="my image" />
    ) : (
        <img style={props.style} src="/static/star.png" alt="my image" />
    );
}
