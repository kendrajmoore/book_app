import Header from "../components/shared/Header";
import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
 CardSubtitle, CardBody } from 'reactstrap';
 // This is the Link API


class Team extends React.Component {
  render(){
  return (
    <div>
    <Header />
    <div className="about">
    <CardGroup>
      <Card>
        <CardImg top width="50%" src="static/kendra.svg" alt="apple" />
        <CardBody>
          <CardTitle><h3>Kendra Moore</h3></CardTitle>
          <br/>
          <CardSubtitle>Backend Engineer</CardSubtitle>
          <br/>
          <CardText>Jasmine started her computer science journey in Florida. While working in 
            retail she decided that she wanted to shift focus on her career to computer science. 
            She saw the impact that technology has on the world, and the ability it has to change 
            it for the better. Jasmine moved to California to attend MakeSchool to sharpen her 
            technical skills and eventually create technology that will solve problems in her 
            community, and makes the world a better place.</CardText>
        </CardBody>
      </Card>
    </CardGroup>
    </div>
 </div>
  );
  }
 };


export default Team;