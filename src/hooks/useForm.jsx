import { useReducer } from "react";

const ACTIONS = {
  UPDATE_KEYWORD: "update_keyword",
  UPDATE_RATING: "update_rating",
};

const ACTIONS_REDUCERS = {
  [ACTIONS.UPDATE_KEYWORD]: (state, action) => ({
    ...state,
    keyword: action.payload,
  }),
  [ACTIONS.UPDATE_RATING]: (state, action) => ({
    ...state,
    rating: action.payload,
  }),
};

const reducer = (state, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type];
  return actionReducer ? actionReducer(state, action) : state;
};

export default function useForm({
  initialKeyword = "",
  initialRating = "g",
} = {}) {

  const [{ keyword, rating }, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
  });

  return {
    changeKeyword: ({ keyword }) =>
      dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword }),
    changeRating: ({ rating }) =>
      dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating }),
    keyword,
    rating,
  };
}
