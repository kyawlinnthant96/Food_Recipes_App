import {ADD_BOOKMARK, REMOVE_BOOKMARK} from '../type';

export const addToBookmark = data => {
  return {
    type: ADD_BOOKMARK,
    payload: data,
  };
};
export const removeBookmark = data => {
  return {
    type: REMOVE_BOOKMARK,
    payload: data,
  };
};
