import axios from "axios";

const baseUrl = "http://localhost:8080/";

export async function getAllUsers() {
  let users = [];
    await axios
      .get(baseUrl + "getUsers", {})
      .then((res) => {
        console.log("getAllUsers Returned: ", res);
        users = res.data;
      })
      .catch((err) => {
        console.log("Error occurred in UserApi.getAllUsers() axios req", err);
      });
  return users;
}

export async function getUserByEmail(emailGiven) {
  let user = null;
  console.log("getUserByEmail email given: ", emailGiven);
  
    await axios
      .get(baseUrl + "getUsersByEmail", {params: { email: emailGiven }})
      .then((res) => {
        user = res.data? res.data:null;
      })
      .catch((err) => {
        console.log("Error occurred USerApi.getUserByEmail axios request ", err);
      });

  return user;
}
