// utils/userService.ts
import axios from "axios";

export type User = {
  id: string;
  name: string;
  email: string;
  branch: string;
  group: string;
  userId: string;
  status: string;
};

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get(
        "http://api.bnext.localhost:4000/users",
    );
    // console.log("Ini response ==> ",response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
