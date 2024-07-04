import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import iarLogo from "./../assets/iar3.jpg";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="primary" fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="primary" fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="primary" fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="primary" fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="primary" fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="primary" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <img src={iarLogo} style={{ height: "4rem" }} />
                IAR CELL
              </h6>
              <p>
                We here provides a lot of opportunity for every students from
                around the world to explore and learn in a conducive environment
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  facebook-f
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  twitter
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  linkedin
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  instagram
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                F1 Cabin, AGORA Building,NILA Campus IIT Palakkad Kerala 678623
              </p>
              <p>
                <MDBIcon color="primary" icon="envelope" className="me-3" />
                ar_office@iitpkd.ac.in
              </p>
              <p>
                <MDBIcon color="primary" icon="phone" className="me-3" /> Mob:
                +91 7595911769
              </p>
              <p>
                <MDBIcon color="primary" icon="print" className="me-3" /> Land
                Line : +91 4923 226 533
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        Copyright ©2023 Indian Institute of Technology Palakkad. All Rights
        Reserved.
      </div>
    </MDBFooter>
  );
}
