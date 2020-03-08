import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CircularProgress } from "@material-ui/core";
import Tabss from "../tab/Tabs";
import styled from "styled-components";

import { pTr, BASE_COLOR } from "../../styles/typography";
import { useRouter } from "next/router";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  item: {
    marginBottom: "20px",
    paddingLeft: "10px",
    textAlign: "left",
    cursor: "pointer"
  },
  proccess: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

const GridGutterA = styled.div`
  && {
    padding: ${pTr(15)};
    text-align: center;
  }
`;
const GridGutterB = styled.div`
  && {
    padding: ${pTr(15)};
    text-align: left;
  }
`;
const GridGutterC = styled.div`
  && {
    padding: ${pTr(15)};
    text-align: left;
  }
`;

const ButtonGridA = props => {
  const route = useRouter();
  const classes = useStyles();
  if (props.loading) {
    return (
      <div className={classes.proccess}>
        <CircularProgress />
      </div>
    );
  }
  return (
    <GridGutterA>
      {props.data.length > 0 &&
        props.data.map((item = { code: "", title: "" }) => {
          return (
            <Card
              key={"title-" + item.code + item.id + "-a"}
              className={props.classes.item}
              onClick={() => {
                route.push(`/post?code=${item.code}`);
              }}
            >
              <p>{item.code}</p>
              <p>{item.title}</p>
            </Card>
          );
        })}
    </GridGutterA>
  );
};

const ButtonGridB = props => {
  const route = useRouter();
  const classes = useStyles();
  if (props.loading) {
    return (
      <div className={classes.proccess}>
        <CircularProgress />
      </div>
    );
  }
  return (
    <GridGutterB>
      {props.data.length > 0 &&
        props.data.map((item = { code: "", title: "" }) => {
          return (
            <Card
              key={"title-" + item.code + item.id + "-b"}
              className={props.classes.item}
              onClick={() => {
                route.push(`/posting?code=${item.code}`);
              }}
            >
              <p>{item.code}</p>
              <p>{item.title}</p>
            </Card>
          );
        })}
    </GridGutterB>
  );
};

const ButtonGridC = props => {
  const route = useRouter();
  const classes = useStyles();
  if (props.loading) {
    return (
      <div className={classes.proccess}>
        <CircularProgress />
      </div>
    );
  }
  return <GridGutterC></GridGutterC>;
};

function HomeArea2(props) {
  const classes = useStyles();
  const { loading, posts, posting } = props;

  return (
    <div className={classes.root}>
      <Tabss
        titles={["미정포스트", "티스토리", "네이버"]}
        contents={[
          <ButtonGridA data={posts} classes={classes} loading={loading} />,
          <ButtonGridB data={posting} classes={classes} loading={loading} />,
          <ButtonGridC data={[]} classes={classes} loading={loading} />
        ]}
      />
    </div>
  );
}

export default HomeArea2;
