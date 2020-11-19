import { UPDATE_CREDS } from '../../constants/action-types';
// import loguserError from './loguser-error';
// import loguserRequest from './loguser-request';
// import loguserSuccess from './loguser-success';

const updateCred = credential => (
  dispatch: Dispatch<IGetAllAssets | ISetAllAssets>,
): Record<string, unknown> => {
  // dispatch(loguserRequest());
  // return loginRequest()
  //   .then(token => dispatch(loguserSuccess(token)))
  //   .catch(() => dispatch(loguserError()));
  switch (credential.type) {
    case 'email': {
      dispatch({
        type: UPDATE_CREDS,
        payload: { credential },
      });
      return;
    }
    case 'pass': {
      dispatch({
        type: UPDATE_CREDS,
        payload: { credential },
      });
      return;
    }
    default: {
      dispatch({
        type: UPDATE_CREDS,
        payload: { type: 'email', str: '' },
      });
    }
  }
};

export default updateCred;
