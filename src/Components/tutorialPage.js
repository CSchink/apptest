import React, { Component } from 'react';
import YoutubeId from './youtube'
import JumbotronPage from './jumbotron';
import '../App.css';



class TutorialPage extends React.Component {

render() {   

return(
  <div>
    <JumbotronPage text="History Database Tutorial"/>
      <p>Welcome to the home of the future Tutorial Page</p>
      <p>Here we'd like to introduce you to the general vision for the Global History Database</p>
      <p style={{alignItems: 'center'}}><YoutubeId source='https://www.youtube.com/embed/MckxlP60cnY'/></p>
    
  </div>
)
}
}

export default TutorialPage;