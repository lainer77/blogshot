import {
    SELECTED_TAB,
    SEARCH_REQUEST,
    SEARCH_REQUEST_SUCCESS,
    SEARCH_REQUEST_FAILURE,
    GET_AREA_REQUEST,
    GET_MEDICAL_DEPARTMENT_REQUEST,
    GET_MEDICAL_UNIVERSITIE_REQUEST,
    DOCTOR_FILTER_CLEAR,
    HOSPITAL_FILTER_CLEAR,
    FILTER_CLEAR,
    FILTER_APPLY,
    SEARCH_AJAX,
    SET_CNT_TOTAL,
    SET_SEARCH_TYPE
} from "../actions/types";

import {
    area_filter_apply,
    department_filter_apply,
    universitie_filter_apply,
    set_doctor_list,
    remove_doctor_list
} from "./doctorinfo";
import { message_open, set_loading } from "./utilsinfo";

import {
    area_filter_apply as hospital_area_filter_apply,
    set_hospital_list,
    remove_hospital_list
} from "./hospitalinfo";
import {
    BASE_URL,
    API_TIME_OUT,
    SEARCH_REQUST_RESULT_LIMIT
} from "../contants/constants";

import axios from "axios";
import Router from "next/router";

const getAPI = (param = {}, exUrl) => {
    let params = param;

    // defalut limit 10
    if (params && !params["limit"]) {
        params.limit = SEARCH_REQUST_RESULT_LIMIT;
    }
    return axios.get(`https://${BASE_URL}/search${exUrl ? exUrl : ""}`, {
        params: param,
        headers: {
            // 요청 헤더
            "X-Api-Key": "my-api-key"
        },
        timeout: API_TIME_OUT // 30초 이내에 응답이 오지 않으면 에러로 간주
    });
};
const searchType = {
    A: "질병명",
    B: "의사/병원명"
};
const initialState = {
    selected_tab: "doctor",
    search_state: "wait", // wait, search, success
    searchText: "",
    search_path: null,
    searchType: searchType.A,
    medical_departments_id: null,
    cnt_total: 0,
    is_filter: false,
    areas: null,
    departments: null,
    universities: null,
    is_local_filter: false
};

export function search_ajax(searchText, searchType, cb) {
    const exUrl = "_ajax";

    getAPI({ searchText, searchType, limit: 10 }, exUrl)
        .then(response => {
            // console.log(SEARCH_AJAX, response);
            cb(response.data);
        })
        .catch(err => {
            // console.error(SEARCH_AJAX, err);
        });
}
export function set_selected_tab(text) {
    return (dispatch, getState) => {
        dispatch({
            type: SELECTED_TAB,
            payload: { selected_tab: text }
        });
    };
}
export function set_search_type(text) {
    sessionStorage.setItem("searchType", text);
    return (dispatch, getState) => {
        dispatch({
            type: SET_SEARCH_TYPE,
            payload: { searchType: text }
        });
    };
}

export function get_area_requset() {
    const exUrl = "/filter/areas";
    return (dispatch, getState) => {
        if (!getState().searchinfo.areas)
            getAPI(null, exUrl)
                .then(response => {
                    // console.log(GET_AREA_REQUEST, response);
                    dispatch({
                        type: GET_AREA_REQUEST,
                        payload: { data: response.data }
                    });
                })
                .catch(err => {
                    // console.error(GET_AREA_REQUEST, err);
                });
    };
}
export function get_medical_universities_requset() {
    const exUrl = "/filter/medical_universities";
    return (dispatch, getState) => {
        if (!getState().searchinfo.universities)
            getAPI(null, exUrl)
                .then(response => {
                    // console.log(GET_MEDICAL_UNIVERSITIE_REQUEST, response);
                    dispatch({
                        type: GET_MEDICAL_UNIVERSITIE_REQUEST,
                        payload: { data: response.data }
                    });
                })
                .catch(err => {
                    // console.error(GET_MEDICAL_UNIVERSITIE_REQUEST, err);
                });
    };
}
export function get_medical_departments_requset() {
    const exUrl = "/filter/medical_departments";
    return (dispatch, getState) => {
        if (!getState().searchinfo.departments)
            getAPI(null, exUrl)
                .then(response => {
                    // console.log(GET_MEDICAL_DEPARTMENT_REQUEST, response);
                    dispatch({
                        type: GET_MEDICAL_DEPARTMENT_REQUEST,
                        payload: { data: response.data }
                    });
                })
                .catch(err => {
                    // console.error(GET_MEDICAL_DEPARTMENT_REQUEST, err);
                });
    };
}

