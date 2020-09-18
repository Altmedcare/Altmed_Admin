import React, { Component } from "react";
import { List, Card, Avatar, Icon, Divider } from "antd";
import styles from "./style.less";
import FeatherIcon from "feather-icons-react";

const dataFeather = [
  { titleFeather: "camera" },
  { titleFeather: "activity" },

  { titleFeather: "airplay" },

  { titleFeather: "alert-circle" },

  { titleFeather: "alert-octagon" },

  { titleFeather: "alert-triangle" },
  { titleFeather: "align-center" },

  { titleFeather: "align-justify" },

  { titleFeather: "align-left" },

  { titleFeather: "align-right" },

  { titleFeather: "anchor" },

  { titleFeather: "aperture" },

  { titleFeather: "archive" },

  { titleFeather: "arrow-down-circle" },

  { titleFeather: "arrow-down-left" },

  { titleFeather: "arrow-down-right" },

  { titleFeather: "arrow-down" },

  { titleFeather: "arrow-left-circle" },

  { titleFeather: "arrow-left" },

  { titleFeather: "arrow-right-circle" },

  { titleFeather: "arrow-right" },

  { titleFeather: "arrow-up-circle" },

  { titleFeather: "arrow-up-left" },

  { titleFeather: "arrow-up-right" },

  { titleFeather: "arrow-up" },

  { titleFeather: "at-sign" },

  { titleFeather: "award" },

  { titleFeather: "bar-chart-2" },

  { titleFeather: "bar-chart" },

  { titleFeather: "battery-charging" },

  { titleFeather: "battery" },

  { titleFeather: "bell-off" },

  { titleFeather: "bell" },

  { titleFeather: "bluetooth" },

  { titleFeather: "bold" },

  { titleFeather: "book-open" },

  { titleFeather: "book" },

  { titleFeather: "bookmark" },

  { titleFeather: "box" },

  { titleFeather: "briefcase" },

  { titleFeather: "calendar" },

  { titleFeather: "camera-off" },

  { titleFeather: "camera" },

  { titleFeather: "cast" },

  { titleFeather: "check-circle" },

  { titleFeather: "check-square" },

  { titleFeather: "check" },

  { titleFeather: "chevron-down" },

  { titleFeather: "chevron-left" },

  { titleFeather: "chevron-right" },

  { titleFeather: "chevron-up" },

  { titleFeather: "chevrons-down" },

  { titleFeather: "chevrons-left" },

  { titleFeather: "chevrons-up" },

  { titleFeather: "chrome" },

  { titleFeather: "circle" },

  { titleFeather: "clipboard" },

  { titleFeather: "clock" },

  { titleFeather: "cloud-drizzle" },

  { titleFeather: "cloud-lightning" },

  { titleFeather: "cloud-off" },

  { titleFeather: "cloud-rain" },

  { titleFeather: "cloud-snow" },

  { titleFeather: "cloud" },

  { titleFeather: "code" },

  { titleFeather: "codepen" },

  { titleFeather: "codesandbox" },

  { titleFeather: "coffee" },

  { titleFeather: "columns" },

  { titleFeather: "command" },

  { titleFeather: "compass" },

  { titleFeather: "copy" },

  { titleFeather: "corner-down-left" },

  { titleFeather: "corner-down-right" },

  { titleFeather: "corner-left-down" },

  { titleFeather: "corner-left-up" },

  { titleFeather: "corner-right-down" },

  { titleFeather: "corner-right-up" },

  { titleFeather: "corner-up-left" },

  { titleFeather: "corner-up-right" },

  { titleFeather: "cpu" },

  { titleFeather: "credit-card" },

  { titleFeather: "crop" },

  { titleFeather: "crosshair" },

  { titleFeather: "database" },

  { titleFeather: "delete" },

  { titleFeather: "disc" },

  { titleFeather: "dollar-sign" },

  { titleFeather: "download-cloud" },

  { titleFeather: "download" },

  { titleFeather: "droplet" },

  { titleFeather: "edit-2" },

  { titleFeather: "edit-3" },

  { titleFeather: "edit" },

  { titleFeather: "external-link" },

  { titleFeather: "eye-off" },

  { titleFeather: "eye" },

  { titleFeather: "facebook" },

  { titleFeather: "fast-forward" },

  { titleFeather: "feather" },

  { titleFeather: "figma" },

  { titleFeather: "file-minus" },

  { titleFeather: "file-plus" },

  { titleFeather: "file-text" },

  { titleFeather: "file" },

  { titleFeather: "film" },

  { titleFeather: "filter" },

  { titleFeather: "flag" },

  { titleFeather: "folder-minus" },

  { titleFeather: "folder-plus" },

  { titleFeather: "folder" },

  { titleFeather: "frown" },

  { titleFeather: "gift" },

  { titleFeather: "git-branch" },

  { titleFeather: "git-commit" },

  { titleFeather: "git-merge" },

  { titleFeather: "git-pull-request" },

  { titleFeather: "github" },

  { titleFeather: "gitlab" },

  { titleFeather: "globe" },

  { titleFeather: "grid" },

  { titleFeather: "hard-drive" },

  { titleFeather: "hash" },

  { titleFeather: "headphones" },

  { titleFeather: "heart" },

  { titleFeather: "help-circle" },

  { titleFeather: "hexagon" },

  { titleFeather: "home" },

  { titleFeather: "image" },

  { titleFeather: "inbox" },

  { titleFeather: "info" },

  { titleFeather: "instagram" },

  { titleFeather: "italic" },

  { titleFeather: "key" },

  { titleFeather: "layers" },

  { titleFeather: "layout" },

  { titleFeather: "life-buoy" },

  { titleFeather: "link-2" },

  { titleFeather: "link" },

  { titleFeather: "linkedin" },

  { titleFeather: "list" },

  { titleFeather: "loader" },

  { titleFeather: "lock" },

  { titleFeather: "log-in" },

  { titleFeather: "log-out" },

  { titleFeather: "mail" },

  { titleFeather: "map-pin" },

  { titleFeather: "map" },

  { titleFeather: "maximize-2" },

  { titleFeather: "maximize" },

  { titleFeather: "meh" },

  { titleFeather: "menu" },

  { titleFeather: "message-circle" },

  { titleFeather: "message-square" },

  { titleFeather: "mic-off" },

  { titleFeather: "mic" },

  { titleFeather: "minimize-2" },

  { titleFeather: "minimize" },

  { titleFeather: "minus-circle" },

  { titleFeather: "minus-square" },

  { titleFeather: "minus" },

  { titleFeather: "monitor" },

  { titleFeather: "moon" },

  { titleFeather: "more-horizontal" },

  { titleFeather: "more-vertical" },

  { titleFeather: "mouse-pointer" },

  { titleFeather: "move" },

  { titleFeather: "music" },

  { titleFeather: "navigation-2" },

  { titleFeather: "navigation" },

  { titleFeather: "octagon" },

  { titleFeather: "package" },

  { titleFeather: "paperclip" },

  { titleFeather: "pause-circle" },

  { titleFeather: "pause" },

  { titleFeather: "pen-tool" },

  { titleFeather: "percent" },

  { titleFeather: "phone-call" },

  { titleFeather: "phone-forwarded" },

  { titleFeather: "phone-incoming" },

  { titleFeather: "phone-missed" },

  { titleFeather: "phone-off" },

  { titleFeather: "phone-outgoing" },

  { titleFeather: "phone" },

  { titleFeather: "pie-chart" },

  { titleFeather: "play-circle" },

  { titleFeather: "play" },

  { titleFeather: "plus-circle" },

  { titleFeather: "plus-square" },

  { titleFeather: "plus" },

  { titleFeather: "pocket" },

  { titleFeather: "power" },

  { titleFeather: "printer" },

  { titleFeather: "radio" },

  { titleFeather: "refresh-ccw" },

  { titleFeather: "refresh-cw" },

  { titleFeather: "repeat" },

  { titleFeather: "rewind" },

  { titleFeather: "rotate-ccw" },

  { titleFeather: "rotate-cw" },

  { titleFeather: "rss" },

  { titleFeather: "save" },

  { titleFeather: "scissors" },

  { titleFeather: "search" },

  { titleFeather: "send" },

  { titleFeather: "server" },

  { titleFeather: "settings" },

  { titleFeather: "share-2" },

  { titleFeather: "share" },

  { titleFeather: "shield-off" },

  { titleFeather: "shield" },

  { titleFeather: "shopping-bag" },

  { titleFeather: "shopping-cart" },

  { titleFeather: "shuffle" },

  { titleFeather: "sidebar" },

  { titleFeather: "skip-back" },

  { titleFeather: "skip-forward" },

  { titleFeather: "slack" },

  { titleFeather: "slash" },

  { titleFeather: "sliders" },

  { titleFeather: "smartphone" },

  { titleFeather: "smile" },

  { titleFeather: "speaker" },

  { titleFeather: "square" },

  { titleFeather: "star" },

  { titleFeather: "stop-circle" },

  { titleFeather: "sun" },

  { titleFeather: "sunrise" },

  { titleFeather: "sunset" },

  { titleFeather: "tablet" },

  { titleFeather: "tag" },

  { titleFeather: "target" },

  { titleFeather: "terminal" },

  { titleFeather: "thermometer" },

  { titleFeather: "thumbs-down" },

  { titleFeather: "thumbs-up" },

  { titleFeather: "toggle-left" },

  { titleFeather: "toggle-right" },

  { titleFeather: "trash-2" },

  { titleFeather: "trash" },

  { titleFeather: "trello" },

  { titleFeather: "trending-down" },

  { titleFeather: "trending-up" },

  { titleFeather: "triangle" },

  { titleFeather: "truck" },

  { titleFeather: "tv" },

  { titleFeather: "twitter" },

  { titleFeather: "type" },

  { titleFeather: "umbrella" },

  { titleFeather: "underline" },

  { titleFeather: "unlock" },

  { titleFeather: "upload-cloud" },

  { titleFeather: "upload" },

  { titleFeather: "user-check" },

  { titleFeather: "user-minus" },

  { titleFeather: "user-plus" },

  { titleFeather: "user-x" },

  { titleFeather: "user" },

  { titleFeather: "users" },

  { titleFeather: "video-off" },

  { titleFeather: "video" },

  { titleFeather: "voicemail" },

  { titleFeather: "volume-1" },

  { titleFeather: "volume-2" },

  { titleFeather: "volume-x" },

  { titleFeather: "volume" },

  { titleFeather: "watch" },

  { titleFeather: "wifi-off" },

  { titleFeather: "wifi" },

  { titleFeather: "wind" },

  { titleFeather: " x-circle" },

  { titleFeather: " x-octagon" },

  { titleFeather: " x-square" },

  { titleFeather: " x" },

  { titleFeather: " youtube" },

  { titleFeather: " zap-off" },

  { titleFeather: " zap" },

  { titleFeather: " zoom-in" },

  { titleFeather: " zoom-out" }
];

class TabIconFeather extends Component {
  render() {
    return (
      <div>
        <span>
        <Divider><h3 style={{ fontSize: "14px" }}>Application Icons</h3></Divider>
          <List
            className="icon-color-antd"
            grid={{
              gutter: 16,
              xs: 2,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 8
            }}
            dataSource={dataFeather}
            renderItem={item => (
              <List.Item>
                <Card title={item.titleFeather}>
                  <FeatherIcon
                    icon={item.titleFeather}
                    style={{ fontSize: "36px", textAlign: "center" }}
                  />
                </Card>
              </List.Item>
            )}
          />
        </span>
      </div>
    );
  }
}

export default TabIconFeather;
