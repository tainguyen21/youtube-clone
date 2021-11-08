import axiosClient from "./axiosClient";

const searchApi = {
  searchByKeyWord: (params) => {
    const url = "/search";
    return axiosClient.get(url, { params });
  },

  fetchVideosOfChannel: (params) => {
    const url = "/search";
    return axiosClient.get(url, { params });
  },
};

export default searchApi;
