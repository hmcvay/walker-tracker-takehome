import React, { useEffect, useState } from "react";


function Contact(){

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [contacts, setIsContacts] = useState([]);
  const [query, setQuery] = useState("");

  const contactContainer = {
    border: 'solid 1px black',
    borderRadius: '12px',
    padding: '2%',
    margin: '2%',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center'
  }

  const pageContainer = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const contactName = {
    fontSize: '20pt',
    fontWeight: 'bold',
    margin: '20px'
  }

  const contactImage = {
    borderRadius: '8px',
    marginBottom: '10px'
  }

  const contactHeader = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }

  const loading = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    fontSize: '50px',
    fontWeight: 'bold'
  }

  const searchContainer = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: '8%'

  }

  const searchBar = {
    height: '30px',
    fontSize: '16px',
    borderRadius: '4px',
    border: 'solid 1px black'
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
    return <div style={loading}>Loading...</div>;
  } else {
    return (
      <React.Fragment>
        <div style={searchContainer}>
          <input placeholder='search' style={searchBar} onChange={event => setQuery(event.target.value)} />
        </div>
        <div style={pageContainer}>
          {
            contacts.filter(contact => {
              if (query === '') {
                return contact;
              } else if (contact.name.first.toLowerCase().includes(query.toLowerCase())){
                return contact;
              }
            }).map((contact, index) => (
              <div key={index} style={contactContainer}>
                <div style={contactHeader}>
                  <div><img style={contactImage} src={contact.picture.medium} /></div>
                  <div style={contactName}>{contact.name.first} {contact.name.last}</div>
                </div>
                  
                <div>{contact.phone}</div>
                <div>{contact.email}</div>
              </div>
            ))
          }
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;