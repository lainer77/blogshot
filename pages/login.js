import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";

import Layout from "../components/layouts/Layout";

import { useRouter } from "next/router";
import {
  TextField,
  FormControl,
  Card,
  Button,
  CircularProgress
} from "@material-ui/core";
import { BASE_COLOR } from "../styles/typography";
import { useTAP } from "../useActions";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: BASE_COLOR,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    padding: "0px 0px 0px",
    textAlign: "center"
  },
  card: {
    backgroundColor: "rgb(240 240 240)",
    padding: "5px 30px 20px"
  },
  textField: {
    margin: "0px 0px 10px"
  },
  actions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px 20px 5px",
    marginTop: "15px"
  },
  button: {
    margin: "5px"
  },
  appName: {
    color: "white",
    textShadow:
      "-1px -1px 0 blue, 1px -1px 0 blue, -1px 1px 0 blue, 1px 1px 0 blue"
  }
}));
const Index = props => {
  const classes = useStyles();
  const route = useRouter();
  const { login, loading } = useTAP();
  const [id, setId] = useState();
  const [pass, setPass] = useState();
  const MyPage = (
    <div className={classes.root}>
      <div className={classes.content}>
        <h1 className={classes.appName}>BlogShot</h1>
        <Card className={classes.card}>
          <FormControl fullWidth variant="outlined">
            <TextField
              className={classes.textField}
              fullWidth
              label={"아이디"}
              value={id}
              onChange={e => {
                setId(e.target.value);
              }}
            />
            <TextField
              id="standard-password-input"
              className={classes.textField}
              type="password"
              label={"비밀번호"}
              value={pass}
              onChange={e => {
                setPass(e.target.value);
              }}
            />
          </FormControl>
        </Card>
        {loading ? (
          <CircularProgress />
        ) : (
          <div className={classes.actions}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => {
                login(id, pass, {
                  success: (sres, loaded) => {
                    alert(sres.data.msg);
                    localStorage.setItem("rjt", sres.data.jwt_token);
                    route.push("/");
                    loaded();
                  },
                  fail: err => {
                    if (err.response && err.response.data)
                      alert(err.response.data.msg);
                    setPass("");
                  }
                });
              }}
            >
              로그인
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="default"
              onClick={() => {
                route.push("/signup");
              }}
            >
              계정생성
            </Button>
            {/* <Button
            className={classes.button}
            variant="contained"
            color="default"
            onClick={() => {
              route.push("/blog");
            }}
          >
            블로그 셋팅
          </Button> */}
          </div>
        )}{" "}
      </div>
    </div>
  );

  return <Layout cookies={props.cookies} content={MyPage} />;
};

export default Index;
