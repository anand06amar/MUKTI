import React from "next/head";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          My App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link href="/">
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </Link> */}
              Home
            </li>
            <li className="nav-item">
              {/* <Link href="/keynote">
                <a className="nav-link">Keynote</a>
              </Link> */}
              Keynote
            </li>
            <li className="nav-item">
              {/* <Link href="/events">
                <a className="nav-link">Events</a>
              </Link> */}
              Events
            </li>
            <li className="nav-item">
              {/* <Link href="/sponsors">
                <a className="nav-link">Sponsors</a>
              </Link> */}
              Sponsors
            </li>
            <li className="nav-item">
              {/* <Link href="/about-us">
                <a className="nav-link">About Us</a>
              </Link> */}
              About Us
            </li>
            <li className="nav-item">
              {/* <Link href="/contacts">
                <a className="nav-link">Contacts</a>
              </Link> */}
              Contacts
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )}

  export default  Navbar;