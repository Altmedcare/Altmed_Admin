import React, { PureComponent } from "react";
import { formatMessage, setLocale, getLocale } from "umi-plugin-react/locale";
import { Menu, Icon, Avatar } from "antd";
import classNames from "classnames";
import HeaderDropdown from "../HeaderDropdown";
import styles from "./index.less";

export default class SelectLang extends PureComponent {
  changeLang = ({ key }) => {
    setLocale(key);
  };

  render() {
    const { className } = this.props;
    const selectedLang = getLocale();
    const locales = ["zh-CN", "en-US", "pt-BR"];
    const languageLabels = {
      "zh-CN": "China",
      "en-US": "English",
      "pt-BR": "Português"
    };
    const languageIcons = {
      "zh-CN": (
        <Avatar
          style={{ width: 24, height: 24, marginRight: 12 }}
          src="https://image.flaticon.com/icons/svg/197/197375.svg"
          alt="Han Solo"
        />
      ),
      "en-US": (
        <Avatar
          style={{ width: 24, height: 24, marginRight: 12 }}
          src="https://image.flaticon.com/icons/svg/551/551953.svg"
          alt="Han Solo"
        />
      ),
      "pt-BR": (
        <Avatar
          style={{ width: 24, height: 24, marginRight: 12 }}
          src="https://image.flaticon.com/icons/svg/197/197463.svg"
          alt="Han Solo"
        />
      )
    };
    const langMenu = (
      <Menu
        className={styles.menu}
        selectedKeys={[selectedLang]}
        onClick={this.changeLang}
      >
        {locales.map(locale => (
          <Menu.Item key={locale}>
            <span role="img" aria-label={languageLabels[locale]}>
              {languageIcons[locale]}
            </span>{" "}
            {languageLabels[locale]}
          </Menu.Item>
        ))}
      </Menu>
    );
    return (
      <HeaderDropdown overlay={langMenu} placement="bottomRight">
        <span className={classNames(styles.dropDown, className)}>
  
          <Avatar style={{background:"rgb(235, 238, 243, 0.5)", color:"#7887a9"}} icon="global"  title={formatMessage({ id: "navBar.lang" })}  />
        </span>
      </HeaderDropdown>
    );
  }
}
