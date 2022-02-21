import {
  ADD_PERSON_TO_FAVORITE,
  DELETE_PERSON_TO_FAVORITE,
} from '@store/constants/actionTypes';

export const addPersonToFavorite = person => ({
  type: ADD_PERSON_TO_FAVORITE,
  payload: person,
});

export const deletePersonToFavorite = () => ({
  type: DELETE_PERSON_TO_FAVORITE,
  payload: '',
});
