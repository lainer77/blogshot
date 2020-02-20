import {} from "../actions/types";

import axios from "axios";
import { BASE_URL, API_TIME_OUT } from "../contants/constants";
import { string } from "prop-types";

function getAPI(requset) {
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
    return axios.post(`https://${BASE_URL}/cs/ask`, encodeForm(requset), {
        headers: {
            Accept: "application/json"
        },
        timeout: API_TIME_OUT / 2 // 15초 이내에 응답이 오지 않으면 에러로 간주
    });
}
const initialState = {
    category: string,
    email: string,
    phone: string,
    title: string,
    contents: string
};
export const ask_send = param => {
    return async (dispatch, getState) => {
        let params = {};
        let parmasValidate = {
            category: false,
            email: false,
            contents: false
        };
        Object.keys(param).map(x => {
            switch (x) {
                case "category":
                    params[x] = param[x];
                    parmasValidate[x] = true;
                    return;
                case "email":
                    params[x] = param[x];
                    parmasValidate[x] = true;
                    return;
                case "phone":
                    params[x] = param[x];
                    return;
                case "title":
                    params[x] = param[x];
                    return;
                case "contents":
                    params[x] = param[x];
                    parmasValidate[x] = true;
                    return;
                default:
                    break;
            }
        });
        let validateAll = true;
        await Object.keys(parmasValidate).forEach(x => {
            if (parmasValidate[x] == false) {
                validateAll = false;
            }
        });
        if (validateAll) {
            getAPI(params)
                .then(function(response) {})
                .catch(function(error) {});
        } else alert("필수 입력 값들이 입력되지 않았습니다.");
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
