import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Hojn',
        email: 'jd@gmail.com',
        phone: '8383-3393-333',
      },
      {
        id: 2,
        name: 'dsdsd',
        email: 'sdsdsd@gmail.com',
        phone: '9164-3393-333',
      },
      {
        id: 3,
        name: 'cvcvcv',
        email: 'cvvc@gmail.com',
        phone: '9762-3393-333',
      },
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
