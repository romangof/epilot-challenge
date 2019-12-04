export const CHANGE_PAGE = 'CHANGE_PAGE';
export const FETCH_REPOSITORIES = 'FETCH_REPOSITORIES';

export function fetchRepositories(name, value) {
    console.log('aaaaaaaaaaaaa');
    
    return {type: FETCH_REPOSITORIES, payload: {value, name}};
}