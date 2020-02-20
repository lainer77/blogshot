import React from "react";

export default function ProfileIcon(props) {
    const { src, ...others } = props;
    return (
        <img
            alt="my image"
            src={src || "/static/imageProfile.png"}
            {...others}
        />
    );
}
