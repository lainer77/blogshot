/*----------------------------------------------------------------------------*
 *
 *  Copyright (C) 2019 daehank@qbuz.io  All rights reserved
 *
 *
 *  MODULE: constants.js
 *
 *  FUNCTIONS: constants
 *
 *  COMMENTS:
 *
 *  AUTHOR: qizbuz
 *
 *  DATE: 2019-07-30
 *
 *  LAST EDITED:
 *
 *  TO-DO:
 *
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------*
 *                                 CONTANT                                    *
 *----------------------------------------------------------------------------*/

export const NAVER = {
  ncpClientId: "l7atafik57",
  URL_SCHEME: {
    WEB_BROWSER: {
      IOS: {
        url: "nmap://actionPath?parameter=value&appname={YOUR_APP_NAME}",
        store: "http://itunes.apple.com/app/id311867728?mt=8"
      },
      ANDROID: {
        url:
          "intent://actionPath?parameter=value&appname={YOUR_APP_NAME}#Intent;scheme=nmap;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.nhn.android.nmap;end"
      }
    }
  }
};
export const INFO = {
  HOME: {
    MAIN_TITLE: "MakeStory",
    MEDICO_THINK: {
      title:
        "메디코스코프의 생각, \n \
                '연구하는 의사가 실력있는 의사'",
      content1: {
        label: "의학은 계속 발전합니다",
        text:
          "5년 전의 의학 지식이 현재의 최선이 아닐 수 있으며, \
                    10년 전의 치료 방법은 더 이상은 잘 사용되지 않는 \
                    방법일 수 있습니다. "
      },
      content2: {
        label: "의료는 과학적으로 검증되어야 합니다.",
        text:
          "어떤 의사 선생님만 한다는 ‘주사 치료’는 제대로 연구되지 \
                    못한 치료 방법일 수 있고, 어떤 병원의 값비싼 ‘재생 치료’는\
                    철저한 과학적 검증이 되지 않은 치료일 수도 있습니다. "
      },
      content3:
        "그래서, 의사는 발전하는 의학을 공부하고, 자신의 치료를 과학적으로 \
                연구해야 합니다. ",
      content4:
        "하지만, 진짜 실력 있는 의사는 단순히 받아들이는 공부를 넘어, 자신의 \
                연구를 통해 의학을 발전시키고, 결과를 발표하여 끊임없이 국내외 의학계의 \
                검증을 받는 의사입니다. ",
      content5: "연구하는 실력있는 의사를 찾는 방법, 메디코스코프."
    }
  },
  DOCTOR: {
    FACT: {
      medico: {
        title: "메디코팩트",
        content:
          "한 의사가 연구논물을 학술지에 발표한 모든 실적을 \
                종합한 점수입니다.\n\n 예를 들면 정형외과 의사로서 ‘회전근개’,\n \
                ‘대퇴사두근’이라는 주제부문별로 논문을\n 발표했다면, 각 주제부문의 \
                점수를 모두 합산한\n 것이 메디코팩트 점수가 됩니다."
      },
      special: {
        title: "전문분야팩트",
        content:
          "전문분야팩트는 의사가 학술지에 발표한 개별논문의 연구점수를, \
                    전문분야별로 합산하여 집계합니다.\n\n \
                    예를 들어 같은 정형외과 의사라도 '회전근개'부문의 점수가 높은 \
                    의사와, '추간판'부문의 점수가 높은 의사의 차이는 해당 질병을 \
                    가진 환자입장에서 의미있는 정보가 될 것입니다."
      },
      feat: {
        title: "업적팩트",
        content:
          "의사가 연구업적을 학술지에 발표한 실적으로 점수로 표현한 것입니다. \n\n \
                    업적팩트는 업적이 게재된 학술지의 권위와 저술자로서의 포지션 등을 \
                    반영하여 산정되며, 검색하신 질병이나 수술 등 주제가 다르면 동일한 의사라도 \
                    업적팩트가 다르게 나타날 수 있습니다."
      }
    }
  },
  HOSPITAL: {
    FACT: {
      hospital: {
        title: "병원팩트",
        content:
          "병원팩트는, 해당 병원에 소속된 의사들의 메디코팩트 합계를 나타냅니다.\n\n \
                    각 의사들의 메디코팩트 수준과 인원수에 따라 병원팩트의 차이가 발생하며, \
                    같은 병원이라도 시기에 따라 의사들의 입/퇴사가 발생하면 점수는 변동될 \
                    수 있습니다."
      }
    }
  },
  FILTER: {
    AREA: [
      "서울",
      "경기",
      "인천",
      "부산",
      "세종시",
      "대전",
      "대구",
      "울산",
      "경주",
      "광주",
      "군산"
    ],
    MEDICAL_DEPARTMENT: [
      "내과계열",
      "외과계열",
      "정형외과",
      "성형외과",
      "산부인과",
      "소아청소년과",
      "정신건강의학과",
      "신경과",
      "안과",
      "이비인후과",
      "피부과",
      "비뇨의학과",
      "가정의학과",
      "마취통증의학과",
      "재활의학과",
      "치과",
      "진료지원과",
      "학의학",
      "기타"
    ]
  },
  FOOTER: {
    ADDRESS: "서울시 관악구 보라매로5가길 7 813",
    COMPANY: "아키소스템 바이오스트래지티스",
    COPYRIGHT: "Copyright © 2019 메디코스코프  All rights reserved"
  },
  TUTORIAL: {
    PAGE1: {
      TITLE: "메디코스코프의 생각은 연구하는\n 의사가 실력 있는 의사입니다.",
      DESCRIPTION:
        "메디코스코프는 질병과 치료방법에 대한 의사들의 \n \
                역량을 분석하는 새로운 알고리즘,\n \
                메디코팩트(Medicofact)로 가장 신뢰할 수 있는 의사를\n \
                찾아드립니다."
    },
    PAGE2: {
      TITLE:
        "무슨 과를 가야하지?\n \
                고민말고 질병명, 시술명, 수술명으로",
      DESCRIPTION:
        "검색한 질병과 치료에 대한 과학적 검증을 받은\n 신뢰할 수 있는 의사를 찾아드립니다."
    },
    PAGE3: {
      TITLE: "환자로서의 경험을 나눠 보세요.",
      DESCRIPTION:
        "의사의 친절함, 병원의 청결함, 겪어보고 느낀 경험을\n 리뷰하고 지인과 공유하세요."
    },
    PAGE4: {
      TITLE: "카카오톡으로 바로\n 시작하실 수 있습니다.",
      DESCRIPTION:
        "번거로운 가입절차가 필요없습니다.\n 카카오톡으로 바로 시작해보세요."
    }
  }
};

// medico api
// export const BASE_URL = "medico-api.devbox.app/v1";
export const BASE_URL = "api.medicoscope.com/v1";
export const HOME_URL = "api.medicoscope.com";

// api params
export const API_TIME_OUT = 30000;
export const SEARCH_REQUST_RESULT_LIMIT = 10;
