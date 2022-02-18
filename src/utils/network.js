import { HTTP, HTTPS } from '@constants/api';

export const getApiResource = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error('Could not fetch.', response.status);
      return false;
    }
    return await response.json();
  } catch (error) {
    console.error('Could not fetch.', error.message);
    return false;
  }
};

/**
 * Изменяет URL с HTTP на HTTPS
 * @param {String} url - url для изменения
 * @returns {String} - url с HTTPS
 */
export const changeHTTP = (url) => {
  return url ? url.replace(HTTP, HTTPS) : url;
};

export const makeConcurrentRequest = async (url) => {
  const res = await Promise.all(
    url.map(async (res) => {
      return await fetch(res).then((res) => res.json());
    })
  );

  return res;
};
