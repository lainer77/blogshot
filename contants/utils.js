import window from "global";

export function TextLoder(text) {
    return text.split("\n").map((line, i) => {
        return (
            <span key={i + "area"}>
                {line}
                <br />
            </span>
        );
    });
}
export function deviceAgent(navigator) {
    var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기

    if (varUA.match("android") != null) {
        return "android";
    } else if (varUA.indexOf("iphone") > -1) {
        return "iphone";
    } else if (varUA.indexOf("ipad") > -1) {
        return "ipad";
    } else if (varUA.indexOf("ipod") > -1) {
        //IOS 일때 처리
        return "ipod";
    } else {
        //아이폰, 안드로이드 외 처리
        return null;
    }
}
export function scratch(text) {
    let subTxt = text.substr(1);
    return text.replace(subTxt, "**");
}
export function scratch2(text = "") {
    let subTxt = text.substr(1, text.length);
    let ret = "";
    if (typeof subTxt === "string") {
        if (text[0] == " " || text[0] == "(" || text[0] == ")") ret += text[1];
        else ret += text[0];
        for (let index = 0; index < subTxt.length; index++) {
            if (
                subTxt[index] != " " &&
                subTxt[index] != "병" &&
                subTxt[index] != "원" &&
                subTxt[index] != "의" &&
                subTxt[index] != "한"
            )
                ret += "*";
            else {
                ret += subTxt[index];
            }
        }
    }
    return ret;
    //  return text.replace(subTxt, "*");
}
export function all_scratch(data) {
    if (typeof data === "string") return scratch(data);
    else if (typeof data === "object") {
        let scratchData = {};

        Object.keys(data).map(x => {
            if (typeof data[x] === "string") {
                scratch(data[x]);
            }
        });
        return scratchData;
    } else if (Array.isArray(data)) {
        let scratchData = [];
        scratchData = data.map(x => {
            if (typeof x === "string") return scratch(x);
        });
        return scratchData;
    }
}

// Safari 3.0+ "[object HTMLElementConstructor]"
export const isSafari =
    /constructor/i.test(window.HTMLElement) ||
    (function(p) {
        return p.toString() === "[object SafariRemoteNotification]";
    })(
        !window["safari"] ||
            (typeof safari !== "undefined" && safari.pushNotification)
    );

export const isChrome =
    !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
