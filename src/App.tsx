import * as React from 'react'
import {GoogleOAuthProvider, GoogleLogin} from "@react-oauth/google";
import axios from "axios";
import {Simulate} from "react-dom/test-utils";

function handleSuccess(response: any) {
  const token = response.credential;

  axios.post('auth/google', {
    token: token
  }).then((response) => {
    console.log(response)
  }).catch((error) => {
    console.log(error)
  })
}


function App() {
  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

  return (
    <>
      <h1>TicketPE</h1>
      <GoogleOAuthProvider clientId={googleClientId}>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => {
            console.log('Login Failed');
          }}
          useOneTap
        />
      </GoogleOAuthProvider>
    </>
  )
}

export default App
