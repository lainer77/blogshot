import React from "react";

export default function ImageTips(props) {
    switch (props.id) {
        case 1:
            return (
                <img
                    style={props.style}
                    src="/static/imageTips01.png"
                    alt="my image"
                />
            );
        case 2:
            return (
                <img
                    style={props.style}
                    src="/static/imageTips02.png"
                    alt="my image"
                />
            );
        case 3:
            return (
                <img
                    style={props.style}
                    src="/static/imageTips03.png"
                    alt="my image"
                />
            );
        case 4:
            return (
                <img
                    style={props.style}
                    src="/static/imageTips04.png"
                    alt="my image"
                />
            );
        default:
            return (
                <img
                    style={props.style}
                    src="/static/imageTips01.png"
                    alt="my image"
                />
            );
    }
}
