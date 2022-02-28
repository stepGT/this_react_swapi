/**
 *
 * @param {*} key
 * @returns
 */
export const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data !== null ? JSON.parse(data) : {};
};

/**
 *
 * @param {*} key
 * @returns
 */
export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
