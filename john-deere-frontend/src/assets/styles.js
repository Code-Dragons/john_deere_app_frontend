export default theme => ({
  button: {
    borderRadius: 5,
    width: `13em`,
    lineHeight: `2.5em`,
    borderColor: "#1228aa",
    borderWidth: 1,
    borderStyle: "solid"
  },
  cancelButton: {
    marginRight: 40,
    background: "linear-gradient(to right, #fdde33, #7bc556)",
    color: "white",
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "#f9f9f9"
    }
  },
  textFieldInput: {
    borderRadius: 4,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",
    "&:focus": {
      borderColor: "black",
      boxShadow: "0"
    }
  },
  userInfoRoot: {
    marginLeft: 20,
    marginBottom: "1rem",
    width: `27em`,
    "label + &": {
      marginTop: theme.spacing.unit * 3
    }
  },
  contactRoot: {
    marginLeft: 20,
    marginBottom: "1rem",
    width: `27em`,
    height: `13rem`,
    "label + &": {
      marginTop: theme.spacing.unit * 3
    }
  }
});
