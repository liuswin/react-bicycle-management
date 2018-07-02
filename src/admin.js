import React from 'react';
import { Row, Col } from 'antd';
import SideNav from './components/SideNav';
import Header from './components/Header';
import Footer from './components/Footer';
import './style/common.less';

export default class Admin extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <Row className="container">
        <Col span="3" className="side-nav">
          <SideNav />
        </Col>
        <Col span="21" className="main">
          <Header>Header</Header>
          <Row className="content">Content</Row>
          <Footer>Footer</Footer>
        </Col>
      </Row>
    );
  }
}
