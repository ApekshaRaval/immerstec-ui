import React from "react";
import "../assests/scss/login.scss";
import loginImg from "../assests/images/login.jpg";
import logo from "../assests/images/imstecLogo.jpg";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const Login = () => {

  
  return (
    <Row className="login">
        <Col lg={7} md={6} sm={12}  className="loginimg">
        <img src={loginImg} className="login-img img-fluid" alt="" />
        </Col>
        <Col lg={5} md={6} sm={12} className="">
        <img  src={logo} alt="" className="logo" />
        <Form className="loginform">
            <p className="heading">Login</p>
          <FormGroup className="group">
            <Label for="exampleEmail" className="text-left">Email</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="with a placeholder"
              type="email"
            />
          </FormGroup>
          <FormGroup className="group">
            <Label for="examplePassword">Password</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="password placeholder"
              type="password"
            />
          </FormGroup>
          <Button className="loginbtn">Login</Button>
        </Form>
        </Col>
    </Row>
  );
};

export default Login;
