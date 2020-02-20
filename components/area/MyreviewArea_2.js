import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import DoubleTab from "../tab/DoubleTab";
import DoctorReviewItem from "../component/MyDoctorReviewItem";
import HospitalReviewItem from "../component/MyHospitalReviewItem";
import ListContent from "../list/ListContent";
import ReviewPopup from "../popup/ReviewPopup";

import { pTr } from "../../styles/typography";
import { hospital_review_request } from "../../reducers/hospitalinfo";
import { doctor_review_request } from "../../reducers/doctorinfo";
import {
    message_open,
    whether_open,
    whether_result
} from "../../reducers/utilsinfo";

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    context: {}
});

function MyreviewArea1(props) {
    const classes = useStyles();
    const { hospital_review_list = [], doctor_review_list = [] } = props;
    const [open, setOpen] = useState(false);
    const [selected_review_data, setSelected_review_data] = useState();

    const onOpen = review_id => {
        let data = doctor_review_list.find(x => x.review_id == review_id);
        setSelected_review_data(data);
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const [delId, setDelId] = useState(null);
    useEffect(() => {
        if (props.whetherResult.state) {
            if (
                props.whetherResult.state == "ok" &&
                delId == props.whetherResult.value
            ) {
                props.doctor_review_request(
                    "del",
                    props.whetherResult.value,
                    null,
                    false
                );
            } else if (props.whetherResult.state == "cancel") {
            }
            setDelId(null);
            props.whether_result(null);
        }
    }, [props.whetherResult.state]);
    const myReviewDelete = review_id => {
        setDelId(review_id);
    };
    const myReviewPut = (review_id, value) => {
        props.doctor_review_request("put", review_id, value, false);
    };
    return (
        <div className={classes.root}>
            <DoubleTab
                leftTitle={`의사(${doctor_review_list.length})`}
                rightTitle={`병원(${hospital_review_list.length})`}
                contentA={
                    <ListContent
                        listProps={{
                            style: {
                                padding: "5px 0",
                                backgroundColor: "rgb(240 240 240)"
                            }
                        }}
                        linedisable={true}
                        disbutton={true}
                    >
                        {doctor_review_list
                            ? doctor_review_list.map((item, index) => {
                                  return (
                                      <DoctorReviewItem
                                          key={`review-item-${index}`}
                                          review_list={item}
                                          review_request={
                                              props.doctor_review_request
                                          }
                                          onOpenPopup={onOpen}
                                          myReviewDelete={myReviewDelete}
                                          whether_open={props.whether_open}
                                      />
                                  );
                              })
                            : null}
                    </ListContent>
                }
                contentB={
                    <ListContent
                        listProps={{
                            style: {
                                padding: "5px 0",
                                backgroundColor: "rgb(240 240 240)"
                            }
                        }}
                        linedisable={true}
                        disbutton={true}
                    >
                        {hospital_review_list
                            ? hospital_review_list.map((item, index) => {
                                  return (
                                      <HospitalReviewItem
                                          key={`review-item-${index}`}
                                          review_list={item}
                                          review_request={
                                              props.hospital_review_request
                                          }
                                          message_open={props.message_open}
                                          whether_open={props.whether_open}
                                          whether_result={props.whether_result}
                                          whetherResult={props.whetherResult}
                                      />
                                  );
                              })
                            : null}
                    </ListContent>
                }
            />
            <ReviewPopup
                open={open}
                onClose={onClose}
                data={selected_review_data}
                myReviewPut={myReviewPut}
                is_review={true}
            ></ReviewPopup>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        saved_doctors: state.mypageinfo.saved_doctors,
        hospital_review_list: state.hospitalinfo.hospital_review_list,
        doctor_review_list: state.doctorinfo.doctor_review_list,
        whetherResult: state.utilsinfo.whetherResult
    };
};
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            hospital_review_request,
            doctor_review_request,
            message_open,
            whether_open,
            whether_result
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(MyreviewArea1);
