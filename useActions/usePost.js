import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
// import { useDispatch } from "react-redux";
import { BASE_URL, API_TIME_OUT } from "../contants/constants";

function usePost() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  //   const dispatch = useDispatch();

  const postSave = (
    code = "",
    params = {},
    options = { success: response => {}, fail: error => {}, finally: () => {} }
  ) => {
    setLoading(true);
    const token = localStorage.getItem("rjt");
    axios
      .patch(
        `http://${BASE_URL}/posts/${code}`,
        { json: JSON.stringify(params) },
        {
          timeout: API_TIME_OUT / 2, // 15초 이내에 응답이 오지 않으면 에러로 간주
          headers: {
            "x-api-key": token
          }
        }
      )
      .then(res => {
        options.success && options.success(res);
      })
      .catch(error => {
        options.fail && options.fail(error);
        setError(error);
      })
      .finally(() => {
        options.finally && options.finally();
        setLoading(false);
      });
  };

  const postDelete = (
    code = "",
    options = { success: response => {}, fail: error => {}, finally: () => {} }
  ) => {
    setLoading(true);
    const token = localStorage.getItem("rjt");
    axios
      .delete(`http://${BASE_URL}/posts/${code}`, {
        timeout: API_TIME_OUT / 2, // 15초 이내에 응답이 오지 않으면 에러로 간주
        headers: {
          "x-api-key": token
        }
      })
      .then(res => {
        options.success && options.success(res);
      })
      .catch(error => {
        options.fail && options.fail(error);
        setError(error);
      })
      .finally(() => {
        options.finally && options.finally();
        setLoading(false);
      });
  };
  const posting = (
    params = {},
    options = { success: () => {}, fail: () => {}, finally: () => {} }
  ) => {
    setLoading(true);
    const token = localStorage.getItem("rjt");
    axios
      .post(
        `http://${BASE_URL}/posting`,
        { json: JSON.stringify(params) },
        {
          timeout: API_TIME_OUT / 2, // 15초 이내에 응답이 오지 않으면 에러로 간주
          headers: {
            "x-api-key": token
          }
        }
      )
      .then(res => {
        options.success && options.success(res);
        // dispatch({ type: GET_POSTS_LIST, payload: { data: res.data } });
      })
      .catch(error => {
        console.log(error);
        setError(error);
        options.fail && options.fail(error);
      })
      .finally(() => {
        setLoading(false);
        options.finally && options.finally();
      });
  };

  return { postSave, postDelete, posting, loading, error };
}

usePost.propTypes = {
  tableName: PropTypes.string.isRequired,
  id: PropTypes.any.isRequired
};

export default usePost;
