import {
    CONTACTS_IS_LOADING,
    CONTACTS_HAS_ERRORED,
    CONTACTS_FETCH_SUCCESS,
    CONTACTS_REMOVE_SUCCESS,
} from './../constants'

export function contactsHasErrored(state = false, action) {
    switch (action.type) {
        case CONTACTS_HAS_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
}

export function contactsIsLoading(state = false, action) {
    switch (action.type) {
        case CONTACTS_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function removedContactsIds(state = [], action) {
    switch (action.type) {
        case CONTACTS_REMOVE_SUCCESS:
            return [...state, ...action.contactsIds];
        default:
            return state;
    }
}

export function contacts(state = [], action) {
    switch (action.type) {
        case CONTACTS_FETCH_SUCCESS:
            return action.contacts;
        default:
            return state;
    }
}