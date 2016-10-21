import React from 'react';

import styled from 'styled-components';


const styles = {

  logo: {
    width: 200,
  },

  pageheader: {
    fontSize: "15px",
    fontWeight: "600px",
    padding: "2px 5px",
    border: "1px solid #eae9e9",
    borderRadius: "4",
    backgroundColor: '#f3f2f2',
    color: '#3a3a3a',
  },
};

export default class Pageheader extends Component {
  render () {
    return (
    <div style={styles.logo}>
      <div className="pageheader">Eleuth Travel</div>
    </div>
      );
  };
}