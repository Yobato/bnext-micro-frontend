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
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

// export const getMe = async (): Promise<User | null> => {
//   try {
//     const response = await axios.get("http://api.bnext.localhost:4000/me", {
//       withCredentials: true, // pastikan cookies dikirim
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching current user:", error);
//     return null;
//   }
// };


export const createUser = async (data:any): Promise<User>=>{
  try {
    const response = await axios.post(
        "http://api.bnext.localhost:4000/users",
        data
    );
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

// Edit User
export const getUserById = async (id: string): Promise<User> => {
  try {
    const response = await axios.get(
      `http://api.bnext.localhost:4000/users/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user by id:", error);
    throw error;
  }
};

export const editUser = async (
  id: string,
  data: Partial<User>
): Promise<User> => {
  try {
    const response = await axios.put(
      `http://api.bnext.localhost:4000/users/${id}`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};


export const deleteUser = async (id:string): Promise<User>=>{
  try {
    const response = await axios.delete(
        `http://api.bnext.localhost:4000/users/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}
