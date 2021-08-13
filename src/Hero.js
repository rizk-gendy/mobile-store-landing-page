import React from "react";
import phoneImg from "./images/phone.png";
import { useGlobalContext } from "./context";
const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Enjoy the Shopping Experience</h1>
          <p>
          Start shopping now ,
          Shop all you want and repay in small bits of cash every month up to 48 months!
          </p>
          <button  className='btn' >
            Shop now
          </button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
