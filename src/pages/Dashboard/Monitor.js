import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale';
import { Row, Col, Card, Tooltip } from 'antd';
import { Pie, WaterWave, Gauge, TagCloud } from '@/components/Charts';
import NumberInfo from '@/components/NumberInfo';
import CountDown from '@/components/CountDown';
import ActiveChart from '@/components/ActiveChart';
import numeral from 'numeral';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import Authorized from '@/utils/Authorized';
import styles from './Monitor.less';

const { Secured } = Authorized;

const targetTime = new Date().getTime() + 3900000;

// use permission as a parameter
const havePermissionAsync = new Promise(resolve => {
  // Call resolve on behalf of passed
  setTimeout(() => resolve(), 300);
});

@Secured(havePermissionAsync)
@connect(({ monitor, loading }) => ({
  monitor,
  loading: loading.models.monitor,
}))
class Monitor extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'monitor/fetchTags',
    });
  }

  render() {
    const { monitor, loading } = this.props;
    const { tags } = monitor;

    return (
      <GridContent>
        <Row gutter={24}>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
            <Card
            bodyStyle={{height:'250px', display:'block'}}
              title={
                <FormattedMessage
                  id="app.monitor.activity-forecast"
                  defaultMessage="Activity forecast"
                />
              }

              bordered={false}
            >
              <ActiveChart color="red"/>
            </Card>
          </Col>
          <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <Card
              title={<FormattedMessage id="app.monitor.efficiency" defaultMessage="Efficiency" />}
              style={{ marginBottom: 24 }}
              bodyStyle={{height:'250px', display:'block'}}
              bordered={false}
            >
              <Gauge
                title={formatMessage({ id: 'app.monitor.ratio', defaultMessage: 'Ratio' })}
                height={180}
                percent={87}
              />
            </Card>
          </Col>
          <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <Card
              title={
                <FormattedMessage
                  id="app.monitor.resource-surplus"
                  defaultMessage="Resource Surplus"
                />
              }
              bodyStyle={{ textAlign: 'center', height:'250px', display:'block', fontSize: 0 }}
              style={{ marginBottom: 24 }}
              bordered={false}
            >
              <WaterWave
                height={161}
                title={
                  <FormattedMessage id="app.monitor.fund-surplus" defaultMessage="Fund Surplus" />
                }
                percent={34}
              />
            </Card>
          </Col>
          
        
        </Row>
        <Row gutter={24}>
          <Col xl={24} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card
              title={
                <FormattedMessage
                  id="app.monitor.trading-activity"
                  defaultMessage="Real-Time Trading Activity"
                />
              }
              bordered={false}
            >
              <Row>
                <Col md={6} sm={12} xs={24}>
                  <NumberInfo
                    subTitle={
                      <FormattedMessage
                        id="app.monitor.total-transactions"
                        defaultMessage="Total transactions today"
                      />
                    }
                    suffix="元"
                    total={numeral(124543233).format('0,0')}
                  />
                </Col>
                <Col md={6} sm={12} xs={24}>
                  <NumberInfo
                    subTitle={
                      <FormattedMessage
                        id="app.monitor.sales-target"
                        defaultMessage="Sales target completion rate"
                      />
                    }
                    total="92%"
                  />
                </Col>
                <Col md={6} sm={12} xs={24}>
                  <NumberInfo
                    subTitle={
                      <FormattedMessage
                        id="app.monitor.remaining-time"
                        defaultMessage="Remaining time of activity"
                      />
                    }
                    total={<CountDown target={targetTime} />}
                  />
                </Col>
                <Col md={6} sm={12} xs={24}>
                  <NumberInfo
                    subTitle={
                      <FormattedMessage
                        id="app.monitor.total-transactions-per-second"
                        defaultMessage="Total transactions per second"
                      />
                    }
                    suffix="元"
                    total={numeral(234).format('0,0')}
                  />
                </Col>
              </Row>
              <div className={styles.mapChart}>
                <Tooltip
                  title={
                    <FormattedMessage
                      id="app.monitor.waiting-for-implementation"
                      defaultMessage="Waiting for implementation"
                    />
                  }
                >
                  <img
                    src="https://gw.alipayobjects.com/zos/antfincdn/h%24wFbzuuzz/HBWnDEUXCnGnGrRfrpKa.png"
                    alt="map"
                  />
                </Tooltip>
              </div>
            </Card>
          </Col>
       
        </Row>
        <Row gutter={24}>
          <Col xl={6} lg={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card
              title={
                <FormattedMessage
                  id="app.monitor.popular-searches"
                  defaultMessage="Popular Searches"
                />
              }
              loading={loading}
              bordered={false}
              bodyStyle={{ overflow: 'hidden' }}
            >
              <TagCloud data={tags} height={161} />
            </Card>
          </Col>
          <Col xl={6} lg={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
    
          </Col>
        </Row>
      </GridContent>
    );
  }
}

export default Monitor;
