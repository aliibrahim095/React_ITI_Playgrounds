import React, { Component } from "react";
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Content from './Content.jsx';

class Timer extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default Timer;
