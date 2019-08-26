import React, { Component } from 'react';
import YoutubeId from './youtube'
import JumbotronPage from './jumbotron';
import '../App.css';
import { relative } from 'path';

const styles = {
  center: {
    marginLeft: "auto",
    marginRight: "auto"
  }
}

class TutorialPage extends React.Component {

render() {   

return(
  <div>
    <JumbotronPage text="History Database Tutorial"/>
      <div className={styles.center}>
        <h1>Welcome to the home of the future Tutorial Page</h1>
        <br />
        <p>Here we'll introduce you to the vision for the Global History Database</p>
        <h2>Statistics</h2>
        <p>The Statistics section of History Lab will be geared toward social science investigations utilizing all quantitative data available through the Database</p>
        <h2>Database</h2>
        <p>The Database will present a chronological view of world history, filtered through tags and categories for ease of understanding.  Think of it as a time machine that can instantly transport you across time and space with the click of a button!</p>
        <p>The Database will be filterable based on specific events, like World War I and other major historical events, as well as by major cultural and global attributes that are shared across time and space, such as:</p>
        <li>Religious, political, military, economic, social, technological, artistic, philosophical, and medical dimensions of human society</li>
        <li>Natural events like diseases, floods, volcanic eruptions, ice ages, and</li>
        <li>Individual branches of modern science like psychology, physics, and more</li>
        <h2>Video Tutorial</h2>
        <br />
        <p>That said, below will be (someday soon) a tutorial video explaining how it all works together</p>
        <br />
        <p><YoutubeId source='https://www.youtube.com/embed/MckxlP60cnY'/></p>
      </div>
  </div>

)
}
}

export default TutorialPage;