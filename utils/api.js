import { message } from "antd";
import axios from "axios";
import Cookies from "js-cookie";

const apiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

apiInstance.interceptors.response.use(
  (response) => {
    if (response.status === 200 || response.status === 201) {
      if (response.data.status === "Error" && response?.data?.data !== null) {
        message.error(response.data.message);
        return Promise.reject(response.data.message);
      }
      if (
        response?.data?.data === null &&
        response?.data?.message === "Cart Not Found" &&
        response.data?.status === "Error"
      ) {
        Cookies.remove("rapid_money_cart_id");
      }
      let Data = {
        response_status_code: response?.status,
        ...response.data,
      };
      return Data;
    }
  },
  (error) => {
    if (error?.response?.status === 501) {
      message.warning(error.response.data.message);
    } else if (error?.response?.data?.message) {
      message.error(error.response.data.message);
    } else {
      message.error(error.message);
    }
    if (error?.response?.status === 403) {
      Cookies.remove("rapid-money-token");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
    return Promise.reject(error);
  }
);

function requests(external_token) {
  let token = external_token ?? Cookies.get("rapid-money-token");
  let get = (url, data, withAuth = true, config = {}) => {
    if (withAuth) {
      config = {
        headers: {
          Authorization: "Bearer " + token,
        },
        ...config,
      };
    }
    return apiInstance.get(url, { ...config, params: { ...data } });
  };

  const post = (url, data, withAuth = true) => {
    let config = {};
    if (withAuth) {
      config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
    }
    return apiInstance.post(url, data, config);
  };

  const put = (url, data, withAuth = true) => {
    let config = {};
    if (withAuth) {
      config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
    }
    return apiInstance.put(url, data, config);
  };

  const del = (url, data, withAuth = true) => {
    let config = {};
    if (withAuth) {
      config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
    }
    return apiInstance.delete(url, config);
  };

  const api = { get, post, put, del };
  return api;
}
export default requests;
