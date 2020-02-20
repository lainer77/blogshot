import React from "react";
import { makeStyles } from "@material-ui/styles";

import parse from "html-react-parser";
import { Typography, Button } from "@material-ui/core";
import Divider from "../component/DividerMargin";
import WordCloud from "./WordCloud";

import { pTr, BASE_COLOR } from "../../styles/typography";
import MedicoBarChart from "../chart/MedicoBarChart";
import { numberFormat } from "../../logic/searchValidation";
import Router from "next/router";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        flexGrow: 1
    },
    review_text: {
        fontSize: pTr(12),
        letterSpacing: 0,
        fontWeight: "bold",
        margin: pTr(5)
    },
    summary_header: {
        borderBottom: `1px solid lightgray`,
        padding: pTr(10)
    },
    oneline: {
        display: "flex",
        justifyContent: "space-between"
    },
    content: { padding: `${pTr(10)} ${pTr(10)} ${pTr(10)} ${pTr(10)}` },
    content2: { padding: pTr(20) },
    label: {
        fontSize: pTr(12),
        letterSpacing: 0,
        fontWeight: "bold",
        marginBottom: pTr(9)
    },
    label2: {
        fontSize: pTr(12),
        letterSpacing: 0,
        fontWeight: "bold",
        marginBottom: pTr(9)
    },
    label3: {
        fontSize: pTr(12),
        letterSpacing: 0,
        fontWeight: "bold",
        marginTop: pTr(10),
        margin: pTr(20)
    },
    label4: {
        fontSize: pTr(34),
        letterSpacing: 0,
        color: BASE_COLOR,
        fontWeight: "bold",
        lineHeight: "24px",
        marginTop: pTr(10),
        textAlign: "center"
    },
    label5: {
        fontSize: pTr(12),
        letterSpacing: 0,
        color: BASE_COLOR,
        marginTop: pTr(10),
        fontWeight: "bold",
        lineHeight: "24px",
        textAlign: "center"
    },
    text1: {
        fontSize: pTr(10),
        lineHeight: pTr(14),
        letterSpacing: 0
    },
    text2: {
        fontSize: pTr(10),
        letterSpacing: 0,
        "& li": {
            fontSize: pTr(10),
            letterSpacing: 0
        },
        "& tr": {
            fontSize: pTr(10),
            letterSpacing: 0
        },
        "& td": {
            fontSize: pTr(10),
            letterSpacing: 0
        },
        "& h4": {
            fontSize: pTr(10),
            letterSpacing: 0
        },
        "& p": {
            fontSize: pTr(10),
            letterSpacing: 0
        }
    },
    text3: {
        fontSize: "20px",
        lineHeight: "24px",
        color: BASE_COLOR,
        marginBottom: "16px"
    },
    text4: {
        fontSize: "20px",
        color: BASE_COLOR
    },
    text5: {
        fontSize: "16px",
        color: BASE_COLOR,
        textAlign: "center",
        marginTop: "29px",
        marginBottom: "20px",
        cursor: "pointer"
    },
    text6: {
        fontSize: "14px",
        lineHeight: "24px",
        letterSpacing: 0,
        color: "rgb(22 147 255)"
    },
    text7: {
        fontSize: "14px",
        color: BASE_COLOR,
        lineHeight: "24px",
        letterSpacing: 0,
        "& span": {
            fontWeight: "bold"
        }
    },
    searchText_research: {
        margin: "10px 20px",
        height: "69px",
        textAlign: "center",
        backgroundColor: "rgba(0, 49, 82, 0.09)",
        borderRadius: "3px",
        padding: "10px"
    },
    itemClass: {
        padding: pTr(18)
    },
    moreContent: {
        textAlign: "center",
        padding: "11px 20px 16px",
        boxShadow: "0px 1px 0px 0px rgb(226 226 226)"
    },
    moreButton: {
        margin: 0,
        fontSize: "12px",
        lineHeight: "24px",
        letterSpacing: 0,
        borderRadius: "6px",
        width: "100%",
        border: "1px solid black",
        maxHeight: "35px"
    }
}));

