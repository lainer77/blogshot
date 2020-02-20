import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import { makeStyles } from "@material-ui/styles";
import Router, { useRouter } from "next/router";

import { Typography, Link, Grid, Button as B } from "@material-ui/core";

import ExpansionPannel from "../component/ExpansionPannel";
import ListContent from "../list/ListContent";
import Divider from "../component/DividerMargin";

import { pTr } from "../../styles/typography";
import { tags_set } from "../../reducers/homeinfo";
import {
    get_area_requset,
    get_medical_departments_requset
} from "../../reducers/searchinfo";

//#region Styles

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: "100%",
        left: 0,
        right: 0
    },
    rootRoot: {
        border: "none",
        boxShadow: "0px 1px 0px 0px rgba(193, 193, 193, 0.5)",
        "&:not(:last-child)": {
            borderBottom: 0
        },
        "&:before": {
            display: "none"
        },
        "&$expanded": {
            margin: "auto"
        }
    },
    summaryRoot: {
        marginLeft: "20px",
        marginBottom: 0,
        borderBottom: "1px solid rgba(0, 0, 0, .125)",
        padding: "15px 20px",
        fontSize: pTr(14),
        // border: "none",
        lineHeight: pTr(20),
        letterSpacing: 0,
        "& p": {
            fontWeight: "normal"
        },
        backgroundColor: "rgb(255 255 255)",
        maxHeight: 50,
        "&:hover": {
            color: "rgb(0 49 82)"
        },
        "&$expanded": {
            height: 50
        }
    },
    summaryContent: {
        margin: 0
    }
}));
const MenuItemButton = styled(B)`
    && {
        /* margin-top: 2em; */
        font-size: ${pTr(14)};
        line-height: ${pTr(20)};
        letter-spacing: 0;
        font-weight: bold;
        padding: 15px 20px;
        min-height: 56px;
        background-color: rgb(240 240 240);
        justify-content: left;
        box-shadow: 0px 1px 0px 0px rgba(193, 193, 193, 0.5);
    }
`;
//#endregion

const pathname = "search";

const Hover = styled.div`
    && {
        width: 100%;
        :hover {
            color: rgb(0 49 82);
            & hr {
                background-color: rgba(0, 49, 82, 0.5);
                border-width: 2px;
            }
        }
    }
`;
const HoverNone = styled.div`
    && {
        width: 100%;
        color: rgb(0 49 82);
        & hr {
            background-color: rgb(240 240 240);
        }
        :hover {
            & hr {
                background-color: rgb(240 240 240);
            }
        }
    }
`;
const Item = styled(Typography)`
    && {
        margin-left: 20px;
        padding: 15px 20px;
        font-size: ${pTr(14)};
        line-height: ${pTr(20)};
        letter-spacing: 0;
        :hover {
            color: rgb(0 49 82);
        }
    }
`;
const ChildItem = styled(Typography)`
    && {
        margin-left: 40px;
        padding: 10px 15px;
        font-size: ${pTr(12)};
        line-height: ${pTr(16)};
        letter-spacing: 0;
    }
`;
function RecentIndexTable(props) {
    const classes = useStyles();
    const router = useRouter();
    const datas = [
        {
            data: props.tagsByDepartment,
            title: "진료과목별 찾기"
        },
        {
            data: props.areas,
            title: "지역별 찾기"
        }
    ];
    useEffect(() => {
        props.get_area_requset();
        props.get_medical_departments_requset();
    }, []);
    const [depthDeep, setDepthDeep] = useState({
        2: "내과계열",
        3: "외과계열",
        18: "치과",
        19: "진료지원과",
        20: "한의원"
    });
    // useEffect(() => {
    //     props.departments.depth2.
    // }, [props.departments]);
    const [expanded, setExpanded] = useState();
    const HomeClick = x => {
        props.setOpen(false);
        router.push({
            pathname: "/"
        });
    };
    const ContactClick = x => {
        props.setOpen(false);
        router.push({
            pathname: "/contact"
        });
    };
    const deparmentItemClick = x => {
        sessionStorage.removeItem("filterable");
        props.setOpen(false);
        router.push({
            pathname: "/" + pathname,
            query: {
                name: x.name,
                id: x.id
            }
        });
    };
    const areaItemClick = x => {
        sessionStorage.removeItem("filterable");
        props.setOpen(false);
        router.push({
            pathname: "/" + pathname,
            query: {
                searchText: x.name,
                areas_id: x.id
            }
        });
    };
    return (
        <div className={classes.root}>
            <MenuItemButton onClick={HomeClick} fullWidth>
                메디코스코프 홈
            </MenuItemButton>
            <ExpansionPannel datas={datas} setExpanded={setExpanded}>
                <ListContent linedisable={true} itemProps={{ button: true }}>
                    {props.departments
                        ? props.departments.depth1.map((item, index) => {
                              let is_depth = false;
                              let depthData;
                              if (depthDeep[item.id]) {
                                  is_depth = true;
                                  depthData = [
                                      {
                                          data: props.departments.depth2.filter(
                                              x => x.parent_id == item.id
                                          ),
                                          title: item.name
                                      }
                                  ];
                              }
                              return (
                                  <Hover key={"department-" + index}>
                                      {is_depth ? (
                                          <ExpansionPannel
                                              datas={depthData}
                                              classes={{
                                                  rootRoot: classes.rootRoot,
                                                  summaryRoot:
                                                      classes.summaryRoot,
                                                  summaryContent:
                                                      classes.summaryContent
                                              }}
                                              expanded={expanded}
                                          >
                                              <ListContent linedisable={true}>
                                                  {props.departments
                                                      ? depthData[0].data.map(
                                                            (item, index) => {
                                                                return (
                                                                    <HoverNone
                                                                        key={
                                                                            "department2-" +
                                                                            index
                                                                        }
                                                                    >
                                                                        <ChildItem
                                                                            onClick={() =>
                                                                                deparmentItemClick(
                                                                                    item
                                                                                )
                                                                            }
                                                                        >
                                                                            {
                                                                                item.name
                                                                            }
                                                                        </ChildItem>
                                                                        <Divider
                                                                            left={pTr(
                                                                                40
                                                                            )}
                                                                        />
                                                                    </HoverNone>
                                                                );
                                                            }
                                                        )
                                                      : null}
                                              </ListContent>
                                          </ExpansionPannel>
                                      ) : (
                                          <>
                                              <Item
                                                  onClick={() =>
                                                      deparmentItemClick(item)
                                                  }
                                              >
                                                  {item.name}
                                              </Item>
                                              <Divider left={pTr(20)} />
                                          </>
                                      )}
                                  </Hover>
                              );
                          })
                        : null}
                </ListContent>
                <ListContent linedisable={true}>
                    {props.areas
                        ? props.areas.map((item, index) => {
                              return (
                                  <Hover key={"areas-" + index}>
                                      <Item onClick={() => areaItemClick(item)}>
                                          {item.name}
                                      </Item>
                                      <Divider left={pTr(20)} />
                                  </Hover>
                              );
                          })
                        : null}
                </ListContent>
            </ExpansionPannel>
            <MenuItemButton onClick={ContactClick} fullWidth>
                문의 및 제안하기
            </MenuItemButton>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        tagsByDepartment: state.homeinfo.tagsByDepartment,
        areas: state.searchinfo.areas,
        departments: state.searchinfo.departments
    };
};
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        { tags_set, get_area_requset, get_medical_departments_requset },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(RecentIndexTable);
