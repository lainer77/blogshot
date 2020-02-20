import React, { Component } from "react";
import KakaoService from "./KakaoService";

export default class KakaoLogin extends Component {
    constructor(props) {
        super();
        this.state = { open: false };
    }
    componentDidMount() {
        ((d, s, id, cb) => {
            const el = d.getElementsByTagName(s)[0];
            const fjs = el;
            let js = el;

            js = d.createElement(s);
            js.id = id;
            js.src = "//developers.kakao.com/sdk/js/kakao.min.js";
            fjs.parentNode.insertBefore(js, fjs);
            js.onload = cb;
        })(document, "script", "kakao-sdk", () => {
            this.setState({ open: this.props.open });
        });
    }
    render() {
        return (
            <div>
                {this.state.open ? (
                    <KakaoService>{this.props.children}</KakaoService>
                ) : (
                    "Loading map"
                )}
            </div>
        );
    }
}
