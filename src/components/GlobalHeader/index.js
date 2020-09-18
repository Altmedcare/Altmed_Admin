import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import Link from 'umi/link';
import Debounce from 'lodash-decorators/debounce';
import styles from './index.less';
import RightContent from './RightContent';
import LeftContent from './LeftContent';
import FeatherIcon from "feather-icons-react";

export default class GlobalHeader extends PureComponent {
  componentWillUnmount() {
    this.triggerResizeEvent.cancel();
  }
  /* eslint-disable*/
  @Debounce(600)
  triggerResizeEvent() {
    // eslint-disable-line
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    window.dispatchEvent(event);
  }
  toggle = () => {
    const { collapsed, onCollapse, hiddenBreadcrumb = false, } = this.props;
    onCollapse(!collapsed);
    this.triggerResizeEvent();
  };
  render() {
    const { collapsed, isMobile, logo, setting } = this.props;
    const { navTheme, primaryColor, layout, colorWeak } = setting;
    return (
      <div className={styles.header}>
        <span className={styles.trigger} onClick={this.toggle}>
          {/* <Icon type={collapsed ? 'caret-right' : 'caret-left'} /> */}
          <FeatherIcon icon={collapsed ? 'toggle-left' : 'toggle-right'} size='26' style={{marginTop:20, marginLeft:5}}/>
        </span>
        {isMobile && (
          <Link to="/" className={styles.logo} key="logo">
            <img src={logo} alt="logo" width="32" />
          </Link>
        )}
        <LeftContent {...this.props} />
        <RightContent {...this.props} />
      </div>
    );
  }
}
