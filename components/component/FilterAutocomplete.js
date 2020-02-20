import React from "react";
import deburr from "lodash/deburr";
import Autosuggest from "react-autosuggest";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { pTr, pTx, BASE_COLOR } from "../../styles/typography";

function renderInputComponent(inputProps) {
    const { classes, inputRef = () => {}, ref, ...other } = inputProps;

    return (
        <TextField
            fullWidth
            variant="outlined"
            className={classes.textField}
            inputprops={{
                inputRef: node => {
                    ref(node);
                    inputRef(node);
                },
                classes: {
                    input: classes.input
                }
            }}
            {...other}
        />
    );
}

function renderSuggestion(suggestion, props) {
    const matches = match(suggestion.name, query);
    const parts = parse(suggestion.name, matches);
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
                backgroundColor: isHighlighted ? BASE_COLOR : "white",
                color: isHighlighted ? "white" : "black"
            }}
            component="div"
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

    return inputLength === 0
        ? []
        : suggestions.filter(suggestion => {
              return (
                  suggestion.name.slice(0, inputLength).toLowerCase() ===
                  inputValue
              );
          });
}

function getSuggestionValue(suggestion) {
    return suggestion.name;
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    container: {
        position: "relative"
    },
    suggestionsContainerOpen: {
        position: "absolute",
        zIndex: 1,
        // marginTop: theme.spacing(1),
        left: 0,
        right: 0
    },
    suggestion: {
        display: "block",
        fontSize: pTr(12),
        lineHeight: pTx(20),
        letterSpacing: 0
        // height: pTr(32),
        // "& item": {
        //     height: pTr(32)
        // }
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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [state, setState] = React.useState({
        single: "",
        popper: ""
    });

    const [stateSuggestions, setSuggestions] = React.useState([]);

    const handleSuggestionsFetchRequested = ({ value }) => {
        setSuggestions(getSuggestions(value, props.suggestions));
    };

    const handleSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const handleChange = name => (event, { newValue }) => {
        props.setState(newValue);
        setState({
            ...state,
            [name]: newValue
        });
    };

    const autosuggestProps = {
        renderInputComponent,
        suggestions: stateSuggestions,
        onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
        onSuggestionsClearRequested: handleSuggestionsClearRequested,
        getSuggestionValue,
        renderSuggestion
    };

    return (
        <div className={classes.root}>
            <Autosuggest
                {...autosuggestProps}
                inputProps={{
                    classes,
                    id: "react-autosuggest-simple",
                    // label: "Country",
                    placeholder: "추천검색어 지원(국내의과대학)",
                    value: state.single,
                    onChange: handleChange("single")
                }}
                theme={{
                    container: classes.container,
                    suggestionsContainerOpen: classes.suggestionsContainerOpen,
                    suggestionsList: classes.suggestionsList,
                    suggestion: classes.suggestion
                }}
                renderSuggestionsContainer={options => (
                    <Paper {...options.containerProps} square>
                        {options.children}
                    </Paper>
                )}
            />
        </div>
    );
}
