import React, { Component } from 'react';

import { Carousel } from 'antd';

class TutorialPage extends React.Component {

render() {   

function onChange(a, b, c) {
  console.log(a, b, c);
}

return(
  <div>
    <h1>This is the Tutorial Page</h1>
    <Carousel afterChange={onChange}>
        <div>
        <h3>1</h3>
        </div>
        <div>
        <h3>2</h3>
        </div>
        <div>
        <h3>3</h3>
        </div>
        <div>
        <h3>4</h3>
        </div>
    </Carousel>
  </div>
)
}
}

export default TutorialPage;