const { default: axios } = require("axios");

// Home page api ---------------------------------
export const getHomePageData = () => {
  // `${process.env.NEXT_PUBLIC_CLIENT_DATA_URL}/services?[populate][sub_services][fields][0]=name&[populate][sub_services][fields][1]=slug`
  return axios.get(
    `${process.env.NEXT_PUBLIC_CLIENT_DATA_URL}/services?populate=sub_services,service_card,icon_outline,icon_filled&sort[0]=id`
  );
};

export const getProjectsData = () => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_CLIENT_DATA_URL}/projects?populate=card_image,banner_image`
  );
};
