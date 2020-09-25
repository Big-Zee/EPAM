export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";

export const getUsers = () => {
  console.log("Action: get users");
  return {
    type: GET_USERS
  };
};

export const getUsersSuccess = users => {
  console.log("Action: get users - SUCCESS");
  return {    
    type: GET_USERS_SUCCESS,
    users
  };
};