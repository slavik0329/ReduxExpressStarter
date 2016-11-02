const initialState = {
  account: null,
  usersList: null,
  dashboard: {
    userCount: null
  }
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

    case "SET_DASHBOARD":
      return {
        ...state,
        dashboard: action.dashboard
      }

  }

  return state;
}