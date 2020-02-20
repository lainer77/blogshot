import {
    SET_HOSPITAL_LIST,
    ADD_HOSPITAL_LIST,
    SELECTED_HOSPITAL,
    SELECTED_HOSPITAL_SUCCESS,
    SELECTED_HOSPITAL_FAILURE,
    EXTENTION_HOSPITAL,
    HOSPITAL_AREA_FILTER_APPLY,
    HOSPITAL_FILTER_CLEAR,
    HOSPITAL_REVIEW_LIST,
    HOSPITAL_REVIEW_LIST_SUCCESS,
    HOSPITAL_REVIEW_LIST_FAILURE,
    GET_HOSPITAL_ALL_REVIEW,
    RMV_HOSPITAL_LIST
} from "../actions/types";
import axios from "axios";
import { BASE_URL, API_TIME_OUT } from "../contants/constants";
import Router from "next/router";

import {
    set_loading,
    set_message,
    message_open,
    message_close
} from "./utilsinfo";
import { set_kakao_logout } from "./kakaoinfo";
import {
    get_area_requset,
    get_medical_departments_requset,
    get_medical_universities_requset
} from "./searchinfo";
import {
    set_doctor_list,
    area_filter_apply as doctor_area_filter_apply,
    department_filter_apply,
    universitie_filter_apply
} from "./doctorinfo";

import { errorExcute } from "../logic/errorLogic";

const initialState = {
    list_hospital: [],
    filter_hospital: [],
    extend_doctor_list: [],
    extended_hospital_id: null,
    cnt_hospital: 0,
    cnt_hospital_filter: 0,
    is_filter: { area: false },
    selected_hospital_id: null,
    data: {},
    selected_state: "wait", // success, failure, wait, try,
    // extention_hospital_id:

    hospital_review_list: [],
    hospital_review_state: "stay"
};

export function set_hospital_state(prams) {
    return (dispatch, getState) => {};
}
export const hospitalState = {
    setState: set_hospital_state,
    state: initialState
};
function getAPI(id, exUrl, key, token) {
    return axios.get(`https://${BASE_URL}/hospital/${id}${exUrl || ""}`, {
        params: { token },
        headers: token
            ? {}
            : {
                  // 요청 헤더
                  "X-Api-Key": key
              },
        timeout: API_TIME_OUT / 2 // 15초 이내에 응답이 오지 않으면 에러로 간주
    });
}
function getAPI2(id, options) {
    return axios.get(`https://${BASE_URL}/search/doctors/in_hospital/${id}`, {
        params: options,
        headers: {
            // 요청 헤더
        },
        timeout: API_TIME_OUT / 2 // 15초 이내에 응답이 오지 않으면 에러로 간주
    });
}
function getAPIAsync(id, options) {
    let response;
    response = axios.get(
        `https://${BASE_URL}/search/doctors/in_hospital/${id}`,
        {
            params: options,
            headers: {
                // 요청 헤더
            },
            timeout: API_TIME_OUT / 2 // 15초 이내에 응답이 오지 않으면 에러로 간주
        }
    );

    return response;
}
const getAPI3 = (type, types, loginkey, token) => {
    const encodeForm = data => {
        return Object.keys(data)
            .map(
                key =>
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(data[key])
            )
            .join("&");
    };
    if (type == "post") {
        return axios.post(
            `https://${BASE_URL}/my/review${types[type].url}`,
            encodeForm(types[type].data),
            {
                params: { token },
                headers: token
                    ? {}
                    : {
                          // 요청 헤더
                          "X-Api-Key": loginkey
                      },
                timeout: API_TIME_OUT / 3 // 10초 이내에 응답이 오지 않으면 에러로 간주
            }
        );
    } else if (type == "put")
        return axios.put(
            `https://${BASE_URL}/my/review${types[type].url}`,
            encodeForm(types[type].data),
            {
                params: { token },
                headers: token
                    ? {}
                    : {
                          // 요청 헤더
                          "X-Api-Key": loginkey
                      },
                timeout: API_TIME_OUT / 3 // 10초 이내에 응답이 오지 않으면 에러로 간주
            }
        );
    else if (type == "del")
        return axios.delete(`https://${BASE_URL}/my/review${types[type]}`, {
            params: { token },
            headers: token
                ? {}
                : {
                      // 요청 헤더
                      "X-Api-Key": loginkey
                  },
            timeout: API_TIME_OUT / 3 // 10초 이내에 응답이 오지 않으면 에러로 간주
        });
    return axios.get(`https://${BASE_URL}/my/review/hospital/getAll`, {
        params: { token },
        headers: token
            ? {}
            : {
                  // 요청 헤더
                  "X-Api-Key": loginkey
              },
        timeout: API_TIME_OUT / 3 // 10초 이내에 응답이 오지 않으면 에러로 간주
    });
};

