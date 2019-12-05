import { 
    FETCH_REPOSITORIES, REQUEST_SUCCESS, REQUEST_ERROR
} from './actions';

const initialState = {
    loading: false,
    repositories: []
};

export function getRepositories(state = initialState, {type, payload}) {
    switch (type) {
        case FETCH_REPOSITORIES:
            return {...state, loading: true};
        case REQUEST_SUCCESS:
        case REQUEST_ERROR:
            return {...state, loading: false, repositories: payload};
        default:
            return state;
    }
}