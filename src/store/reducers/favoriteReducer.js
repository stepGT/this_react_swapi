import {
  ADD_PERSON_TO_FAVORITE,
  DELETE_PERSON_TO_FAVORITE,
} from '@store/constants/actionTypes';

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case ADD_PERSON_TO_FAVORITE:
      return {
        ...state,
        ...action.payload,
      };
    case DELETE_PERSON_TO_FAVORITE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default favoriteReducer;
