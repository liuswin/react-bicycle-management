import React from 'react';
import { Card, Button, notification } from 'antd';
import '../ui.less';

export default class Notifications extends React.Component {
  openNotification = (type, direction) => {
    if (direction) {
      notification.config({
        placement: direction
      });
    }
    notification[type]({
      message: '发工资了',
      description: '就想通知提醒你一下'
    });
  }
  render() {
    return (
      <div>
        <Card title="通知提醒框" className="card-wrap">
          <Button type="primary" onClick={() => this.openNotification('success')}>Success</Button>
          <Button type="primary" onClick={() => this.openNotification('info')}>Info</Button>
          <Button type="primary" onClick={() => this.openNotification('warning')}>Warning</Button>
          <Button type="primary" onClick={() => this.openNotification('error')}>Error</Button>
        </Card>
        <Card title="配置提醒框" className="card-wrap">
          <Button type="primary" onClick={() => this.openNotification('success', 'topLeft')}>topLeft</Button>
          <Button type="primary" onClick={() => this.openNotification('info', 'topRight')}>topRight</Button>
          <Button type="primary" onClick={() => this.openNotification('warning', 'bottomLeft')}>bottomLeft</Button>
          <Button type="primary" onClick={() => this.openNotification('error', 'bottomRight')}>bottomRight</Button>
        </Card>
      </div>
    );
  }
}