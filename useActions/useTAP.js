import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { BASE_URL, API_TIME_OUT } from "../contants/constants";

function useTAP() {
  const [loading, setLoading] = useState(false);

  const signUp = (
    userId = "",
    password = "",
    { success = (response = {}) => {}, fail = (error = {}) => {} }
  ) => {
    setLoading(true);
    return axios
      .post(
        `http://${BASE_URL}/signup`,
        { json: JSON.stringify({ userId, password }) },
        {
          timeout: API_TIME_OUT / 2 // 15초 이내에 응답이 오지 않으면 에러로 간주
        }
      )
      .then(res => {
        success(res, () => {
          setLoading(false);
        });
      })
      .catch(err => {
        fail(err);
        setLoading(false);
      });
  };
  const login = (
    userId = "",
    password = "",
    { success = (response = {}) => {}, fail = (error = {}) => {} }
  ) => {
    setLoading(true);
    return axios
      .post(
        `http://${BASE_URL}/login`,
        { json: JSON.stringify({ userId, password }) },
        {
          timeout: API_TIME_OUT / 2 // 15초 이내에 응답이 오지 않으면 에러로 간주
        }
      )
      .then(res => {
        success(res, () => {
          setLoading(false);
        });
      })
      .catch(err => {
        fail(err);
        setLoading(false);
      });
  };
  const overlap = id => {
    return axios.get(`http://${BASE_URL}/overlap/${id}`, {
      timeout: API_TIME_OUT / 2 // 15초 이내에 응답이 오지 않으면 에러로 간주
    });
  };

  return {
    signUp,
    login,
    overlap,
    loading
  };
}

useTAP.propTypes = {};

export default useTAP;
