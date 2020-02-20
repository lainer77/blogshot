import React, { memo } from "react";

export default memo(
    function BookMarkIcon({ is_check = false, ...others }) {
        return (
            <img
                src={`/static/iconBookmark${is_check ? "S" : ""}3x.png`}
                alt="my image"
                {...others}
            />
        );
    },
    (a, b) => {
        return !(a.is_check != b.is_check);
    }
);
