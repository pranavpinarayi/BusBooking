export const FETCH_LOC = 'FETCH_LOC';
export function loadLocation() {
  return (dispatch, getState) => {
    return dispatch({
      type: 'FETCH_LOC_SUCCESS',
      types: [FETCH_LOC, 'FETCH_LOC_SUCCESS', 'FETCH_LOC_FAIL'],
      payload: axios => axios.get('https://www.whizapi.com/api/v2/util/ui/in/indian-city-by-state?stateid=8&project-app-key=6ofh1u1zjyvpcwsrwcg1g1ay'),
    });
  }
}
