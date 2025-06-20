import axios from "axios";
import { FetchImagesResponse } from "../components/App/App.types";

const ACCESS_KEY = "b0_zb6uaPz-H-3d-CDHCs13d9HehwDkQWe80QjuMhtc";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImages = async (
  query: string,
  page = 1,
  perPage = 12
): Promise<FetchImagesResponse> => {
  const response = await axios.get("/search/photos", {
    params: {
      query,
      page,
      per_page: perPage,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};
