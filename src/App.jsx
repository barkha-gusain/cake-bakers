import React from 'react'
import './index.css'
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import categories from './Category.json'
import cakes from './Cakes.json'
import breads from './Breads.json'
import cookie from './Cookies.json'
const App = () => {
  return (
    <> 
     <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar-logo">SweetBakes</div>

      {/* Center: Links */}
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#cakes">Cakes</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Right: Icons */}
      <div className="navbar-icons">
        <FaSearch className="icon" title="Search" />
        <FaShoppingCart className="icon" title="Cart" />
        <FaUser className="icon" title="Account" />
      </div>
    </nav>
    <section className="home-section">
  <div className="home-content">
    <h1>Freshly Baked Delights, Every Day</h1>
    <p>Discover the magic of freshly backed goodness. Handcrafted with love and the finest ingerdients.Delight in every bite, every day.</p>
    <button className="cta-button">Shop Now</button>
    <a href="#" className='home-link'>explore nearest store</a>
  </div>
</section>
 <section className="category-section">
      <h2 className="section-title">Our Specialities</h2>
      <div className="category-grid">
        {categories.map((item) => (
          <div className="category-card" key={item.id}>
            <div className="circle-image">
              <img src={item.image} alt={item.name} />
            </div>
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
   <section className="cake-section">
      <h2 className="section-title">Most Loved</h2>
      <div className="cake-grid">
        {cakes.map((cake) => (
          <div className="cake-card" key={cake.id}>
            <img src={cake.image} alt={cake.name} />
            <h3 className="cake-name">{cake.name}</h3>
            <p className="cake-price">
              {cake.price} <span className="weight">({cake.weight})</span>
            </p>
            <div className="rating">{cake.description}</div>
          </div>
        ))}
      </div>
    </section>

    <section className="cake-section">
      <h2 className="section-title">Our Bread</h2>
      <div className="cake-grid">
        {breads.map((cake) => (
          <div className="cake-card" key={cake.id}>
            <img src={cake.image} alt={cake.name} />
            <h3 className="cake-name">{cake.name}</h3>
            <p className="cake-price">
              {cake.price} <span className="weight">({cake.weight})</span>
            </p>
           <div className="rating">{cake.description}</div>
          </div>
        ))}
      </div>
    </section>
<div className="contact-wrapper">
      <div className="contact-brown-box">
        <div className="contact-content">
          <div className="left">
            <h2>Daily Dough</h2>
            <p>
              Subscribe and experience the convenience of freshly baked goods
              delivered right to your doorstep every day.
            </p>
            <a href="#" className="explore-link">explore more</a>
          </div>
         <div className="subscribe-wrapper">
  <form className="right subscribe-form">
    <input type="email" placeholder="add email id" required />
    <button type="submit">Subscribe</button>
  </form>
</div>

        </div>
        {/* <img src="/cc2.png" alt="Cake Box" className="cake-overlay" /> */}
      </div>
    </div>
 <section className="cake-section">
      <h2 className="section-title">Our Cookies</h2>
      <div className="cake-grid">
        {cookie.map((cake) => (
          <div className="cake-card" key={cake.id}>
            <img src={cake.image} alt={cake.name} />
            <h3 className="cake-name">{cake.name}</h3>
            <p className="cake-price">
              {cake.price} <span className="weight">({cake.weight})</span>
            </p>
           <div className="rating">{cake.description}</div>
          </div>
        ))}
      </div>
    </section>
     <section className="content-section">
      <div className="text-content">
        <h2>Freshly Baked Cookies Daily</h2>
        <p>
          Experience the warmth of homemade taste. Our cookies are baked fresh every
          morning using premium ingredients and love.
        </p>
        <a href="#cookies" className="read-more-link">Read More</a>
      </div>

      <div className="image-content">
        <img src="/public/one.jpg" alt="Cookie Stack" />
      </div>
    </section>
   <div className="content-section">
  <div className="image-content">
    <img src="/public/one.jpg" alt="Featured Cake" />
  </div>
  <div className="text-content">
    <h2>Discover Our Signature Cakes</h2>
    <p>
      Dive into the world of luxurious flavors and artfully crafted designs. 
      Our cakes are baked with passion and premium ingredients to make every bite memorable.
    </p>
    <a href="/cakes" className="read-more-link">Read More</a>
  </div>
</div>


<div className="newsletter-section">
  <div className="newsletter-box">
    <div className="newsletter-content">
      <div className="newsletter-text">
        <h2>Christmas Craving</h2>
        <p>
          Delight in the magic of the season with our Christmas Craving <br />
          collection. Perfect for gifting or savoring with loved ones.
        </p>
      </div>
    </div>
    <img src="/public/cs3.png" alt="Cake Overlay" className="newsletter-image" />
  </div>
</div>

 <section className="cake-section">
      <h2 className="section-title">Our Bread</h2>
      <div className="cake-grid">
        {breads.map((cake) => (
          <div className="cake-card" key={cake.id}>
            <img src={cake.image} alt={cake.name} />
            <h3 className="cake-name">{cake.name}</h3>
            <p className="cake-price">
              {cake.price} <span className="weight">({cake.weight})</span>
            </p>
           <div className="rating">{cake.description}</div>
          </div>
        ))}
      </div>
    </section>

<footer className='footer-main'>
  <div className="footer-1">
         {/* <img src="/footer-banner.jpg" alt="Freshly baked goodies" /> */}
    <div className="footer-banner-content">
      <h2>Freshness in Every Bite</h2>
      <p>From oven to doorstep — we deliver joy baked with love.</p>
    </div>
  </div>
  <div className="footer-2">
    <div className='footer-grid-1'>
          <h3 className="footer-logo">SweetBakes</h3>
      <p>Whipping up delightful treats daily. SweetBakes brings freshness, flavor, and love to your plate.
 
</p>

    
    </div>
    <div className='footer-grid-2'>
        <h4>Get in Touch</h4>
      <p>Email: hello@sweetbakes.com</p>
      <p>Phone: +91 98765 43210</p>
      <p>Location: Bijnour, Uttar Pradesh</p>
    </div>
    <div className='footer-grid-3'>
       <h4>Quick Links</h4>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#cakes">Cakes</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    <div className='footer-grid-4'>
       <h4>Join Our Community</h4>
      <p>Subscribe to get updates and sweet offers!
      </p>
      
  <form className="right subscribe-form">
    <input type="email" placeholder="add email id" required />
    <button type="submit">Subscribe</button>
  </form>

    </div>
  </div>
</footer>

    </>
  )
}

export default App