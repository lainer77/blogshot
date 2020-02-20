import {
    SET_DOCTOR_LIST,
    ADD_DOCTOR_LIST,
    RMV_DOCTOR_LIST,
    SELECTED_DOCTOR,
    SELECTED_DOCTOR_SUCCESS,
    SELECTED_DOCTOR_FAILURE,
    DOCTOR_AREA_FILTER_APPLY,
    DEPARTMENT_FILTER_APPLY,
    UNIVERSITIE_FILTER_APPLY,
    DOCTOR_FILTER_CLEAR,
    DOCTOR_REVIEW_LIST,
    DOCTOR_REVIEW_LIST_SUCCESS,
    DOCTOR_REVIEW_LIST_FAILURE,
    GET_DOCTOR_ALL_REVIEW,
    ADD_DOCTOR_PAPERS
} from "../actions/types";
import { set_kakao_logout } from "./kakaoinfo";
import Router from "next/router";
import { set_loading, message_open, set_message } from "./utilsinfo";
import { BASE_URL, API_TIME_OUT } from "../contants/constants";
import axios from "axios";
import { errorExcute } from "../logic/errorLogic";

function getAPI(id, searchText, score_searchText, key, token) {
    return axios.get(`https://${BASE_URL}/doctor/${id}`, {
        params: {
            searchText,
            score_searchText,
            token
        },
        headers: token
            ? {}
            : {
                  // 요청 헤더
                  "X-Api-Key": key
              },
        timeout: API_TIME_OUT / 2 // 15초 이내에 응답이 오지 않으면 에러로 간주
    });
}