export const hospital_review_request = (
    type,
    review_id,
    data,
    is_selected_hospital = true
) => {
    return (dispatch, getState) => {
        let jwt_token;
        if (getState().kakaoinfo.login)
            jwt_token =
                getState().kakaoinfo.login.jwt_token ||
                localStorage.getItem("jwt_token");
        let token;
        if (Router.query.token && !getState().kakaoinfo.is_login)
            token = Router.query.token;

        set_loading(true)(dispatch, getState);
        const types = {
            get: "/hospital/getAll",
            post: {
                url: `/hospital/${getState().hospitalinfo.data.id}`,
                data: data
            },
            put: { url: `/h/${review_id || ""}`, data: data },
            del: `/h/${review_id || ""}`
        };
        dispatch({ type: HOSPITAL_REVIEW_LIST });
        getAPI3(type, types, jwt_token, token)
            .then(response => {
                let tryBol = true;
                // console.log(HOSPITAL_REVIEW_LIST_SUCCESS, type, response);
                if (type == "get") {
                    set_loading(false)(dispatch, getState);
                    if (getState().utilsinfo.msg !== "")
                        message_open()(dispatch, getState);
                    let this_hospital_data = response.data;

                    dispatch({
                        type: HOSPITAL_REVIEW_LIST_SUCCESS,
                        payload: {
                            hospital_review_list: this_hospital_data
                        }
                    });
                } else if (type == "post") {
                    if (response.data.code === 0) {
                        set_message("소중한 리뷰 감사드립니다!")(
                            dispatch,
                            getState
                        );
                        tryBol = true;
                    } else {
                        set_message(response.data.msg)(dispatch, getState);
                        tryBol = false;
                    }
                    hospital_review_request("get")(dispatch, getState);
                } else if (type == "put") {
                    if (response.data.code === 0) {
                        set_message("리뷰가 수정되었습니다!")(
                            dispatch,
                            getState
                        );
                        tryBol = true;
                    } else {
                        set_message(response.data.msg)(dispatch, getState);
                        tryBol = false;
                    }
                    hospital_review_request("get")(dispatch, getState);
                } else if (type == "del") {
                    if (response.data.code === 0) {
                        set_message("리뷰가 삭제되었습니다!")(
                            dispatch,
                            getState
                        );
                        tryBol = true;
                    } else {
                        set_message(response.data.msg)(dispatch, getState);
                        tryBol = false;
                    }
                    hospital_review_request("get")(dispatch, getState);
                }
                return tryBol;
            })
            .catch((err, req) => {
                // console.error(HOSPITAL_REVIEW_LIST_FAILURE, err, req);
                dispatch({ type: HOSPITAL_REVIEW_LIST_FAILURE });
                set_loading(false)(dispatch, getState);
                if (type === "get") {
                    message_open("리뷰 가져오기에 실패했습니다.")(
                        dispatch,
                        getState
                    );
                }
                if (type === "post") {
                    message_open("리뷰 등록하기에 실패했습니다.")(
                        dispatch,
                        getState
                    );
                }
                if (type === "del") {
                    message_open("리뷰 삭제하기에 실패했습니다.")(
                        dispatch,
                        getState
                    );
                }
                if (type === "put") {
                    message_open("리뷰 수정하기에 실패했습니다.")(
                        dispatch,
                        getState
                    );
                }
            });
    };
};
export const get_hostpital_all_review = hospital_id => {
    return (dispatch, getState) => {
        let jwt_token;
        if (getState().kakaoinfo.login)
            jwt_token = getState().kakaoinfo.login.jwt_token;
        let token;
        if (Router.query.token && !getState().kakaoinfo.is_login)
            token = Router.query.token;
        const extantionsUrl = "/review";
        getAPI(hospital_id, extantionsUrl, jwt_token, token)
            .then(response => {
                // console.log(GET_HOSPITAL_ALL_REVIEW + "_SUCCESS", response);
                dispatch({
                    type: GET_HOSPITAL_ALL_REVIEW,
                    payload: { data: response.data }
                });
            })
            .catch(err => {
                // console.error(GET_HOSPITAL_ALL_REVIEW + "_FAILURE", err);
                if (err.response) {
                    let cb;
                    let params;

                    if (err.response === 403)
                        cb = () => {
                            set_kakao_logout(jwt_token)(dispatch, getState);
                        };
                    errorExcute(err.response.status, params, cb);
                }
            });
    };
};
export function set_hospital_list(response, more) {
    return (dispatch, getState) => {
        const list_hospital = response.data.list_hospital.list;
        const cnt_hospital = response.data.list_hospital.cnt_hospital;
        const is_filter = getState().hospitalinfo.is_filter.area;

        if (!more) {
            dispatch({
                type: SET_HOSPITAL_LIST,
                payload: {
                    list_hospital: list_hospital,
                    cnt_hospital: cnt_hospital
                }
            });
        } else {
            if (is_filter) {
                const filter_hospital_list = list_hospital.filter(x =>
                    x.juso.indexOf(text) == 0 ? true : false
                );
                dispatch({
                    type: ADD_HOSPITAL_LIST,
                    payload: {
                        filter_hospital_list: filter_hospital_list
                    }
                });
            } else {
                dispatch({
                    type: ADD_HOSPITAL_LIST,
                    payload: {
                        list_hospital: response.data.list_hospital.list
                    }
                });
            }
        }
    };
}

