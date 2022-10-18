import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authToken from './authToken';
import comment from './comment';
import kebabModal from './kebab.postModal';
import loading from './loading';
import myInfo from './myInfo';
import post from './post';
import searchResult from './searchResult';
import selectedPostData from './selectedPostData';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authToken', 'myInfo'],
};

export const rootReducer = combineReducers({
  kebabModal: kebabModal.reducer,
  authToken: authToken.reducer,
  comment: comment.reducer,
  loading: loading.reducer,
  myInfo: myInfo.reducer,
  post: post.reducer,
  searchResult: searchResult.reducer,
  selectedPostData: selectedPostData.reducer,
});

export default persistReducer(persistConfig, rootReducer);
