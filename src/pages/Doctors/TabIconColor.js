import React, { Component } from 'react';
import { List, Card, Avatar, Icon } from 'antd';
import styles from './style.less';
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1143459_fr9yng3c0v6.js',
});
const data = [
  {
    title: 'icon-wifi',
    titleSecond:'icon-AVI',
  },
  {
    title: 'icon-watch',
  },
  {
    title: 'icon-visualization',
  },
  {
    title: 'icon-video-camera',
  },
  {
    title: 'icon-video-player',
  },
  {
    title: 'icon-user',
  },
  {
    title: 'icon-time',
  },
  {
    title: 'icon-usb',
  },
  {
    title: 'icon-test',
  },
  {
    title: 'icon-unlock',
  },
  {
    title: 'icon-telephone',
  },
  {
    title: 'icon-target',
  },
  {
    title: 'icon-tag',
  },
  {
    title: 'icon-target',
  },
  {
    title: 'icon-search',
  },
  {
    title: 'icon-sound',
  },
  {
    title: 'icon-switch',
  },
  {
    title: 'icon-server',
  },
  {
    title: 'icon-shuffle',
  },
  {
    title: 'icon-shield',
  },
  {
    title: 'icon-settings',
  },
  {
    title: 'icon-rain',
  },
  {
    title: 'icon-scroll',
  },
  {
    title: 'icon-right-alignment',
  },
  {
    title: 'icon-picture',
  },
  {
    title: 'icon-repeat',
  },
  {
    title: 'icon-print',
  },
  {
    title: 'icon-power-button',
  },
  {
    title: 'icon-picture',
  },
  {
    title: 'icon-placeholder',
  },
  {
    title: 'icon-password',
  },
  {
    title: 'icon-piano',
  },
  {
    title: 'icon-photo-camera',
  },
  {
    title: 'icon-paper-plane',
  },
  {
    title: 'icon-open-book',
  },
  {
    title: 'icon-padlock',
  },
  {
    title: 'icon-notepad',
  },
  {
    title: 'icon-notification',
  },
  {
    title: 'icon-open-book',
  },
  {
    title: 'icon-music',
  },
  {
    title: 'icon-message',
  },
  {
    title: 'icon-megaphone',
  },
  {
    title: 'icon-loading',
  },
  {
    title: 'icon-map',
  },
  {
    title: 'icon-maximize',
  },
  {
    title: 'icon-mail',
  },
  {
    title: 'icon-list',
  },

];

class TabIconColor extends Component {
  render() {
    return (
      <div>
        <span>
      <List
        className="icon-color-antd"
        grid={{
          gutter: 16,
          xs: 2,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 8
        }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Card title={item.title}>
              <IconFont type={item.title} style={{ fontSize: '36px', textAlign: 'center' }} />
            </Card>
          </List.Item>
        )}
      />
      </span>
    </div>
    );
  }
}
export default TabIconColor;
