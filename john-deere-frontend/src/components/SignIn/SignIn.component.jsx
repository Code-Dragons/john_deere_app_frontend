import React from "react";
import "./SignIn.css";
import TextField from "material-ui/TextField";
class SignIn extends React.Component {
  render() {
    return (
      <div className="sign-in-container">
        <div className="sign-in-modal">
          <TextField id="name" value="MOBILE NUMBER" />
        </div>
      </div>
    );
  }
}

export default SignIn;
