import {combineReducers} from 'redux';
import {booksFeatureKey, Reducer} from './bookstore/Reducer';


let rootReducer=combineReducers({
  [booksFeatureKey]:Reducer
})

export {rootReducer};