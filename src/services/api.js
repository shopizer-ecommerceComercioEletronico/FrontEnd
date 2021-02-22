import axios from "axios";

const apiService = () => {
  const axiosInstance = axios.create({
    baseURL: "https://ecommerce-moveis.herokuapp.com",
  });
  axiosInstance.interceptors.request.use(
    (config) => {
      const store = localStorage.getItem("ecommerce");
      if (store) {
        let token = JSON.parse(store).access_token;
        //console.log(">>>>>", token);
        config.headers["Authorization"] = `Bearer ${token}`;
        //config.headers = { auto: token };
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
