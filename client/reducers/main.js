const initialState = {
  page: null
};

export default function main(state = initialState, action) {
  switch (action.type) {

    case "SET_PAGE":
      return {
        ...state,
        page: action.page
      }

  }

  return state;
}