export const LOGO_URL =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const API_Options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const Background_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/US-en-20250519-TRIFECTA-perspective_63def194-12b8-4f06-8be7-454980a90dd1_small.jpg";

export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "hindi",
    name: "Hindi",
  },
  {
    identifier: "kannada",
    name: "Kannada",
  },
  {
    identifier: "tamil",
    name: "Tamil",
  },
  {
    identifier: "telugu",
    name: "Telugu",
  },
  {
    identifier: "chinese",
    name: "Chinese",
  },
  {
    identifier: "spanish",
    name: "Spanish",
  },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
