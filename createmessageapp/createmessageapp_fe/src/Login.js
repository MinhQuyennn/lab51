import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebaserc";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

const Login = () => {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_container">
        <img src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/405308691_3492221227775223_5410689100886905515_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHtScb6Spi-zxkVH9xrWvAZEgUcK_Ahg3kSBRwr8CGDeeD-yqvuErgSlw2mC3vWfOa1hxWwn7fXQ3c_siRPR8PH&_nc_ohc=pQJivxO-sbsAX9KR7gX&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfBiaQ0nFWbKL-AVURrGXWDQlTgLsOGvExUUUjnYtgj8ow&oe=659186CC" />
        <div className="login_text">
          <h1>Sign In to Messaging App</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign In with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
