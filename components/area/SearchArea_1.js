import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, IconButton, Popper } from "@material-ui/core";

import FilterIcon from "../Icon/FilterIcon";
import FilterExtentionPanel from "../panel/FilterExtentionPanel";
import FilterTransitions from "../component/FilterTransitions";

import { pTr } from "../../styles/typography";
import { useRouter } from "next/router";
import { numberFormat } from "../../logic/searchValidation";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        backgroundColor: "white",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        borderBottom: "1px solid gray"
    },
    paper: {
        backgroundColor: "rgba(255, 255, 255, 0)",
        paddingBottom: "30px",
        boxShadow: "none",
        zIndex: 9999
    },
    typography: {
        color: "white",
        fontSize: "12px"
    },
    area: {
        width: "100%",
        padding: pTr(20),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    label: {
        fontSize: pTr(26),
        fontWeight: "bold",
        letterSpacing: 0
    }
});

const FilterComponent = props => {
    return (
        <IconButton
            style={{ padding: 0, width: pTr(36), height: pTr(36) }}
            onClick={props.onClick}
        >
            <FilterIcon on={props.on} />
        </IconButton>
    );
};
const ResulteTypo = styled(Typography)`
    && {
        font-size: ${pTr(14)};
        line-height: ${pTr(24)};
        letter-spacing: 0;
        color: rgb(125 133 149);
        display: inline-block;
        padding: 0 14px;
    }
`;

const Area1 = React.memo(props => {
    const classes = useStyles(props);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const router = useRouter();

    const handleUseFilter = () => {
        const is_useFilter = props.is_useFilter;
        const is_doctor = props.selected_tab == "doctor";
        const is_inHospital = router.query.hospital_id;
        let is_use = (is_useFilter || is_doctor) && !is_inHospital;

        return is_use;
    };
    const handleClick = event => {
        if (event.currentTarget != anchorEl) {
            setAnchorEl(event.currentTarget);
        }
    };
    const handleClose = e => {
        setAnchorEl(null);
    };

    const handleAddReport = e => {
        if (anchorEl) {
            handleClose(e);
        } else {
            handleClick(e);
        }
    };

    return (
        <div className={classes.area}>
            <div
                style={{
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <Typography className={classes.label}>검색결과</Typography>
                <ResulteTypo
                    onClick={handleAddReport}
                    // onMouseEnter={handleClick}
                    onMouseLeave={handleClose}
                >{`'${props.search}'의 결과 : ${numberFormat(
                    props.cnt_total
                )}건`}</ResulteTypo>
            </div>
            {handleUseFilter() ? (
                <FilterComponent
                    onClick={() => {
                        props.setFilterSwitch(!props.filterSwitch);
                        props.setOpenSearch(false);
                    }}
                    on={props.is_filter || props.is_useFilter}
                />
            ) : null}
            {props ? props.children : null}

            <Popper
                classes={{ paper: classes.paper }}
                PaperProps={{ id: "paper-popup" }}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                placement="bottom"
            >
                <div
                    style={{
                        width: "90%",
                        height: "100%",
                        padding: "10px",
                        backgroundColor: "black",
                        borderRadius: "4px",
                        margin: "0 auto"
                    }}
                >
                    <Typography className={classes.typography}>
                        {props.search_path}
                    </Typography>
                </div>
            </Popper>
        </div>
    );
});
function SearchArea1(props) {
    const classes = useStyles(props);
    const [filterSwitch, setFilterSwitch] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    useEffect(() => {
        setFilterSwitch(false);
    }, [props.search]);
    return (
        <div className={classes.root}>
            <FilterExtentionPanel
                Summary={
                    <Area1
                        is_useFilter={props.is_useFilter}
                        is_filter={props.is_filter}
                        selected_tab={props.selected_tab}
                        search={props.search}
                        setFilterSwitch={setFilterSwitch}
                        filterSwitch={filterSwitch}
                        setOpenSearch={setOpenSearch}
                        cnt_total={props.cnt_total}
                        search_path={props.search_path}
                    />
                }
                Details={
                    <FilterTransitions
                        fullEnable={
                            props.selected_tab == "doctor" ? true : false
                        }
                        setFilterSwitch={setFilterSwitch}
                        search={props.search}
                        filterSwitch={filterSwitch}
                    />
                }
                expanded={filterSwitch}
                openSearch={openSearch}
            />
        </div>
    );
}

function mapStateToProps(state) {
    const selected_tab =
        state.searchinfo.selected_tab == undefined
            ? "doctor"
            : state.searchinfo.selected_tab;
    const is_filter_docter =
        state.doctorinfo.is_filter.area ||
        state.doctorinfo.is_filter.department ||
        state.doctorinfo.is_filter.universitie;
    const is_filter_hospital = state.hospitalinfo.is_filter.area;
    return {
        selected_tab: selected_tab,
        searchText: state.searchinfo.searchText,
        search_state: state.searchinfo.search_state,
        cnt_total: state.searchinfo.cnt_total,
        search_path: state.searchinfo.search_path,
        is_useFilter: state.searchinfo.is_filter,
        is_filter:
            selected_tab == "doctor" ? is_filter_docter : is_filter_hospital
    };
}

export default React.memo(connect(mapStateToProps)(SearchArea1));