const Expertise = props => {
    const classes = useStyles();
    if (props.html) {
        return (
            <div className={classes.content}>
                <Typography className={classes.label}>경험분야</Typography>
                <Typography className={classes.text1}>
                    {parse(props.html)}
                </Typography>
            </div>
        );
    }
};
const Education = props => {
    const classes = useStyles();
    if (props.html) {
        return (
            <div className={classes.content}>
                <Typography className={classes.label}>학력사항</Typography>
                <Typography className={classes.text2}>
                    {parse(props.html)}
                </Typography>
            </div>
        );
    }
};
const Career = props => {
    const classes = useStyles();
    if (props.html) {
        return (
            <div className={classes.content}>
                <Typography className={classes.label}>경력사항</Typography>
                <Typography className={classes.text2}>
                    {parse(props.html)}
                </Typography>
            </div>
        );
    }
};
const EducationAndCareer = props => {
    const classes = useStyles();
    if (props.html) {
        return (
            <div className={classes.content}>
                <Typography className={classes.label}>
                    학력 및 경력사항
                </Typography>
                <Typography className={classes.text2}>
                    {parse(props.html.replace(/ +/g, " "))}
                </Typography>
            </div>
        );
    }
};
const Research = props => {
    const classes = useStyles();
    const getCookie = () => {
        return document.cookie.split(";").reduce((res, c) => {
            const [key, val] = c
                .trim()
                .split("=")
                .map(decodeURIComponent);
            try {
                return Object.assign(res, { [key]: JSON.parse(val) });
            } catch (e) {
                return Object.assign(res, { [key]: val });
            }
        }, {});
    };
    if (props.data) {
        return (
            <div className={classes.content2}>
                <Typography className={classes.label2}>업적</Typography>
                <Typography className={classes.label4}>
                    {numberFormat(props.score_medicofact)}
                </Typography>
                <Typography className={classes.label5}>메디코팩트</Typography>
                <MedicoBarChart data={props.data.year_paper}></MedicoBarChart>
                <Typography
                    className={classes.text5}
                    onClick={() => {
                        if (getCookie().searchText) {
                            var date = new Date();

                            date.setTime(date.getTime() * 0);
                            let cookie = `searchText=""}; expires=${date.toUTCString()};`;

                            document.cookie = cookie;
                            Router.reload();
                        }
                    }}
                >{`${props.data.cnt_paper_total} 건의 업적이 있습니다.`}</Typography>
            </div>
        );
    }
};

const SummaryHeader = props => {
    const classes = useStyles();
    const {
        expertise,
        educationAndCareer,
        isMergedEductaionAndCareer,
        career,
        education
    } = props.info;
    return (
        <div className={classes.summary_header}>
            {expertise ? <Expertise html={expertise} /> : null}

            {isMergedEductaionAndCareer ? (
                <EducationAndCareer html={educationAndCareer} />
            ) : (
                <div>
                    {career ? <Career html={career} /> : null}
                    {education ? <Education html={education} /> : null}
                </div>
            )}
        </div>
    );
};
const ItemSpecialty = props => {
    const classes = useStyles();

    return (
        <div className={classes.itemClass}>
            <div className={classes.oneline} style={{ alignItems: "center" }}>
                <div>
                    <Typography className={classes.text3}>
                        {numberFormat(props.data.value)}
                    </Typography>
                    <MedicoBarChart
                        dispopable={true}
                        data={props.data.year_paper}
                        chartProps={{
                            width: 115,
                            height: 20,
                            margin: {
                                top: 0,
                                right: 5,
                                left: 5,
                                bottom: 0
                            }
                        }}
                        rootProps={{ style: { justifyContent: "start" } }}
                        barProps={{ barSize: 4 }}
                    ></MedicoBarChart>
                </div>
                <Typography className={classes.text4}>
                    {numberFormat(props.data.score)}
                </Typography>
            </div>
        </div>
    );
};
const Specialty = props => {
    const classes = useStyles();
    return (
        <div>
            <Typography className={classes.label3}>전문분야</Typography>
            {props.data.specialty_wordCloud.length > 0 && (
                <WordCloud data={props.data.specialty_wordCloud} />
            )}
            {props.data.year_graph &&
                props.data.year_graph.length > 0 &&
                props.data.year_graph.map(x => (
                    <span key={x.title}>
                        <ItemSpecialty
                            data={{
                                score: x.score,
                                value: x.title,
                                year_paper: x.year_paper
                            }}
                        />
                        <Divider></Divider>
                    </span>
                ))}
        </div>
    );
};
// Specialty;
function SummaryContainer(props) {
    const classes = useStyles();
    const {
        children,
        info,
        score_medicofact,
        researchMore,
        reverseResearchMore,
        is_searchText,
        searchText,
        searchText_research
    } = props;
    if (!info)
        return (
            <div className={classes.root}>
                <div classes={classes.content}>{children}</div>
            </div>
        );

    return (
        <div className={classes.root}>
            <SummaryHeader info={props.info} />
            {info.research ? (
                <Research
                    data={info.research}
                    score_medicofact={score_medicofact}
                />
            ) : null}
            <Divider />
            {is_searchText && (
                <div
                    style={{
                        boxShadow: "0px 1px 0px 0px rgb(226 226 226)",
                        height: "78px"
                    }}
                >
                    <div className={classes.searchText_research}>
                        {is_searchText && searchText ? (
                            <Typography
                                className={classes.text6}
                            >{`#${searchText}`}</Typography>
                        ) : null}
                        {searchText_research && (
                            <Typography className={classes.text7}>
                                관련 업적{" "}
                                <span>
                                    {searchText_research.cnt_paper_total}
                                </span>{" "}
                                건
                            </Typography>
                        )}
                    </div>
                </div>
            )}
            <div classes={classes.content}>{children}</div>
            {researchMore &&
            info.research &&
            info.research.cnt_paper_total > info.papers.length ? (
                <div className={classes.moreContent}>
                    <Button
                        className={classes.moreButton}
                        onClick={reverseResearchMore}
                    >
                        업적 더보기
                    </Button>
                </div>
            ) : null}
            {((info.year_graph && info.year_graph.length > 0) ||
                (info.specialty_wordCloud &&
                    info.specialty_wordCloud.length > 0)) && (
                <Specialty
                    data={{
                        year_graph: info.year_graph,
                        specialty_wordCloud: info.specialty_wordCloud
                    }}
                />
            )}
        </div>
    );
}

export default React.memo(SummaryContainer);
