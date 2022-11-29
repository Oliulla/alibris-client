import axios from "axios";

// save user to db
export const saveUserToDb = async (name, email, role) => {
  try {
    const user = { name, email, role };
    const data = await axios.put("https://alibris-server.vercel.app/users", user);
    return data;
    
  } catch (error) {
    console.log(error);
  }
};
