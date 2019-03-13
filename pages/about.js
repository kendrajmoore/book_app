import React from 'react';
import Header from '../components/shared/Header';
import '../styles/main.scss'



class About extends React.Component {

   render(){
   return(
   <div>
    <Header />
    <div className="about-page">
      <h1 className="about">About Storytime</h1>
      <img className="make-image" src="/static/boy.png" />

      <p>Storytime was created so that I could share stories with my daughter during seperations.
      </p>
    </div>
  </div>
  )
 }
}
  
export default About;