import React, { PureComponent, Fragment } from 'react';
import { Card, Steps, Icon } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from '../style.less';

const { Step } = Steps;
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1143459_fr9yng3c0v6.js',
});
export default class StepForm extends PureComponent {
  getCurrentStep() {
    const { location } = this.props;
    const { pathname } = location;
    const pathList = pathname.split('/');
    switch (pathList[pathList.length - 1]) {
      case 'info':
        return 0;
      case 'confirm':
        return 1;
      case 'result':
        return 2;
      default:
        return 0;
    }
  }

  render() {
    const { location, children } = this.props;
    const extraContent = (
      <div className={styles.extraImg}>
       <IconFont type="icon-wenjian" />
      </div>
    );
    return (
      <PageHeaderWrapper
        extraContent={extraContent}
        title="Step by step form"
        tabActiveKey={location.pathname}
        content="Divide a lengthy or unfamiliar form task into multiple steps to guide the user through the process."
      >
        <Card bordered={false}>
          <Fragment>
            <Steps current={this.getCurrentStep()} className={styles.steps}>
              <Step title="Fill in the transfer information" />
              <Step title="Confirm transfer information" />
              <Step title="Complete" />
            </Steps>
            {children}
          </Fragment>
        </Card>
      </PageHeaderWrapper>
    );
  }
}
