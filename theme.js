import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
    // overrides: {
    //     MuiButton: {}
    // },
    typography: {
        fontFamily: [
            // "-apple-system",
            // "BlinkMacSystemFont",
            // '"Segoe UI"',
            // "Roboto",
            // '"Helvetica Neue"',
            // "Arial",
            // "sans-serif",
            // '"Apple Color Emoji"',
            // '"Segoe UI Emoji"',
            // '"Segoe UI Symbol"',
            // "SpoqaHanSans-Regular",
            // "NanumSquareOTF_acR",
            "NanumSquare"
        ].join(",")
    }
});
