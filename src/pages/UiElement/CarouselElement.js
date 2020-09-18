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
  Carousel,
  Radio,
  Icon,
  Tooltip,
  Row,
  Col
} from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";

function onChange(a, b, c) {
  console.log(a, b, c);
}
class CarouselElement extends PureComponent {
  state = {
    dotPosition: 'top',
  };

  handlePositionChange = ({ target: { value: dotPosition } }) => this.setState({ dotPosition });

  render() {
    const { dotPosition } = this.state;
    return (
      <PageHeaderWrapper
        title="Carousel"
        content="A carousel component. Scales with its container."
      >
        <Card bordered={false} title="Basic">
          <div className="avatar-list-avant">
            <p>Three sizes and two shapes are available.</p>
          </div>

          <Carousel afterChange={onChange} autoplay>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
          
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default CarouselElement;
