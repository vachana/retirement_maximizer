import React from 'react';

import { Link } from "gatsby"

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        {/* <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">---Fill in-----</p> */}
      </div>
      {/* <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold"></h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://www.google.com">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="https://www.google.com">Privacy Policy</a>
          </li>
        </ul>
      </div> */}
      <div>
      <Link to="/privacypolicy/">Privacy Policy</Link>
    </div>
      {/* <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://www.linkedin.com/in/vachanagshetty/">Linkedin</a>
          </li>
          <li>
            <a href="https://twitter.com/GururajVachana">Twitter</a>
          </li>
          
        </ul>
      </div> */}
    </div>
  </footer>
);

export default Footer;
