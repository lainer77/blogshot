import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
// import { useDispatch } from "react-redux";
import { BASE_URL, API_TIME_OUT } from "../contants/constants";
import { useRouter } from "next/router";

function useDataList(tableName, params = { limit: 100 }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const route = useRouter();
  //   const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("rjt");
    axios
      .get(`http://${BASE_URL}/${tableName}`, {
        params: params,
        timeout: API_TIME_OUT / 2, // 15초 이내에 응답이 오지 않으면 에러로 간주
        headers: {
          "x-api-key": token
        }
      })
      .then(res => {
        setData(res.data);
        setLoading(false);
        // dispatch({ type: GET_POSTS_LIST, payload: { data: res.data } });
      })
      .catch(error => {
        setError(error);
        console.log(error);
        if (error.response && error.response.data && error.response.data.msg)
          alert(error.response.data.msg);
        if (error.response.status === 401) {
          localStorage.removeItem("rjt");
          route.push("/login", "/");
        }
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}

useDataList.propTypes = {};

export default useDataList;
