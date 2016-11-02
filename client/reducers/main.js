const initialState = {
  account: null,
  usersList: null
};

export default function main(state = initialState, action) {
  switch (action.type) {

    case "SET_ACCOUNT":
      return {
        ...state,
        account: action.account
      };

    case "SET_USERS_LIST":
      return {
        ...state,
        usersList: action.usersList
      }

  }

  return state;
}