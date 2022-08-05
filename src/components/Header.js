import React from "react";
import './../index.css';

function Header(){

  const headerContainer = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: '15%',
    fontSize: '40px',

  }

  return(
    <div style={headerContainer}>
      <p>Your Contacts</p>
    </div>
  )
}

export default Header;