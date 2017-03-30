export const FETCH_LOC = 'FETCH_LOC';
export function loadLocation() {
  return (dispatch, getState) => {
    return dispatch({
      type: 'FETCH_LOC_SUCCESS',
      types: [FETCH_LOC, 'FETCH_LOC_SUCCESS', 'FETCH_LOC_FAIL'],
      payload: axios => axios.get('/locations'),
    });
  }
}
