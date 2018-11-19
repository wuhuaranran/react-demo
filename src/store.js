import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import routeTestReducer from 'pages/routeTest/indexRedux';

const storeTree = combineReducers({
    routeTestReducer
});
const store = createStore(storeTree, applyMiddleware(thunk));
export default store;
