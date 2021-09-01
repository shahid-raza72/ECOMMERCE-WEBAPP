import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composoeWithDevTools} from 'redux-devtools-extension'

const reducer =combineReducers({})

const initialState ={}

const middleware =[thunk]

const store =createStore(
    reducer,initialState,composoeWithDevTools(applyMiddleware(...middleware))
)
export default store