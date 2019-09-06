import { useReducer, useEffect } from "react";

const initialState = {
  data: [],
  isLoading: true,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
  case "ADD_CHARACTERS":
    return { ...state, isLoading: false, data: payload };
  default:
    return state;
  }
};

export default function useCharacters(settings) {
  const { url, format, resource } = settings;
  const [{ data, isLoading }, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch(`${url}/${resource}?format=${format}`)
      .then((res) => res.json())
      .then((characters) => {
        dispatch({ type: "ADD_CHARACTERS", payload: characters });
      });
  }, []);

  return {
    data,
    isLoading,
  };
}