export function area_filter_apply(text) {
    return (dispatch, getState) => {
        if (text.indexOf("전체") == 0) return;
        const list_hospital = getState().hospitalinfo.list_hospital;

        if (!list_hospital || list_hospital.length <= 0) return;
        //
        const filter_hospital_list = list_hospital.filter(x =>
            x.juso.indexOf(text) == 0 ? true : false
        );
        const filter_hospital_cnt = filter_hospital_list.length;

        const filter_hospital = filter_hospital_list;

        dispatch({
            type: HOSPITAL_AREA_FILTER_APPLY,
            payload: {
                filter_hospital: filter_hospital,
                cnt_hospital_filter: filter_hospital_cnt
            }
        });
    };
}
export function selected_hospital(id) {
    return (dispatch, getState) => {
        let jwt_token;
        if (getState().kakaoinfo.login)
            jwt_token = getState().kakaoinfo.login.jwt_token;

        let token;
        if (Router.query.token && !getState().kakaoinfo.is_login)
            token = Router.query.token;

        set_loading(true)(dispatch, getState);
        dispatch({
            type: SELECTED_HOSPITAL,
            payload: { selected_hospital_id: id }
        });
        getAPI(id, null, jwt_token, token)
            .then(response => {
                const data = response.data;
                // console.log(response);
                dispatch({
                    type: SELECTED_HOSPITAL_SUCCESS,
                    payload: { data: data }
                });
                setTimeout(() => {
                    set_loading(false)(dispatch, getState);
                }, 1000);
            })
            .catch(err => {
                // console.error(SELECTED_HOSPITAL_FAILURE, err);
                if (err.response) {
                    let cb;
                    let params;

                    if (err.response === 403)
                        cb = () => {
                            set_kakao_logout(jwt_token)(dispatch, getState);
                        };

                    errorExcute(err.response.status, params, cb);
                }
                dispatch({
                    type: SELECTED_HOSPITAL_FAILURE
                });
                set_loading(false)(dispatch, getState);
            });
    };
}
export function remove_hospital_list() {
    return dispatch => {
        dispatch({
            type: RMV_HOSPITAL_LIST
        });
    };
}

