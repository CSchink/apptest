import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";

const JumbotronPage = () => {
  return (
    <div>
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-black text-center py-5 px-4 my-5" style={{ backgroundImage: `url(http://www.testnec.ro/wp-content/uploads/2019/01/imagine-2.jpg)` }}>
              <MDBCol className="py-5">
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">SOTT Lab</MDBCardTitle>
                {/* <MDBBtn outline color="black" className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon> View project</MDBBtn> */}
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
     </MDBContainer>
    </div>
  )
}

export default JumbotronPage;