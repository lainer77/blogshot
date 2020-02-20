import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Router from "next/router";

import { makeStyles } from "@material-ui/styles";
import { List, ListItem, ListItemText, Button } from "@material-ui/core";

import Divider from "../component/DividerMargin";
import Seletions from "../component/FilterSeletions";
import FilterAutocomplete from "../component/FilterAutocomplete";
import { animateScroll as scroll, Events } from "react-scroll";

import {
    get_area_requset,
    get_medical_departments_requset,
    get_medical_universities_requset,
    filter_apply,
    filter_free,
    search_requset
} from "../../reducers/searchinfo";
import { set_message, message_open } from "../../reducers/utilsinfo";

import { pTr, BASE_COLOR, getWindow } from "../../styles/typography";
import { paramsToUrl, urlToParams } from "../../logic/asFilterUrlParser";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%"
    },
    list: { padding: 0 },
    item: {
        padding: pTr(15),
        "& span": {
            fontSize: pTr(14),
            fontWeight: "bold",
            letterSpacing: 0,
            lineHeight: pTr(20)
        }
    },
    itemRoot: {
        padding: "10px 0"
    },
    button: {
        width: "50%",
        margin: pTr(10),
        fontSize: pTr(18),
        letterSpacing: 0,
        lineHeight: pTr(24),
        paddingTop: "12px",
        paddingBottom: "12px"
    },
    textField: {
        width: "100%",
        "& input": {
            padding: "5px 0 0 10px",
            fontSize: pTr(12),
            height: pTr(32)
        }
    }
}));
const initState = {
    area: null,
    department: { depth1: null, depth2: null },
    universitie: null
};
function FilterTransitions(props) {
    const classes = useStyles();
    const {
        fullEnableNo = true,
        areas,
        departments,
        universities,
        setFilterSwitch
    } = props;
    let fullEnable = true;
    const [state, setState] = useState(initState);
    const [departmentId, setDepartmentId] = useState(null);

    const setArea = e => {
        setState({
            ...state,
            area: e.target.value.indexOf("전체") == -1 ? e.target.value : null
        });
    };
    const setDepartment = (name, id) => {
        if (id) {
            setDepartmentId(parseInt(id));
        }
        setState({
            ...state,
            department: name
        });
    };
    const setUniversitie = value => {
        setState({ ...state, universitie: value });
    };
    const onFilter = () => {
        // props.filter_apply(state);
        let param = {};
        let is_error = false;
        let msg = "필터가 적용되었습니다.";
        // if (props.search) param.searchText = props.search;
        // this serach type (serachText || medical_departments_id)
        if (Router.query.searchText) param.searchText = Router.query.searchText;
        if (Router.query.searchType) param.searchType = Router.query.searchType;

        if (state.area) {
            param.areas_id = areas.find(x => x.name == state.area).id;
        }

        if (props.medical_departments_id)
            param.medical_departments_id = props.medical_departments_id;
        else if (state.department.depth1) {
            param.medical_departments_id = departments.depth1.find(
                x => x.name == state.department.depth1
            ).id;
        }
        if (state.universitie) {
            let medical_universities = universities.find(
                x => x.name == state.universitie
            );
            if (medical_universities && medical_universities.id)
                param.medical_universities_id = medical_universities.id;
            else {
                is_error = true;
                props.set_message("졸업학교는 추천 목록에서 선택해야 합니다.");
            }
        }
        let filterable = paramsToUrl(
            state,
            props.areas_id ? null : areas,
            props.medical_departments_id ? null : departments,
            universities
        );
        if (filterable) {
            props.search_requset(param, true, state);
            sessionStorage.setItem("filterable", filterable);
            props.set_message(msg);
            // Router.push({
            //     pathname: "/search",
            //     query: { ...Router.query }
            // });
        } else {
            props.message_open();
        }
        setFilterSwitch(false);
        scroll.scrollToTop({ to: "top", duration: 1000 });
    };
    const onLocalFilter = () => {
        // props.filter_apply(state);
        let filterable = "";
        let first = 0;
        let second = "";
        let is_error = false;
        let msg = "필터가 적용되었습니다.";

        if (state.area) {
            first = 1;
            second += areas.find(x => x.name == state.area).id;
        }
        if (state.department.depth2) {
            first += 2;
            second += 2;
            second += String(
                departments.depth2.find(x => x.name == state.department.depth2)
                    .parent_id
            ).padStart(3, 0);
        } else if (state.department.depth1) {
            first += 2;
            second += 1;
            second += String(
                departments.depth1.find(x => x.name == state.department.depth1)
                    .id
            ).padStart(3, 0);
        }
        if (state.universitie) {
            first += 4;
            let medical_universities = universities.find(
                x => x.name == state.universitie
            );
            if (medical_universities && medical_universities.id)
                second += String(medical_universities.id).padStart(3, 0);
            else {
                is_error = true;
                props.set_message("졸업학교는 추천 목록에서 선택해야 합니다.");
            }
        }
        filterable = first + second;
        if (!is_error) {
            props.set_message(msg);
            Router.push({
                pathname: "/search",
                query: { ...Router.query, filterable }
            });
        } else {
            props.message_open();
        }
        setFilterSwitch(false);
        scroll.scrollToTop({
            to: "top",
            duration: 1000
        });
    };
    const departmentEnable = () => {
        let is_select = props.medical_departments_id ? false : true;
        let filterable =
            getWindow().sessionStorage && getWindow().sessionStorage.filterable;
        if (filterable) {
            is_select =
                is_select ||
                Boolean(filterable[0] & 2) ||
                Boolean(Router.query.searchText);
        }
        return fullEnable && is_select;
    };
    useEffect(() => {
        if (
            props.filterSwitch &&
            (!props.areas || !props.departments || !props.universities)
        ) {
            props.get_area_requset();
            props.get_medical_departments_requset();
            props.get_medical_universities_requset();
        }
    }, [props.filterSwitch]);

    return (
        <div className={classes.root}>
            <List className={classes.list}>
                <div>
                    <ListItem className={classes.item}>
                        <ListItemText primary={"지역"} />
                        <Seletions
                            width="80%"
                            inputtext={props.search}
                            handleChange={setArea}
                        >
                            <option>전체</option>
                            {areas
                                ? areas.map((x, i) => {
                                      return (
                                          <option
                                              key={"area-option-" + i}
                                              value={x.name}
                                          >
                                              {x.name}
                                          </option>
                                      );
                                  })
                                : null}
                        </Seletions>
                    </ListItem>
                    {fullEnable ? <Divider /> : null}
                </div>
                {departmentEnable() ? (
                    <div>
                        <ListItem
                            className={classes.item}
                            style={{
                                display: "flex",
                                alignItems: "flex-start"
                            }}
                        >
                            <ListItemText
                                className={classes.itemRoot}
                                primary={"진료과목"}
                            />
                            <div style={{ width: "80%" }}>
                                <Seletions
                                    // width={pTr(235)}
                                    inputtext={
                                        props.medical_departments_id
                                            ? props.search
                                            : "1차 분류 전체"
                                    }
                                    handleChange={e => {
                                        let id;
                                        try {
                                            id = departments.depth1.find(
                                                x => x.name === e.target.value
                                            ).id;
                                        } catch (error) {
                                            setDepartment({
                                                ...state.department,
                                                depth1: null
                                            });
                                        }
                                        if (id)
                                            setDepartment(
                                                {
                                                    ...state.department,
                                                    depth1:
                                                        e.target.value.indexOf(
                                                            "전체"
                                                        ) == -1
                                                            ? e.target.value
                                                            : null
                                                },
                                                id
                                            );
                                    }}
                                >
                                    <option>1차 분류 전체</option>
                                    {departments
                                        ? departments.depth1.map((x, i) => {
                                              return (
                                                  <option
                                                      key={
                                                          "medical-department-option-" +
                                                          i
                                                      }
                                                      value={x.name}
                                                  >
                                                      {x.name}
                                                  </option>
                                              );
                                          })
                                        : null}
                                </Seletions>
                                <div style={{ padding: "2px" }}></div>
                                <Seletions
                                    inputtext="세부진료과 선택"
                                    disabled={
                                        state.department.depth1 ? false : true
                                    }
                                    handleChange={e =>
                                        setDepartment({
                                            ...state.department,
                                            depth2:
                                                e.target.value.indexOf(
                                                    "선택"
                                                ) == -1
                                                    ? e.target.value
                                                    : null
                                        })
                                    }
                                >
                                    <option>세부진료과 선택</option>
                                    {departments
                                        ? departments.depth2
                                              .filter(
                                                  x =>
                                                      x.parent_id ===
                                                      departmentId
                                              )
                                              .map((x, i) => {
                                                  return (
                                                      <option
                                                          key={
                                                              "medical-department-second-option-" +
                                                              i
                                                          }
                                                          value={x.name}
                                                      >
                                                          {x.name}
                                                      </option>
                                                  );
                                              })
                                        : null}
                                </Seletions>
                            </div>{" "}
                        </ListItem>
                        <Divider />
                    </div>
                ) : null}
                {fullEnable ? (
                    <div>
                        <ListItem className={classes.item}>
                            <ListItemText primary={"졸업학교"} />

                            <div style={{ width: "80%" }}>
                                <FilterAutocomplete
                                    suggestions={universities}
                                    classes={classes}
                                    setState={setUniversitie}
                                ></FilterAutocomplete>
                            </div>
                        </ListItem>
                    </div>
                ) : null}
            </List>
            <Divider />
            <div
                style={{
                    padding: `${pTr(20)} ${pTr(10)}`,
                    display: "flex",
                    justifyContent: "space-around"
                }}
            >
                <Button
                    className={classes.button}
                    variant="outlined"
                    style={{
                        color: "black",
                        backgroundColor: "white",
                        borderColor: "black"
                    }}
                    onClick={() => {
                        // props.filter_free();
                        let param = {};
                        if (Router.query.searchText !== "")
                            param.searchText = Router.query.searchText;
                        if (Router.query.id)
                            param.medical_departments_id = Router.query.id;
                        if (Router.query.searchType)
                            param.searchType = Router.query.searchType;

                        sessionStorage.removeItem("filterable");
                        props.search_requset(param, true);
                        // props.search_requset(state, true);
                        props.set_message("필터가 해제되었습니다.");
                        setFilterSwitch(false);
                        scroll.scrollToTop({ to: "top", duration: 1000 });
                    }}
                >
                    필터해제
                </Button>
                <Button
                    className={classes.button}
                    style={{
                        color: "white",
                        backgroundColor: "rgb(20 82 123)"
                    }}
                    onClick={props.is_local_filter ? onLocalFilter : onFilter}
                >
                    필터적용
                </Button>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        areas: state.searchinfo.areas,
        departments: state.searchinfo.departments,
        universities: state.searchinfo.universities,
        searchType: state.searchinfo.searchType,
        searchText: state.searchinfo.searchText,
        medical_departments_id: state.searchinfo.medical_departments_id,
        is_local_filter: state.searchinfo.is_local_filter
    };
};
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            get_area_requset,
            get_medical_departments_requset,
            get_medical_universities_requset,
            filter_apply,
            filter_free,
            set_message,
            search_requset,
            message_open
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(FilterTransitions);
