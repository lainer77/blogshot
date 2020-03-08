import { makeStyles } from "@material-ui/styles";

import Layout from "../components/layouts/Layout";

import ActionMyBar from "../components/component/ActionMyBar";

import { useRouter } from "next/router";
import {
  TextField,
  FormControl,
  Card,
  Button,
  CircularProgress,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import useDataOne from "../useActions/useDataOne";
import usePost from "../useActions/usePost";
import { useState, useEffect } from "react";

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: "64px 0px 0px"
  },
  card: {
    backgroundColor: "rgb(240 240 240)",
    padding: "20px",
    margin: "0px 20px 20px"
  },
  textField: {
    margin: "10px 10px 20px"
  },
  actions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 20px 5px",
    marginTop: "15px"
  },
  button: {
    margin: "5px"
  },
  process: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  formControl: {
    display: "flex",
    flexDirection: "row"
  },
  select: {
    marginLeft: "10px"
  }
}));
const Index = props => {
  const classes = useStyles();
  const route = useRouter();
  const { data: post, loading, error } = useDataOne(
    "posting",
    route.query.code
  );
  const [updatePost, setUpdatePost] = useState(post);
  const { postSave } = usePost();

  useEffect(() => {
    setUpdatePost(post);
  }, [post]);

  const handleOnSave = () => {
    postSave(
      post.code,
      {
        title: updatePost.title,
        context: updatePost.context
      },
      {
        success: res => {
          if (res.data && res.data.msg) {
            alert(res.data.msg);
          }
        },
        fail: err => {
          if (err.response.data && err.response.data.msg) {
            alert(err.response.data.msg);
          }
        }
      }
    );
  };
  const handleUpdataPost = key => () => {
    setUpdatePost({ ...updatePost, [key]: e.target.value });
  };

  const MyPage = (
    <div className={classes.root}>
      <ActionMyBar homeEnable={false} title={post.code || "포스트"} />
      <div className={classes.content}>
        <div className={classes.actions}>
          <span>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              disabled
            >
              삭제
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleOnSave}
            >
              저장
            </Button>
          </span>
        </div>

        <Card className={classes.card}>
          {loading ? (
            <div className={classes.process}>
              <CircularProgress />
            </div>
          ) : (
            <FormControl fullWidth variant="outlined">
              <TextField
                className={classes.textField}
                multiline
                fullWidth
                label={"제목"}
                onChange={handleUpdataPost("title")}
                defaultValue={post.title}
              />
              <TextField
                className={classes.textField}
                multiline
                fullWidth
                label={"내용"}
                onChange={handleUpdataPost("context")}
                defaultValue={post.context}
              />
            </FormControl>
          )}
        </Card>
        {error && <p>{error}</p>}
      </div>
    </div>
  );

  return <Layout cookies={props.cookies} content={MyPage} />;
};

export default Index;
