import React, { memo } from 'react';
import { Row, Col, Icon, Tooltip } from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import styles from './Analysis.less';
import { ChartCard, MiniArea, MiniBar, MiniProgress, Field } from '@/components/Charts';
import Trend from '@/components/Trend';
import numeral from 'numeral';


const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 0 },
};

const IntroduceRow = memo(({ loading, visitData }) => (
  <Row gutter={24}>
    <Col {...topColResponsiveProps}>
      <ChartCard
        style={{ backgroundColor: '#3b5998'}}
        bordered={false}
        loading={loading}
        title={<FormattedMessage  style={{ color: '#4a148c'}} id="app.analysis.visits" defaultMessage="Visits" />}
        action={
          <Tooltip
            title={<FormattedMessage id="app.analysis.introduce" defaultMessage="Introduce" />}
          >
            <Icon type="info-circle-o" />
          </Tooltip>
        }
        total={numeral(538060).format('0,0')}
        footer={
          
          <Field
            style={{ color: '#4a148c'}}
            label={<FormattedMessage id="app.analysis.day-visits" defaultMessage="Daily Visits" />}
            value={numeral(75987).format('0,0')}
          />
        }
        contentHeight={46}
      >
        <MiniBar color="#fff" data={visitData} />
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        style={{backgroundColor:'#1DA1F2'}}
        title={<FormattedMessage id="app.analysis.total-sales" defaultMessage="Sales Today" />}
        action={
          <Tooltip
            title={<FormattedMessage id="app.analysis.introduce" defaultMessage="Introduce" />}
          >
            <Icon type="info-circle-o" />
          </Tooltip>
        }
        loading={loading}
        total={() => <span>67,593</span>}
        footer={
          <Field
            label={<FormattedMessage id="app.analysis.day-sales" defaultMessage="Daily Sales" />}
            value={`￥${numeral(12423).format('0,0')}`}
          />
        }
        contentHeight={46}
      >
        <Trend flag="up" style={{ marginRight: 16 }}>
          <FormattedMessage id="app.analysis.week" defaultMessage="Weekly Changes" />
          <span className={styles.trendText}>12%</span>
        </Trend>
        <Trend flag="down">
          <FormattedMessage id="app.analysis.day" defaultMessage="Daily Changes" />
          <span className={styles.trendText}>11%</span>
        </Trend>
      </ChartCard>
    </Col>

  
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        style={{backgroundColor: '#cddc39'}}
        loading={loading}
        title={<FormattedMessage id="app.analysis.payments" defaultMessage="Payments" />}
        action={
          <Tooltip
            title={<FormattedMessage id="app.analysis.introduce" defaultMessage="Introduce" />}
          >
            <Icon type="info-circle-o" />
          </Tooltip>
        }
        total={numeral(6560).format('0,0')}
        footer={
          <Field
            label={
              <FormattedMessage
                id="app.analysis.conversion-rate"
                defaultMessage="Conversion Rate"
              />
            }
            value="85%"
          />
        }
        contentHeight={46}
      >
        <MiniBar color="#729e08" data={visitData} />
  
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
      style={{backgroundColor:'rgb(250, 204, 20)'}}
        loading={loading}
        bordered={false}
        title={
          <FormattedMessage
            id="app.analysis.operational-effect"
            defaultMessage="Operational Effect"
          />
        }
        action={
          <Tooltip
            title={<FormattedMessage id="app.analysis.introduce" defaultMessage="Introduce" />}
          >
            <Icon type="info-circle-o" />
          </Tooltip>
        }
        total="120%"
        footer={
          <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
            <Trend flag="up" style={{ marginRight: 16 }}>
              <FormattedMessage id="app.analysis.week" defaultMessage="Weekly Changes" />
              <span className={styles.trendText}>12%</span>
            </Trend>
            <Trend flag="down">
              <FormattedMessage id="app.analysis.day" defaultMessage="Weekly Changes" />
              <span className={styles.trendText}>11%</span>
            </Trend>
          </div>
        }
        contentHeight={46}
      >
        <MiniProgress
          percent={85}
          strokeWidth={4}
          target={85}
          targetLabel={`${formatMessage({ id: 'component.miniProgress.tooltipDefault' }).concat(
            ': '
          )}85%`}
          color="#f48924"
        />
      </ChartCard>
    </Col>
  </Row>
));

export default IntroduceRow;
