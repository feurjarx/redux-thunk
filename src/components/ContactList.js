import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    contactsFetching,
    contactsRemoving
} from '../actions/contacts'

class ContactList extends Component {

    componentDidMount() {
        this.props.fetchContacts('http://127.0.0.1:3001/contacts');
    }

    onRemoveBtnClick = (id) => {
        this.props.removeContacts('http://127.0.0.1:3001/contacts/remove', [id]);
    };

    render() {

        const {isLoading, hasErrored, contacts, removedContactsIds} = this.props;

        if (isLoading) {
            return (
                <p>Loading...</p>
            );
        }

        if (hasErrored) {
            return (
                <p>Error</p>
            );
        }

        if (!contacts.length) {
            return (
                <p>Empty</p>
            );
        }

        return (
            <ul>
                {
                    contacts
                        .filter(it => removedContactsIds.indexOf(it.id) < 0)
                        .map(it => (
                            <li key={it.id}>
                                <span>Contact {it.name} </span>
                                <input type="button" defaultValue="x" onClick={() => this.onRemoveBtnClick(it.id)} />
                            </li>
                        ))
                }
            </ul>
        );
     }
}

function mapStateToProps(state) {
    return {
        contacts: state.contacts,
        hasErrord: state.contactsHasErrored,
        isLoading: state.contactsIsLoading,
        removedContactsIds: state.removedContactsIds
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchContacts: (url) => dispatch(contactsFetching(url)),
        removeContacts: (...args) => dispatch(contactsRemoving(...args))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);