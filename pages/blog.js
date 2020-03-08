import { makeStyles } from "@material-ui/styles";

import Layout from "../components/layouts/Layout";

import { useRouter } from "next/router";
import {
  Card,
  Button,
  Collapse,
  CardActions,
  TextField,
  Checkbox,
  Typography,
  FormControlLabel
} from "@material-ui/core";
import {
  KeyboardArrowUp as ArrowUp,
  KeyboardArrowDown as ArrowDown
} from "@material-ui/icons";
import { BASE_COLOR } from "../styles/typography";
import { useState, useEffect } from "react";
import { useTistoryLogin, useTistoryBlogs } from "../useActions";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: BASE_COLOR,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    padding: "0px 0px 0px",
    textAlign: "center"
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    backgroundColor: "rgb(240 240 240)",
    padding: "20px 20px 10px"
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    flexDirection: "column"
  },
  itemHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px 10px",
    minWidth: "450px"
  },
  actions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px 20px 5px",
    marginTop: "15px"
  },
  content2: { width: "100%" },
  wrapperInner: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    padding: "10px 15px 15px",
    borderTop: "1px solid lightgray"
  },
  button: {
    margin: "5px"
  },
  appName: {
    color: "white",
    textShadow:
      "-1px -1px 0 blue, 1px -1px 0 blue, -1px 1px 0 blue, 1px 1px 0 blue"
  },
  platformName: {
    fontWeight: "bold"
  },
  blogs: {
    border: "2px solid lightgray",
    display: "flex",
    margin: "10px 0px 0px",
    padding: "5px 5px 5px 20px",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center"
  },
  blogHead: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "100%"
  }
}));
// b2ef83a76d449d769f337eccd6afd2d8_53799dbf4a5e7fa29210ffbc3e3ca788
const Index = props => {
  const classes = useStyles();
  const route = useRouter();
  const [naverChecked, setNaverChecked] = useState(false);
  const [tistoryChecked, setTistoryChecked] = useState(false);
  const { absolve, access_token } = useTistoryLogin();
  const { data, absolve: absolve2 } = useTistoryBlogs(access_token);
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState([]);
  useEffect(() => {
    if (access_token && access_token !== "undefined") {
      setTistoryChecked(true);
    }
  }, [access_token]);
  useEffect(() => {
    if (data && data.tistory) {
      setBlogs(data.tistory.item.blogs);
    }
  }, [data]);
  const MyPage = (
    <div className={classes.root}>
      <div className={classes.content}>
        <h1 className={classes.appName}>블로그 셋팅</h1>
        <Card className={classes.card}>
          <Card className={classes.item}>
            <CardActions className={classes.itemHeader}>
              <span className={classes.platformName}>네이버</span>
              <Button
                endIcon={naverChecked ? <ArrowDown /> : <ArrowUp />}
                onClick={() => {
                  // setNaverChecked(!naverChecked);
                }}
              >
                등록
              </Button>
            </CardActions>
            <Collapse
              className={classes.content2}
              classes={{ wrapperInner: classes.wrapperInner }}
              in={naverChecked}
            >
              <TextField fullWidth label="access_token" />
              <TextField fullWidth label="access_token" />
              <TextField fullWidth label="access_token" />
            </Collapse>
          </Card>
          <Card className={classes.item}>
            <CardActions className={classes.itemHeader}>
              <span className={classes.platformName}>티스토리</span>
              <Button
                endIcon={tistoryChecked ? <ArrowDown /> : <ArrowUp />}
                onClick={() => {
                  if (access_token && access_token !== "undefined") {
                    setTistoryChecked(!tistoryChecked);
                  } else {
                    absolve().then(res => {
                      setTistoryChecked(!tistoryChecked);
                      document.write(res.data);
                    });
                  }
                }}
              >
                등록
              </Button>
            </CardActions>
            <Collapse
              className={classes.content2}
              classes={{ wrapperInner: classes.wrapperInner }}
              in={tistoryChecked}
            >
              <TextField
                fullWidth
                value={access_token}
                disabled
                label="access_token"
              />
              {blogs.map((blog, index) => {
                let form = {
                  access_token: access_token,

                  userId: data.tistory.item.userId,
                  id: data.tistory.item.id,

                  blogId: blog.blogId,
                  name: blog.name,
                  url: blog.url,
                  nickname: blog.nickname,
                  title: blog.title,
                  description: blog.description,
                  default: blog.default,
                  statistics_post: blog.statistics.post,
                  statistics_comment: blog.statistics.comment,
                  statistics_trackback: blog.statistics.trackback
                };
                let isBlog = data.tistory.item.blogIds.find(
                  x => x === parseInt(blog.blogId)
                );

                console.log("isBlog:", isBlog, blog.blogId);
                return (
                  <div
                    key={"blog-" + index}
                    className={classes.blogs}
                    style={{
                      borderColor:
                        blog.default === "Y" ? "darkblue" : "lightgray"
                    }}
                  >
                    <div className={classes.blogHead}>
                      <Typography color="primary">
                        {blog.default === "Y" &&
                          blog.nickname + "님의 대표 블로그입니다."}
                      </Typography>
                      <TextField
                        value={blog.name}
                        fullWidth
                        disabled
                        label="Blog Name"
                      />
                      <TextField
                        value={blog.title}
                        fullWidth
                        disabled
                        label="Blog Title"
                      />
                      <TextField
                        value={blog.nickname}
                        fullWidth
                        disabled
                        label="유저 별명"
                      />
                      <TextField
                        fullWidth
                        value={blog.url}
                        disabled
                        label="Blog Url"
                      />
                    </div>
                    <FormControlLabel
                      value="start"
                      labelPlacement="start"
                      style={{ minWidth: "80px" }}
                      control={
                        <Checkbox
                          defaultChecked={false}
                          color="primary"
                          value="default"
                          checked={isBlog}
                          onChange={e => {
                            console.log(e.target.checked);
                            if (e.target.checked)
                              setFormData([...formData, form]);
                            else
                              setFormData([
                                ...formData.filter(f => f.name !== blog.name)
                              ]);
                          }}
                        />
                      }
                      label="사용"
                    />
                  </div>
                );
              })}
            </Collapse>
          </Card>
        </Card>
        <div className={classes.actions}>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={() => {
              const result = window.confirm(
                "변경된 내용을 저장하지 않고 취소하겠습니까?"
              );
              if (result) route.push("/login");
            }}
          >
            취소
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={() => {
              if (formData.length > 0) {
                const result = window.confirm("내용을 저장하겠습니까?");
                if (result) {
                  absolve2(formData).then(res => {
                    if (res.data.state === 1062) {
                      alert(res.data.msg);
                    }
                    route.push("/login");
                  });
                  // .then(res => {
                  //   console.log(res);
                  //   if (res.code === 200) route.push("/login");
                  // });
                }
              } else {
                alert("저장될 내용이 없습니다.");
              }
            }}
          >
            저장
          </Button>
        </div>
      </div>
    </div>
  );

  return <Layout cookies={props.cookies} content={MyPage} />;
};

export default Index;
