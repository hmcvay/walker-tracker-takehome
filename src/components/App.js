import React from "react";
import ContactList from './ContactList'
import Header from "./Header";

function App() {
  const appStyle = {
    backgroundColor: '#FFFEF2',
    color: "#333333",
  }
  return (
    <React.Fragment>
      <div style={appStyle}>
        <Header />
        <ContactList />
      </div>
    </React.Fragment>
  );
}

export default App;
