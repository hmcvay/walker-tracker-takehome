import React, { useEffect, useState } from "react";


function Contact(){

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [contacts, setIsContacts] = useState([]);

  const contactContainer = {
    border: 'solid 1px black',
    padding: '2%',
    margin: '2%',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const contactName = {
    fontSize: '20pt',
    fontWeight: 'bold'
  }


  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then(response => response.json())
      .then(
        (response) => {
          setIsLoaded(true);
          setIsContacts(response.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {contacts.map(contact => (
          <React.Fragment>
            <div style={contactContainer}>
              <img src={contact.picture.large} />
              <div style={contactName}>{contact.name.first} {contact.name.last}</div>
              <div>{contact.phone}</div>
              <div>{contact.email}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default Contact;