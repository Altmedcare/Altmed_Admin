import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: '12px 24px' }}>
    <GlobalFooter
      links={[
        {
          key: 'Sanbox',
          title: <Icon type="code-sandbox" />,
          href: 'https://www.sandbox.com/',
          blankTarget: true,
        },
        {
          key: 'Gitlab',
          title: <Icon type="gitlab" />,
          href: 'https://gitlab.com/',
          blankTarget: true,
        },
        {
          key: 'Github',
          title: <Icon type="github" />,
          href: 'https://github.com/',
          blankTarget: true,
        },
      ]}
      version={
        <Fragment>
        <strong>Version</strong> 1.0
      </Fragment>
      }
      copyright={
        <Fragment>
        Made it with  <Icon type="heart" theme="filled" color="#eb2f96"/> by <a href="https://themeforest.net/user/themesmile"><strong>Themesmile</strong></a> 2019
      </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
