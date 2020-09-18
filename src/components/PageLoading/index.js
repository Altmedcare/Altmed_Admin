import React from 'react';
import { Spin, Icon } from 'antd';

// loading components from code split
// https://umijs.org/plugin/umi-plugin-react.html#dynamicimport
export default () => (
  <div style={{ paddingTop: 200, textAlign: 'center' }}>
    {/* <Spin size="large" /> */}
    <Icon type="loading" style={{ fontSize: 24 }} spin />
  </div>


);



