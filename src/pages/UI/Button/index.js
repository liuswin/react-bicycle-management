import React from 'react';
import { Card, Button } from 'antd';
import './index.less';

export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  handleCloseLoading = () => {
    this.setState({
      loading: false
    })
  }
  render() {
    return (
      <div>
        <Card title="基础按钮">
          <Button type="primary">Login</Button>
          <Button>终止</Button>
          <Button type="dashed">重启</Button>
          <Button type="danger">删除</Button>
          <Button disabled>删除</Button>
        </Card>
        <Card title="图形按钮">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button icon="search" shape="circle"></Button>
          <Button icon="search" type="primary">搜索</Button>
          <Button icon="download" type="primary">下载</Button>
        </Card>
        <Card title="loading按钮">
          <Button type="primary" loading={this.state.loading}>确定</Button>
          <Button type="primary" shape="circle" loading={this.state.loading}></Button>
          <Button loading={this.state.loading}>点击加载</Button>
          <Button shape="circle" loading={this.state.loading}></Button>
          <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
        </Card>
      </div>
    );
  }
}
