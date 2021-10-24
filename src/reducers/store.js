import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import cartReducer from './cartReducer';


const rootReducer = combineReducers({
    cart: cartReducer,
});

const persistConfig = {
    key: 'root',
    storage,
}



//const persistedReducer = persistReducer(persistConfig, rootReducer);


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))
//export const persistor =  persistStore(store) 


