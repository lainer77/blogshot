import React, { useState, useEffect } from "react";
import { IconButton } from "@material-ui/core";
import { animateScroll as scroll } from "react-scroll";
import { getWindow } from "../../styles/typography";

export default function TopIcon(props) {
    const [right, setRight] = useState(0);

    useEffect(() => {
        if (getWindow().innerWidth > 1024)
            setRight((parseInt(getWindow().innerWidth) - 1024) / 2);
    }, [getWindow().innerWidth]);
    return (
        <IconButton
            style={{
                position: "fixed",
                maxWidth: "1024px",
                bottom: "0px",
                right: right,
                zIndex: 10,
                ...props.style
            }}
            onClick={x => {
                scroll.scrollToTop({ to: "top", duration: 500 });
            }}
        >
            <img
                style={{
                    width: "60px",
                    height: "60px",
                    ...props.style
                }}
                {...props}
                src="/static/btnTop.png"
                alt="my image"
            />
        </IconButton>
    );
}
