import React, { useState } from "react";
import GalleryPopup from "../popup/GalleryPopup";

import { makeStyles } from "@material-ui/styles";
import { Typography, Button } from "@material-ui/core";

import StarList from "./StarList";
import ProfileIcon from "../Icon/ProfileIcon";

import { pTr } from "../../styles/typography";

import styled from "styled-components";

const useStyles = makeStyles(theme => ({
    oneline: {
        display: "flex",
        justifyContent: "space-between"
    },
    text2: {
        fontSize: pTr(10),
        color: "rgb(45 47 49)",
        lineHeight: pTr(9),
        letterSpacing: 0,
        marginTop: pTr(9),
        textAlign: "right",
        fontWeight: "lighter",
        marginRight: pTr(5)
    },
    review_content_item: {
        padding: `${pTr(10)} ${pTr(20)}`,
        width: "100%",
        borderBottom: "1px solid lightgray"
    },
    name: {
        margin: `${pTr(3)} ${pTr(11)}`,
        fontSize: pTr(12),
        letterSpacing: 0,
        fontWeight: "bold"
    },
    context: {
        marginLeft: "-5px",
        marginTop: "10px",
        "& p": {
            fontSize: pTr(10),
            lineHeight: pTr(14),
            letterSpacing: 0
        }
    },
    imgs: {
        display: "flex",
        justifyContent: "left",
        padding: `${pTr(12)} 0 0`
    },
    buttons: {
        paddingBottom: pTr(0),
        paddingTop: pTr(9),
        "& button": {
            fontSize: pTr(12),
            letterSpacing: 0,
            lineHeight: 0,
            margin: pTr(5),
            padding: pTr(3),
            borderRadius: pTr(6),
            height: pTr(24)
        }
    },
    button1: {},
    button2: {
        color: "white",
        backgroundColor: "black",
        "&:hover": {
            color: "white",
            backgroundColor: "black"
        }
    }
}));

const ImgBox = styled.img`
    && {
        width: ${pTr(104)};
        height: ${pTr(63)};
        background-color: lightgray;
        border: 1px solid rgb(151 151 151);
    }
`;

const ContentItem = props => {
    const classes = useStyles();
    const { profileEnable = true, data, itemProps, is_review } = props;
    const [galleryOpened, setGalleryOpened] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const toggleGallery = () => {
        setGalleryOpened(!galleryOpened);
    };
    const handleImageClick = index => {
        setSelectedIndex(index);
        setGalleryOpened(true);
    };

    return (
        <div className={classes.review_content_item} {...itemProps}>
            <div className={classes.oneline}>
                <div className={classes.oneline}>
                    {profileEnable ? (
                        <ProfileIcon
                            src={data ? data.user.photo_url : null}
                            style={{
                                backgroundColor: "gray",
                                color: "white",
                                width: pTr(24),
                                height: pTr(24),
                                borderRadius: "5rem"
                            }}
                        />
                    ) : null}
                    {profileEnable ? (
                        <Typography className={classes.name}>
                            {data ? data.user.name : ""}
                        </Typography>
                    ) : null}

                    {data && data.review_score ? (
                        <div style={{ marginLeft: "-10px" }}>
                            <StarList
                                select={false}
                                score={data.review_score / 2}
                            />
                        </div>
                    ) : null}
                </div>
                <div />
                <Typography className={classes.text2}>
                    {data ? data.review_updatedAt : ""}
                </Typography>
            </div>
            <div className={classes.context}>
                <Typography>{data ? data.review_txt : ""}</Typography>
            </div>
            {data && data.review_photo_urls.thumbnail.length > 0 ? (
                <div className={classes.imgs}>
                    {data.review_photo_urls.thumbnail.map((item, index) => {
                        return (
                            <>
                                <ImgBox
                                    src={item}
                                    onClick={() => {
                                        handleImageClick(index);
                                    }}
                                />
                                {index ==
                                data.review_photo_urls.thumbnail.length -
                                    1 ? null : (
                                    <div style={{ padding: pTr(6) }} />
                                )}
                            </>
                        );
                    })}
                </div>
            ) : null}
            {is_review ? (
                <Typography
                    className={classes.buttons}
                    display="block"
                    align="center"
                >
                    <Button
                        className={classes.button1}
                        variant="outlined"
                        onClick={() => {
                            props.whether_open({
                                ok: "확인",
                                cancel: "취소",
                                msg: "정말 삭제하시겠습니까?",
                                value: data.review_id
                            });
                            props.myReviewDelete(data.review_id);
                        }}
                    >
                        삭제
                    </Button>
                    <Button
                        className={classes.button2}
                        variant="outlined"
                        onClick={() => props.onOpen(data.review_id)}
                    >
                        수정
                    </Button>
                </Typography>
            ) : null}
            {data && data.review_photo_urls.large.length > 0 ? (
                <GalleryPopup
                    open={galleryOpened}
                    selectedIndex={selectedIndex}
                    onClose={toggleGallery}
                    data={data.review_photo_urls.large}
                />
            ) : null}
        </div>
    );
};

export default ContentItem;
