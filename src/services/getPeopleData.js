import {
  HTTP,
  HTTPS,
  SWAPI_PEOPLE,
  SWAPI_ROOT,
  URL_IMG_PERSON,
  GUIDE_IMG_EXTENSION,
} from '../constants/api';

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
