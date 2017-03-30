import { INC_VAL } from './action';

const initialState = {
  val: 0
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'FETCH_LOC_SUCCESS':
      return {
        ...state,
        data: action.result.data,
      };
    default:
      return state;
  }
}
