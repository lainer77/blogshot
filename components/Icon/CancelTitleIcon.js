import React from "react";
import { pTr } from "../../styles/typography";

export default function CancelTitleIcon(props) {
    return (
        <img
            style={{ width: pTr(20), height: pTr(20) }}
            src="/static/closeTitle.png"
            alt="my image"
        />
    );
}
