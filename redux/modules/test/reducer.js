import { INC_VAL } from './action';

const initialState = {
  val: 0
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INC_VAL:
      let newVal =++state.val;
      return {
        ...state,
        val: newVal,
      };
    default:
      return state;
  }
}
