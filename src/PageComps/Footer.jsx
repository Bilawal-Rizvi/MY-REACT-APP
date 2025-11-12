import React from "react";

function Footer() {
  return (
    <>
      <div className="h-120 bg-gray-950 text-gray-300 p-10 ">
        <div className="flex w-full justify-between gap-40">
          <div className="flex flex-col  gap-5 w-65">
            <h2 className="text-gray-300 text-xl">ABOUT</h2>
            <ul className="flex flex-col gap-4 text-sm">
              <li>Who We Are</li>
              <li>Our Responsibility</li>
              <li>Service We Provide</li>
              <li>Careers</li>
              <li>
                Our Shop: First Floor, Dolmen Mall, Shop No F-06, A Block DHA
                Phase 6, Lahore
              </li>
              <li className="flex gap-5  text-2xl">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-tiktok"></i>
                <i className="fa-brands fa-whatsapp"></i>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5 w-65">
            <h2 className="text-gray-300 text-xl">Customer Service</h2>
            <ul className="flex flex-col gap-4 text-sm">
              <li>Contact Us</li>
              <li>Dispatch Timeline</li>
              <li>Exchange Information</li>
              <li>Email: info@baroque.pk</li>
              <li>UAN 111-302-302</li>
              <li>WhatsApp: +92 325 7001111</li>
            </ul>
          </div>
          <div className="flex flex-col  gap-5 w-max">
            <h2 className="text-gray-300 text-xl">Policies</h2>
            <ul className="flex flex-col gap-4 text-sm">
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Shipping Policy </li>
              <li>Terms of Service</li>
              <li>Legal</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-20">
          <p>Pakistan v</p>
          <p>© 2025 - BAROQUE</p>
          <div className="flex gap-5">
            <img
              src="public\images\39-395774_visa-logo-visa-classic-logo-png-transparent-png.png"
              width="50"
              alt=""
            />
            <img src="public\images\Mastercard-logo.svg" width="50" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
