import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as constants from "../../contants/constants";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { pTr, BASE_COLOR } from "../../styles/typography";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    width: "100%"
  },
  appbar: {
    flexGrow: 1,
    top: 0,
    left: 0,
    right: 0,
    position: "sticky",
    zIndex: 1,
    padding: `${pTr(20)} ${pTr(20)} 0 ${pTr(20)}`
  }
});
const ContantStyle = styled.div`
  && {
    margin-top: ${pTr(27)};
    margin-bottom: ${pTr(33)};
  }
`;
const TypographyStyle = styled(Typography)`
  && {
    color: ${BASE_COLOR};
    font-size: ${pTr(30)};
    letter-spacing: 0;
    display: inline-block;
  }
`;

const TextContainer = styled.div`
    && {
        min-height: ${pTr(42)};
        /* background-color: ${BASE_COLOR}; */
        padding: ${pTr(2)} 0 ${pTr(2)} 0;
        display: inline-block;
        text-align: center;
    }
`;

export default function HomeArea1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <ContantStyle>
          <TextContainer>
            <TypographyStyle>{constants.INFO.HOME.MAIN_TITLE}</TypographyStyle>
          </TextContainer>
        </ContantStyle>
      </div>
    </div>
  );
}
