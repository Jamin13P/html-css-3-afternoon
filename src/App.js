import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isMobileMenuOpen: false,
    };
  }

  toggleMobileMenu = () => {
    this.setState({ isMobileMenuOpen: !this.state.isMobileMenuOpen });
  };

  render() {
    return (
      <div className="App">
        <div className="background-image">
          <div className="parent">
            <header className="header">
              <nav className="nav">
                <div className="home">
                  <a href=".App">
                    <img
                      className="home-text"
                      src="https://blackrockdigital.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="nav-links">
                  <ul>
                    <li className="links">SERVICES</li>
                    <li className="links">PORTFOLIO</li>
                    <li className="links">ABOUT</li>
                    <li className="links">TEAM</li>
                    <li className="links">CONTACT</li>
                  </ul>
                </div>
              </nav>
              <button
                className="mobile-menu-button"
                onClick={this.toggleMobileMenu}
              >
                MENU
              </button>
            </header>
            <nav
              className={`mobile-nav ${
                this.state.isMobileMenuOpen ? "mobile-nav-open" : null
              }`}
            >
              <div className="mobile-nav-menu">
                <ul className="mobile-list">
                  <li className="mobile-nav-text">SERVICES</li>
                  <li className="mobile-nav-text">PORTFOLIO</li>
                  <li className="mobile-nav-text">ABOUT</li>
                  <li className="mobile-nav-text">TEAM</li>
                  <li className="mobile-nav-text">CONTACT</li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="content">
            <div className="content-placement">
              <div className="greeting">
                <h2 className="text-1">Welcome To Our Studio!</h2>
              </div>
              <div className="greeting">
                <h1 className="text-2">IT'S NICE TO MEET YOU</h1>
              </div>
              <div className="button-placement">
                <button className="button">TELL ME MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
