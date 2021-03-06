export const getElement = (selector, type = document) => type.querySelector(selector);
export const getAllElement = (selector, type = document) => [...type.querySelectorAll(selector)]
export const log = (...args) => console.debug(...args); //debug

export const toString = (value) => JSON.stringify(value);
export const toObject = (value) => JSON.parse(value);

export const save_to_storage = (key, list) => localStorage.setItem(key, list);
export const get_from_storage = (key) => localStorage.getItem(key);

export const isEmpty = (str) => !str || /^\s*$/.test(str)