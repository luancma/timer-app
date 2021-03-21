import { axiosInstance } from "../axios/instance";

export const getUserByEmail = async ({ email, password }) => {
  return axiosInstance
    .post("users", { email, password })
    .then((response) => response.data)
    .catch((error) => console.log(error.response.data.errors));
};
