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
        <CardImg top width="25%" src="static/me.jpeg" alt="apple" />
        <CardBody>
          <CardTitle><h3>Kendra Moore</h3></CardTitle>
          <br/>
          <CardSubtitle>Backend Engineer</CardSubtitle>
          <br/>
          <CardText>Kendra arrived at Make School after living in the Austin, TX area
             for four years. She has a bachelor degree in history and spent five years
              as an Air Defense Artillery officer in the US Army. She enjoys reading 
              long-form articles, traveling, and programming in her free time. Kendra 
              has lived in several different countries to include Russia and Estonia. 
              She has visited over 25 countries to include Colombia this past December 
              where she visited Rappi, the first South American unicorn tech company.</CardText>
        </CardBody>
      </Card>
    </CardGroup>
    </div>
 </div>
  );
  }
 };


export default Team;