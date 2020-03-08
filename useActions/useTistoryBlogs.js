import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { BASE_URL, API_TIME_OUT } from "../contants/constants";

function useTistoryBlogs(access_token = "") {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const absolve = (datas = [], userId) => {
    setLoading(true);
    return axios
      .post(
        `http://${BASE_URL}/tistory/blogs${userId ? "/" + userId : ""}`,
        { json: JSON.stringify(datas) },
        {
          timeout: API_TIME_OUT / 2 // 15초 이내에 응답이 오지 않으면 에러로 간주
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (access_token) {
      setLoading(true);
      axios
        .get(`http://${BASE_URL}/tistory/blogs`, {
          params: { access_token: access_token },
          timeout: API_TIME_OUT / 2 // 15초 이내에 응답이 오지 않으면 에러로 간주
        })
        .then(res => {
          console.log(res.data);
          setData(res.data);
          setLoading(false);
          return res;
        })
        .catch(error => {
          setError(error);
          setLoading(false);
          return error;
        });
    }
  }, [access_token]);

  return {
    absolve,
    data,
    loading,
    error
  };
}

useTistoryBlogs.propTypes = {};

export default useTistoryBlogs;
