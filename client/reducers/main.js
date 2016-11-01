const initialState = {
  page: null,
  counter: 0
};

export default function main(state = initialState, action) {
  switch (action.type) {

    case "SET_PAGE":
      return {
        ...state,
        page: action.page
      }

    case "SET_COUNTER":
      return {
        ...state,
        counter: action.count
      }

  }

  return state;
}