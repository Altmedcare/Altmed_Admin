import React, { PureComponent } from "react";
import { connect } from "dva";
import { formatMessage, FormattedMessage } from "umi-plugin-react/locale";
import {
  Form,
  Input,
  DatePicker,
  Select,
  Button,
  Card,
  InputNumber,
  Radio,
  Icon,
  Tooltip,
  Row,
  Col
} from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import SpotifyPlayer from "react-spotify-player";
import styles from "./MusicPage.less";
// size may also be a plain string using the presets 'large' or 'compact'

class MailPage extends PureComponent {
  render() {
    return (
      <div className="gutter-example">
        <Row gutter={10}>
          <Col className="gutter-row" xs={24} sm={24} md={24} lg={24} xl={24}>
            <SpotifyPlayer
              uri="https://open.spotify.com/artist/246dkjvS1zLTtiykXe5h60"
            />
            <SpotifyPlayer
              uri="https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default MailPage;
