import axios from "axios";
import { BASE_URL, API_TIME_OUT } from "../contants/constants";

const encodeForm = data => {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
};

export const post = (data, exUrl, tirtyTime) => {
    return axios.post(`https://${BASE_URL}${exUrl}`, encodeForm(data), {
        headers: {
            // 요청 헤더
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Accept: "application/json"
        },
        cache: false,
        processData: true,
        timeout: API_TIME_OUT / (tirtyTime || 3) // 10초 이내에 응답이 오지 않으면 에러로 간주
    });
};
export const postKey = (data, exUrl, loginkey, tirtyTime) => {
    return axios.post(`https://${BASE_URL}${exUrl}`, data, {
        headers: {
            // 요청 헤더
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Accept: "application/json",
            "X-Api-Key": loginkey
        },
        cache: false,
        processData: true,
        timeout: API_TIME_OUT / 3 // 10초 이내에 응답이 오지 않으면 에러로 간주
    });
};

export default { post: post, postKey: postKey };
