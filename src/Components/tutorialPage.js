import React, { Component } from 'react';
import YoutubeId from './youtube'
import JumbotronPage from './jumbotron';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

class TutorialPage extends React.Component {

render() {   

return(
  <div>
    <JumbotronPage text="History Database Tutorial"/>
    <Layout>
      <Sider>How this all works!</Sider>
      <Layout>
        <Header>Welcome to the home of the future Tutorial Page</Header>
        <Content>Here we'd like to introduce you to the general vision for the Global History Database</Content>
        <Footer><YoutubeId /></Footer>
      </Layout>
    </Layout>
  </div>
)
}
}

export default TutorialPage;