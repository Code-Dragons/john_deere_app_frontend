import React from "react";
import TextField from "material-ui/TextField";
import styles from "../../assets/styles";
import { withStyles } from "material-ui";
import { Button } from "material-ui";
import Header from "../../common/header/header.component";

class SignUp extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="sign-in-container">
        <Header />
        <div className="sign-in-modal">
          <div className="input">
            <h2>REGISTER</h2>
            <TextField
              placeholder={"NAME"}
              InputProps={{
                disableUnderline: true,
                classes: {
                  root: classes.userInfoRoot,
                  input: classes.textFieldInput
                }
              }}
            />
            <TextField
              placeholder={"MOBILE"}
              InputProps={{
                disableUnderline: true,
                classes: {
                  root: classes.userInfoRoot,
                  input: classes.textFieldInput
                }
              }}
            />
            <TextField
              placeholder={"ID NUMBER"}
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
            <TextField
              placeholder={"CONFIRM PIN"}
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
              REGISTER
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SignUp);
