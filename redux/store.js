import {createStore, combineReducers, appkyMiddlewar} from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


const reducer = combineReducers(
    {
        todos: todosReducers
    }
)

const middleware = [thunk];


const store = createStore(
    reducer,
    composeWithDevTools(appkyMiddlewar(middleware))

)

export default store;