function getReviewAllAPI(id, exUrl, key, token) {
    return axios.get(`https://${BASE_URL}/doctor/${id}${exUrl || ""}`, {
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
function getAPIEx(id, exUrl, key, data) {
    return axios.get(`https://${BASE_URL}/doctor/${id}${exUrl || ""}`, {
        params: data,
        headers: {
            // 요청 헤더
            "X-Api-Key": key
        },
        timeout: API_TIME_OUT / 2 // 15초 이내에 응답이 오지 않으면 에러로 간주
    });
}
const getReviewAPI = (type, types, loginkey, token) => {
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
    return axios.get(`https://${BASE_URL}/my/review/doctor/getAll`, {
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
const initialState = {
    list_doctor: [],
    filter_doctor: [],
    is_filter: { area: false, department: false, universitie: false },
    value_filter: { area: null, department: null, universitie: null },
    cnt_doctor: 0,
    offset: 0,
    cnt_doctor_filter: 0,
    selected_doctor_id: 0,
    data: {},
    selected_state: "wait", // success, failure, wait, try,

    review_data: {},
    doctor_review_list: [],
    doctor_review_state: "stay"
};
export const doctor_review_request = (
    type,
    review_id,
    data,
    is_selected_doctor = true
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

        // set_loading(true)(dispatch, getState);
        const types = {
            get: "/doctor/getAll",
            post: {
                url: `/doctor/${getState().doctorinfo.data.id}`,
                data: data
            },
            put: { url: `/d/${review_id || ""}`, data: data },
            del: `/d/${review_id || ""}`
        };
        dispatch({ type: DOCTOR_REVIEW_LIST });
        getReviewAPI(type, types, jwt_token, token)
            .then(response => {
                if (type == "get") {
                    if (getState().utilsinfo.msg !== "")
                        message_open()(dispatch, getState);
                    let this_doctor_data = response.data;
                    if (!this_doctor_data.code)
                        dispatch({
                            type: DOCTOR_REVIEW_LIST_SUCCESS,
                            payload: {
                                doctor_review_list: this_doctor_data
                            }
                        });
                    if (is_selected_doctor)
                        get_doctor_all_review(getState().doctorinfo.data.id)(
                            dispatch,
                            getState
                        );
                } else if (type == "post") {
                    if (response.data.code === 0) {
                        set_message("소중한 리뷰 감사드립니다!")(
                            dispatch,
                            getState
                        );
                    } else {
                        set_message(response.data.msg)(dispatch, getState);
                    }
                    doctor_review_request("get")(dispatch, getState);
                    set_loading(false)(dispatch, getState);
                } else if (type == "put") {
                    if (response.data.code === 0) {
                        set_message("리뷰가 수정되었습니다!")(
                            dispatch,
                            getState
                        );
                    } else {
                        set_message(response.data.msg)(dispatch, getState);
                    }
                    doctor_review_request("get")(dispatch, getState);
                    set_loading(false)(dispatch, getState);
                } else if (type == "del") {
                    if (response.data.code === 0) {
                        set_message("리뷰가 삭제되었습니다!")(
                            dispatch,
                            getState
                        );
                    } else {
                        set_message(response.data.msg)(dispatch, getState);
                    }
                    doctor_review_request("get")(dispatch, getState);
                    set_loading(false)(dispatch, getState);
                }
            })
            .catch((err, req) => {
                // console.log(DOCTOR_REVIEW_LIST_FAILURE, err, req);
                dispatch({ type: DOCTOR_REVIEW_LIST_FAILURE });
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
export const get_doctor_all_review = doctor_id => {
    return (dispatch, getState) => {
        const extantionsUrl = "/review";

        let jwt_token;
        if (getState().kakaoinfo.login)
            jwt_token = getState().kakaoinfo.login.jwt_token;
        let token;
        if (Router.query.token && !getState().kakaoinfo.is_login)
            token = Router.query.token;
        getReviewAllAPI(doctor_id, extantionsUrl, jwt_token, token)
            .then(response => {
                // console.log(GET_DOCTOR_ALL_REVIEW + "_SUCCESS", response);
                dispatch({
                    type: GET_DOCTOR_ALL_REVIEW,
                    payload: { data: response.data }
                });
                set_loading(false);
            })
            .catch(err => {
                // console.error(GET_DOCTOR_ALL_REVIEW + "_FAILURE", err);
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
export const isFilter = is_filter => {
    if (is_filter.area || is_filter.department || is_filter.universitie) {
        return true;
    }
    return false;
};
const filter_logic = (list, is_filter, values) => {
    let filterData = [];
    if (is_filter.area && values.area) {
        filterData = list.filter(x =>
            x.current_hospital_juso_short.indexOf(values.area) == 0
                ? true
                : false
        );
    }
    if (is_filter.department && values.department) {
        filterData = list.filter(x =>
            x.clinic.indexOf(values.department.depth1) == 0 ||
            x.clinic.indexOf(values.department.depth2) == 0
                ? true
                : false
        );
    }
    if (is_filter.universitie && values.universitie) {
        filterData = list.filter(x =>
            x.study_last.indexOf(values.universitie) == 0 ? true : false
        );
    }
    return filterData;
};
export function area_filter_apply(text) {
    return (dispatch, getState) => {
        if (text.indexOf("전체") == 0) return;
        const is_filter = getState().doctorinfo.is_filter;
        const list_doctor =
            !is_filter.area && !is_filter.department && !is_filter.universitie
                ? getState().doctorinfo.list_doctor
                : getState().doctorinfo.filter_doctor;

        if (!list_doctor || list_doctor.length <= 0) return;
        //
        const filter_doctor_list = list_doctor.filter(x =>
            x.current_hospital_juso_short.indexOf(text) == 0 ? true : false
        );
        const filter_doctor_cnt = filter_doctor_list.length;

        const filter_doctor = filter_doctor_list;
        dispatch({
            type: DOCTOR_AREA_FILTER_APPLY,
            payload: {
                filter_doctor: filter_doctor,
                cnt_doctor_filter: filter_doctor_cnt,
                value: text
            }
        });
    };
}
export function department_filter_apply(param) {
    return (dispatch, getState) => {
        if (
            (param.depth1 && param.depth1.indexOf("전체") == 0) ||
            (param.depth2 && param.depth2.indexOf("선택") == 0)
        )
            return;
        const is_filter = getState().doctorinfo.is_filter;
        const list_doctor =
            !is_filter.area && !is_filter.department && !is_filter.universitie
                ? getState().doctorinfo.list_doctor
                : getState().doctorinfo.filter_doctor;

        if (!list_doctor || list_doctor.length <= 0) return;
        //
        const filter_doctor_list = list_doctor.filter(x =>
            x.clinic.indexOf(param.depth1) == 0 ||
            x.clinic.indexOf(param.depth2) == 0
                ? true
                : false
        );
        const filter_doctor_cnt = filter_doctor_list.length;

        const filter_doctor = filter_doctor_list;
        dispatch({
            type: DEPARTMENT_FILTER_APPLY,
            payload: {
                filter_doctor: filter_doctor,
                cnt_doctor_filter: filter_doctor_cnt,
                value: param
            }
        });
    };
}
export function universitie_filter_apply(text) {
    return (dispatch, getState) => {
        const is_filter = getState().doctorinfo.is_filter;
        const list_doctor =
            !is_filter.area && !is_filter.department && !is_filter.universitie
                ? getState().doctorinfo.list_doctor
                : getState().doctorinfo.filter_doctor;

        if (!list_doctor || list_doctor.length <= 0) return;
        //
        const filter_doctor_list = list_doctor.filter(x =>
            x.study_last.indexOf(text) == 0 ? true : false
        );
        const filter_doctor_cnt = filter_doctor_list.length;

        const filter_doctor = filter_doctor_list;

        dispatch({
            type: UNIVERSITIE_FILTER_APPLY,
            payload: {
                filter_doctor: filter_doctor,
                cnt_doctor_filter: filter_doctor_cnt,
                value: text
            }
        });
    };
}

export function set_doctor_list(response, more) {
    return (dispatch, getState) => {
        const list_doctor = response.data.list_doctor.list;
        const cnt_doctor = response.data.list_doctor.cnt_doctor;
        const is_filter = getState().doctorinfo.is_filter;
        if (!more) {
            dispatch({
                type: SET_DOCTOR_LIST,
                payload: {
                    list_doctor: list_doctor,
                    cnt_doctor: cnt_doctor
                }
            });
        } else {
            if (isFilter(is_filter)) {
                const filter_doctor_list = filter_logic(
                    list_doctor,
                    is_filter,
                    getState().doctorinfo.value_filter
                );
                dispatch({
                    type: ADD_DOCTOR_LIST,
                    payload: {
                        filter_doctor_list: filter_doctor_list
                    }
                });
            } else {
                dispatch({
                    type: ADD_DOCTOR_LIST,
                    payload: {
                        list_doctor: list_doctor
                    }
                });
            }
        }
    };
}
export function remove_doctor_list() {
    return (dispatch, getState) => {
        dispatch({
            type: RMV_DOCTOR_LIST
        });
    };
}

export const get_doctor_papers = (doctor_id, searchText) => {
    return async (dispatch, getState) => {
        const extantionsUrl = "/papers";

        let jwt_token;

        if (getState().kakaoinfo.login)
            jwt_token = getState().kakaoinfo.login.jwt_token;

        let response = await getAPIEx(doctor_id, extantionsUrl, jwt_token, {
            searchText: searchText,
            limit: 10
        });

        return response;
    };
};
export const add_doctor_papers = (doctor_id, searchText) => {
    return async (dispatch, getState) => {
        const extantionsUrl = "/papers";

        let jwt_token;
        let offset = 0;

        let papers = getState().doctorinfo.data.info.papers;
        offset = papers.length;

        if (getState().kakaoinfo.login)
            jwt_token = getState().kakaoinfo.login.jwt_token;

        let response;
        try {
            response = await getAPIEx(doctor_id, extantionsUrl, jwt_token, {
                searchText: searchText,
                limit: 10,
                offset: offset
            });

            dispatch({
                type: ADD_DOCTOR_PAPERS,
                payload: { papers: response.data }
            });
        } catch (err) {
            if (err.response) {
                let cb;
                let params;

                if (err.response.status === 403)
                    cb = () => {
                        set_kakao_logout(jwt_token)(dispatch, getState);
                    };
            }
            // console.log(ADD_DOCTOR_PAPERS + "_ERROR");
            set_loading(false)(dispatch, getState);
        }
    };
};

export const get_doctor_wordCloud = doctor_id => {
    return async (dispatch, getState) => {
        const extantionsUrl = "/wordCloud";

        let jwt_token;
        if (getState().kakaoinfo.login)
            jwt_token = getState().kakaoinfo.login.jwt_token;
        let response = await getAPIEx(doctor_id, extantionsUrl, jwt_token);

        return response;
    };
};

export function selected_doctor(id, score_searchText, searchText, token) {
    return async (dispatch, getState) => {
        let jwt_token;
        if (getState().kakaoinfo.login)
            jwt_token = getState().kakaoinfo.login.jwt_token;
        set_loading(true)(dispatch, getState);
        dispatch({
            type: SELECTED_DOCTOR,
            payload: { selected_doctor_id: id }
        });
        try {
            let response = await getAPI(
                id,
                searchText,
                score_searchText,
                jwt_token,
                token
            );

            let doctor_papers;
            let doctor_wordCloud;
            let data = response.data;

            if (data.score_medicofact) {
                doctor_papers = await get_doctor_papers(id, searchText)(
                    dispatch,
                    getState
                );
            }
            if (data.score_medicofact) {
                doctor_wordCloud = await get_doctor_wordCloud(id)(
                    dispatch,
                    getState
                );
            }

            if (doctor_papers) {
                data.info.papers = doctor_papers.data;
            }

            if (doctor_wordCloud) {
                data.info.specialty_wordCloud =
                    doctor_wordCloud.data.specialty_wordCloud;
                data.info.year_graph = doctor_wordCloud.data.year_graph;
            }

            dispatch({
                type: SELECTED_DOCTOR_SUCCESS,
                payload: { data: data }
            });
            setTimeout(() => {
                set_loading(false)(dispatch, getState);
            }, 1000);
        } catch (err) {
            // console.error(SELECTED_DOCTOR_FAILURE, err);

            if (err.response) {
                let cb;
                let params;
                console.log(err.response);
                if (err.response.status === 403)
                    cb = () => {
                        set_kakao_logout(jwt_token)(dispatch, getState);
                    };
                else if (err.response.status === 500) {
                    selected_doctor(id, score_searchText)(dispatch, getState);
                }

                errorExcute(
                    err.response.status,
                    params,
                    cb
                )(dispatch, getState);
            }
            dispatch({
                type: SELECTED_DOCTOR_FAILURE
            });
            set_loading(false)(dispatch, getState);
        }
    };
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DOCTOR_LIST:
            return {
                ...state,
                list_doctor: action.payload.list_doctor,
                cnt_doctor: action.payload.cnt_doctor,
                offset: action.payload.list_doctor.length
            };
        case ADD_DOCTOR_LIST:
            if (action.payload.list_doctor)
                return {
                    ...state,
                    list_doctor: [
                        ...state.list_doctor,
                        ...action.payload.list_doctor
                    ],
                    offset:
                        state.list_doctor.length +
                        action.payload.list_doctor.length
                };
            else
                return {
                    ...state,
                    filter_doctor: [
                        ...state.filter_doctor,
                        ...action.payload.filter_doctor_list
                    ],
                    offset:
                        state.filter_doctor_list.length +
                        action.payload.filter_doctor_list.length
                };
        case RMV_DOCTOR_LIST:
            return {
                ...state,
                list_doctor: [],
                cnt_doctor: 0,
                offset: 0
            };
        case SELECTED_DOCTOR:
            return {
                ...state,
                selected_doctor_id: action.payload.selected_doctor_id,
                selected_state: "try"
            };
        case SELECTED_DOCTOR_SUCCESS:
            return {
                ...state,
                data: { ...action.payload.data },
                selected_state: "success"
            };
        case SELECTED_DOCTOR_FAILURE:
            return {
                ...state,
                selected_state: "failure"
            };
        case DOCTOR_AREA_FILTER_APPLY:
            return {
                ...state,
                // filter_doctor: action.payload.filter_doctor,
                // cnt_doctor_filter: action.payload.cnt_doctor_filter,
                is_filter: {
                    ...state.is_filter,
                    area: true
                },
                value_filter: {
                    ...state.value_filter,
                    area: action.payload.value
                }
            };
        case DEPARTMENT_FILTER_APPLY:
            return {
                ...state,
                // filter_doctor: action.payload.filter_doctor,
                // cnt_doctor_filter: action.payload.cnt_doctor_filter,
                is_filter: {
                    ...state.is_filter,
                    department: true
                },
                value_filter: {
                    ...state.value_filter,
                    department: {
                        ...state.value_filter.department,
                        depth1: action.payload.value.depth1,
                        depth2: action.payload.value.depth2
                    }
                }
            };
        case UNIVERSITIE_FILTER_APPLY:
            return {
                ...state,
                // filter_doctor: action.payload.filter_doctor,
                // cnt_doctor_filter: action.payload.cnt_doctor_filter,
                is_filter: {
                    ...state.is_filter,
                    universitie: true
                },
                value_filter: {
                    ...state.value_filter,
                    universitie: action.payload.value
                }
            };
        case DOCTOR_FILTER_CLEAR:
            return {
                ...state,
                // filter_doctor: [],
                is_filter: {
                    area: false,
                    department: false,
                    universitie: false
                },
                offset: state.list_doctor.length
            };
        case DOCTOR_REVIEW_LIST:
            return {
                ...state,
                doctor_review_state: "request"
            };
        case DOCTOR_REVIEW_LIST_SUCCESS:
            return {
                ...state,
                doctor_review_list: action.payload.doctor_review_list,
                doctor_review_state: "success"
            };
        case DOCTOR_REVIEW_LIST_FAILURE:
            return {
                ...state,
                doctor_review_state: "failure"
            };
        case GET_DOCTOR_ALL_REVIEW:
            return {
                ...state,
                review_data: action.payload.data
            };
        case ADD_DOCTOR_PAPERS:
            return {
                ...state,
                data: {
                    ...state.data,
                    info: {
                        ...state.data.info,
                        papers: [
                            ...state.data.info.papers,
                            ...action.payload.papers
                        ]
                    }
                }
            };
        default:
            return state;
    }
};
