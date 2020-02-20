import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import TripleTab from "../tab/TripleTab";
import HospitalSummaryContainer from "../component/HospitalSummaryContainer";
import HospitalReviewContainer from "../component/HospitalReviewContainer";
import NaverMapContainer from "../component/HospitalNaverMapContainer";
import ReviewList from "../list/ReviewList";
import ReviewItem from "../component/HospitalReviewChart";

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    }
});

function HospitalArea4(props) {
    const classes = useStyles();
    const {
        data = {},
        hospital_all_review,
        handleUrlCopy,
        handleAppMove,
        getAllReview
    } = props;
    const is_review =
        data.hospital_review_list && data.hospital_review_list.length > 0;

    const [selectedTab, setSelectedTab] = useState(0);
    const handleChange = newValue => {
        if (newValue === 2) {
            getAllReview();
        }
        setSelectedTab(newValue);
    };

    return (
        <div className={classes.root}>
            <TripleTab
                handleChange={handleChange}
                boxColor="white"
                contentA={
                    <HospitalSummaryContainer>
                        <ReviewList />
                    </HospitalSummaryContainer>
                }
                contentB={
                    <NaverMapContainer
                        data={data}
                        handleUrlCopy={handleUrlCopy}
                        handleAppMove={handleAppMove}
                    ></NaverMapContainer>
                }
                contentC={
                    <HospitalReviewContainer
                        is_review={is_review}
                        data={data.hospital_review_list}
                        hospital_all_review={hospital_all_review}
                    >
                        <ReviewList>
                            {hospital_all_review &&
                            hospital_all_review.cnt_review_people <
                                10 ? null : (
                                <ReviewItem
                                    hospital_all_review={hospital_all_review}
                                />
                            )}
                        </ReviewList>
                    </HospitalReviewContainer>
                }
            />
        </div>
    );
}
export default React.memo(HospitalArea4);
