import axios from "axios";

export const getSubServicesData = () => {
  return axios.get(`${process.env.NEXT_PUBLIC_CLIENT_DATA_URL}/sub-services`);
};
