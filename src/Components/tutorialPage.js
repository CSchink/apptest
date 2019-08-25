import React, { Component } from 'react';
import YoutubeId from './youtube'
import JumbotronPage from './jumbotron';
import { Layout, Menu } from 'antd';


const { Header, Footer, Content } = Layout;

class TutorialPage extends React.Component {

render() {   

return(
  <div>
    <JumbotronPage text="History Database Tutorial"/>
    <Layout>
      <Header>Welcome to the home of the future Tutorial Page</Header>
      <Content>Welcome to the home of the future Tutorial Page</Content>
      <Content>Here we'd like to introduce you to the general vision for the Global History Database</Content>
      <Content style={{textAlign: 'center'}}><YoutubeId source='https://www.youtube.com/embed/MckxlP60cnY'/></Content>
      <Footer>For more information watch the video</Footer>
    </Layout>
  </div>
)
}
}

export default TutorialPage;