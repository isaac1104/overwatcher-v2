import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;
const style = {
  content: {
    background: '#fff',
    padding: 24,
    margin: 0,
    minHeight: '90vh'
  }
}

const ContentLayout = props => {
  return (
    <Content style={ style.content }>
      { props.children }
    </Content>
  );
}

export default ContentLayout;
