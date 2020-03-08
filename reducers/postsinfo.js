import { GET_POSTS_LIST, GET_POST_CODE } from "../actions/types";
import { BASE_URL, API_TIME_OUT } from "../contants/constants";
import axios from "axios";

const tableName = "posts";

function getListAPI(params) {
  return axios.get(`http://${BASE_URL}/${tableName}`, {
    params: params,
    timeout: API_TIME_OUT / 2 // 15초 이내에 응답이 오지 않으면 에러로 간주
  });
}
function getCodeAPI(code) {
  return axios.get(`http://${BASE_URL}/${tableName}/${code}`, {
    timeout: API_TIME_OUT / 2 // 15초 이내에 응답이 오지 않으면 에러로 간주
  });
}

const initialState = {
  posts: [],
  selectedPost: {}
};
export const getPostsList = () => {
  return (dispatch, getState) => {
    getListAPI({ limit: 30 }).then(res => {
      dispatch({ type: GET_POSTS_LIST, payload: { data: res.data } });
    });
  };
};
export const getPostCode = code => {
  return (dispatch, getState) => {
    getCodeAPI(code).then(res => {
      dispatch({ type: GET_POST_CODE, payload: { data: res.data } });
    });
  };
};

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
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_LIST:
      return { ...state, posts: action.payload.data };
    case GET_POST_CODE:
      return { ...state, selectedPost: action.payload.data };
    default:
      return state;
  }
};
