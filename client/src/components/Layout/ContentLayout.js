import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;
const style = {
  layout: {
    padding: '0 24px',
    alignItems: 'center',
    backgroundColor: '#2f3136',
    marginTop: '60px'
  },
  content: {
    backgroundColor: '#36393f',
    padding: 24,
    margin: 0,
    width: '90%'
  }
};

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
