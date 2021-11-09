export const formatViews = (viewCount) => {
  if (viewCount < 1000) return viewCount;

  const number = [1e3, 1e6, 1e9];
  const unit = ["N", "Tr", "B"];
  let i = 0;

  for (; i < number.length; i++) {
    if (viewCount / number[i] < 1) {
      break;
    }
  }

  return `${parseInt(viewCount / number[i - 1])} ${unit[i - 1]}`;
};

export const formatTime = (time) => {
  const number = [
    1000,
    60000,
    3600000,
    86400000,
    604800000,
    2.62974383 * 1e9,
    3.1556926 * 1e10,
  ];
  const unit = ["giây", "phút", "giờ", "ngày", "tuần", "tháng", "năm"];
  const current = new Date();
  const published = new Date(time);
  const t = current.getTime() - published.getTime();

  let i = 0;

  for (; i < number.length; i++) {
    if (t / number[i] < 1) {
      break;
    }
  }

  return `${parseInt(t / number[i - 1])} ${unit[i - 1]}`;
};
