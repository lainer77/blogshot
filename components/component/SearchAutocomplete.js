import React from "react";
import deburr from "lodash/deburr";
import Autosuggest from "react-autosuggest";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { pTr, pTx, BASE_COLOR } from "../../styles/typography";

function renderInputComponent(inputProps) {
    const {
        classes,
        inputRef = () => {},
        ref,
        disabled,
        ...other
    } = inputProps;

    return (
        <InputBase
            disabled={disabled}
            fullWidth
            variant="standard"
            classes={{
                root: classes.inputRoot,
                input: classes.inputinput
            }}
            autoFocus={true}
            // classes={{
            //     inputroot: classes.inputRoot,
            //     inputinput: open ? classes.inputInput2 : classes.inputInput
            // }}
            inputProps={{
                inputRef: node => {
                    ref(node);
                }
            }}
            {...other}
        />
    );
}

function renderSuggestion(suggestion, props) {
    const matches = match(suggestion, query);
    const parts = parse(suggestion, matches);
    const { query, isHighlighted } = props;
    const spanStyle = {
        fontSize: pTr(12),
        lineHeight: pTx(20),
        letterSpacing: 0
    };
    return (
        <MenuItem
            selected={isHighlighted}
            style={{
                backgroundColor: !isHighlighted ? BASE_COLOR : "rgb(0 83 138)",
                color: "white",
                boxShadow:
                    "0px 1px 0px 0px rgb(7 79 127), 0px -1px 0px 0px rgb(7 79 127)",
                marginLeft: "-74px",
                marginRight: "-129px",
                paddingLeft: "80px"
            }}
            component="div"
            value={suggestion}
        >
            <div>
                {parts.map((part, i) => (
                    <span
                        key={i}
                        style={{
                            ...spanStyle,
                            fontWeight: part.highlight ? 500 : 400
                        }}
                    >
                        {part.text}
                    </span>
                ))}
            </div>
        </MenuItem>
    );
}

function getSuggestions(value, suggestions) {
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;
    return inputLength < 2 ? [] : suggestions;
}

function getSuggestionValue(suggestion) {
    return suggestion;
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    container: {
        position: "relative",
        width: "100%"
    },
    suggestionsContainerOpen: {
        zIndex: 3,
        position: "absolute",
        marginTop: pTr(12),
        left: 0,
        right: 0
    },
    suggestion: {
        display: "block",
        fontSize: pTr(12),
        lineHeight: pTx(20),
        letterSpacing: 0
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: "none"
    },
    divider: {
        height: theme.spacing(2)
    }
}));

export default function IntegrationAutosuggest(props) {
    const classes = { ...useStyles(), ...props.classes };
    const [state, setState] = React.useState({
        single: "",
        popper: ""
    });

    const [stateSuggestions, setSuggestions] = React.useState([]);

    const handleSuggestionsFetchRequested = ({ value }) => {
        if (value.length >= 2)
            props.ajax(value, props.searchType, data => {
                let data_sort = [...data];
                data_sort.sort((a, b) => {
                    if (a.length < b.length) {
                        return -1;
                    }
                    if (a.length > b.length) {
                        return 1;
                    }
                    // a must be equal to b
                    return 0;
                });
                setSuggestions(getSuggestions(value, data_sort));
            });
    };

    const handleSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const handleChange = name => (event, { newValue }) => {
        // props.setState(newValue);
        setState({
            ...state,
            [name]: newValue
        });
        props.onChange(newValue);
    };

    const autosuggestProps = {
        renderInputComponent,
        suggestions: stateSuggestions,
        onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
        onSuggestionsClearRequested: handleSuggestionsClearRequested,
        getSuggestionValue,
        renderSuggestion
    };
    const {
        placeholder,
        disabled,
        type,
        open,
        onKeyDown,
        onFocus,
        anchorEl,
        pushEvent,
        inputProps
    } = props;

    return (
        <div className={classes.root}>
            <Autosuggest
                {...autosuggestProps}
                inputProps={{
                    classes,
                    id: "react-autosuggest-simple",
                    placeholder: placeholder,
                    value: state.single,
                    onChange: handleChange("single"),
                    type,
                    open,
                    onKeyDown,
                    onFocus,
                    disabled,
                    ...inputProps
                }}
                theme={{
                    container: classes.container,
                    suggestionsContainerOpen: classes.suggestionsContainerOpen,
                    suggestionsList: classes.suggestionsList,
                    suggestion: classes.suggestion
                }}
                onSuggestionSelected={(e, { suggestionValue, method }) => {
                    if (method === "click") {
                        pushEvent(suggestionValue);
                    }
                }}
                renderSuggestionsContainer={options => {
                    return (
                        <Paper {...options.containerProps} square>
                            {options.query.length >= 2 &&
                                options.children &&
                                sessionStorage.getItem("searchType") ===
                                    "의사/병원명" && (
                                    <div
                                        style={{
                                            boxShadow:
                                                "0px 1px 0px 0px rgb(182, 114, 245), 0px -1px 0px 0px rgb(7, 79, 127)",
                                            height: "30px",
                                            width: "100vw",
                                            backgroundColor:
                                                "rgb(37, 116, 169)",
                                            color: "white",
                                            marginLeft: "-71px",
                                            textAlign: "center",
                                            fontSize: "10px",
                                            lineHeight: "26px",
                                            maxWidth: "1024px"
                                        }}
                                    >
                                        *의사명은 자동완성이 지원되지 않습니다.
                                    </div>
                                )}
                            {options.children}
                        </Paper>
                    );
                }}
            />
        </div>
    );
}
