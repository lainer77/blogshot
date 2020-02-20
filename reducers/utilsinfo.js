import {
    SET_MESSAGE,
    MESSAGE_OPEN,
    MESSAGE_CLOSE,
    SET_COOKIE,
    ADD_COOKIE,
    RMV_COOKIE,
    SUB_COOKIE,
    GET_COOKIE_ALL,
    LOADING_OPEN,
    LOADING_CLOSE,
    SET_ERROR,
    ERROR_OPEN,
    ERROR_CLOSE,
    SET_WHETHER,
    WHETHER_OPEN,
    WHETHER_CLOSE,
    WHETHER_RESULT
} from "../actions/types";

const initialState = {
    msg: "",
    open: false,
    cookies: { recent: [] },
    loading: false,
    is_error: false,
    errorObj: {
        code: null,
        ok: null,
        cancel: null,
        msg: null
    },
    is_whether: false,
    whetherObj: {
        code: null,
        ok: null,
        cancel: null,
        msg: null,
        value: null
    },
    whetherResult: {
        value: null,
        state: null
    }
};
export const get_cookie_all = datas => {
    return async (dispatch, getState) => {
        let cookies = getState().utilsinfo.cookies;

        Object.keys(datas).map(item => {
            if (cookies[item]) cookies[item] = JSON.parse(datas[item]);
        });
        dispatch({ type: GET_COOKIE_ALL, payload: { cookies } });
    };
};

export const set_cookie = (name, value, path) => {
    return async (dispatch, getState) => {
        // document.cookie = `${name}=${encodeURIComponent(value) ||
        //     ""}; path=${path | "/"}`;
        if (value && value != null && value != "null")
            localStorage.setItem(name, value);
    };
};
export const add_cookie = (name, value, path) => {
    return async (dispatch, getState) => {
        let cookies = getState().utilsinfo.cookies;
        let valueJSON;
        let tem = cookies[name];
        if (cookies[name]) {
            if (cookies[name][0] == value) return;
            cookies[name].unshift(value);
            tem = tem.filter(function(item, pos, self) {
                return self.indexOf(item) == pos;
            });
            if (tem.length > 10) tem.pop();
            valueJSON = JSON.stringify(tem);
        }
        // document.cookie = `${name}=${encodeURIComponent(valueJSON || value) ||
        //     ""}; path=${path | "/"}`;
        localStorage.setItem(name, valueJSON || value);
        cookies[name] = tem;
        dispatch({ type: GET_COOKIE_ALL, payload: { cookies } });
    };
};
export const get_cookie = name => {
    console.log(document.cookie);
};

export const set_loading = bOl => {
    return (dispatch, getState) => {
        if (bOl) dispatch({ type: LOADING_OPEN });
        else dispatch({ type: LOADING_CLOSE });
    };
};

export const set_message = text => {
    return (dispatch, getState) => {
        dispatch({ type: SET_MESSAGE, payload: { text: text } });
    };
};
export const message_open = text => {
    return (dispatch, getState) => {
        let obj = {};
        obj["type"] = MESSAGE_OPEN;
        if (text && text != "") obj["payload"] = { text: text };
        else obj["payload"] = { text: getState().utilsinfo.msg };

        if (obj["payload"].text != "") dispatch(obj);
    };
};
export const message_close = () => {
    return (dispatch, getState) => {
        dispatch({ type: MESSAGE_CLOSE });
    };
};

export const set_error = text => {
    return (dispatch, getState) => {
        dispatch({ type: SET_ERROR, payload: { text: text } });
    };
};
export const error_open = obj => {
    return (dispatch, getState) => {
        let objs = {};
        objs["type"] = ERROR_OPEN;
        if (obj && typeof obj === "object") objs["payload"] = { obj: obj };
        else objs["payload"] = { obj: getState().utilsinfo.errorObj };

        if (objs["payload"].text != "") dispatch(objs);
    };
};
export const error_close = () => {
    return (dispatch, getState) => {
        dispatch({ type: ERROR_CLOSE });
    };
};

export const set_whether = text => {
    return (dispatch, getState) => {
        dispatch({ type: SET_WHETHER, payload: { text: text } });
    };
};
export const whether_result = result => {
    return (dispatch, getState) => {
        dispatch({
            type: WHETHER_RESULT,
            payload: {
                result: {
                    value: result ? result.value : null,
                    state: result ? result.state : null
                }
            }
        });
    };
};
export const whether_open = obj => {
    return (dispatch, getState) => {
        let objs = {};
        objs["type"] = WHETHER_OPEN;
        if (obj && typeof obj === "object") objs["payload"] = { obj: obj };
        else objs["payload"] = { obj: getState().utilsinfo.whetherObj };

        if (objs["payload"].text != "") dispatch(objs);
    };
};
export const whether_close = result => {
    return (dispatch, getState) => {
        let obj = { type: WHETHER_CLOSE };
        dispatch(obj);
    };
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGE:
            return {
                ...state,
                msg: action.payload ? action.payload.text : state.msg
            };
        case MESSAGE_OPEN:
            return {
                ...state,
                msg: action.payload ? action.payload.text : state.msg,
                open: true
            };
        case MESSAGE_CLOSE:
            return {
                ...state,
                msg: "",
                open: false
            };
        case SET_ERROR:
            return {
                ...state,
                errorObj: action.payload ? action.payload.obj : state.errorObj
            };
        case ERROR_OPEN:
            return {
                ...state,
                errorObj: action.payload ? action.payload.obj : state.errorObj,
                is_error: true
            };
        case ERROR_CLOSE:
            return {
                ...state,
                errorObj: {
                    code: null,
                    ok: null,
                    cancel: null,
                    msg: ""
                },
                is_error: false
            };
        case SET_WHETHER:
            return {
                ...state,
                whetherObj: action.payload
                    ? action.payload.obj
                    : state.whetherObj
            };
        case WHETHER_OPEN:
            return {
                ...state,
                whetherObj: action.payload
                    ? action.payload.obj
                    : state.whetherObj,
                is_whether: true
            };
        case WHETHER_CLOSE:
            return {
                ...state,
                whetherObj: {
                    code: null,
                    ok: null,
                    cancel: null,
                    msg: ""
                },
                is_whether: false
            };
        case WHETHER_RESULT:
            return {
                ...state,
                whetherResult: action.payload.result
            };
        case LOADING_OPEN:
            return {
                ...state,
                loading: true
            };
        case LOADING_CLOSE:
            return {
                ...state,
                loading: false
            };
        case SET_COOKIE:
            return {
                ...state,
                cookies: {
                    ...state.cookies,
                    [action.payload.name]: action.payload.cookie || {
                        name: action.payload.name,
                        data: action.payload.data
                    }
                }
            };
        case ADD_COOKIE:
            return {
                ...state,
                cookies: state.cookies.map(x => {
                    if (x.name !== action.payload.cookie.name) return x;

                    return {
                        ...x,
                        data: [...x.data, action.payload.data]
                    };
                })
            };
        case SUB_COOKIE:
            return {
                ...state,
                cookies: state.cookies.map(x => {
                    if (x.name !== action.payload.cookie.name) return x;

                    return {
                        ...x,
                        data: [...x.data.filter(x => x !== action.payload.data)]
                    };
                })
            };
        case RMV_COOKIE:
            return {
                ...state,
                cookies: state.cookies.filter(
                    x =>
                        x.name !==
                        (action.payload.name || action.payload.cookie.name)
                )
            };
        case GET_COOKIE_ALL:
            return {
                ...state,
                cookies: {
                    ...state.cookies,
                    ...action.payload.cookies
                }
            };
        default:
            return state;
    }
};
