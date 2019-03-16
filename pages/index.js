import React from 'react';
import Header from '../components/shared/Header';
import '../styles/main.scss'
import Head from 'next/head'


class Index extends React.Component {
    render(){
    return(
    <div>
       <Head>
        <title>Storytime</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      </Head>
      <Header />
      <div>
      <img className="logo" src="/static/logo.png" alt="logo" />
      <p className='tagline'>Making Storytime Magical</p>
    </div>
  

  <section className="content-section bg-light" id="about">
    <div className="container-box">      
          <section className='child-container'>
          <div className="space">
          </div>
          <h3 className="right-text">Send Your Friends and Family Money in Seconds!</h3>
          </section>
          <section className='child-container'>
          <img className="money" src="/static/night.svg" />
          </section>    
    </div>
  </section>

  
  <section className="content-section bg-primary text-white text-center" id="services">


    <div className="container">


      <div className="content-section-heading">
        <h2 className="text-secondary mb-0">Getting Started</h2>
      </div>

      <div className="row">


        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
          <span className="service-icon rounded-circle mx-auto mb-3-large">
          <img className="too-large" src="static/laptop.png" />
          </span>
          <h4>
            <strong>Mobile</strong>
          </h4>
          <p className="text-faded mb-0">Conduct the entire transaction via a phone</p>
        </div>


        <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
          <span className="service-icon rounded-circle mx-auto mb-3">
            <img src="/static/book.png"/>
          </span>
          <h4>
            <strong>Purchase Blockchain</strong>
          </h4>
          <p className="text-faded mb-0">No need for Coinbase
            <i className="fas fa-heart"></i>
      </p>
        </div>


        <div className="col-lg-3 col-md-6">
          <span className="service-icon rounded-circle mx-auto mb-3-large">
            <img className="too-large" src="static/microphone.png" />
          </span>
          <h4>
            <strong>Low Fees</strong>
          </h4>
          <p className="text-faded mb-0">Cheaper than Western Union</p>
        </div>

        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
          <span className="service-icon rounded-circle mx-auto mb-3">
            <img src="static/upload.png" />
          </span>
          <h4>
            <strong>Safe and Secure</strong>
          </h4>
          <p className="text-faded mb-0">You can trust us with your data</p>
        </div>


      </div>

    </div>

  </section>

  <section className="content-section bg-light" id="about">
  <h1 className="title-uses">Use Cases</h1> 
    <div className="container-box">   
          <section className='child-container'>
          <img className="money" src="/static/books.svg" />
          </section>    
          <section className='child-container'>
          <div className="space-two">
          </div>
          <h1 className="right-text-two">Phone Data is Expensive</h1>
          <p className="use-paragraph-two">In many countries, cell phone data is very expensive. As a result
          people typically use the internet at home or in wireless cafes. ToshiText will allow users to send
          money without internet using SMS. Users will need to create an account and wallet using the internet
          and then they can send money to their friends and families.
          </p>
          </section>  
    </div>
  </section>


  <section className="content-section bg-light" id="about">
    <div className="container-box">      
          <section className='child-container'>
          <div className="space-three">

          </div>
          <h1 className="right-text-three">Need to Conduct Microtransactions</h1>
          <p className="use-paragraph-three">Many people in foreign countries do not have access
          to safe and secure bank accounts. People still need to send money and make payments. Sending money via
          Western Union can be very expensive and many payments apps without a bank account can be insecure. This app
          will give people the ability to make microtransactions without a bank account.</p>
          </section>
          <section className='child-container'>
          <img className="money" src="/static/castle.svg" />
          </section>    
    </div>
  </section>


  <section className="content-section bg-light" id="about">
    <div className="container-box"> 
          <section className='child-container'>
          <img className="money" src="/static/girl_drawn.svg" />
          </section>     
          <section className='child-container'>
          <div className="space-four">

          </div>
          <h2 className="right-text-three">Desire to Participate in Blockchain</h2>
          <p className="use-paragraph-four"> This app will allow users to purchase blockchain without
          starting a Coinbase account and linking your Coinbase account to your bank account. You can purchase
          small amounts of blockchain using our app.
            </p>
          </section> 
    </div>
  </section>


  <section className="content-section bg-light" id="about">
    <div className="container-box"> 
          <section className='child-container'>
          <div className="space-five">

          </div>
          <h2 className="right-text-four">Living in an Austere Environments</h2>
          <p className="use-paragraph-five">
            More than 4 billion people worldwide, mostly in developed contries still don't have access to the internet. Yet 75% of the world's population has access to cellphones. ToshiText allows users and communities immediate and broader access to financial services.
          </p>
          </section>
          <section className='child-container'>
          <img className="money" src="/static/monster.svg" />
          </section>    
    </div>
  </section>


  <footer className="footer text-center">
    <div className="container">
      <ul className="list-inline mb-5">
        <li className="list-inline-item"></li>
     
   
        <li className="list-inline-item">
  
        </li>
        <li className="list-inline-item">

        </li>
      </ul>
      <p className="text-muted small mb-0">Copyright &copy; Storytime 2019</p>
    </div>
  </footer>
  </div>
    )
  }
}
  export default Index;