import React, { Component } from 'react'

const styles = {
  loginContainer: {
    minHeight: "200px",
    backgroundColor: '#005ea6',
    textAlign: 'left',
    color: 'white'
  },
  loginform: {
    padding: '50px 50px 0px 50px'
  },
  para: {
    margin: '0px'
  },
  submitButton: {
    margin: '5px 0px 0px 124px'
  }
};

export default class Login extends Component {
  render() {
    return (
      <section style={styles.loginContainer}>
        <form style={styles.loginform}>
          <p style={styles.para}>
          <label for="userame" aria-label="User Name">Enter user name</label> <br />
          <input type="text" id="userame" /> <br />
          <button type="submit" style={styles.submitButton}>&rarr;</button>
          </p>
        </form>
      </section>
    )
  }
}
