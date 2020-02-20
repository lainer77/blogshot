const maxlen = 10;
const minlen = 3;
export const required = params => {};

export const maxlength = params => {
    if (params.length > maxlen) {
        params = params.substring(0, maxlen);
    }
};

export const minlength = params => {
    if (params.length < minlen) {
        params = params.substring(0, maxlen);
    }
};

export const checkspecialchar = str => {
    var iChars = "~`!#$%^&*+=-[]\\';,/{}|\":<>?";

    for (var i = 0; i < str.length; i++) {
        if (iChars.indexOf(str.charAt(i)) != -1) {
            alert("특수문자는 입력할 수 없습니다.");
            return false;
        }
    }
    return true;
};

export const trim = (str, chars) => {
    return ltrim(rtrim(str, chars), chars);
};

export const ltrim = (str, chars) => {
    chars = chars || "\\s";
    return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
};

export const rtrim = (str, chars) => {
    chars = chars || "\\s";
    return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
};
