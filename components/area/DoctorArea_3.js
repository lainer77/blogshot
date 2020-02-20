import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import DoubleTab from "../tab/DoubleTab";
import ReviewList from "../list/ReviewList";
import DoctorReviewContainer from "../component/DoctorReviewContainer";
import DoctorReviewItem from "../component/DoctorReviewItem";
import DoctorSummaryContainer from "../component/DoctorSummaryContainer";
import DoctorSummaryItem from "../component/DoctorSummaryItem";
import ReviewPopup from "../popup/ReviewPopup";
import KakaoLoginPopup from "../popup/KakaoLoginPopup";
import { pTr } from "../../styles/typography";

import {
    doctor_review_request,
    add_doctor_papers
} from "../../reducers/doctorinfo";
import { set_kakao_login } from "../../reducers/kakaoinfo";
import { whether_open, whether_result } from "../../reducers/utilsinfo";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        backgroundColor: "white"
    },
    context: {
        textAlign: "-webkit-center",
        paddingTop: pTr(73),
        paddingBottom: "5em"
    },
    display: {
        fontSize: pTr(20),
        lineHeight: pTr(24),
        letterSpacing: 0,
        fontWeight: "bold",
        margin: pTr(10)
    },
    text2: {
        fontSize: pTr(14),
        marginTop: pTr(10),
        letterSpacing: 0,
        lineHeight: pTr(24)
    },
    button: { fontSize: pTr(12), letterSpacing: 0, lineHeight: pTr(18) }
});

