import React, { Component } from 'react';
import YoutubeId from './youtube'
import JumbotronPage from './jumbotron';

class TutorialPage extends React.Component {

render() {   

return(
  <div>
    <JumbotronPage text="Welcome to the SOTT Lab Tutorial"/>
    <div style={{  margin: "30px auto", boxSizing: "border-box", alignItem: 'center'}}>
    <h1>This will be the Tutorial Page</h1>
    <p>There will be lots of words</p>
    <p>Below you can watch a video (it's not a tutorial video yet)</p>
    <YoutubeId />
    <p>Check out more</p>
    <p>Look at the top again</p>
    </div>
  </div>
)
}
}

export default TutorialPage;