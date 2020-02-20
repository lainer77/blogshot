import React from "react";

export default function HomeIcon(props) {
    return (
        <img
            style={props.style}
            src={
                props.color == "black"
                    ? "/static/iconHome.png"
                    : "/static/iconHomeW.png"
            }
            alt="my image"
        />
    );
}
