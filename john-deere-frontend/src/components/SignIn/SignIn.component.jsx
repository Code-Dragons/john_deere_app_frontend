import React from "react";
import "./SignIn.css";
import TextField from "material-ui/TextField";
import styles from "../../assets/styles";
import { withStyles } from "material-ui";
import { Button } from "material-ui";
import Header from "../../common/header/header.component";
import axios from "axios";

class SignIn extends React.Component {
  handleSignIn = () => {
    return axios.get("http://127.0.0.1:8000/api/v1/users/").then(response => {
      console.log(response);
    });
  };
  render() {
    const { classes } = this.props;

    return (
      <div className="sign-in-container">
        <Header />
        <div className="sign-in-modal">
          <div className="input">
            <h2>LOGIN</h2>

            <TextField
              placeholder={"MOBILE NUMBER"}
              InputProps={{
                disableUnderline: true,
                classes: {
                  root: classes.userInfoRoot,
                  input: classes.textFieldInput
                }
              }}
            />
            <TextField
              placeholder={"PIN"}
              InputProps={{
                disableUnderline: true,
                classes: {
                  root: classes.userInfoRoot,
                  input: classes.textFieldInput
                }
              }}
            />
            <Button
              variant="raised"
              className={`${classes.button} ${classes.cancelButton}`}
            >
              LOGIN
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SignIn);
