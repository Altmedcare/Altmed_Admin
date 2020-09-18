import React, { Component } from "react";
import { Tabs, Drawer, Button, Input, Tooltip, Modal } from "antd";

const Search = Input.Search;

class SearchAvant extends Component {
  state = {
    modal1Visible: false
  };

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  render() {
    return (
      <div>
        <Tooltip
          placement="right"
          title="Search"
          overlayClassName="sider-tooltip"
        >
          <Button
            shape="circle"
            icon="search"
            onClick={() => this.setModal1Visible(true)}
          />
        </Tooltip>

        <Modal
          footer={null}
          style={{ top: 60 }}
          bodyStyle={{ padding: "0" }}
          closable={false}
          visible={this.state.modal1Visible}
          onOk={() => this.setModal1Visible(false)}
          onCancel={() => this.setModal1Visible(false)}
        >
          <Search
            style={{ height: "60px" }}
            placeholder="Search..."
            onSearch={value => console.log(value)}
            size="large"
          />
        </Modal>
      </div>
    );
  }
}

export default SearchAvant;
