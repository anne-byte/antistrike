import React, { Component } from 'react'

const styles = {
  marketingContainer: {
    textAlign: 'left',
    paddingLeft: '80px'
  },
  marketingHeader: {
    fontWeight: '400'
  },
  marketingSectionBody: {
    font: '16px sans-serif'
  }
};

export default class Marketing extends Component {
  render() {
    return (
      <section style={styles.marketingContainer}>
        <h2 style={styles.marketingHeader}>Hello, {this.props.name}</h2>
        <p style={styles.marketingSectionBody}>Send money to friends and family today.</p>
      </section>
    )
  }
}
