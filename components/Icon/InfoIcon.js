import React from "react";

import { pTr } from "../../styles/typography";

export default function InfoIcon(props) {
    return (
        <img
            style={props ? props.style : { width: pTr(17), height: pTr(17) }}
            src="/static/iconInfo3x.png"
            alt="my image"
        />
    );
}
