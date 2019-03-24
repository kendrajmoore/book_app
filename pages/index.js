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
      <img className="logo" src="static/logo-new.svg" alt="logo" />
      <p className='tagline'>Making Storytime Magical</p>
    </div>
  
  <section className="content-section bg-primary text-white text-center" id="services">


    <div className="container">


      <div className="content-section-heading">
        <h2 className="text-secondary mb-0">Getting Started</h2>
      </div>

      <div className="row">


        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
          <span className="service-icon rounded-circle mx-auto mb-3-large">
          <img className="too-large" src="static/laptop.svg" />
          </span>
          <h4>
            <strong>Sign Up</strong>
          </h4>
          <p className="text-faded mb-0">Start creating books in seconds</p>
        </div>


        <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
          <span className="service-icon rounded-circle mx-auto mb-3">
            <img src="static/book-paint.svg"/>
          </span>
          <h4>
            <strong>Large Book Selections</strong>
          </h4>
          <p className="text-faded mb-0">Choose from popular books
            <i className="fas fa-heart"></i>
      </p>
        </div>


        <div className="col-lg-3 col-md-6">
          <span className="service-icon rounded-circle mx-auto mb-3-large">
            <img className="too-large" src="static/microphone-paint.svg" />
          </span>
          <h4>
            <strong>Record Audio/Video</strong>
          </h4>
          <p className="text-faded mb-0">Options to create video/audio feeds</p>
        </div>

        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
          <span className="service-icon rounded-circle mx-auto mb-3">
            <img src="static/clouds.svg" />
          </span>
          <h4>
            <strong>Upload to the Cloud</strong>
          </h4>
          <p className="text-faded mb-0">Access your books anywhere</p>
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
          <h1 className="right-text-two">Audio Books are Expensive</h1>
          <p className="use-paragraph-two">Paper books are cheap but audio books
          cost on average 30 dollars. That is alot money considering kids tastes are
          always evolving. 
          </p>
          </section>  
    </div>
  </section>


  <section className="content-section bg-light" id="about">
    <div className="container-box">      
          <section className='child-container'>
          <div className="space-three">

          </div>
          <h1 className="right-text-three">Imagination Starts Here</h1>
          <p className="use-paragraph-three">Kids need to play and use their Imagination
          to develop. This app allows them to enjoy their favorite books every night. </p>
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
          <h2 className="right-text-three">Improving Literacy</h2>
          <p className="use-paragraph-four"> Help kids learn to read by
          allowing them to match the text with the audio recording.
            </p>
          </section> 
    </div>
  </section>


  <section className="content-section bg-light" id="about">
    <div className="container-box"> 
          <section className='child-container'>
          <div className="space-five">

          </div>
          <h2 className="right-text-four">Kids Take Charge</h2>
          <p className="use-paragraph-five">
        Allow your children to record their favorite stories to listen to 
        every night.
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
      <p className="small mb-0">Copyright &copy; Storytime 2019</p>
    </div>
  </footer>
  </div>
    )
  }
}
  export default Index;