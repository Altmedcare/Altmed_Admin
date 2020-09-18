import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale';
import { Button, Card, Icon, Tabs } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import TabIconColor from './TabIconColor';
import styles from './style.less';
import TabIconFeather from './TabIconFeather';
import TabIconFileType from './TabIconFileType';
import TabIconNative from './TabIconNative';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1143459_4dll16fwrmd.js',
});

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}
class IconElement extends PureComponent {
  render() {
    return (

        <Card bordered={false}>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Antd Icon" key="1">
              <TabIconNative></TabIconNative>
            </TabPane>
            <TabPane tab="Feather Icon" key="2">
              <TabIconFeather></TabIconFeather>
            </TabPane>
            <TabPane tab="Color Icon" key="3">
            <TabIconColor></TabIconColor>
            </TabPane>
            <TabPane tab="File Type Icon" key="4">
            <TabIconFileType></TabIconFileType>
            </TabPane>
          </Tabs>
        </Card>
 
    );
  }
}

export default IconElement;
