const initialState = {
  account: null
};

export default function main(state = initialState, action) {
  switch (action.type) {

    case "SET_ACCOUNT":
      return {
        ...state,
        account: action.account
      }


  }

  return state;
}