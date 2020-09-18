import React, { Component } from 'react';
import { Menu, Dropdown, Button } from 'antd';


const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
      </Menu.Item>
    </Menu>
  );
class SiderSettings extends Component {
        render() {
    return (


<Dropdown overlay={menu} placement="topLeft">
<Button shape="circle" icon="setting" />  
</Dropdown>
    );
  }
}
 
export default SiderSettings;