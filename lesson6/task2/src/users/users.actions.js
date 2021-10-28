export const SHOW_SPINNER = 'SHOW_SPINNER';
export const USER_DATA_RECEIVED = 'USER_DATA_RECEIVED';

export const showSpinner = () => ({ type: SHOW_SPINNER });

export const userDataReceived = userData => ({ type: USER_DATA_RECEIVED, payload: { userData } });
