import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import custom from '../custom';


export default (history) => combineReducers({
  router: connectRouter(history),
  custom,
});
