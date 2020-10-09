export const GET_MOVIES_BY_TITLE = "GET_MOVIES_BY_TITLE";
export const GET_MOVIES_BY_TITLE_SUCCESS = "GET_MOVIES_BY_TITLE_SUCCESS";

export const getMoviesByTitle = () => {
  console.log("Action: get users");
  return {
    type: GET_MOVIES_BY_TITLE
  };
};

export const getMoviesByTitleSuccess = users => {
  console.log("Action: get users - SUCCESS");
  return {    
    type: GET_MOVIES_BY_TITLE_SUCCESS,
    users
  };
};