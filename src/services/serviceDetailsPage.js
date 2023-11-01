const { default: axios } = require("axios");

export const getServiceDetailPageData = (service) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_CLIENT_DATA_URL}/services/?filters[slug][$eq]=${service}&populate=icon_filled,icon_outline,service_detail.cover_image,service_detail.hero_image,sub_services.icon_url,software.image_url,faqs`
  );
};
