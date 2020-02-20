import React, { useEffect, useState } from "react";
var refreshIntervalId;
var is_loading = true;

let imags = [];
const ani_length = 12;
const ani_speed = 100;

export default function LoadIcon(props) {
    const { loading, ...others } = props;
    const [index, setIndex] = useState(0);
    let count = 1;
    is_loading = loading;
    useEffect(() => {
        if (imags.length <= 0)
            for (let index = 1; index <= ani_length; index++) {
                imags.push(
                    <img
                        {...others}
                        src={`/static/loadies/medico-loading-ani${(index < 10
                            ? "0"
                            : "") + index}.png`}
                        alt="my image"
                    />
                );
            }
    }, []);
    useEffect(() => {
        if (is_loading) {
            refreshIntervalId = setInterval(
                () => {
                    if (!is_loading) {
                        clearInterval(refreshIntervalId);
                    }
                    // setImage(imags[count++ - 1]);
                    setIndex(count++ - 1);
                    if (count > ani_length) count = 1;
                },
                ani_speed,
                is_loading
            );
        }
        return () => {
            clearInterval(refreshIntervalId);
        };
    }, [loading]);
    if (imags.length <= 0)
        return (
            <img
                {...others}
                src="/static/loadies/medico-loading-ani01.png"
                alt="my image"
            />
        );
    return imags[index];
}
