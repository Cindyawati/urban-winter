import "./App.css";
import logo from "./assets/images/logo.png";
import cart from "./assets/images/cart.png";
import backArrow from "./assets/images/back-arrow.png";
import nextArrow from "./assets/images/next-arrow.png";
import img from "./assets/images/img.png";

function App() {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <img src={logo} className="logo" alt="logo" />
          <nav>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Collection</a>
              </li>
              <li>
                <a href="">Category</a>
              </li>
            </ul>
          </nav>
          <img src={cart} className="cart" alt="cart" />
        </div>

        <div className="content">
          <a href="" className="btn">
            2020 Collection
          </a>
          <h1>
            You should always <br /> feel pretty
          </h1>
          <p>Clothes that are sure to heat up your winter</p>

          <div className="arrow-icons">
            <img src={backArrow} alt="backArrow" />
            <img src={nextArrow} alt="nextArrow" />
          </div>
        </div>

        <img src={img} className="feature-img" alt="" />

        <div className="social-links">
          <a href="">FACEBOOK</a>
          <a href="">INSTAGRAM</a>
          <a href="">TWITTER</a>
        </div>
      </div>
    </>
  );
}

export default App;
