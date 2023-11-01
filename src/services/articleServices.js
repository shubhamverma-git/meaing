import axios from "axios";

const pageSizeIdea = 100;
const pageSizeHighlighted = 3;

export const getAllArticles = (type, page_num) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_CLIENT_DATA_URL}/ideas?populate=image_url,services&[filters][type][$eq]=${type}&pagination[page]=${page_num}&pagination[pageSize]=${pageSizeIdea}&sort[0]=id`
  );
};

export const getFilteredArticles = (type, filter, page_num) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_CLIENT_DATA_URL}/ideas?populate=image_url,services&[filters][type][$eq]=${type}&[filters][services][slug][$eq]=${filter}&pagination[page]=${page_num}&pagination[pageSize]=${pageSize}&sort[0]=id`
  );
};

export const getHighlightedArticles = (type, filter, page_num, size) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_CLIENT_DATA_URL}/ideas?populate=image_url,services&[filters][type][$eq]=${type}&[filters][services][slug][$eq]=${filter}&pagination[page]=${page_num}&pagination[pageSize]=${size}&sort[0]=id&[filters][is_highlighted][$eq]=true`
  );
};


//  for home page
export const getHomepageArticles = (type, page_num, size) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_CLIENT_DATA_URL}/ideas?populate=image_url,services&[filters][type][$eq]=${type}&pagination[page]=${page_num}&pagination[pageSize]=${size}&sort[0]=id&[filters][is_highlighted][$eq]=true`
  );
};
