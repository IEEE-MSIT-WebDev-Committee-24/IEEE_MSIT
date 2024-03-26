import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IeeeImg from "../../../Assets/ieeeWhite.svg";
import ListGroup from "react-bootstrap/ListGroup";
import { Instagram, Facebook, Twitter, Linkedin } from "react-bootstrap-icons";

const FooterComponent = () => {
  return (
    <footer className="footer">
      <Container className="py-5">
        <Row className=" justify-content-md-center align-items-md-center">
          <Col>
            <img className="w-50" src={IeeeImg} alt="logo" />
          </Col>
          <Col>
            <h4 className="text text-white fs-3 fw-bold mb-3 position-relative">
              Quick Links
            </h4>
            <ListGroup>
              <ListGroup.Item
                className=" p-0 px-3 border-0  bg-transparent text text-white"
                action
                href="#about"
              >
                About Us
              </ListGroup.Item>
              <ListGroup.Item
                className="p-0 px-3 border-0  bg-transparent text text-white"
                action
                href="/home"
              >
                Join IEEE
              </ListGroup.Item>
              <ListGroup.Item
                className="p-0 px-3 border-0  bg-transparent text text-white"
                action
                href="/home"
              >
                MSIT
              </ListGroup.Item>

              <ListGroup.Item
                className="p-0 px-3 border-0  bg-transparent text text-white"
                action
                href="www.msit"
              >
                Program
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <h4 className="text text-white fs-3 fw-bold mb-5 position-relative">
              Follow Us
            </h4>
            <Row className="justify-content-md-center align-items-md-center">
              <Row className="w-75 ">
                <Col>
                  <Instagram color="white" size="1.5rem" />
                </Col>
                <Col>
                  <Facebook color="white" size="1.5rem" />
                </Col>
                <Col>
                  <Linkedin color="white" size="1.5rem" />
                </Col>
                <Col>
                  <Twitter color="white" size="1.5rem" />
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default FooterComponent;