function DoctorArea3(props) {
    const classes = useStyles();
    const {
        data,
        review_data,
        user,
        doctor_review_list,
        handleLoadReview
    } = props;
    const {
        doctor_name,
        clinic,
        doctor_id,
        info,
        searchText,
        searchText_research
    } = data;
    // const keys =
    //     data.info && data.info.papers ? Object.keys(data.info.papers) : null;

    let my_doctor_review = doctor_review_list[0];
    let reviewIsFull = false;

    const [score, setScore] = useState();
    const [delId, setDelId] = useState(null);
    const [review, setReview] = useState(false);
    const [is_review, setIs_review] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const [researchMore, setResearchMore] = useState(true);
    const [is_searchText, setIs_searchText] = useState(false);

    const onClose = () => {
        setReview(false);
    };
    const onOpen = () => {
        if (props.is_login) setReview(true);
        else {
            setPopupOpen(true);
        }
    };

    const myReviewDelete = review_id => {
        setDelId(review_id);
    };
    const myReviewAdd = value => {
        props.doctor_review_request("post", null, value);
    };
    const myReviewPut = (review_id, value) => {
        props.doctor_review_request("put", review_id, value);
    };

    const PopupOpen = () => {
        setPopupOpen(true);
    };
    const PopupClose = () => {
        setPopupOpen(false);
    };

    const reverseMore = () => {
        let cnt_total;
        if (searchText_research)
            cnt_total = searchText_research.cnt_paper_total;
        else cnt_total = info.research.cnt_paper_total;

        if (info.papers.length >= cnt_total) {
            setResearchMore(!researchMore);
            return false;
        } else return true;
    };

    const reverseResearchMore = () => {
        if (reverseMore()) {
            props.add_doctor_papers(doctor_id, searchText);
        }
    };

    const getReviewData = () => {
        if (
            review_data.review_list &&
            review_data.review_list.length > 0 &&
            doctor_review_list &&
            doctor_review_list.length > 0
        ) {
            const myReview = review_data.review_list.find(
                x => x.user.user_id == doctor_review_list[0].user.user_id
            );

            return is_review
                ? myReview
                : {
                      doctor: {
                          doctor_id: doctor_id,
                          doctor_name: doctor_name,
                          doctor_id: doctor_id
                      }
                  };
        }
        return {
            doctor: {
                doctor_id: doctor_id,
                doctor_name: doctor_name,
                doctor_id: doctor_id
            }
        };
    };

    const selectTab = selectedTab => {
        if (selectedTab === "hospital" && !reviewIsFull) {
            reviewIsFull = true;
            handleLoadReview();
        }
    };

    useEffect(() => {
        if (searchText) {
            var date = new Date();

            date.setTime(date.getTime() + 1 * 60 * 60 * 24 * 1000);

            let cookie = `searchText=${encodeURIComponent(searchText) ||
                ""}; expires=${date.toUTCString()};`;

            document.cookie = cookie;
            let searchType = sessionStorage.getItem("searchType");
            if (searchType == "질병명") setIs_searchText(true);
            else setIs_searchText(false);
        }
    }, []);
    useEffect(() => {
        if (searchText_research) reverseMore();
    }, [searchText_research]);
    useEffect(() => {
        if (!props.is_login) {
            if (localStorage.getItem("jwt_token")) {
                props.set_kakao_login({
                    jwt_token: localStorage.getItem("jwt_token")
                });
            }
        } else {
            PopupClose();
        }
    }, [props.is_login]);
    useEffect(() => {
        if (user && review_data && review_data.review_total_cnt > 0) {
            let ref = review_data.review_list.find(
                x => x.user.user_id == user.user_id
            );
            if (ref) {
                setIs_review(true);
            } else setIs_review(false);
        } else setIs_review(false);
    }, [user, review_data, doctor_review_list]);
    useEffect(() => {
        if (props.whetherResult.state) {
            if (
                props.whetherResult.state == "ok" &&
                delId == props.whetherResult.value
            ) {
                props.doctor_review_request("del", props.whetherResult.value);
            } else if (props.whetherResult.state == "cancel") {
            }
            setDelId(null);
            props.whether_result(null);
        }
    }, [props.whetherResult.state]);

    return (
        <div className={classes.root}>
            <DoubleTab
                leftTitle="개요"
                rightTitle="리뷰"
                boxColor="white"
                selectTab={selectTab}
                contentA={
                    <DoctorSummaryContainer
                        info={data.info}
                        score_medicofact={data.score_medicofact}
                        researchMore={researchMore}
                        reverseResearchMore={reverseResearchMore}
                        is_searchText={is_searchText}
                        searchText={searchText}
                        searchText_research={searchText_research}
                    >
                        <ReviewList>
                            {info &&
                                info.papers &&
                                info.papers.map((x, i) => {
                                    return (
                                        <DoctorSummaryItem
                                            key={i + "item"}
                                            papers={x}
                                        />
                                    );
                                })}
                        </ReviewList>
                    </DoctorSummaryContainer>
                }
                contentB={
                    <DoctorReviewContainer
                        data={review_data}
                        doctor_name={doctor_name}
                        user={user}
                        is_review={is_review}
                        my_doctor_review={my_doctor_review}
                        setScore={setScore}
                        onReview={onOpen}
                    >
                        <ReviewList>
                            {review_data.review_list &&
                            review_data.review_list.length > 0
                                ? review_data.review_list.map((x, i) => {
                                      let ref = false;
                                      if (user)
                                          ref = x.user.user_id == user.user_id;
                                      return (
                                          <DoctorReviewItem
                                              key={i + "item"}
                                              data={x}
                                              onOpen={onOpen}
                                              myReviewDelete={myReviewDelete}
                                              whether_open={props.whether_open}
                                              itemProps={{
                                                  style: {
                                                      backgroundColor:
                                                          "rgb(244 244 244)"
                                                  }
                                              }}
                                              is_review={ref}
                                          />
                                      );
                                  })
                                : null}
                        </ReviewList>
                    </DoctorReviewContainer>
                }
            />
            <ReviewPopup
                open={review}
                onClose={onClose}
                data={getReviewData()}
                myReviewAdd={myReviewAdd}
                myReviewPut={myReviewPut}
                is_review={is_review}
                score_s={score}
            />
            <KakaoLoginPopup
                open={popupOpen}
                onClose={PopupClose}
                otherAreaClose={true}
            ></KakaoLoginPopup>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        review_data: state.doctorinfo.review_data,
        user:
            state.doctorinfo.doctor_review_list.length > 0
                ? state.doctorinfo.doctor_review_list[0].user
                : null,
        doctor_review_list: state.doctorinfo.doctor_review_list,
        whetherResult: state.utilsinfo.whetherResult
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            doctor_review_request,
            whether_open,
            whether_result,
            set_kakao_login,
            add_doctor_papers
        },
        dispatch
    );
export default connect(mapStateToProps, mapDispatchToProps)(DoctorArea3);
