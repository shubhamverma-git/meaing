const { default: axios } = require("axios");

export const getOurProjects = () => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_CLIENT_DATA_URL}/project-cards?populate=image_url`
  );
};
