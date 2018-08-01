import React from 'react';
import { Card, Button, Tabs, message, Icon } from 'antd';
import { spawn } from 'child_process';
const TabPane = Tabs.TabPane;

export default class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    this.state = {
      panes: [],
      activeKey: ''
    }
  }
  callback = (key) => {
    message.info(`Hi,您选择了页签${key}`)
  }
  onChange = (activeKey) => {
    this.setState({
      activeKey
    })
  }
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }

  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: activeKey, content: 'Content of new Tab', key: activeKey });
    this.setState({ panes, activeKey });
  }
  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }
  componentDidMount() {
    const panes = [
      {
        title: 'Tab 1',
        content: 'tab 1',
        key: '1'
      },
      {
        title: 'Tab 2',
        content: 'tab 2',
        key: '2'
      },
      {
        title: 'Tab 3',
        content: 'tab 3',
        key: '3'
      }
    ]
    this.setState({
      activeKey: panes[0].key,
      panes
    })
  }
  render() {
    return (
      <div>
        <Card title="Tab页签" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={this.callback} >
            <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="Tab 2" key="2" disabled>Content of Tab Pane 2</TabPane>
            <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
        </Card>
        <Card title="Tab图标页签" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={this.callback} >
            <TabPane tab={<span><Icon type="plus"></Icon>Tab 1</span>} key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab={<span><Icon type="edit"></Icon>Tab 2</span>} key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab={<span><Icon type="delete"></Icon>Tab 3</span>} key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
        </Card>
        <Card title="Tab动态控制" className="card-wrap">
          <Tabs defaultActiveKey="1" type="editable-card" activeKey={this.state.activeKey} onChange={this.onChange} onEdit={this.onEdit} >
            {
              this.state.panes.map((pane) => {
                return <TabPane tab={pane.title} key={pane.key} ></TabPane>
              })
            }
          </Tabs>
        </Card>
      </div>
    )
  }
}