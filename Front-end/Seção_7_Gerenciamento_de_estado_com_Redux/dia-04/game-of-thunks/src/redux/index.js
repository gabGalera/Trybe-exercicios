import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import infoReducer from './reducers/reducers';
import { composeWithDevTools } from '@redux-devtools/extension/lib/types/logOnly';

const store = createStore(infoReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store
