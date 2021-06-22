import {createStore,  combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { calendarReducer } from './calendar/calendarReducer';
import { layoutReducer } from './layout/layoutReducer';


//combine all reducer de redux
const rootReducer = combineReducers({
    layout: layoutReducer,
    calendar: calendarReducer
}) 



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//store
export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware( thunk )
    )
)