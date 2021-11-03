import axiosClient from "./axiosClient";

const videoApi = {
  getVideos: (params) => {
    const url = "/videos";
    return axiosClient.get(url, { params });
  },

  getRelatedVideos: (params) => {
    const url = "/search";
    return axiosClient.get(url, { params });
  },
};

export default videoApi;
