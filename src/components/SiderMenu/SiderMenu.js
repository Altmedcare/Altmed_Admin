import React, { PureComponent, Suspense } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import groupBy from 'lodash/groupBy';
import { Layout, Avatar, Badge, Icon, Button, Popover, Drawer, Tag, Dropdown, Tooltip, List } from 'antd';
import classNames from 'classnames';
import Link from 'umi/link';
import styles from './index.less';
import PageAvant from './PageAvant';
import SearchAvant from './SearchAvant';
import SiderSettings from './SiderSettings';
import PageLoading from '../PageLoading';
import { getDefaultCollapsedSubMenus } from './SiderMenuUtils';
import { title } from '../../defaultSettings';
import AvantBg from '../../assets/stylish-hexagonal-line-abstract-backgroun.jpg';
import router from "umi/router";
import {AUTH_USER_TOKEN_KEY} from "@/utils/constants";


const BaseMenu = React.lazy(() => import('./BaseMenu'));
const { Sider } = Layout;

let firstMount = true;

export default class SiderMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      openKeys: getDefaultCollapsedSubMenus(props),
    };
  }

  componentDidMount() {
    firstMount = false;
  }

  static getDerivedStateFromProps(props, state) {
    const { pathname, flatMenuKeysLen } = state;
    if (props.location.pathname !== pathname || props.flatMenuKeys.length !== flatMenuKeysLen) {
      return {
        pathname: props.location.pathname,
        flatMenuKeysLen: props.flatMenuKeys.length,
        openKeys: getDefaultCollapsedSubMenus(props),
      };
    }
    return null;
  }

  isMainMenu = key => {
    const { menuData } = this.props;
    return menuData.some(item => {
      if (key) {
        return item.key === key || item.path === key;
      }
      return false;
    });
  };

  handleOpenChange = openKeys => {
    const moreThanOne = openKeys.filter(openKey => this.isMainMenu(openKey)).length > 1;
    this.setState({
      openKeys: moreThanOne ? [openKeys.pop()] : [...openKeys],
    });
  };
  //drawer
  state = { visible: false };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  logout=()=>{
    router.push('/user/login');
    localStorage.removeItem(AUTH_USER_TOKEN_KEY)

  }

  render() {
    const { logo, onMenuClick, collapsed, onCollapse, fixSiderbar, theme, isMobile, primaryColor } = this.props;
    const { openKeys } = this.state;
    const defaultProps = collapsed ? {} : { openKeys };

    const siderClassName = classNames(styles.sider, {
      [styles.fixSiderBar]: fixSiderbar,
      [styles.light]: theme === 'light',
    });
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        onCollapse={collapse => {
          if (firstMount || !isMobile) {
            onCollapse(collapse);
          }
        }}
        width={270}
        collapsedWidth={82}
        theme={theme}
        className={siderClassName}
      >
        <div className={styles.logo} id="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
            <h1>{title}<Tag color="rgba(255, 255, 255, 0.18)">1.0</Tag></h1>
          </Link>
        </div>
        <div className={styles.AvantProfile}>
           <div className={styles.AvantAvatar}>

           <Badge count={99}>
            <Avatar
              onClick={this.showDrawer}
              size={55}
              style={{ backgroundColor: '#87d068', cursor:"pointer" }}
              src="https://randomuser.me/api/portraits/men/46.jpg"
            />
            <div className={styles.pulsatingCircle}></div>
            </Badge>

            <Drawer
              placement="left"
              width={270}
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <PageAvant />
            </Drawer>
          </div>
          <div>
          <h1>Hi, Sendy Naoyan</h1>
          <ul>
            <li>
              <Tooltip placement="top" title="Settings">
              <a href="/dashboard/workplace" rel="noopener noreferrer" className={styles.action}>
                <Icon type="setting" />
              </a>
            </Tooltip></li>
            <li>
              <Tooltip placement="top" title="User">
              <a href="/dashboard/workplace" rel="noopener noreferrer" className={styles.action}>
                <Icon type="user" />
              </a>
            </Tooltip></li>
            <li>
              <Tooltip placement="top" title="logout">
              <a href="#" rel="noopener noreferrer" className={styles.action} onClick={this.logout}>
                <Icon type="logout" />
              </a>
            </Tooltip></li>
          </ul>
          </div>
           <img className={styles.ImageBg} src={AvantBg} alt="logo" />
        </div>
        <Suspense fallback={<PageLoading />}>

          <BaseMenu
            {...this.props}
            mode="inline"
            handleOpenChange={this.handleOpenChange}
            onOpenChange={this.handleOpenChange}
            style={{ padding: '0', width: '100%', paddingBottom:"100%", height:'auto', overflow:'hidden'}}
            {...defaultProps}
          />

        </Suspense>
      </Sider>
    );
  }
}

