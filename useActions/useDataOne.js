import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
// import { useDispatch } from "react-redux";
import { BASE_URL, API_TIME_OUT } from "../contants/constants";
import { useRouter } from "next/router";

function useDataOne(tableName, id) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const route = useRouter();
  //   const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("rjt");
    axios
      .get(`http://${BASE_URL}/${tableName}/${id}`, {
        timeout: API_TIME_OUT / 2, // 15초 이내에 응답이 오지 않으면 에러로 간주
        headers: { "x-api-key": token }
      })
      .then(res => {
        setData(res.data);
        setLoading(false);
        // dispatch({ type: GET_POSTS_LIST, payload: { data: res.data } });
      })
      .catch(error => {
        console.log(error);
        setError(error.msg);
        if (error.response && error.response.data && error.response.data.msg)
          alert(error.response.data.msg);
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("rjt");
          route.push("/login", "/");
        } else {
          route.back();
        }
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}

useDataOne.propTypes = {
  tableName: PropTypes.string.isRequired,
  id: PropTypes.any.isRequired
};

export default useDataOne;
