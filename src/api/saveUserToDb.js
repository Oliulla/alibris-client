import axios from "axios";

// save user to db
export const saveUserToDb = async (name, email, role) => {
  try {
    const user = { name, email, role };
    const data = await axios.put("http://localhost:5000/users", user);
    return data;
    
  } catch (error) {
    console.log(error);
  }
};
