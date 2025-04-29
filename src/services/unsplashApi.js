import axios from "axios";

const ACCESS_KEY = "b0_zb6uaPz-H-3d-CDHCs13d9HehwDkQWe80QjuMhtc";
const BASE_URL = "https://api.unsplash.com/search/photos";

export async function fetchImages(query, page = 1) {
  const response = await axios.get(BASE_URL, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
}
