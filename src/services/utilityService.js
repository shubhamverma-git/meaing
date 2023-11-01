const { default: axios } = require("axios");

export function subscribePost(payload) {
  return axios.post("https://insights.droot.in/api/subscribes", {
    data: payload,
  });
}

// Query Form  Api
export const postQuery = (data) => {
  return axios.post(`${process.env.NEXT_PUBLIC_CLIENT_DATA_URL}/queries`, data);
};

// Client data for Client name cards in Home and other pages
export const getClientData = () => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_CLIENT_DATA_URL}/clients?populate=logo_url`
  );
};
