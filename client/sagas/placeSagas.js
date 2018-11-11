import { call, takeEvery, put, all } from 'redux-saga/effects';
import { getPlaceIds, getPlaceDetails } from 'services/placeApi';
import { getRandom, formatPrice } from 'lib/utils';
import placeActions from 'actions/placeActions';
import {
  FETCH_PLACES,
  FETCH_PLACE_DETAILS,
} from 'actions/placeActionTypes';

function* fetchPlace(action) {
  try {
    const params = {
      ...action.payload,
      price: formatPrice(action.payload.price),
    };
    const places = yield call(getPlaceIds, params);
    if (places.length > 0) {
      const randomPlace = getRandom(places);
      yield put(placeActions.setDetails(randomPlace));
    } else {
      yield put(placeActions.removeDetails());
    }
  } catch (e) {
    console.log('error! ', e);
  }
}

function* fetchPlaceDetails(action) {
  try {
    const placeDetails = yield call(getPlaceDetails, action.payload);
    yield put(placeActions.fetchPlaceDetailsSuccess(placeDetails));
  } catch (e) {
    yield put(placeActions.fetchPlaceDetailError(e));
  }
}

function* fetchPlaceListener() {
  yield takeEvery(FETCH_PLACES, fetchPlace);
}

function* fetchPlaceDetailsListener() {
  yield takeEvery(FETCH_PLACE_DETAILS, fetchPlaceDetails);
}

function* placeSagas() {
  yield all([
    call(fetchPlaceListener),
    call(fetchPlaceDetailsListener),
  ]);
}

export default placeSagas;
