import axios from "axios";

const apiService = () => {
  const axiosInstance = axios.create({
    baseURL: "http://ecommerce-moveis-dev.herokuapp.com/",
  });
  axiosInstance.interceptors.request.use(
    (config) => {
      const store = localStorage.getItem("adotei@token");
      if (store) {
        let token = JSON.parse(store).token;
        //console.log(">>>>>", token);
        //config.headers["Authorization"] = `${store.token}`;
        config.headers = { auth: token };
      }
      // config.headers['Content-Type'] = 'application/json';
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
  return axiosInstance;
};

export default apiService();
