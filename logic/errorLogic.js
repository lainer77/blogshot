import Router from "next/router";
import { error_open } from "../reducers/utilsinfo";

let dispatch;
let getState;

export const setDispatch = dispatch => {
    dispatch = dispatch;
};
export const setStateFuc = getState => {
    getState = getState;
};

export const errorExcute = (code, params, cb) => {
    switch (code) {
        case 403:
            alert("사용자의 다른 기기에서 로그인되었습니다. 로그아웃됩니다.");
            Router.push("/");
            if (cb) cb();
            break;
        case 500:
            let errorObj = {
                code: code,
                ok: "다시 시도",
                cancel: "홈으로",
                msg:
                    "이런, 일시적으로 서비스에 장애가 발생한 것 같습니다. 다시 시도해보시고 이러한 증상이 계속되면 앱을 재실행해보시기 바랍니다."
            };
            return (dispatch, getState) => {
                error_open(errorObj)(dispatch, getState);
            };
            break;

        default:
            break;
    }
};
