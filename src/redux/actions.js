export const CLEAR_REPOSITORIES = 'CLEAR_REPOSITORIES';
export const FETCH_REPOSITORIES = 'FETCH_REPOSITORIES';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_ERROR = 'REQUEST_ERROR';

export const clearRepositories = () => ({type: CLEAR_REPOSITORIES});
export const fetchRepositories = (payload) => ({type: FETCH_REPOSITORIES, payload});
export const requestSuccess = (payload) => ({type: REQUEST_SUCCESS, payload});
export const requestError = (payload) => ({type: REQUEST_ERROR, payload});