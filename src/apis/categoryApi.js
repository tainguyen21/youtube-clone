import axiosClient from "./axiosClient";

const categoryApi = {
  fetchCategory: (params) => {
    const url = "/videoCategories";
    return axiosClient.get(url, { params });
  },
};

export default categoryApi;
