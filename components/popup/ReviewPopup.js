import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button, IconButton } from "@material-ui/core";

import StarBigList from "../component/StarBigList";
import Layout from "../layouts/PopupLayout";
import styled from "styled-components";
import theme from "../../theme";

import { pTr, BASE_COLOR } from "../../styles/typography";
import { getUuidFromFileName } from "../../logic/asFilterUrlParser";
import AddIcon from "../Icon/AddIcon";
import { message_open } from "../../reducers/utilsinfo";
import DelIcon from "../Icon/DelIcon";
import axios from "axios";
import { BASE_URL } from "../../contants/constants";

const useStyles = makeStyles(theme => ({
    root: {},
    imgs: {
        display: "flex",
        justifyContent: "left",
        padding: `${pTr(8)} 0`
    }
}));
function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        // height: pTr(568),
        width: pTr(335),
        borderRadius: pTr(6)
    };
}

//#region styled
const Header = styled.div`
    && {
        height: ${pTr(40)};
        background-color: ${BASE_COLOR};
        border-top-right-radius: ${pTr(6)};
        border-top-left-radius: ${pTr(6)};
        display: flex;
        justify-content: center;
        align-items: center;
        & p {
            color: white;
            font-size: ${pTr(18)};
            line-height: ${pTr(24)};
            letter-spacing: 0;
        }
    }
`;
const Body = styled.div`
    && {
        padding: ${pTr(20)};
    }
`;
const PaperStyle = styled.div`
    && {
        position: absolute;
        background-color: ${theme.palette.background.paper};
        box-shadow: ${theme.shadows[0]};
        outline: "none";
    }
`;
const StarList = styled.div`
    && {
        display: flex;
        justify-content: center;
        padding: ${pTr(20)};
        & img {
            margin: 0 ${pTr(10)};
            width: ${pTr(26)};
            height: ${pTr(26)};
        }
    }
`;
const TextFieldStyle = styled(TextField)`
    && {
        border-color: rgb(125 133 149);
        padding: 0;
        & textarea {
            padding: 0;
            line-height: ${pTr(24)};
            letter-spacing: 0;
            font-size: ${pTr(14)};
        }
        & div {
            padding: ${pTr(10)};
        }
    }
`;
const ImgBox = styled.div`
    && {
        width: ${pTr(87)};
        height: ${pTr(49)};
        background-color: rgb(220 224 228);
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
const Name = styled(Typography)`
    & {
        font-size: ${pTr(18)};
        line-height: ${pTr(24)};
        letter-spacing: ${0};
        & span {
            font-weight: bold;
        }
    }
`;
const Clinic = styled(Typography)`
    & {
        font-size: ${pTr(12)};
        line-height: ${pTr(24)};
        letter-spacing: ${0};
        margin-top: ${pTr(10)};
    }
`;
const ImgLabel = styled(Typography)`
    && {
        font-size: ${pTr(12)};
        line-height: ${pTr(24)};
        letter-spacing: ${0};
        margin-top: ${pTr(6)};
        margin-left: ${pTr(10)};
    }
`;
const CancelBtn = styled(Button)`
    && {
        width: 100%;
        color: white;
        background-color: rgb(149 150 152);
        margin-bottom: ${pTr(5)};
        font-size: ${pTr(14)};
        line-height: ${pTr(24)};
        letter-spacing: 0;
    }
`;
const ReviewSendBtn = styled(Button)`
    && {
        width: 100%;
        color: white;
        background-color: black;
        font-size: ${pTr(14)};
        line-height: ${pTr(24)};
        letter-spacing: 0;
    }
`;
const DelBtn = styled(IconButton)`
    && {
        width: ${pTr(12)};
        height: ${pTr(12)};
        position: absolute;
        padding: 0;
        right: 0;
        top: 0;
        margin-top: ${pTr(-6)};
        margin-right: ${pTr(-6)};
    }
