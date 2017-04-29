import {
    CONTACTS_HAS_ERRORED,
    CONTACTS_IS_LOADING,
    CONTACTS_FETCH_SUCCESS,
    CONTACTS_REMOVE_SUCCESS
} from './../constants'

export function contactsHasErrored(hasErrored) {
    return {
        type: CONTACTS_HAS_ERRORED,
        hasErrored
    }
}

export function contactsIsLoading(isLoading) {
    return {
        type: CONTACTS_IS_LOADING,
        isLoading
    }
}

export function contactsFetchSuccess(contacts) {
    return {
        type: CONTACTS_FETCH_SUCCESS,
        contacts
    }
}

export function contactsRemoveSuccess(contactsIds) {
    return {
        type: CONTACTS_REMOVE_SUCCESS,
        contactsIds
    };
}

export function contactsRemoving(url, contactsIds) {
    return (dispatch) => {

        dispatch(contactsIsLoading(true));

        fetch(url, {
            method: 'POST',
            // mode: 'cors',
            body: JSON.stringify({contactsIds}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((res) => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }

            return res;
        })

        .then((res) => res.json())
        .then(({contactsIds}) => {
            dispatch(contactsRemoveSuccess(contactsIds));
            dispatch(contactsIsLoading(false));
        })
        .catch(() => dispatch(contactsHasErrored(true)));
    }
}

export function contactsFetching(url) {
    return (dispatch) => {
        dispatch(contactsIsLoading(true));

        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText);
                }

                return res;
            })
            .then(res => res.json())
            .then(({contacts}) => {
                dispatch(contactsFetchSuccess(contacts));
                dispatch(contactsIsLoading(false));

            })
            .catch(() => dispatch(contactsHasErrored(true)));
    }
}