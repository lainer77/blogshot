import React from "react";

import { pTr } from "../../styles/typography";

export default function FilterIcon(props) {
    return props.on ? (
        <img
            style={{
                // padding: `${pTr(7)} ${0} ${pTr(10)} ${pTr(10)}`,
                width: pTr(22),
                height: pTr(22)
            }}
            src="/static/filterOn.png"
            alt="my image"
        />
    ) : (
        <img
            style={{
                // padding: `${pTr(7)} ${0} ${pTr(10)} ${pTr(10)}`,
                width: pTr(22),
                height: pTr(22)
            }}
            src="/static/filterOff.png"
            alt="my image"
        />
    );
}
