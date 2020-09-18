import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
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
  Col,
  Divider
} from "antd";
import { Gmaps, Marker, InfoWindow, Circle } from "react-gmaps";
import ReactMapGL from "react-map-gl";

import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import styles from "./style.less";
const coords = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};
const MAPBOX_TOKEN =
  "pk.eyJ1IjoibWF0aXJhc2EiLCJhIjoiY2p2cWQ4cDRhMTFuOTRhcmg2YWNybHg5ayJ9.P8Nnej7rgy61fEF-s9lo_A"; // Set your mapbox token here

const params = { v: "3.exp", key: "AIzaSyDnZHCNVuYH8lZSMZtuHzJ4677eUi6AE8w" };
class MapElement extends PureComponent {
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log("onDragEnd", e);
  }

  onCloseClick() {
    console.log("onCloseClick");
  }

  onClick(e) {
    console.log("onClick", e);
  }
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.785164,
        longitude: -122.41669,
        zoom: 10,
        bearing: 0,
        pitch: 0
      }
    };
  }

  render() {
    const { viewport } = this.state;
    return (
      <PageHeaderWrapper
        title="Map"
        content="A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic."
      >
        <Card bordered={false} title="Gmap">
          <div className="gutter-example">
            <Row gutter={12}>
              <Col
                className="gutter-row"
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={24}
              >
                <div className="avatar-list-avant">
                  
                  <p>Three sizes and two shapes are available.</p>
                </div>
                <Gmaps
                  height={"300px"}
                  lat={coords.lat}
                  lng={coords.lng}
                  zoom={12}
                  loadingMessage={"Be happy"}
                  params={params}
                  onMapCreated={this.onMapCreated}
                >
                  <Marker
                    lat={coords.lat}
                    lng={coords.lng}
                    draggable={true}
                    onDragEnd={this.onDragEnd}
                  />
                  <InfoWindow
                    lat={coords.lat}
                    lng={coords.lng}
                    content={"Hello, React :)"}
                    onCloseClick={this.onCloseClick}
                  />
                  <Circle
                    lat={coords.lat}
                    lng={coords.lng}
                    radius={500}
                    onClick={this.onClick}
                  />
                </Gmaps>
              </Col>
            </Row>
          </div>
        </Card>
        <Card bordered={false} title="React-Map-GL" style={{marginTop: 24}}>
          <div className="gutter-example">
            <Row gutter={12}>
              <Col
                className="gutter-row"
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={24}
              >
                <div className="avatar-list-avant">
               
                  <p>
                    react-map-gl is a suite of{" "}
                    <a href="http://facebook.github.io/react/">React</a>{" "}
                    components for
                    <a href="https://github.com/mapbox/mapbox-gl-js">
                      Mapbox GL JS
                    </a>
                    , a WebGL-powered vector and raster tile mapping library. In
                    addition to exposing <code>MapboxGL</code> functionality to
                    React apps, react-map-gl also integrates seamlessly with{" "}
                    <a href="https://uber.github.io/deck.gl">deck.gl</a>.
                  </p>
                </div>
                <ReactMapGL
                  {...viewport}
                  width="100%"
                  height="300px"
                  mapStyle="mapbox://styles/mapbox/light-v10"
                  onViewportChange={v => this.setState({ viewport: v })}
                  preventStyleDiffing={false}
                  mapboxApiAccessToken={
                    "pk.eyJ1IjoibWF0aXJhc2EiLCJhIjoiY2p2cWQ4cDRhMTFuOTRhcmg2YWNybHg5ayJ9.P8Nnej7rgy61fEF-s9lo_A"
                  }
                />
              </Col>
            </Row>
          </div>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default MapElement;
