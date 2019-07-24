import React, { Component } from 'react';

class YoutubeId extends React.Component {
    render(){
    return (
      <div
        className="video"
        style={{
          position: "relative",
          paddingBottom: "1.25%" /* 16:9 */,
          paddingTop: 25,
          height: 0
        }}
      >
        <iframe
          style={{
            position: "center",
            top: 25,
            left: 25,
            width: "45%",
            height: "40%"
          }}
          src={'https://www.youtube.com/embed/OICbEzppGL8'}
          frameBorder="0"
        />
      </div>
    );
  };
}
export default YoutubeId;