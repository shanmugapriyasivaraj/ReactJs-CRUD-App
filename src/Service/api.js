import axios from "axios";

const URL = "http://localhost:3002/users";

export const addUser = async (data) => {
  try {
    return await axios.post(URL, data);
  } catch (error) {
    console.log("Error While Calling addUser Api", error.message);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(URL);
  } catch (error) {
    console.log("Error While Calling getUsers Api", error.message);
  }
};

export const getUser = async (data) => {
  try {
    return await axios.get(`${URL}/${data}`);
  } catch (error) {
    console.log("Error While Calling getUser Api", error.message);
  }
};

export const editUser = async (data, id) => {
  try {
    return await axios.put(`${URL}/${id}`, data);
  } catch (error) {
    console.log("Error While Calling EditUser api", error.message);
  }
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log("Error While Calling deleteUser api", error.message);
  }
};
