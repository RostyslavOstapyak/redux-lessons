import { getCitiesData } from './weather.gateway.js';

export const CITIES_DATA_RECEIVED = 'CITIES_DATA_RECEIVED';

export const citiesDataReceived = citiesData => ({
  type: CITIES_DATA_RECEIVED,
  payload: { citiesData },
});

export const fetchCitiesData = () =>
  // eslint-disable-next-line func-names
  function (dispatch) {
    getCitiesData().then(citiesData => {
      dispatch(citiesDataReceived(citiesData));
    });
  };
