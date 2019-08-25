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
            <MDBCol className="text-black text-center py-5 px-4 my-5" style={{ backgroundImage: `url(http://www.testnec.ro/wp-content/uploads/2019/01/imagine-2.jpg)` }}>
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