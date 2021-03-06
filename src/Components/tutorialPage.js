import React, { Component } from 'react';
import YoutubeId from './youtube'
import JumbotronPage from './jumbotron';
import { Layout } from 'antd';
import '../App.css'
import { relative } from 'path';
const { Header, Sider, Content } = Layout;


class TutorialPage extends React.Component {

render() {   

return(
  <div>
      <h1>Welcome to the Global History Database</h1>
      <br />
       <div style={{ background: '#ffffff'}}></div> 
        <Layout>
          <Header style={{ background: '#ffffff'}}><h3><em>The Vision for the Global History Database</em></h3></Header>
          <Layout>
            {/* <Sider className='box'></Sider> */}
            <Content style={{ background: '#ffffff'}}><h2>Statistics</h2>
            <br />
            <p>The Statistics section of History Lab will be geared toward social science investigations utilizing all quantitative data available through the Database</p>
            <h2>Database</h2>
            <br />
            <p>The Database will present a chronological view of world history, filtered through tags and categories for ease of understanding.  Think of it as a time machine that can instantly transport you across time and space with the click of a button!</p>
            <p>The Database will be filterable based on specific events, like World War I and other major historical events, as well as by major cultural and global attributes that are shared across time and space, such as:</p>
            <li>Religious, political, military, economic, social, technological, artistic, philosophical, and medical dimensions of human society</li>
            <li>Natural events like diseases, floods, volcanic eruptions, ice ages, and</li>
            <li>Individual branches of modern science like psychology, physics, and more</li>
            <br />
            <h2>Video Tutorial Coming Soon!</h2>
            </Content>
          </Layout>
        </Layout>
  </div>

)
}
}

export default TutorialPage;