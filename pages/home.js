import React from "react";
import { makeStyles } from "@material-ui/styles";

import HomeArea1 from "../components/area/HomeArea1";
import HomeArea2 from "../components/area/HomeArea2";
import useDataList from "../useActions/useDataList";
// import AppBar from "../components/component/AppBar";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "calc(100vh)"
  }
}));

const HomePage = props => {
  const classes = useStyles();
  const { data: posts, loading } = useDataList("posts");
  const { data: posting, loading2 } = useDataList("posting");
  return (
    <div className={classes.root}>
      <HomeArea1 {...props} />
      <HomeArea2
        {...props}
        posts={posts}
        posting={posting}
        loading={loading || loading2}
      />
    </div>
  );
};

export default HomePage;
