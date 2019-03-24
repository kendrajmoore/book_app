import React from 'react';
import Header from '../components/shared/Header';
import '../styles/main.scss'



class About extends React.Component {

   render(){
   return(
   <div>
    <Header />
    <div className="about-page">
      <h1 className="about">Storytime</h1>
      <img className="make-image" src="/static/girls.svg" />

      <p>Storytime was created so that I could share stories with my daughter during seperations.
        I was inspired by parents recording messages for their children during military deployments.
      </p>
    </div>
  </div>
  )
 }
}
  
export default About;