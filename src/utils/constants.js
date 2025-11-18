export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.REACT_APP_TMDB_KEY,
  },
};
export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "urdu",
    name: "Urdu",
  },
  {
    identifier: "hindi",
    name: "Hindi",
  },
];

// export const OPENAI_KEY = import.meta.env.REACT_APP_OPENAI_KEY;
