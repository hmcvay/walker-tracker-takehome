import React, { useEffect, useState } from "react";
import './../index.css';


function Contact(){

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [contacts, setIsContacts] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?inc=name,phone,email")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setIsContacts(result);
          console.log(result);
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
      <ul>

        <li>
          {contacts.results[0].name.first} {contacts.results[0].name.last}
        </li>
    
      </ul>
    );
  }
}

export default Contact;