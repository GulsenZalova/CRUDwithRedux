import { combineReducers } from "redux";
import crudReducer from "./crudreducer";
import { applyMiddleware,createStore } from 'redux';
import thunk from 'redux-thunk';
import favoritesReducer from "./favoritesreducers";

const allReducers = combineReducers({
    crudReducer,
    // favoritesReducer
})

const crudStore = createStore(allReducers, applyMiddleware(thunk));

export default crudStore