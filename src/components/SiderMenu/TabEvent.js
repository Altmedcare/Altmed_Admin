import React, { Component } from 'react';
import { Form, Card, Select, List, Tag, Icon, Row, Col, Button } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';

import TagSelect from '@/components/TagSelect';
import StandardFormRow from '@/components/StandardFormRow';
import ArticleListContent from '@/components/ArticleListContent';
import styles from './index.less';

const { Option } = Select;
const FormItem = Form.Item;


class TabEvent extends Component {
    render() {
      return (

        <List
          size="large"
          itemLayout="vertical"
          renderItem={item => (
            <List.Item
              key={item.id}
              actions={[
                <IconText type="star-o" text={item.star} />,
                <IconText type="like-o" text={item.like} />,
                <IconText type="message" text={item.message} />,
              ]}
              extra={<div className={styles.listItemExtra} />}
            >
              <List.Item.Meta
                title={
                  <a className={styles.listItemMetaTitle} href={item.href}>
                    {item.title}
                  </a>
                }
                description={
                  <span>
                    <Tag>Important</Tag>
                    <Tag>Event</Tag>
                    <Tag>Up Coming</Tag>
                  </span>
                }
              />
              <ArticleListContent data={item} />
            </List.Item>
          )}
        />

      );
    }
  }

  export default TabEvent;
