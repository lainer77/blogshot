import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TagCloud from "react-tag-cloud";
import { Box } from "@material-ui/core";
import { BASE_COLOR } from "../../styles/typography";

const useStyles = makeStyles({
    root: {
        flex: 1,
        backgroundColor: BASE_COLOR,
        height: "224px",
        display: "flex",
        alignItems: "center",
        padding: "10px"
    }
});

function WC(props) {
    const classes = useStyles();
    const { data } = props;
    return (
        <Box className={classes.root}>
            <TagCloud
                style={{
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    // fontStyle: "italic",
                    color: "white",
                    spiral: "rectangular",
                    padding: 5,
                    width: "100%",
                    height: "100%"
                }}
            >
                {data
                    ? data.map(x => {
                          const { value, count, opacity } = x;
                          return (
                              <div
                                  key={`${value}-${count}`}
                                  style={{
                                      fontSize: count,
                                      color: "white",
                                      opacity: opacity
                                  }}
                              >
                                  {value}
                              </div>
                          );
                      })
                    : null}
            </TagCloud>
        </Box>
    );
}
export default WC;