export function search_requset(param, is_useFilter, filterParams) {
    return (dispatch, getState) => {
        let params = {};
        let keys = [
            "searchText",
            "medical_departments_id",
            "medical_universities_id",
            "areas_id",
            "offset",
            "limit",
            "searchType"
        ];

        keys.map(x => {
            if (param[x]) {
                params[x] = param[x];
            }
        });

        if (!params.searchType) {
            if (params.searchText) {
                if (params.areas_id) {
                    params.searchType = searchType.B;
                    params.searchText = undefined;
                } else
                    params.searchType =
                        sessionStorage.getItem("searchType") ||
                        getState().searchinfo.searchType;
            } else if (params.medical_departments_id)
                params.searchType = searchType.B;
        }
        set_search_type(params.searchType);

        // loading start
        set_loading(true)(dispatch, getState);

        dispatch({ type: DOCTOR_FILTER_CLEAR });
        dispatch({ type: HOSPITAL_FILTER_CLEAR });
        dispatch({
            type: FILTER_CLEAR
        });

        if (params.searchText && params.medical_departments_id)
            dispatch({
                type: SEARCH_REQUEST,
                payload: {
                    searchText: params.searchText,
                    medical_departments_id: params.medical_departments_id,
                    searchType: params.searchType,
                    search_state: "search"
                }
            });
        else if (params.searchText)
            dispatch({
                type: SEARCH_REQUEST,
                payload: {
                    searchText: params.searchText,
                    medical_departments_id: null,
                    searchType: params.searchType,
                    search_state: "search"
                }
            });
        else if (params.medical_departments_id)
            dispatch({
                type: SEARCH_REQUEST,
                payload: {
                    medical_departments_id: params.medical_departments_id,
                    searchText: "",
                    searchType: params.searchType,
                    search_state: "search"
                }
            });

        getAPI(params)
            .then(response => {
                // console.log(SEARCH_REQUEST_SUCCESS, response);
                dispatch({
                    type: SEARCH_REQUEST_SUCCESS,
                    payload: {
                        cnt_total: response.data.cnt_total,
                        search_path: response.data.search_path
                    }
                });
                remove_doctor_list()(dispatch, getState);
                remove_hospital_list()(dispatch, getState);
                if (
                    response.data.cnt_total == 0 ||
                    response.data.cnt_total == "0"
                ) {
                    // set_loading(false)(dispatch, getState);
                    message_open()(dispatch, getState);
                }
                if (response.data.list_doctor) {
                    set_doctor_list(response)(dispatch, getState);
                }
                if (response.data.list_hospital) {
                    set_hospital_list(response)(dispatch, getState);
                }
                if (is_useFilter) {
                    if (filterParams)
                        dispatch({
                            type: FILTER_APPLY
                        });
                    setTimeout(
                        getState => {
                            if (getState().searchinfo.is_filter) {
                                message_open()(dispatch, getState);
                                // set_loading(false)(dispatch, getState);
                            }
                        },
                        1500,
                        getState
                    );
                }
                set_loading(false)(dispatch, getState);
            })
            .catch(err => {
                dispatch({
                    type: SEARCH_REQUEST_FAILURE
                });
                if (
                    err.response &&
                    err.response.status &&
                    err.response.status === 500
                ) {
                    remove_doctor_list()(dispatch);
                    remove_hospital_list()(dispatch);
                }
                set_loading(false)(dispatch, getState);
            });

        setTimeout(
            getState => {
                if (getState().utilsinfo.loading) {
                    set_loading(false)(dispatch, getState);
                }
            },
            30000,
            getState
        );
    };
}
export function search_more_requset(options) {
    return (dispatch, getState) => {
        set_loading(true)(dispatch, getState);
        let params = options || {};
        let selected_tab = getState().searchinfo.selected_tab;
        let searchType = sessionStorage.getItem("searchType");
        let keys = ["searchText", "medical_departments_id"];
        keys.map(x => {
            if (getState().searchinfo[x]) {
                params[x] = getState().searchinfo[x];
            }
        });
        if (
            !params.offset &&
            getState()[selected_tab + "info"] &&
            getState()[selected_tab + "info"].offset
        ) {
            params.offset = getState()[selected_tab + "info"].offset;
        }
        if (Router.query.areas_id) {
            params.areas_id = Router.query.areas_id;
            params.searchText = undefined;
            params.medical_departments_id = undefined;
        }
        if (params.searchText)
            dispatch({
                type: SEARCH_REQUEST,
                payload: {
                    searchText: params.searchText,
                    searchType,
                    search_state: "more"
                }
            });
        if (params.medical_departments_id)
            dispatch({
                type: SEARCH_REQUEST,
                payload: {
                    medical_departments_id: params.medical_departments_id,
                    searchType,
                    search_state: "more"
                }
            });
        if (!params.searchType) {
            params.searchType = searchType;
        }
        // loading start use not
        // set_loading(true)(dispatch, getState);

        getAPI(params)
            .then(response => {
                // console.log(SEARCH_REQUEST_SUCCESS, response);
                dispatch({
                    type: SEARCH_REQUEST_SUCCESS,
                    payload: {
                        cnt_total: response.data.cnt_total
                    }
                });
                if (selected_tab === "doctor" && response.data.list_doctor) {
                    set_doctor_list(response, true)(dispatch, getState);
                }
                if (selected_tab === "hospital" && response.data.list_hospital)
                    set_hospital_list(response, true)(dispatch, getState);
                set_loading(false)(dispatch, getState);
            })
            .catch(err => {
                // console.error(SEARCH_REQUEST_FAILURE, err);
                dispatch({
                    type: SEARCH_REQUEST_FAILURE
                });
                set_loading(false)(dispatch, getState);
            });

        setTimeout(
            getState => {
                if (getState().utilsinfo.loading) {
                    set_loading(false)(dispatch, getState);
                }
            },
            30000,
            getState
        );
    };
}
export function filter_apply(param) {
    return (dispatch, getState) => {
        let params = param;
        // let doctor_isfilter = getState().doctorinfo.is_filter;
        // doctor_isfilter =
        //     doctor_isfilter.area ||
        //     doctor_isfilter.department ||
        //     doctor_isfilter.universitie;
        // const hospital_isfilter = getState().hospitalinfo.is_filter.area;
        const selected_tab = getState().searchinfo.selected_tab;

        // if (doctor_isfilter || hospital_isfilter) {
        //     if (doctor_isfilter) dispatch({ type: DOCTOR_FILTER_CLEAR });
        //     if (hospital_isfilter) dispatch({ type: HOSPITAL_FILTER_CLEAR });
        //     dispatch({
        //         type: FILTER_CLEAR
        //     });
        // }
        let is_filter_docter = false;
        let is_filter_hospital = false;
        if (selected_tab == "doctor") {
            if (params.area) {
                area_filter_apply(params.area)(dispatch, getState);
                is_filter_docter = true;
            }
            if (params.department.depth1 || params.department.depth2) {
                department_filter_apply(params.department)(dispatch, getState);
                is_filter_docter = true;
            }
            if (params.universitie) {
                universitie_filter_apply(params.universitie)(
                    dispatch,
                    getState
                );
                is_filter_docter = true;
            }
        } else {
            if (params.area) {
                {
                    hospital_area_filter_apply(params.area)(dispatch, getState);
                    is_filter_hospital = true;
                }
            }
        }
        // let cnt_total = 0;
        if (is_filter_docter || is_filter_hospital) {
            // if (is_filter_docter)
            //     cnt_total += getState().doctorinfo.cnt_doctor_filter;
            // else cnt_total += getState().doctorinfo.cnt_doctor;
            // if (is_filter_hospital)
            //     cnt_total =
            //         cnt_total + getState().hospitalinfo.cnt_hospital_filter;
            // else cnt_total += getState().hospitalinfo.cnt_hospital;
            dispatch({
                type: FILTER_APPLY
                // payload: {
                //     cnt_total: cnt_total
                // }
            });
            filter_apply_success(dispatch, getState);
        }
    };
}
export function filter_free() {
    return (dispatch, getState) => {
        dispatch({ type: DOCTOR_FILTER_CLEAR });
        dispatch({ type: HOSPITAL_FILTER_CLEAR });
        dispatch({
            type: FILTER_CLEAR,
            payload: {
                cnt_total:
                    getState().hospitalinfo.cnt_hospital +
                    getState().doctorinfo.cnt_doctor
            }
        });
        filter_free_success(dispatch, getState);
    };
}

