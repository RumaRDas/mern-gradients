import {
  GET_GRADIENTS,
  CREATE_GRADIENT,
  UPDATE_GRADIENT,
  DELETE_GRADIENT,
  SET_GRADIENT,
  REMOVE_GRADIENT,
  DOWNLOAD_GRADIENT,
} from "../constants/types";
import axios from "axios";

const url = "http://localhost:5000/gradients";

// get all gradients
export const getGradients = () => async (dispatch) => {
  const result = await axios.get(url);

  dispatch({
    type: GET_GRADIENTS,
    payload: result.data,
  });
};

// create a gradient
export const createGradient = (gradient) => async (dispatch) => {
  const result = await axios.post(url, gradient);

  dispatch({
    type: CREATE_GRADIENT,
    payload: result.data,
  });
};

// update a gradient
export const updateGradient = (gradient) => async (dispatch) => {
  const result = await axios.put(
    `http://localhost:5000/gradients/${gradient._id}`,
    gradient
  );

  dispatch({
    type: UPDATE_GRADIENT,
    payload: result.data,
  });
};

// delete a gardient
export const deleteGradient = (id) => async (dispatch) => {
  console.log(id);
  await axios.delete(`http://localhost:5000/gradients/${id}`);
  dispatch({
    type: DELETE_GRADIENT,
    payload: id,
  });
};

// download a gardient
export const downloadGradient = (gradientName) => async (dispatch) => {
  window.open(`/download/${gradientName}`);
  dispatch({
    type: DOWNLOAD_GRADIENT,
    payload: gradientName,
  });
};

// set gradient
export const setGradient = (gradient) => ({
  type: SET_GRADIENT,
  payload: gradient,
});

// remove gardient
export const removeGradient = () => ({
  type: REMOVE_GRADIENT,
});
