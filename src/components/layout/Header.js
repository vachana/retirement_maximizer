import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
        <StaticImage class="img" src="../../images/canadaflag.jpeg" alt="Retirement"/>
        </div>
        <b>Retirement Maximizer</b>
        
      </div>
      <div className="flex mt-4 sm:mt-0 " >
        <AnchorLink className="px-4" href="#contactUs">
          Register
        </AnchorLink>
        <AnchorLink className="px-4" href="#aboutus">
          About Us
        </AnchorLink>
        <AnchorLink className="px-4" href="#cpp">
          CPP
        </AnchorLink>
        <AnchorLink className="px-4" href="#oas">
          OAS
        </AnchorLink>
        <AnchorLink className="px-4" href="#faq">
          FAQ
        </AnchorLink>
      </div>
      {/* <div className="hidden md:block">
        <Button className="text-sm">Start Free Trial</Button>
      </div> */}
    </div>
  </header>
);

export default Header;
