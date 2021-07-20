import React from 'react';

import { Link } from "gatsby"

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        {/* <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">---Fill in-----</p> */}
        <p>Disclaimer: The information in this material is in no way intended as tax or legal advise.  Please consult with legal or tax professionals for any specific information regarding your individual situation.  Some of this material was developed by and produced by entities unaffiliated with Retirement Maximizer.  The Opinions expressed and material provided are for general information purposes only and should not be considered as solicitation for the purchase or sale of any security.</p>
        <p>This site is not part of the Facebook website nor Facebook Inc.  In addition, this site is NOT endorsed by Facebook in any way.</p>
        <p class="cent"><b>FACEBOOK is a trademark of FACEBOOK INC.</b></p>
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
      </div>
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
    
  </footer>
);

export default Footer;
