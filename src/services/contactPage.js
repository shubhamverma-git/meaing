import axios from "axios";

export const getContactPage = () => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_CLIENT_DATA_URL}/contact?populate=contact_heading,form_image,addresses.image_url`
  );
};
