import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLogInReducer, userRegisterReducer } from './reducers/userReducer';
import {
  professionalInfoReducer,
  professionalLoginReducer,
  professionalRegisterReducer,
} from './reducers/professionalReducer';

const reducer = combineReducers({
  userLogin: userLogInReducer,
  userRegister: userRegisterReducer,
  professionalLogin: professionalLoginReducer,
  professionalRegister: professionalRegisterReducer,
  allProfessionalInfo: professionalInfoReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const professionalInfoFromStorage = localStorage.getItem('professionalInfo')
  ? JSON.parse(localStorage.getItem('professionalInfo'))
  : null;

const allProfInfoFromStorage = localStorage.getItem('allProfInfo')
  ? JSON.parse(localStorage.getItem('allProfInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  professionalLogin: { professionalInfo: professionalInfoFromStorage },
  allProfessionalInfo: { allProfInfo: allProfInfoFromStorage },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