export function extention_doctor_list(id, options) {
    return async (dispatch, getState) => {
        let option = {
            offset: options ? options.offset : 0,
            limit: options ? options.limit : 5
        };

        set_loading(true)(dispatch, getState);
        getAPI2(id, option)
            .then(response => {
                const data = response.data;
                // console.log(response);
                let arg = {
                    type: EXTENTION_HOSPITAL,
                    payload: {
                        extend_doctor_list: data.list_doctor.list,
                        extended_hospital_id: id
                    }
                };
                dispatch(arg);
                set_loading(false)(dispatch, getState);
            })
            .catch(err => {
                // console.error(EXTENTION_HOSPITAL, err);
                set_loading(false)(dispatch, getState);
            });
    };
}
export function full_search_doctor_list(id, options) {
    return async (dispatch, getState) => {
        set_loading(true)(dispatch, getState);
        let option = {
            offset: options ? options.offset : 0,
            limit: options ? options.limit : 50
        };

        let response;
        let extention_doctor_list = getState().hospitalinfo
            .extention_doctor_list;
        response = {
            data: {
                list_doctor: {
                    list: null,

                    cnt_doctor: null
                }
            }
        };
        // redering deilay
        setTimeout(() => {
            if (getState().utilsinfo.loading) {
                message_open(
                    <>
                        모두 보기에 실패했습니다.
                        <br />
                        잠시 후 다시 시도해주세요.
                    </>
                )(dispatch, getState);
                Router.back();
                set_loading(false)(dispatch, getState);
            }
        }, 14000);
        if (!extention_doctor_list || extention_doctor_list.length <= 0) {
            response = await getAPIAsync(id, option);
            if (response)
                response.data.list_doctor.list = response.data.list_doctor.list.slice(
                    option.offset,
                    option.limit
                );
            else {
                set_loading(false)(dispatch, getState);
            }
        } else {
            response.data.list_doctor.list = extention_doctor_list.slice(
                option.offset,
                option.limit
            );
        }

        set_loading(false)(dispatch, getState);

        // 불필요한 병원 정보 초기화
        set_hospital_list({
            data: {
                list_hospital: {
                    list: [],
                    cnt_hospital: 0
                }
            }
        })(dispatch, getState);

        // 의사 리스트

        if (response) {
            set_doctor_list(response)(dispatch, getState);

            dispatch({
                type: "SET_CNT_TOTAL",
                payload: {
                    cnt_total: response.data.list_doctor.cnt_doctor,
                    is_local_filter: true
                }
            });
        }
    };
}
export function more_search_doctor_list(options) {
    return async (dispatch, getState) => {
        set_loading(true)(dispatch, getState);
        let id = Router.query.hospital_id;

        let option = {
            offset: options ? options.offset : 0,
            limit: options ? options.limit : 50
        };

        let response;
        let extention_doctor_list = getState().hospitalinfo
            .extention_doctor_list;
        response = {
            data: {
                list_doctor: {
                    list: null,

                    cnt_doctor: null
                }
            }
        };
        if (!extention_doctor_list || extention_doctor_list.length <= 0) {
            response = await getAPIAsync(id, option);
            // console.log(response);
            response.data.list_doctor.list = response.data.list_doctor.list.slice(
                option.offset,
                option.limit
            );
        } else {
            response.data.list_doctor.list = extention_doctor_list.slice(
                option.offset,
                option.limit
            );
        }

        getAPI2(id, option)
            .then(response => {
                const data = response.data;
                // console.log(response);
                // 불필요한 병원 정보 초기화
                set_hospital_list({
                    data: {
                        list_hospital: {
                            list: [],
                            cnt_hospital: 0
                        }
                    }
                })(dispatch, getState);

                // 의사 리스트
                set_doctor_list(response, true)(dispatch, getState);

                // 총 리스트 건수 카운트
                dispatch({
                    type: "SET_CNT_TOTAL",
                    payload: {
                        cnt_total: response.data.list_doctor.cnt_doctor,
                        is_local_filter: true
                    }
                });

                // redering deilay
                setTimeout(() => {
                    set_loading(false)(dispatch, getState);
                }, 1500);

                set_loading(false)(dispatch, getState);
            })
            .catch(err => {
                // console.error(EXTENTION_HOSPITAL, err);
                set_loading(false)(dispatch, getState);
            });

        // if (options && options.filterable) {
        //     let filterable = `${options.filterable}`;
        //     let first = parseInt(filterable[0]);
        //     filterable = filterable.slice(1);

        //     if (Boolean(first & 1)) {
        //         let areas_id = parseInt(filterable.slice(0, 2));
        //         console.log(areas_id);
        //         let area = getState().searchinfo.areas.find(
        //             x => x.id === areas_id
        //         );
        //         console.log(area);
        //         area_filter_apply(area.name)(dispatch, getState);

        //         filterable = filterable.slice(2);
        //     }
        //     if (Boolean(first & 2)) {
        //         let depth = parseInt(options.filterable[0]);
        //         let departments_id = parseInt(options.filterable.slice(1, 4));
        //         let departments = {};

        //         departments = getState().searchinfo.departments.find(
        //             x => x.id === departments_id
        //         );

        //         department_filter_apply(options.area)(dispatch, getState);

        //         filterable = filterable.slice(4);
        //     }
        //     if (Boolean(first & 4)) {
        //         universitie_filter_apply(options.area)(dispatch, getState);
        //     }
        // }
        // getAPI2(id, option)
        //     .then(response => {
        //         let res = response;
        //         console.log(response);

        //         if (options && options.area) {
        //         }

        //         set_doctor_list(res)(dispatch, getState);
        //         set_hospital_list({
        //             data: { list_hospital: { list: [], cnt_hospital: 0 } }
        //         })(dispatch, getState);
        //         dispatch({
        //             type: "SET_CNT_TOTAL",
        //             payload: {
        //                 cnt_total: res.data.list_doctor.cnt_doctor,
        //                 is_useFilter: false
        //             }
        //         });
        //         set_loading(false)(dispatch, getState);
        //     })
        //     .catch(err => {
        //         console.log(EXTENTION_HOSPITAL, err);
        //         set_loading(false)(dispatch, getState);
        //     });
    };
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_HOSPITAL_LIST:
            return {
                ...state,
                list_hospital: action.payload.list_hospital,
                cnt_hospital: action.payload.cnt_hospital,
                offset: action.payload.list_hospital.length
            };
        case ADD_HOSPITAL_LIST:
            if (action.payload.list_hospital)
                return {
                    ...state,
                    list_hospital: [
                        ...state.list_hospital,
                        ...action.payload.list_hospital
                    ],
                    offset:
                        state.list_hospital.length +
                        action.payload.list_hospital.length
                };
            else
                return {
                    ...state,
                    filter_hospital: [
                        ...state.filter_hospital,
                        ...action.payload.filter_hospital_list
                    ],
                    offset:
                        state.filter_hospital_list.length +
                        action.payload.filter_hospital_list.length
                };
        case RMV_HOSPITAL_LIST:
            return {
                ...state,
                list_hospital: [],
                cnt_hospital: 0,
                offset: 0
            };
        case SELECTED_HOSPITAL:
            return {
                ...state,
                selected_hospital_id: action.payload.selected_hospital_id,
                selected_state: "try"
            };
        case SELECTED_HOSPITAL_SUCCESS:
            return {
                ...state,
                data: { ...state.data, ...action.payload.data },
                selected_state: "success"
            };
        case SELECTED_HOSPITAL_FAILURE:
            return {
                ...state,
                selected_state: "failure"
            };
        case EXTENTION_HOSPITAL:
            return {
                ...state,
                extend_doctor_list: action.payload.extend_doctor_list,
                extended_hospital_id: action.payload.extended_hospital_id
            };
        case HOSPITAL_AREA_FILTER_APPLY:
            return {
                ...state,
                filter_hospital: action.payload.filter_hospital,
                cnt_hospital_filter: action.payload.cnt_hospital_filter,
                is_filter: {
                    area: true
                }
            };
        case HOSPITAL_FILTER_CLEAR:
            return {
                ...state,
                filter_hospital: {},
                is_filter: {
                    area: false
                },
                offset: state.list_hospital.length
            };
        case HOSPITAL_REVIEW_LIST:
            return {
                ...state,
                hospital_review_state: "request"
            };
        case HOSPITAL_REVIEW_LIST_SUCCESS:
            return {
                ...state,
                hospital_review_list: action.payload.hospital_review_list,
                hospital_review_state: "success"
            };
        case HOSPITAL_REVIEW_LIST_FAILURE:
            return {
                ...state,
                hospital_review_state: "failure"
            };
        case GET_HOSPITAL_ALL_REVIEW:
            return {
                ...state,
                data: {
                    ...state.data,
                    hospital_all_review: action.payload.data
                }
            };
        default:
            return state;
    }
};
