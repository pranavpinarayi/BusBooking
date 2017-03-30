function apiMiddlewareCreator(axios) {
  return ({ dispatch, getState }) => next => action => {
    console.log('==============pranav===========');
    if (typeof action === 'function') {
      return action(dispatch, getState, axios);
    }
    const { payload, types, ...rest } = action;

    if (!payload) {
      return next(action);
    }
    const [REQUEST, SUCCESS, FAILURE] = types;

    next({ ...rest, type: REQUEST});
    const actionPromise = payload(axios);
    actionPromise
      .then(result => next({ ...rest, result, type: SUCCESS, isXHr: false }))
      .catch(error => next({ ...rest, error, type: FAILURE, isXHr: false }));
    return actionPromise;
  };
}

const apiMiddleware = apiMiddlewareCreator();
apiMiddleware.withExtraArgument = apiMiddlewareCreator

export default apiMiddleware;
