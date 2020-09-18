import React, { Component } from 'react';
import { List, Card, Avatar, Icon } from 'antd';
import styles from './style.less';
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1143459_fr9yng3c0v6.js',
});
const data = [
  {
    title:'icon-AVI',
  },
  {
    title: 'icon-ZIP',
  },
  {
    title: 'icon-XLS',
  },
  {
    title: 'icon-URL',
  },
  {
    title: 'icon-TXT',
  },
  {
    title: 'icon-TTF',
  },
  {
    title: 'icon-PSD',
  },
  {
    title: 'icon-RAR',
  },
  {
    title: 'icon-PPT',
  },
  {
    title: 'icon-PPT',
  },
  {
    title: 'icon-PNG',
  },
  {
    title: 'icon-PHP',
  },
  {
    title: 'icon-PDF',
  },
  {
    title: 'icon-NEW',
  },
  {
    title: 'icon-MP',
  },
  {
    title: 'icon-MOV',
  },
  {
    title: 'icon-JPEG',
  },
  {
    title: 'icon-GIF',
  },
  {
    title: 'icon-EPS',
  },
  {
    title: 'icon-HTML',
  },
  {
    title: 'icon-CSS',
  },
  {
    title: 'icon-AI',
  },
  {
    title: 'icon-DOC',
  },
  {
    title: 'icon-CDR',
  },
  {
    title: 'icon-AEP',
  },
];

class TabIconFileType extends Component {
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
              <IconFont type={item.title} style={{ fontSize: '45px', textAlign: 'center' }} />
            </Card>
          </List.Item>
        )}
      />
      </span>

    </div>
    );
  }
}
export default TabIconFileType;
