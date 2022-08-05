import React from "react";
import ContactList from './ContactList'
import Header from "./Header";

function App() {
  const appStyle = {
    color: "#333333",
    fontFamily: 'Montserrat, sans-serif'
  }
  return (
    <React.Fragment>
      <div style={appStyle} >
        <Header />
        <ContactList />
      </div>
    </React.Fragment>
  );
}

export default App;
