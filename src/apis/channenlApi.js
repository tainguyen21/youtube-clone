import axiosClient from "./axiosClient";

const channelApi = {
  fetchChannelById: (params) => {
    const url = "/channels";
    return axiosClient.get(url, { params });
  },
};

export default channelApi;
