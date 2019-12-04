import { CHANGE_PAGE } from './actions';

const initialState = {
    appState: {}
};

export function changeDisplay(state = initialState, {type, payload}) {
    if (type === CHANGE_PAGE) {
        return {...state, appState: { displayedPage: payload }};        
    }

    return state;
}