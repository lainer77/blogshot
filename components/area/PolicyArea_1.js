import { connect } from "react-redux";
import React, { useEffect } from "react";
import { bindActionCreators } from "redux";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import { pTr } from "../../styles/typography";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        marginTop: pTr(64)
    },
    content: {
        padding: pTr(20)
    },
    text: {
        fontSize: pTr(14),
        lineHeight: pTr(20),
        letterSpacing: 0,
        marginBottom: pTr(18)
    },
    center: { textAlign: "center" }
});
function ContactArea1(props) {
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <Typography className={classes.text}>
                    <ol>
                        <li>
                            <strong>개인정보 처리방침이란?</strong>
                        </li>
                    </ol>
                    <p>
                        아키소스템바이오스트래지티스(이하 "회사")는 이용자의
                        &lsquo;동의를 기반으로 개인정보를 수집&middot;이용 및
                        제공&rsquo;하고 있으며, &lsquo;이용자의 권리 (개인정보
                        자기결정권)를 적극적으로 보장&rsquo;합니다.
                        <br /> 회사는 정보통신서비스제공자가 준수하여야 하는
                        대한민국의 관계 법령 및 개인정보보호 규정, 가이드라인을
                        준수하고 있습니다.
                        <br /> &ldquo;개인정보처리방침&rdquo;이란 이용자의
                        소중한 개인정보를 보호함으로써 이용자가 안심하고
                        서비스를 이용할 수 있도록 회사가 준수해야 할 지침을
                        의미합니다.
                        <br /> <br /> 본 개인정보처리방침은 회사가 제공하는
                        &ldquo;메디코스코프&rdquo; 서비스(이하
                        &ldquo;서비스&rdquo;라 함)에 적용됩니다.
                    </p>
                    <ol start="2">
                        <li>
                            <strong>개인정보 수집</strong>
                        </li>
                    </ol>
                    <p>
                        <strong>
                            서비스 제공을 위한 필요 최소한의 개인정보를 수집하고
                            있습니다.
                        </strong>
                    </p>
                    <p>
                        회원 가입 시 또는 서비스 이용 과정에서 주식회사
                        카카오(이하 &lsquo;카카오&rsquo;)가 제공하는 카카오계정
                        로그인을 통해 서비스 제공에 필요한 최소한의 개인정보를
                        수집하고 있습니다.
                    </p>
                    <p>&nbsp;</p>
                    <p>[수집하는 개인정보]</p>
                    <p>
                        프로필정보(닉네임/프로필사진), 카카오계정(이메일),
                        전화번호, 성별, 암호화된 이용자 확인값(CI), 생일
                    </p>
                    <p>&nbsp;</p>
                    <p>
                        <strong>
                            개인정보를 수집하는 방법은 다음과 같습니다.
                        </strong>
                    </p>
                    <p>
                        개인정보를 수집하는 경우에는 반드시 사전에 이용자에게
                        해당 사실을 알리고 동의를 구하고 있으며, 아래와 같은
                        방법을 통해 개인정보를 수집합니다.
                    </p>
                    <ul>
                        <li>
                            회원가입 및 서비스 이용 과정에서 회사가 사용하는
                            회원정보 연계서비스(카카오계정 로그인)을 통해
                            이용자가 개인정보 수집에 대해 동의를 하는 경우
                        </li>
                        <li>
                            고객센터를 통한 상담 과정에서 웹페이지, 메일, 팩스,
                            전화 등
                        </li>
                    </ul>
                    <p>&nbsp;</p>
                    <p>
                        <strong>
                            서비스 이용 과정에서 이용자로부터 수집하는
                            개인정보는 아래와 같습니다.
                        </strong>
                    </p>
                    <p>
                        PC웹, 모바일 웹/앱 이용 과정에서 단말기정보(OS,
                        화면사이즈, 디바이스 아이디, 폰기종, 단말기 모델명),
                        IP주소, 쿠키, 방문일시, 부정이용기록, 서비스 이용 기록
                        등의 정보가 자동으로 생성되어 수집될 수 있습니다.
                    </p>
                    <ol start="3">
                        <li>
                            <strong>개인정보 이용</strong>
                        </li>
                    </ol>
                    <p>
                        <strong>
                            회원관리, 서비스 제공&middot;개선, 신규 서비스 개발
                            등을 위해 이용합니다. 회원 가입 시 또는 서비스 이용
                            과정에서 웹사이트(app.medicoscope.com)를 통해 아래와
                            같이 서비스 제공을 위해 필요한 최소한의 개인정보를
                            수집하고 있습니다.
                        </strong>
                    </p>
                    <ul>
                        <li>
                            회원 식별/가입의사 확인, 본인/연령 확인, 부정이용
                            방지
                        </li>
                        <li>
                            신규 서비스 개발, 다양한 서비스 제공, 문의사항 또는
                            불만처리, 공지사항 전달
                        </li>
                        <li>
                            서비스의 원활한 운영에 지장을 주는 행위(계정 도용 및
                            부정 이용 행위 등 포함)에 대한 방지 및 제재
                        </li>
                        <li>
                            인구통계학적 특성과 이용자의 관심, 기호, 성향의
                            추정을 통한 맞춤형 컨텐츠 추천 및마케팅에 활용
                        </li>
                        <li>
                            서비스 이용 기록, 접속 빈도 및 서비스 이용에 대한
                            통계, 프라이버시 보호 측면의 서비스 환경 구축,
                            서비스 개선에 활용
                        </li>
                    </ul>
                    <ol start="4">
                        <li>
                            <strong>개인정보 제공</strong>
                        </li>
                    </ol>
                    <p>
                        <strong>
                            회사는 이용자의 별도 동의가 있는 경우나 법령에
                            규정된 경우를 제외하고는 이용자의 개인정보를
                            제3자에게 제공하지 않습니다.{" "}
                        </strong>
                    </p>
                    <ol start="5">
                        <li>
                            <strong>개인정보 파기</strong>
                        </li>
                    </ol>
                    <p>
                        <strong>
                            개인정보는 수집 및 이용목적이 달성되면 지체없이
                            파기하며, 절차 및 방법은 아래와 같습니다.
                        </strong>
                    </p>
                    <p>
                        전자적 파일 형태인 경우 복구 및 재생되지 않도록 안전하게
                        삭제하고, 그 밖에 기록물, 인쇄물, 서면 등의 경우
                        분쇄하거나 소각하여 파기합니다.
                        <br /> 다만, 내부 방침에 따라 일정 기간 보관 후 파기하는
                        정보는 아래와 같습니다. 
                    </p>
                    <ul>
                        <li>
                            1)아래 정보는 탈퇴일부터 최대 1년간 보관 후
                            파기합니다.
                            <ul>
                                <li>
                                    안내메일 발송 및 CS문의 대응을 위해
                                    회원계정을 암호화하여 보관하며 탈퇴기록을
                                    보관
                                </li>
                                <li>서비스 부정이용 기록</li>
                            </ul>
                        </li>
                        <li>
                            2)&rsquo;개인정보 유효기간제&rsquo;에 따른 개인정보
                            별도 관리
                            <ul>
                                <li>
                                    회사는 1년간 서비스를 이용하지 않은 회원의
                                    개인정보를 별도로 분리 보관 또는 삭제하고
                                    있으며, 분리 보관된 개인정보는 4년간 보관 후
                                    지체없이 파기합니다.
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ol start="6">
                        <li>
                            <strong>기타</strong>
                        </li>
                    </ol>
                    <p>
                        <strong>회사는 여러분의 권리를 보호합니다.</strong>
                    </p>
                    <p>
                        이용자는 언제든지 자신의 개인정보의 수집・이용에 대한
                        동의 철회 또는 가입 해지를 요청할 수 있습니다.
                    </p>
                    <p>
                        보다 구체적으로는 회사가 여러분의 개인정보를 제공받는
                        카카오 서비스에서의 회원정보 수정 기능이나 연결된 앱
                        삭제 기능을 이용할 수 있으며, 회사의 고객센터로 연락하여
                        회원계정의 탈퇴나 정정에 대해 문의하시는 경우에도 최선을
                        다해 안내해드리겠습니다.
                    </p>
                    <p>
                        <strong>&nbsp;</strong>
                    </p>
                    <p>
                        <strong>
                            웹기반 서비스의 제공을 위하여 쿠키를 이용하는 경우가
                            있습니다.
                        </strong>
                    </p>
                    <p>
                        쿠키는 보다 빠르고 편리한 웹사이트 사용을 지원하고
                        맞춤형 서비스를 제공하기 위해 사용됩니다.
                    </p>
                    <p>쿠키란?</p>
                    <p>
                        웹사이트를 운영하는데 이용되는 서버가 이용자의
                        브라우저에 보내는 아주 작은 텍스트 파일로서 이용자
                        컴퓨터에 저장됩니다.
                    </p>
                    <p>사용목적</p>
                    <p>
                        개인화되고 맞춤화된 서비스를 제공하기 위해서 이용자의
                        정보를 저장하고 수시로 불러오는 쿠키를 사용합니다.
                        메디코스코프 웹사이트의 쿠키는 이용자가 웹 사이트를
                        방문할 때, 웹 사이트 사용을 설정한대로 접속하고 편리하게
                        사용할 수 있도록 돕습니다. 또한 메디코스코프의 쿠키는
                        서버로부터 수집되지 않으며, 이용하시는 단말의 웹브라우저
                        내에서만 보관 및 동작합니다.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                        <strong>
                            개인정보보호와 관련해서 궁금하신 사항은?
                        </strong>
                    </p>
                    <p>
                        서비스를 이용하면서 발생하는 모든 개인정보보호 관련
                        문의, 불만, 조언이나 기타 사항은 개인정보 보호책임자 및
                        담당부서로 연락해 주시기 바랍니다. 회사는 여러분의
                        목소리에 귀 기울이고 신속하고 충분한 답변을 드릴 수
                        있도록 최선을 다하겠습니다.
                    </p>
                    <p>&nbsp;</p>
                    <p>개인정보보호 책임자 및 담당부서</p>
                    <ul>
                        <li>책임자: 조현철</li>
                        <li>담당부서: 개인정보보호파트</li>
                        <li>메디코스코프 고객센터 : support@medicoscope.com</li>
                    </ul>
                    <p>
                        또한 개인정보가 침해되어 이에 대한 신고나 상담이
                        필요하신 경우에는 아래 기관에 문의하셔서 도움을 받으실
                        수 있습니다.
                    </p>
                    <p>개인정보침해 신고센터</p>
                    <ul>
                        <li>(국번없이)118</li>
                        <li>
                            <a href="https://privacy.kisa.or.kr/">
                                https://privacy.kisa.or.kr
                            </a>
                        </li>
                    </ul>
                    <p>대검찰청 사이버수사과</p>
                    <ul>
                        <li>(국번없이)1301</li>
                        <li>
                            <a href="mailto:cid@spo.go.kr">cid@spo.go.kr</a>
                        </li>
                    </ul>
                    <p>경찰청 사이버안전국</p>
                    <ul>
                        <li>(국번없이)182</li>
                        <li>
                            <a href="https://cyberbureau.police.go.kr/">
                                https://cyberbureau.police.go.kr
                            </a>
                        </li>
                    </ul>
                    <p>&nbsp;</p>
                    <p>
                        <strong>개인정보처리방침이 변경되는 경우</strong>
                    </p>
                    <p>
                        법률이나 서비스의 변경사항을 반영하기 위한 목적 등으로
                        개인정보처리방침을 수정할 수 있습니다.
                        개인정보처리방침이 변경되는 경우 회사는 변경 사항을
                        게시하며, 변경된 개인정보처리방침은 게시한 날로부터 7일
                        후부터 효력이 발생합니다. 
                        <br /> 다만, 수집하는 개인정보의 항목, 이용목적의 변경
                        등과 같이 이용자 권리의 중대한 변경이 발생할 때에는 최소
                        30일 전에 미리 알려드리겠습니다.
                    </p>
                    <p>&nbsp;</p>
                    <ul>
                        <li>공고일자: 2019년 12월 01일</li>
                        <li>시행일자: 2019년 12월 24일</li>
                    </ul>
                </Typography>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        // tagsByDisease: state.homeinfo.tagsByDisease
    };
};
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContactArea1);
