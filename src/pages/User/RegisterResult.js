import React from 'react';
import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale';
import { Form, Tabs, Row, Col, Button } from "antd";
import Link from 'umi/link';
import Result from '@/components/Result';
import styles from './RegisterResult.less';
import LoginBg from "../../assets/scene-wireframe-humans.png";

const actions = (
  <div className={styles.actions}>
   <Link to="/app/email">
      <Button>
        <FormattedMessage id="app.register-result.view-mailbox" />
      </Button>
    </Link>
    <Link to="/">
      <Button>
        <FormattedMessage id="app.register-result.back-home" />
      </Button>
    </Link>
  </div>
);

const RegisterResult = ({ location }) => (
  <div className={styles.registerResult}>
  <Row>
  <Col xl={12} lg={12} md={24} sm={24} xs={24}>
    <div
      style={{
        height: "50vh",
        width:"100%",
        backgroundColor: "#f9f9f9",
        backgroundSize: "contain",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundBlendMode: "normal",
        borderRadius:"5px 0 0 5px",
        position: "relative",
        backgroundImage: `url(${LoginBg})`
      }}
    >
    </div>
  </Col>
  <Col xl={12} lg={12} md={24} sm={24} xs={24}>
   <Result
     className={styles.registerResultContent}
     type="success"
     title={
       <div className={styles.title}>
         <FormattedMessage
           id="app.register-result.msg"
           values={{ email: location.state ? location.state.account : 'your.mail@example.com' }}
         />
       </div>
     }
     description={formatMessage({ id: 'app.register-result.activation-email' })}
     description={
       <div className={styles.desc}>
       <FormattedMessage styles={{color:'#ffffff'}}
        id="app.register-result.activation-email"
      />
      </div>
   }
   actions={actions}
    style={{ marginTop: 56 }}
   />

  </Col>
</Row>
</div>
);

export default RegisterResult;
