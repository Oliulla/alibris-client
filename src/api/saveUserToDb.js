import axios from "axios";

// save user to db
export const saveUserToDb = (name, email, role) => {
  const user = { name, email, role };
  axios
    .post("http://localhost:5000/users", user)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