const filter_free_success = (dispatch, getState) => {
    message_open()(dispatch, getState);
};
const filter_apply_success = (dispatch, getState) => {
    message_open()(dispatch, getState);
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_TAB:
            return {
                ...state,
                selected_tab:
                    action.payload.selected_tab != undefined
                        ? action.payload.selected_tab
                        : "doctor"
            };
        case GET_AREA_REQUEST:
            return {
                ...state,
                areas: action.payload.data
            };
        case GET_MEDICAL_DEPARTMENT_REQUEST:
            return {
                ...state,
                departments: action.payload.data
            };
        case GET_MEDICAL_UNIVERSITIE_REQUEST:
            return {
                ...state,
                universities: action.payload.data
            };
        case SEARCH_REQUEST:
            if (action.payload.medical_departments_id)
                return {
                    ...state,
                    medical_departments_id:
                        action.payload.medical_departments_id,
                    searchText: action.payload.searchText,
                    searchType: action.payload.searchType,
                    search_state: action.payload.search_state || "search"
                };
            if (action.payload.searchText)
                return {
                    ...state,
                    medical_departments_id: null,
                    searchText: action.payload.searchText,
                    searchType: action.payload.searchType,
                    search_state: action.payload.search_state || "search"
                };
        case SEARCH_REQUEST_SUCCESS:
            return {
                ...state,
                selected_tab:
                    action.payload.selected_tab != undefined
                        ? action.payload.selected_tab
                        : state.selected_tab != undefined
                        ? state.selected_tab
                        : "doctor",
                cnt_total: action.payload.cnt_total,
                search_path: action.payload.search_path,
                search_state: "success"
            };
        case SEARCH_REQUEST_FAILURE:
            return {
                ...state,
                cnt_total: 0,
                search_state: "wait"
            };
        case FILTER_CLEAR:
            return {
                ...state,
                // cnt_total: action.payload.cnt_total,
                is_filter: false,
                is_local_filter: false
            };
        case FILTER_APPLY:
            return {
                ...state,
                // cnt_total: action.payload.cnt_total,
                is_filter: true
            };

        case SET_CNT_TOTAL:
            return {
                ...state,
                cnt_total: action.payload.cnt_total,
                is_useFilter: false,
                is_local_filter:
                    action.payload.is_local_filter !== undefined
                        ? action.payload.is_local_filter
                        : true
            };
        case SET_SEARCH_TYPE:
            return {
                ...state,
                searchType: action.payload.searchType
            };
        default:
            return state;
    }
};
