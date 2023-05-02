import React from 'react'
import ContactHome from '../components/ContactHome'
import ContactDetails from '../components/ContactDetails'
import { useLocation } from 'react-router-dom'

const Contact = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname.includes("/contact") ?  <div style={{ paddingTop: "100px" }}>
        <ContactHome />
        <ContactDetails />
      </div> : 
      
       <div>
        <ContactHome />
        <ContactDetails />
      </div>}
     
    </>
  );
}

export default Contact