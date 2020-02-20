import React from "react";

export default function BackIcon(props) {
    return (
        <img
            style={props.style}
            src={
                props.color == "black"
                    ? "/static/iconBack3x.png"
                    : "/static/iconBack3xW.png"
            }
            alt="my image"
        />
    );
}
