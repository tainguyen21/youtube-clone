import axiosClient from "./axiosClient";

const commentApi = {
  getComments: (params) => {
    const url = "/commentThreads";
    return axiosClient.get(url, { params });
  },
};

export default commentApi;
