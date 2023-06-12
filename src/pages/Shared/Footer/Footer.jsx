import React from "react";
import logo from "../../../assets/banner/logo_footer.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer py-20 px-10 bg-[#161414] text-white">
        <div>
          <p>
            <figure>
              <img src={logo} alt="" />
            </figure>
            <br />
            Providing reliable tech since 1992
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur <br />
            adipisicing elit. Tempore facere nisi
            <br /> libero aut perferendis recusandae.
          </p>
        </div>
        <div>
          <span className="footer-title">About School</span>
          <li className="link link-hover">About Us</li>
          <li className="link link-hover">Our Staft</li>
          <li className="link link-hover">Our Partners</li>
          <li className="link link-hover">Career</li>
        </div>
        <div>
          <span className="footer-title">Programmes</span>
          <li className="link link-hover">Long-term Programmes</li>
          <li className="link link-hover">Intensive Programmes</li>
          <li className="link link-hover">Specialized Programme</li>
          <li className="link link-hover">Language Trainings</li>
        </div>
        <div>
          <span className="footer-title">Contact Info</span>
          <li className="link link-hover">example@language-school.com</li>
          <li className="link link-hover">Call Us: 1-800-123-1234</li>
          <li className="link link-hover">Brooklyn, NY 10036, United States</li>
        </div>
      </footer>
      <p className="text-white text-center pr-5 pb-5 bg-[#161414]">Copyright © 2023 - All right reserved by Language School</p>
    </div>
  );
};

export default Footer;
