import { createStore } from 'redux'
import toggleReducer, { DEFAULT_STATE } from './reducer/reducer'





function configureStore() {
    return createStore(toggleReducer, DEFAULT_STATE);
}

export default configureStore;