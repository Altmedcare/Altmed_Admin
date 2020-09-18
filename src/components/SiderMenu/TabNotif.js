import React, { Component } from 'react';
import { List, Avatar, Tag, Icon } from 'antd';
import styles from './index.less';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1143459_4dll16fwrmd.js',
});

const data = [
  {
    title: 'Splash Screen',
    avatar: 'https://image.flaticon.com/icons/svg/732/732245.svg',
    description: '1 minute ago',
    color: '#472a49',
    tagContent:'New Message',
    icon: 'user',
  },
  {
    title: 'Bug Found',
    avatar: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg',
    description: '2 hour ago',
    color: '#2e80f7',
    tagContent:'In progress',
    icon: 'icon-placeholder',
  },
  {
    title: 'Color Change',
    avatar: 'https://cdn.worldvectorlogo.com/logos/zeplin.svg',
    description: '3 day ago',
    color: '#5da8dc',
    tagContent:'Task Done',
    icon:'icon-RAR',
  },
  {
    title: 'Change Color',
    avatar: 'https://cdn.worldvectorlogo.com/logos/invision.svg',
    description: '3 day , 1 hour ago',
    color: '#dd485f',
    tagContent:'Dev Done',
  },
  {
    title: 'New Mention',
    avatar: 'https://cdn.worldvectorlogo.com/logos/twitter.svg',
    description: '4 day , 25 minute ago',
    color: '#5da8dc',
    tagContent:'Reply',
  },
  {
    title: 'Shroud',
    avatar: 'https://cdn.worldvectorlogo.com/logos/twitch-purple.svg',
    description: '4 day , 25 minute ago',
    color: '#674e9b',
    tagContent:'Live Now',
  },
];

class TabNotif extends Component {
  render() {
    return (
      <List
        className="list-notif-avant"
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              style={{ padding: '0 24px' }}
              avatar={<Avatar src={item.avatar} style={{borderRadius: "0"}}/>}
              title={<a style={{fontWeight:"400"}} href="#"><Tag color={item.color}>{item.title}</Tag><div style={{ padding: '6px 0' }}>{item.tagContent}</div>  </a>}
              description={item.description}
            />
          
          </List.Item>
        )}
      />
    );
  }
}

export default TabNotif;
