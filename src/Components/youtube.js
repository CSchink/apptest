import React, { Component } from 'react';

class YoutubeId extends React.Component {
    render(){
    return (
      <div
        className="video"
        style={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 */,
          paddingTop: 25,
          height: 0
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          src={`https://www.youtube.com/watch?v=nM9f0W2KD5s`}
          frameBorder="0"
        />
      </div>
    );
  };
}
export default YoutubeId;