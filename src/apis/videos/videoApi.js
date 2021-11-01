import axiosClient from "./axiosClient";

const videoApi = {
  getVideos: (params) => {
    const url = "/videos";
    return axiosClient.get(url, { params });
  },
};

export default videoApi;
