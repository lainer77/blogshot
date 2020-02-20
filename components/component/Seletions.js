import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, Select, OutlinedInput } from "@material-ui/core";
import UpdownIcon from "../Icon/UpdownIcon";
import { pTr, pInt } from "../../styles/typography";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        paddingTop: pTr(40),
        backgroundColor: "rgb(248 248 248)"
    },
    title: {
        padding: `${pTr(15)} ${pTr(20)}`,
        borderBottom: `1px solid lightgray`,
        "& p": {
            fontSize: pTr(26),
            letterSpacing: 0,
            fontWeight: "bold"
        }
    },
    content: {
        padding: pTr(20)
    },
    text: {
        fontSize: pTr(14),
        lineHeight: pTr(20),
        letterSpacing: 0
    },
    formControl: {
        width: "100%"
    },
    select: {
        padding: `0`,
        fontSize: pTr(12),
        height: pTr(40),
        "& select": {
            padding: `0 ${pTr(10)}`,
            height: pTr(40),
            borderRadius: "2px",
            backgroundColor: "rgb(248 248 248)"
        },
        "& fieldset": {
            top: pTr(-5)
        }
    },
    inputBase: {
        backgroundColor: "rgb(248 248 248)"
    }
});

const Seletions = props => {
    const classes = useStyles();

    const { disabled, width, handleChange, children, ...others } = props;
    const btnUpdownIcon = () => (
        <div
            style={{
                marginRight: pTr(10),
                marginTop: pTr(4),
                backgroundColor: "rgb(248 248 248)"
            }}
        >
            <UpdownIcon style={{ width: "8px", height: "16px" }} />
        </div>
    );

    return (
        <FormControl
            variant="outlined"
            classes={{ root: classes.inputBase }}
            className={classes.formControl}
            disabled={disabled}
            style={{ width: width }}
        >
            <Select
                native
                className={classes.select}
                onChange={handleChange}
                IconComponent={btnUpdownIcon}
                input={
                    <OutlinedInput
                        name="location"
                        id="outlined-location-native-simple"
                    />
                }
                {...others}
            >
                {children}
            </Select>
        </FormControl>
    );
};

export default Seletions;
