import React, {Component} from 'react';
import { Tag } from 'antd';

function log(e) {
  console.log(e);
}

function preventDefault(e) {
  e.preventDefault();
  console.log('Clicked! But prevent default.');
}

class TagList extends React.Component {
  render() {
  return(
    <div>
    <Tag>Tags</Tag>
    <Tag>
      <a>Link</a>
    </Tag>
    <Tag closable onClose={log}>
      Tag 2
    </Tag>
    <Tag closable onClose={preventDefault}>
      Prevent Default
    </Tag>
  </div>
  )
  }
}

export default TagList;