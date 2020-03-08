import React from 'react';
import './Home.css';
import homeQrCode from '../../images/home-qr-code.png';
import homeAnalytics from '../../images/home-analytics.png';
import {
  Link
} from "react-router-dom";

function Home(props) {
  return (
    <main>
        <section className="home-message">
          <p className="home-message__text">All your scans in one place. Create custom QR codes and track their engagement.</p>
        </section>
        <section className="home-qr-section">
          <img className="home-qr-section__img" src={homeQrCode} alt="An example QR code."/>
          <p className="home-qr-section__text">Generate analytics-packed QR codes in seconds. As many as you want.</p>
        </section>
        <section className="home-analytics-section">
          <p className="home-analytics-section__text">See how many times your QR code has been scanned.</p>
          <img className="home-analytics-section__img" alt="Analytics." src={homeAnalytics} />
        </section>
        <section className="home-footer">
          <p className="home-footer__text">What are you waiting for? <Link to="/register" className="home-register">Go register &#8618;</Link></p>
        </section>
    </main>
  )
}

export default Home;