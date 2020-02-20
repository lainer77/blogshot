import {
    TAGS_SET_REQUEST,
    TAGS_SET_SUCCESS,
    TAGS_SET_FAILURE
} from "../actions/types";

import axios from "axios";
import { BASE_URL, API_TIME_OUT } from "../contants/constants";
import { set_loading } from "./utilsinfo";

function getAPI(requset) {
    return axios.get(`https://${BASE_URL}/home/${requset}`, {
        params: {},
        headers: {
            // 요청 헤더
            "X-Api-Key": "my-api-key"
        },
        timeout: API_TIME_OUT / 3 // 10초 이내에 응답이 오지 않으면 에러로 간주
    });
}
const initialState = { tagsByDisease: [], tagsByDepartment: [] };
export const tags_set = () => {
    return (dispatch, getState) => {
        set_loading(true)(dispatch, getState);
        dispatch({
            type: TAGS_SET_REQUEST
        });
        getAPI("tagsByDisease")
            .then(response1 => {
                getAPI("tagsByDepartment").then(response2 => {
                    const data = response1.data;
                    const data2 = response2.data;
                    dispatch({
                        type: TAGS_SET_SUCCESS,
                        payload: { items1: data, items2: data2 }
                    });
                    set_loading(false)(dispatch, getState);
                });
            })
            .catch(err => {
                // console.error(TAGS_SET_FAILURE, err);
                dispatch({
                    type: TAGS_SET_FAILURE
                });
                set_loading(false)(dispatch, getState);
            });
    };
};
export default (state = initialState, action) => {
    switch (action.type) {
        case TAGS_SET_SUCCESS:
            return {
                ...state,
                tagsByDisease: action.payload.items1.map(x => x),
                tagsByDepartment: action.payload.items2.map(x => x)
            };
        default:
            return state;
    }
};
