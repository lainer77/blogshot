import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import MapIcon from "../Icon/MapIconWhite";
import CallIcon from "../Icon/CallIconWhite";
import PupleButton from "../component_styled/PupleButton";

import { pTr } from "../../styles/typography";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        padding: "15px 0"
    },
    context: {
        display: "flex",
        justifyContent: "space-around",
        padding: "0 10px"
    },
    button: {
        width: "50%",
        height: pTr(35)
    }
});

const IconStyle = {
    width: pTr(10),
    height: pTr(14),
    verticalAlign: "middle"
};

const MIcon = () => <MapIcon style={IconStyle} />;
const CIcon = () => <CallIcon style={IconStyle} />;

function HospitalArea3({ handleAppMove, handelPhoneTel, ...others }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.context}>
                <PupleButton className={classes.button} onClick={handleAppMove}>
                    <MIcon />
                </PupleButton>
                <PupleButton
                    className={classes.button}
                    onClick={handelPhoneTel}
                >
                    <CIcon />
                </PupleButton>
            </div>
        </div>
    );
}
export default React.memo(HospitalArea3, () => true);
