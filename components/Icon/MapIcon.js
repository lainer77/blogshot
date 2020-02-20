import React from "react";

import { pTr } from "../../styles/typography";

export default function MapIcon(props) {
    return (
        <img
            style={
                props.style ? props.style : { width: pTr(10), height: pTr(14) }
            }
            src="/static/map.png"
            alt="my image"
        />
    );
}
