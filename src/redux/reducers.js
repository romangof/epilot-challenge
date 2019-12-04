import { CHANGE_PAGE, FETCH_REPOSITORIES } from './actions';

const initialState = {
    appState: {},
    repositories: []
};

export function changeDisplay(state = initialState.appState, {type, payload}) {
    if (type === CHANGE_PAGE) {
        return {...state, appState: { displayedPage: payload }};        
    }

    return state;
}

export function getRepositories(state = initialState.repositories, {type, payload}) {
    if (type === FETCH_REPOSITORIES) {
        return [...state, payload];
    }

    return state;
}