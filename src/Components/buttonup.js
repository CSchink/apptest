import React, {Component} from 'react';
import { BackTop } from 'antd';

class ButtonUp extends React.Component{
    render() {
   return(
  <div>
    <BackTop>
      <div className="ant-back-top-inner">UP</div>
    </BackTop>
    <strong style={{ color: '#1088e9' }}></strong>
  </div>
)
}
}

export default ButtonUp;