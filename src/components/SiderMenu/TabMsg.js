import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import styles from './index.less';

const data = [
  {
    title: 'Tony Stark',
    avatar:'https://randomuser.me/api/portraits/men/81.jpg',
  },
  {
    title: 'Bruce Wayne',
    avatar:'https://randomuser.me/api/portraits/men/82.jpg',
  },
  {
    title: 'Tom Banner',
    avatar:'https://randomuser.me/api/portraits/men/83.jpg',
  },
  {
    title: 'Christ Evan',
    avatar:'https://randomuser.me/api/portraits/men/84.jpg',
  },
  
];

  
class TabMsg extends Component {
    render() {
      return (
        <List className="list-notif-avant"
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              style={{ padding: '0 16px' }}
              avatar={<Avatar src={item.avatar} style={{borderRadius: "50%"}}/>}
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
      );
    }
  }
  
  export default TabMsg;