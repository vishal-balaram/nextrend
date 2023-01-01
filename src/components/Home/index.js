// Write your JS code here
import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-bg-container">
        <nav className="nav-bar">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo"
            />
          </div>
          <div>
            <ul className="ul-header-tabs-container">
              <li className="list">
                <Link to="/" className="nav-links">
                  <h1 className="home-heading">Home</h1>
                </Link>
              </li>
              <li className="list">
                <Link to="/products" className="nav-links">
                  <h1 className="home-heading">Products</h1>
                </Link>
              </li>
              <li className="list">
                <Link to="/cart" className="nav-links">
                  <h1 className="home-heading">Cart</h1>
                </Link>
              </li>
              <li className="list">
                <button className="login-logout-button" type="button">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <div className="bottom-containers-container">
          <div className="bottom-container">
            <h1 className="home-cloths-quote-heading">
              Clothes That Get You Noticed
            </h1>
            <p className="home-cloths-quote-para">
              Fashion is a popular aesthetic expression. Most Noteworthy, it is
              something that is in vogue. Fashion appears in clothing, footwear,
              accessories, makeup, hairstyles, lifestyle, and body proportions.
              Furthermore, Fashion is an industry-supported expression.The term
              implies a look defined by the fashion industry as that which is
              trending.
            </p>
            <button type="button" className="shop-now-button">
              Shop Now
            </button>
          </div>
          <div className="bottom-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="bottom-clothes-quote-image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
