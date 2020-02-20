import {
    SET_FAVORITE_DOCTORS,
    GET_MYHOME_INFO,
    GET_FAVORITE_DOCTORS
} from "../actions/types";

import axios from "axios";
import { set_loading } from "./utilsinfo";
import { set_kakao_logout } from "./kakaoinfo";
import { BASE_URL, API_TIME_OUT } from "../contants/constants";

const getAPI = loginkey => {
    return axios.get(`https://${BASE_URL}/my/review/hospital/getAll`, {
        headers: {
            // 요청 헤더
            "X-Api-Key": loginkey,
            Authorization: `Bearer ${loginkey}`
        },
        timeout: API_TIME_OUT / 3 // 10초 이내에 응답이 오지 않으면 에러로 간주
    });
};
const getMyHomeAPI = loginkey => {
    return axios.get(`https://${BASE_URL}/my/home/`, {
        headers: {
            // 요청 헤더
            "X-Api-Key": loginkey
            // Authorization: `Bearer ${loginkey}`
        },
        timeout: API_TIME_OUT / 3 // 10초 이내에 응답이 오지 않으면 에러로 간주
    });
};
const getMyFavoriteAPI = (exUrl, loginkey, type) => {
    if (type == "post")
        return axios.post(
            `https://${BASE_URL}/my/saved/doctor/${exUrl || ""}`,
            null,
            {
                headers: {
                    // 요청 헤더
                    "X-Api-Key": loginkey
                },
                timeout: API_TIME_OUT / 3 // 10초 이내에 응답이 오지 않으면 에러로 간주
            }
        );
    return axios[type || "get"](
        `https://${BASE_URL}/my/saved/doctor/${exUrl || ""}`,
        {
            headers: {
                // 요청 헤더
                "X-Api-Key": loginkey
            },
            timeout: API_TIME_OUT / 3 // 10초 이내에 응답이 오지 않으면 에러로 간주
        }
    );
};

const initialState = {
    favorite_doctors: [],
    review_cnt: null,
    saved_docters: null,
    user: null
};

export const get_myhome_info = data => {
    return (dispatch, getState) => {
        set_loading(true)(dispatch, getState);
        getMyHomeAPI(data)
            .then(response => {
                dispatch({
                    type: GET_MYHOME_INFO,
                    payload: {
                        infos: response.data
                    }
                });
                if (response.data.saved_docters.cnt_saved_docters <= 0)
                    set_loading(false)(dispatch, getState);
            })
            .catch(err => {
                set_loading(false)(dispatch, getState);
                if (err.response) {
                    let params;

                    if (err.response.status === 403)
                        set_kakao_logout(localStorage.getItem("jwt_token"))(
                            dispatch,
                            getState
                        );
                }
            });
    };
};
export const get_favorite_doctors = cb => {
    return (dispatch, getState) => {
        let loginkey = localStorage.getItem("jwt_token");
        getMyFavoriteAPI("getall", loginkey)
            .then(response => {
                // console.log(GET_FAVORITE_DOCTORS, response);
                dispatch({
                    type: GET_FAVORITE_DOCTORS,
                    payload: { list_doctor: response.data }
                });
                if (cb) cb();
            })
            .catch(err => {});
    };
};
export const set_favorite_doctors = (doctor_id, type) => {
    return (dispatch, getState) => {
        let loginkey = localStorage.getItem("jwt_token");
        getMyFavoriteAPI(doctor_id, loginkey, type)
            .then(response => {
                // console.log(response);
                dispatch(SET_FAVORITE_DOCTORS);
            })
            .catch(err => {});
    };
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_FAVORITE_DOCTORS:
            return {
                ...state
            };
        case GET_FAVORITE_DOCTORS:
            return {
                ...state,
                favorite_doctors: action.payload.list_doctor
            };
        case GET_MYHOME_INFO:
            return {
                ...state,
                ...action.payload.infos
            };
        default:
            return state;
    }
};
