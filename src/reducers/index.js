import {combineReducers} from 'redux';
import {
    contacts,
    contactsIsLoading,
    contactsHasErrored,
    removedContactsIds
} from './contacts'

export default combineReducers({
    removedContactsIds,
    contactsHasErrored,
    contactsIsLoading,
    contacts
});