`;
//#endregion

const placeholder =
    "실제 진료를 받은 경험에 의한 리뷰는 여러분과\
    같은 어려움을 겪는 환자들에게 좋은 가이드가\
    됩니다. 부적절한 표현, 적개심이나 증오, 편견의\
    리뷰는 예고없이 삭제될 수 있으므로 자제를 부탁드립니다.";

const ImageSelector = ({
    index = -1,
    urls = [],
    handleChange = () => {},
    handleDelete = () => {}
}) => {
    if (urls[index])
        return (
            <ImgBox>
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        textAlign: "center"
                    }}
                >
                    <img
                        src={urls[index]}
                        style={{ height: "100%", maxWidth: "100%" }}
                        id="load-image"
                    />
                    <DelBtn onClick={handleDelete(index)}>
                        <DelIcon
                            style={{
                                width: pTr(12),
                                height: pTr(12)
                            }}
                        />
                    </DelBtn>
                </div>
            </ImgBox>
        );

    return (
        <ImgBox>
            <IconButton>
                <label for="file-input">
                    <AddIcon
                        style={{
                            width: pTr(19),
                            height: pTr(20)
                        }}
                    />
                </label>
                <input
                    type="file"
                    name="file"
                    onChange={handleChange()}
                    id="file-input"
                    style={{
                        position: "absolute",
                        width: "20px",
                        height: "20px",
                        padding: 0,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        border: "0 none"
                    }}
                />
            </IconButton>
        </ImgBox>
    );
};

const SeletorThree = ({
    classes,
    message_open,
    files,
    setFiles,
    urls,
    setUrls
}) => {
    const handleChange = index => e => {
        if (e.target.files[0].name.match(/\.(jpg|jpeg|gif|png)$/)) {
            setFiles([...files, e.target.files[0]]);
            setUrls([...urls, URL.createObjectURL(e.target.files[0])]);
        } else {
            alert("jpg, jpeg, gif, png 이미지를 선택해 주세요!");
        }
    };
    const handleDelete = index => e => {
        setUrls(urls.filter(x => x != urls[index]) || urls);
        if (urls[index].indexOf("blob") == 0)
            setFiles(files.filter(x => x != files[index]) || files);
    };

    if (urls.length <= 0)
        return (
            <div className={classes.imgs}>
                <ImageSelector
                    urls={urls}
                    handleChange={handleChange}
                    handleDelete={handleDelete}
                />
            </div>
        );
    return (
        <div className={classes.imgs}>
            {urls.map((url, index) => {
                return (
                    <>
                        <ImageSelector
                            urls={urls}
                            index={index}
                            handleChange={handleChange}
                            handleDelete={handleDelete}
                        />
                        {index != 2 ? (
                            <span style={{ padding: "6px" }}></span>
                        ) : null}
                    </>
                );
            })}
            {urls.length < 3 ? (
                <ImageSelector
                    urls={urls}
                    handleChange={handleChange}
                    handleDelete={handleDelete}
                />
            ) : null}
        </div>
    );
};

const ReviewPopup = props => {
    const classes = useStyles();
    const {
        myReviewAdd,
        myReviewPut,
        is_review,
        doctor_id,
        score_s,
        data
    } = props;
    const [context, setContext] = useState(data ? data.review_txt : "");
    const [point, setPoint] = useState(data ? data.review_score : 0);
    const [files, setFiles] = useState([]);
    const [urls, setUrls] = useState([]);

    const onFileUpload = async () => {
        const config = {
            headers: {
                "X-Api-Key": localStorage.getItem("jwt_token")
            }
        };
        const promises = files.map(async file => {
            const formData = new FormData();
            formData.append("file", file, file.name);

            let response = await axios.post(
                `https://${BASE_URL}/my/review/uploadImage`,
                formData,
                config
            );
            if (response.data.code == 0) return response.data.msg;
        });
        let us = await Promise.all(promises);
        return us;
    };
    const onFileDelete = async delUrls => {
        const config = {
            headers: {
                "X-Api-Key": localStorage.getItem("jwt_token")
            }
        };
        let promises = delUrls.map(async url => {
            let uuid = getUuidFromFileName(url);
            let response = await axios.delete(
                `https://${BASE_URL}/my/review/deleteImage/${uuid}`,
                config
            );
            if (response.data.code == 0) return response.data.msg;
        });
        await Promise.all(promises);
    };
    const onFileRevise = async () => {
        let delUrls = [];
        let ref = [];
        let curUrls = [];
        delUrls = data.review_photo_urls.thumbnail.filter(x => {
            return urls.indexOf(x) == -1;
        });
        curUrls = data.review_photo_urls.thumbnail.filter(x => {
            return delUrls.indexOf(x) == -1;
        });
        // if (delUrls.length > 0) await onFileDelete(delUrls);
        delUrls = delUrls.map(x => getUuidFromFileName(x));
        curUrls = curUrls.map(x => getUuidFromFileName(x));
        ref = await onFileUpload();
        return [...curUrls, ...ref];
    };

    useEffect(() => {
        if (data && data.review_score) {
            setPoint(data.review_score);
        } else if (score_s) setPoint(score_s);
        else {
            setPoint(0);
        }

        if (data && data.review_photo_urls) {
            setUrls(data.review_photo_urls.thumbnail);
        }
    }, [data, score_s]);

    const handleScoreChagne = score => {
        setPoint(score * 2);
    };
    const handleContextChagne = e => {
        setContext(event.target.value);
    };

    const onReview = async () => {
        let params = {};
        let is_error = false;
        let msg = "";

        if (doctor_id) params.doctor_id = doctor_id;

        if (context != "" && context != undefined)
            params.review_content = context;
        else {
            is_error = true;
            msg = "내용을 입력해 주세요!";
        }

        if (point) params.score = point;
        else {
            is_error = true;
            msg = "점수를 선택해 주세요!";
        }
        if (files.length > 0 || is_review) {
            let ret;

            ret = is_review ? await onFileRevise() : await onFileUpload();

            if (Array.isArray(ret) && ret.length > 0) {
                let retStr = `[${ret.map((x, i) => {
                    return `"${x}"`;
                })}]`;

                params.review_photos_uuid = retStr;
            }
        }
        if (!is_error) {
            props.onClose();

            if (is_review) {
                msg = "리뷰가 수정되었습니다.";
                myReviewPut(data.review_id, params);
            } else {
                msg = "소중한 리뷰 감사드립니다!";
                myReviewAdd(params);
            }
        }
        props.message_open(msg);
    };
    return (
        <PaperStyle style={getModalStyle()}>
            <Header>
                <Typography>리뷰하기</Typography>
            </Header>
            <Body>
                <Name>
                    <span>
                        {data && data.doctor && data.doctor.doctor_name}
                    </span>
                </Name>
                <Clinic>
                    {data && data.doctor && data.doctor.doctor_clinic}
                </Clinic>
                <div>
                    <StarList>
                        <StarBigList
                            score={score_s ? score_s / 2 : point / 2}
                            onScoreChange={handleScoreChagne}
                        />
                    </StarList>
                </div>
                <TextFieldStyle
                    id="outlined-dense"
                    placeholder={placeholder}
                    fullWidth
                    multiline
                    rows="7"
                    variant="outlined"
                    onChange={handleContextChagne}
                    defaultValue={data ? data.review_txt : null}
                />
                <ImgLabel>탭에서 사진 첨부</ImgLabel>
                {/* <div className={classes.imgs}> */}
                <SeletorThree
                    classes={{ imgs: classes.imgs }}
                    review_photo_urls={data ? data.review_photo_urls : null}
                    message_open={props.message_open}
                    files={files}
                    setFiles={setFiles}
                    urls={urls}
                    setUrls={setUrls}
                />
                <div style={{ marginTop: pTr(15) }}>
                    <CancelBtn onClick={props.onClose}>취소</CancelBtn>
                    <ReviewSendBtn onClick={onReview}>
                        {props.is_review ? "리뷰 수정" : "리뷰 남기기"}
                    </ReviewSendBtn>
                </div>
            </Body>
        </PaperStyle>
    );
};

const mapStateToProps = state => {
    let id = state.doctorinfo.selected_doctor_id;
    return {};
};
const mapDispatchToProps = dispatch =>
    bindActionCreators({ message_open }, dispatch);

const ReviewPopupConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewPopup);

export default function Index(props) {
    const { open, onClose, ...others } = props;
    return (
        <Layout
            open={open}
            handleClose={onClose}
            content={ReviewPopupConnect}
            {...others}
        />
    );
}
