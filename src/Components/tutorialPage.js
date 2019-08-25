import React, { Component } from 'react';
import YoutubeId from './youtube'
import JumbotronPage from './jumbotron';
import './App.css';

class TutorialPage extends React.Component {

render() {   

return(
  <div>
    <JumbotronPage text="History Database Tutorial"/>
    <div style={{  alignItem: 'center'}}>
    <h1>This will be the Tutorial Page</h1>
    <p>There will be lots of words</p>
    <p>Below you can watch a video (it's not a tutorial video yet)</p>
    <YoutubeId />
    </div>
  </div>
)
}
}

export default TutorialPage;