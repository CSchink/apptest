import React, { Component } from 'react';
import YoutubeId from './youtube'
import JumbotronPage from './jumbotron';
import { Layout } from 'antd';
import '../App.css';

const { Footer, Content } = Layout;

class TutorialPage extends React.Component {

render() {   

return(
  <div>
    <JumbotronPage text="History Database Tutorial"/>
    <Layout>
      <Content>Welcome to the home of the future Tutorial Page</Content>
      <Content>Here we'd like to introduce you to the general vision for the Global History Database</Content>
      <Content style={{alignItems: 'center'}}><YoutubeId source='https://www.youtube.com/embed/MckxlP60cnY'/></Content>
    </Layout>
  </div>
)
}
}

export default TutorialPage;