import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;
const style = {
  layout: {
    padding: '0 24px',
    alignItems: 'center'
  },
  content: {
    background: '#fff',
    padding: 24,
    margin: 0,
    width: '80%'
  }
}

const ContentLayout = props => {
  return (
    <Layout style={style.layout}>
      <Content style={style.content}>
        {props.children}
      </Content>
    </Layout>
  );
}

export default ContentLayout;
