import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Tabs, Icon, Badge } from "antd";
import TabNotif from "./TabNotif";
import TabMsg from "./TabMsg";
import TabEvent from "./TabEvent";
import styles from "./index.less";
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class PageAvant extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane
            key="1"
            tab={
              <span>
            
                Notification
                <Badge
                  className={styles.badgeStyle}
                  count={109}
                  style={{ backgroundColor: "#0052CC" }}
                />
              </span>
            }
          >
            <TabNotif />
          </TabPane>
          <TabPane
            key="2"
            tab={
              <span>
              
                Message
                <Badge
                  className={styles.badgeStyle}
                  count={10}
                  style={{ backgroundColor: "#DE350B" }}
                />
              </span>
            }
          >
            <TabMsg />
          </TabPane>
          <TabPane
            key="3"
            tab={
              <span>
             
                Message
                <Badge
                  className={styles.badgeStyle}
                  count={3}
                  style={{ backgroundColor: "#FF5630" }}
                />
              </span>
            }
          >
            <TabEvent />
          </TabPane>
        </Tabs>

        <div className="footer-avant-btn">
          <span>Clear Notification</span>
          <span>View More</span>
        </div>
      </div>
    );
  }
}

export default PageAvant;
