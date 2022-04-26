import {
  PROFESSIONAL_INFO_FAIL,
  PROFESSIONAL_INFO_REQ,
  PROFESSIONAL_INFO_SUCCESS,
  PROFESSIONAL_LOGIN_FAIL,
  PROFESSIONAL_LOGIN_REQ,
  PROFESSIONAL_LOGIN_SUCCESS,
  PROFESSIONAL_LOGOUT,
  PROFESSIONAL_REGISTER_FAIL,
  PROFESSIONAL_REGISTER_REQ,
  PROFESSIONAL_REGISTER_SUCCESS,
} from '../constants/professionalConstants';

export const professionalLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case PROFESSIONAL_LOGIN_REQ:
      return { loading: true };
    case PROFESSIONAL_LOGIN_SUCCESS:
      return { loading: false, professionalInfo: action.payload };
    case PROFESSIONAL_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case PROFESSIONAL_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const professionalInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case PROFESSIONAL_INFO_REQ:
      return { loading: true };
    case PROFESSIONAL_INFO_SUCCESS:
      return { loading: false, allProfInfo: action.payload };
    case PROFESSIONAL_INFO_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const professionalRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case PROFESSIONAL_REGISTER_REQ:
      return { loading: true };

    case PROFESSIONAL_REGISTER_SUCCESS:
      return { loading: false, professionalInfo: action.payload };

    case PROFESSIONAL_REGISTER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
