import React, { Component } from "react";

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        // filter out Id
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
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
        name: "Jake Nme",
        email: "nzidoe54@gmail.com",
        phone: "452.265.5164"
      },
      {
        id: 2,
        name: "Sake mee",
        email: "asedwewf4@gmail.com",
        phone: "452.665.5147"
      },
      {
        id: 3,
        name: "Nake nap",
        email: "nzidwe5a4@gmail.com",
        phone: "520.265.7413"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };
  render() {
    return (
      // This is grabs from the state above
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
