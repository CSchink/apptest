import React, {Component} from 'react';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";

class JumbotronPage extends React.Component {
  render() {
  return (
    <div>
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-5 px-6 my-3" style={{ backgroundImage: `url(https://assets.rbl.ms/12290241/origin.jpg)` }}>
              <MDBCol className="py-5">
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">{this.props.text}</MDBCardTitle>
                {/* <MDBBtn outline color="black" className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon>View Tutorial</MDBBtn> */}
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
     </MDBContainer>
    </div>
  )
}
}

export default JumbotronPage;