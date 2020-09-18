import React, { Component } from 'react';
import { MiniArea } from '../Charts';
import { Icon} from 'antd';
import NumberInfo from '../NumberInfo';
import styles from './index.less';

function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}

function getActiveData() {
  const activeData = [];
  for (let i = 0; i < 24; i += 1) {
    activeData.push({
      x: `${fixedZero(i)}:00`,
      y: Math.floor(Math.random() * 900) + i * 50,
    });
  }
  return activeData;
}

export default class ActiveChart extends Component {
  state = {
    activeData: getActiveData(),
  };

  componentDidMount() {
    this.loopData();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    cancelAnimationFrame(this.requestRef);
  }

  loopData = () => {
    this.timer = setTimeout(() => {
      this.setState(
        {
          activeData: getActiveData(),
        },
        () => {
          this.loopData();
        }
      );
    }, 1000);
  };

  render() {
    const { activeData = [] } = this.state;

    return (
      <div className={styles.activeChart}>
        <div style={{ marginTop: 0}}>
          <MiniArea
            animate={true}
            line
            color="transparent"
            borderColor="#ffffff"
            borderWidth={2}
            height={100}
            scale={{
              y: {
                tickCount: 5,
              },
            }}
            yAxis={{
              tickLine: true,
              label: true,
              title: true,
              line: true,
            }}
            data={activeData}
          />
        </div>
       
      </div>
    );
  }
}
