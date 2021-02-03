export const responsiveImg = (width, images) => {
  let backgroundImg;
  if (width > 760) {
    backgroundImg = images[0];
  }
  if (width > 375 && width <= 760) {
    backgroundImg = images[1];
  }
  if (width <= 375) {
    backgroundImg = images[2];
  }
  return backgroundImg;
};
