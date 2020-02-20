import window from "global";

const parseDeci = (num = "") => parseInt(num, 10);

// viewportResponsiveBaseFontSize 계산을 위한 상수. 어떤 값을 사용해도 상관없다.
const BASE_FONT_SIZE = "16px";

// 디자인에서 제시한 앱 사이즈. pTr 계산에는 디자인에 제시한 사이즈를 기준으로 해야 한다.
export const BASE_APP_SIZE = "375px";
export const BASE_APP_HEIGHT = "812px";
export const BASE_COLOR = "rgb(0 49 82)";
// lightpuple
// export const BASE_COLOR = "rgb(174 87 251)";

/**
 * 모바일에서는 뷰포트 넓이에 대응해서 폰트 사이즈가 커지도록 한다.
 * html 폰트 사이즈를 vw 단위로 설정한 후, 모든 요소의 사이즈를 rem 단위로 설정하면 크기가 디바이스 크기에
 * 반응해서 커지게 된다.
 * vw 값은 임의로 지정한 가상 베이스 폰트 사이즈와 디자인에서 사용한 앱의 넓이를 사용해서 계산한다.
 * 디자이너가 지정한 앱의 넓이가 414px, 가상 베이스 폰트사이즈가 25px이라면 실제 베이스 폰트사이즈는
 * 100 / 414 * 25 vw 가 된다.
 *
 * 데스크탑 뷰에서는 vw 단위로 베이스 폰트사이즈를 지정하면 앱 요소의 사이즈가 너무 커지기 때문에 vw 대신
 * 가상 베이스폰트 사이즈를 사용하고 앱의 넓이도 디자인의 넓이를 그대로 사용한다.
 */
// export const VIEWPORT_RESPONSIVE_FONT_SIZE = `100vw`;

export const VIEWPORT_RESPONSIVE_FONT_SIZE = `${(parseDeci(BASE_FONT_SIZE) /
    parseDeci(BASE_APP_SIZE)) *
    100}vw`;

export const BASE_LINE_HEIGHT = 1.4;

/**
 * point(pixel) to rem
 * 가상 베이스 폰트 사이즈를 기준으로 rem 값을 계산한다.
 */

export const pTr = (pt = 16) => {
    // return `${parseInt(pt) / parseInt(BASE_FONT_SIZE)}rem`;
    return `${pt}px`;
};
export const pTx = (px = 16) => {
    // if (!window) return null;
    // let width = window.innerWidth < 768 ? window.innerWidth : 768;
    // return `${px * (width / parseInt(BASE_APP_SIZE))}px`;
    return `${px}px`;
};
export const responsiveHeight = (px = 16) => {
    // if (!window) return null;
    // let height = px < window.innerHeight ? px : window.innerHeight;
    // return `${px * (height / parseInt(BASE_APP_HEIGHT))}px`;
    return `${px}px`;
};
export const pInt = (pt = 16) => {
    // return parseInt(pt) * (window.innerWidth / parseInt(BASE_APP_SIZE));
    // return pt;
    return parseInt(pt);
};
export const getWindow = () => {
    if (!window) return null;
    return window;
};
// export const pTr = (pt = 16) => {
//     return `${parseInt(pt, 10) / parseInt(BASE_FONT_SIZE, 10)}rem`;
// };

export default {
    VIEWPORT_RESPONSIVE_FONT_SIZE,
    BASE_FONT_SIZE,
    BASE_LINE_HEIGHT,
    pTr
};
