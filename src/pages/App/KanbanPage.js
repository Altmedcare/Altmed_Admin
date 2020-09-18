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
import Board from "react-trello";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
const data = require("./data.json");
import styles from "./ChatPage.less";

const handleDragStart = (cardId, laneId) => {
  console.log("drag started");
  console.log(`cardId: ${cardId}`);
  console.log(`laneId: ${laneId}`);
};

const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
  console.log("drag ended");
  console.log(`cardId: ${cardId}`);
  console.log(`sourceLaneId: ${sourceLaneId}`);
  console.log(`targetLaneId: ${targetLaneId}`);
};
class KanbanPage extends PureComponent {
  state = { boardData: { lanes: [] } };

  setEventBus = eventBus => {
    this.setState({ eventBus });
  };

  async componentWillMount() {
    const response = await this.getBoard();
    this.setState({ boardData: response });
  }

  getBoard() {
    return new Promise(resolve => {
      resolve(data);
    });
  }

  completeCard = () => {
    this.state.eventBus.publish({
      type: "ADD_CARD",
      laneId: "COMPLETED",
      card: {
        id: "Milk",
        title: "Buy Milk",
        label: "15 mins",
        description: "Use Headspace app"
      }
    });
    this.state.eventBus.publish({
      type: "REMOVE_CARD",
      laneId: "PLANNED",
      cardId: "Milk"
    });
  };

  addCard = () => {
    this.state.eventBus.publish({
      type: "ADD_CARD",
      laneId: "BLOCKED",
      card: {
        id: "Ec2Error",
        title: "EC2 Instance Down",
        label: "30 mins",
        description: "Main EC2 instance down"
      }
    });
  };

  shouldReceiveNewData = nextData => {
    console.log("New card has been added");
    console.log(nextData);
  };

  handleCardAdd = (card, laneId) => {
    console.log(`New card added to lane ${laneId}`);
    console.dir(card);
  };
  render() {
    return (
      <div>
        <div className="App">
          <div className="App-intro">
            <Board
              style={{ background: "transparent" }}
              editable
              onCardAdd={this.handleCardAdd}
              data={this.state.boardData}
              draggable
              onDataChange={this.shouldReceiveNewData}
              eventBusHandle={this.setEventBus}
              handleDragStart={handleDragStart}
              handleDragEnd={handleDragEnd}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default KanbanPage;
