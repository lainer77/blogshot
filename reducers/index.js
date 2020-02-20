import { combineReducers } from "redux";
import searchinfo from "./searchinfo";
import doctorinfo from "./doctorinfo";
import hospitalinfo from "./hospitalinfo";
import homeinfo from "./homeinfo";
import kakaoinfo from "./kakaoinfo";
import mypageinfo from "./mypageinfo";
import utilsinfo from "./utilsinfo";
//did not immer
export default combineReducers({
    searchinfo,
    doctorinfo,
    hospitalinfo,
    homeinfo,
    kakaoinfo,
    mypageinfo,
    utilsinfo
});
