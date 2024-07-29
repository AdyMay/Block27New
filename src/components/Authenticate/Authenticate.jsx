import React from 'react';
import React, { useState } from "react";

function Authenticate({ token }) {
    const [successMessage, setSuccesMessage] = useState(null);
    const [error, setError] = useState(null);
    const handleClick = async () => {
        try {
            console.log("clicked");
            const res = await fetch ("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method: "GET",
                header: {
                    "Content-type" : "applications/json",
                    Authorization: `Bearer ${ token }`,
                    },
                }
            );
        const json = await res.json();
            console.log(json);
        if (json.success) {
            setSuccesMessage(json.message);
        }
        } catch (err) {
            console.log(err);
        }
    };

  return (
    <>
        {error & <p>Coule not Authenticate</p>}
        {successMessage && <p>{}successMessage</p>}
        <h2>Authenticate</h2>;
        <button onClick={handleClick}>Autenticate</button>
    </>
  );
}

export default Authenticate;

//...