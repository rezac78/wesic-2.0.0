import axios from "./axiosConfig";
interface UserData {
  username: string;
  email: string;
  password: string;
}

interface GetUserData {
  username: string;
  email: string;
  password: string;
}

export const registerUser = async (userData: UserData) => {
  try {
    const response = await axios.post("/users/register", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const LoginUser = async (userData: UserData) => {
  try {
    const response = await axios.post("/users/login", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
