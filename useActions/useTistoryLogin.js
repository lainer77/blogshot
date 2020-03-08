import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
// import { useDispatch } from "react-redux";
import { BASE_URL, API_TIME_OUT } from "../contants/constants";
import { useRouter } from "next/router";

function useTistoryLogin() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const route = useRouter();
  //   const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage) {
      const access_token = localStorage.getItem("access_token");
      setData({ access_token });
    }
  }, []);

  useEffect(() => {
    const code = route.query.code;
    console.log("code :", code);
    if (code) {
      axios
        .get(`http://${BASE_URL}/auth/access_token`, {
          params: { code: code },
          timeout: API_TIME_OUT / 2 // 15초 이내에 응답이 오지 않으면 에러로 간주
        })
        .then(res => {
          console.log(res.data);
          if (res.data.access_token)
            localStorage.setItem("access_token", res.data.access_token);
          setData(res.data);
          setLoading(false);
          return res;
          // dispatch({ type: GET_POSTS_LIST, payload: { data: res.data } });
        })
        .catch(error => {
          setError(error);
          setLoading(false);
          return error;
        });
    }
  }, [route.query.code]);

  const absolve = () => {
    setLoading(true);
    return axios
      .get(`http://${BASE_URL}/auth`, {
        timeout: API_TIME_OUT / 2 // 15초 이내에 응답이 오지 않으면 에러로 간주
      })
      .catch(error => {
        setError(error);
        setLoading(false);
        return error;
      });
  };

  return {
    absolve,
    loading,
    error,
    access_token: data.access_token
  };
}

useTistoryLogin.propTypes = {};

export default useTistoryLogin;
