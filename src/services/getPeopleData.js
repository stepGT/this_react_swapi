import {
  HTTP,
  HTTPS,
  SWAPI_PEOPLE,
  SWAPI_ROOT,
  URL_IMG_PERSON,
  GUIDE_IMG_EXTENSION,
  SWAPI_PARAM_PAGE,
} from '@constants/api';

/**
 * Check protocol: HTTP || HTTPS
 * @param {*} url
 * @returns
 */
const checkProtocol = (url) => (url.indexOf(HTTPS) !== -1 ? HTTPS : HTTP);

export const getID = (url, category) => {
  return url
    .replace(checkProtocol(url) + SWAPI_ROOT + category, '')
    .replace(/\//g, '');
};

export const getPeopleId = (url) => getID(url, SWAPI_PEOPLE);

export const getPeopleImage = (id) => `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`;

/**
 * 
 * @param {*} url 
 * @returns id
 */
export const getPeoplePageID = (url) => {
  const position = url.lastIndexOf(SWAPI_PARAM_PAGE);
  return Number(url.slice(position + SWAPI_PARAM_PAGE.length, url.length));
};
