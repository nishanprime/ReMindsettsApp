import axios from 'axios';
import {
  PROFESSIONAL_INFO_FAIL,
  PROFESSIONAL_INFO_REQ,
  PROFESSIONAL_INFO_SUCCESS,
  PROFESSIONAL_LOGIN_SUCCESS,
  PROFESSIONAL_REGISTER_FAIL,
  PROFESSIONAL_REGISTER_REQ,
} from '../constants/professionalConstants';

export const getProfessionalInfo = () => async (dispatch) => {
  try {
    dispatch({
      type: PROFESSIONAL_INFO_REQ,
    });
    const { data } = await axios.get('/api/professional/getall');
    dispatch({
      type: PROFESSIONAL_INFO_SUCCESS,
      payload: data,
    });
    localStorage.setItem('allProfInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: PROFESSIONAL_INFO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register = (requiredFields) => async (dispatch) => {
  try {
    dispatch({
      type: PROFESSIONAL_REGISTER_REQ,
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/professional/register',
      requiredFields,
      config
    );
    dispatch({
      type: PROFESSIONAL_LOGIN_SUCCESS,
      payload: data,
    });
    dispatch({
      type: PROFESSIONAL_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem('professionalInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: PROFESSIONAL_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
