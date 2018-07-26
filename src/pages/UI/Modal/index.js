import React from 'react';
import { Card, Button, Modal } from 'antd';
import './index.less';

export default class Modals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
    }
  }
  handleOpen = (type) => {
    this.setState({
      [type]: true
    })
  }
  render() {
    return (
      <div>
        <Card title="基础模态框" className="card-wrap">
          <Button type="primary" onClick={() => this.handleOpen('showModal1')}>Open</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal3')}>顶部20px弹框</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
        </Card>
        <Modal title="React" visible={this.state.showModal1} onCancel={() => {
          this.setState({
            showModal1: false
          })
        }}>
          <p>欢迎光临1</p>
        </Modal>
        <Modal title="React" okText="好的" cancelText="算了" visible={this.state.showModal2} onCancel={() => {
          this.setState({
            showModal2: false
          })
        }}>
          <p>欢迎光临2</p>
        </Modal>
        <Modal title="React" visible={this.state.showModal3} onCancel={() => {
          this.setState({
            showModal3: false
          })
        }}>
          <p>欢迎光临3</p>
        </Modal>
        <Modal title="React" visible={this.state.showModal4} onCancel={() => {
          this.setState({
            showModal4: false
          })
        }}>
          <p>欢迎光临4</p>
        </Modal>
      </div>
    );
  }
}
