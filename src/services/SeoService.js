import axios from "axios";

export const getSeoData = (slug) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_CLIENT_DATA_URL}/seos?filters[slug][$eq]=${slug}`
  );
};
