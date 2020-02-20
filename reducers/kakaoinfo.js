import {
    SET_KAKAO_INFO,
    SET_KAKAO_LOGIN,
    SET_KAKAO_LOGOUT,
    FIXED_LOGIN,
    LOGIN_TOKEN_CHECK
} from "../actions/types";
import {
    set_cookie,
    set_loading,
    set_message,
    message_open
} from "./utilsinfo";
import api from "../logic/asMedicoAPI";

const initialState = {
    is_login: false,
    login: null,
    is_validateNo: false
};

export function set_kakao_logout(loginkey) {
    return (dispatch, getState) => {
        set_loading(true)(dispatch, getState);
        api.postKey(null, "/My/logout", loginkey)
            .then(response => {
                set_message("로그아웃 되었습니다.")(dispatch, getState);
                dispatch({
                    type: SET_KAKAO_LOGOUT
                });
                localStorage.removeItem("jwt_token");
                localStorage.removeItem("photo_url");
            })
            .catch(err => {
                console.error(err);
                set_loading(false)(dispatch, getState);
                localStorage.removeItem("jwt_token");
                localStorage.removeItem("photo_url");
                dispatch({
                    type: SET_KAKAO_LOGOUT
                });
            });
    };
}
export function set_kakao_info(data, msg) {
    return (dispatch, getState) => {
        let params = data;
        let jwt_token =
            getState().kakaoinfo.login.jwt_token ||
            localStorage.getItem("jwt_token");
        if (!jwt_token) {
            set_kakao_logout(data)(dispatch, getState);
        } else {
            params.jwt_token = jwt_token;
        }
        api.post(params, "/kakao/signupComplete")
            .then(response => {
                message_open(
                    msg ||
                        response.data.msg ||
                        response.data["application/json"].msg
                )(dispatch, getState);
                dispatch({
                    type: SET_KAKAO_INFO,
                    payload: {
                        loginInfo: {
                            kakaoProp: response.data.msg.kakaoProp
                        }
                    }
                });
            })
            .catch(err => {
                // console.error(err);
            });
    };
}
export function validate_token(token, noLogout) {
    return async (dispatch, getState) => {
        let params = {};
        let jwt_token = token || localStorage.getItem("jwt_token");
        if (!jwt_token) return false;
        params.jwt_token = jwt_token;
        let response;
        let is_validateNo = false;
        try {
            response = await api.post(params, "/kakao/validateToken");
            if (response.data.code === 1) {
                is_validateNo = true;
                if (!noLogout) set_kakao_logout(jwt_token)(dispatch, getState);
            }
            dispatch({
                type: LOGIN_TOKEN_CHECK,
                payload: {
                    is_validateNo: is_validateNo
                }
            });
        } catch (error) {
            console.error(error);
        }

        return is_validateNo;
    };
}
export function set_kakao_login(data) {
    return async (dispatch, getState) => {
        if (!localStorage.getItem("jwt_token")) {
            let response = await api.post(data, "/kakao/login");

            set_cookie("jwt_token", response.data.msg.jwt_token)(
                dispatch,
                getState
            );
            if (response.data.msg.kakaoProp)
                set_cookie(
                    "kakaoProp",
                    JSON.stringify(response.data.msg.kakaoProp)
                )(dispatch, getState);
            if (response.data.msg.kakaoProp)
                set_cookie("photo_url", response.data.msg.kakaoProp.photo_url)(
                    dispatch,
                    getState
                );

            // const valid = await validate_token(response.data.msg.jwt_token)(
            //     dispatch,
            //     getState
            // );

            dispatch({
                type: SET_KAKAO_LOGIN,
                payload: {
                    loginInfo: {
                        jwt_token: response.data.msg.jwt_token,
                        kakaoProp: response.data.msg.kakaoProp,
                        is_login: false
                    }
                }
            });
        }
    };
}
export function get_kakao_info(response) {
    return (dispatch, getState) => {};
}

const index = (state = initialState, action) => {
    switch (action.type) {
        case SET_KAKAO_INFO:
            return {
                ...state,
                login: {
                    ...state.login,
                    jwt_token: action.payload.loginInfo.jwt_token,
                    kakaoProp: action.payload.loginInfo.kakaoProp && {
                        ...state.login.kakaoProp,
                        ...action.payload.loginInfo.kakaoProp
                    }
                },
                is_login: true
            };
        case FIXED_LOGIN:
            return {
                ...state,
                login: {
                    ...state.login,
                    jwt_token: action.payload.loginInfo.jwt_token
                },
                is_login: true
            };
        case SET_KAKAO_LOGIN:
            return {
                ...state,
                login: {
                    ...state.login,
                    jwt_token: action.payload.loginInfo.jwt_token,
                    kakaoProp: action.payload.loginInfo.kakaoProp
                },
                is_login: true
            };
        case SET_KAKAO_LOGOUT:
            return {
                ...state,
                login: {
                    ...state.login,
                    jwt_token: null,
                    kakaoProp: null
                },
                is_login: false
            };
        case LOGIN_TOKEN_CHECK:
            return {
                ...state,
                is_validateNo: action.payload.is_validateNo || false
            };
        default:
            return state;
    }
};

export default index;
