import React from "react";
import "./footer.css";
import Logo from "../../assets/icons/NRMALogo.svg";

const Footer = () => {
  return (
    <div className="py-2 footer-style">
      <img src={Logo} alt="Logo" className="footer-logo" />
      <div className="footer-text">
        Insurance (except Travel, Life and Income Protection) issued by
        Insurance Australia Limited, ABN 11 000 016 722, trading as NRMA
        Insurance. NRMA Insurance is part of the Insurance Australia Group.
        Business address is Darling Park Tower 2, 201 Sussex St, Sydney NSW
        (can’t assist with enquiries at this address). When making decisions
        about our insurance, consider the 
        <a href='https://www.nrma.com.au/policy-booklets' target="_blank">Product Disclosure Statement</a> 
        and 
        <a href='https://www.nrma.com.au/policy-booklets' target="_blank">Target Market Determinations</a>.

        <br/>
        <br/>

        NRMA Insurance provides 
        <a href='https://www.nrma.com.au/car-insurance' target="_blank">car insurance,</a> 
        <a href='https://www.nrma.com.au/home-insurance' target="_blank">home insurance,</a>  
        <a href='https://www.nrma.com.au/travel-insurance' target="_blank">travel insurance,</a>  
        <a href='https://www.nrma.com.au/business-insurance' target="_blank">business insurance,</a>  
        <a href='https://www.nrma.com.au/business-insurance' target="_blank">motorcycle insurance,</a> 
        <a href='https://www.nrma.com.au/business-insurance' target="_blank">boat insurance,</a> 
        <a href='https://www.nrma.com.au/business-insurance' target="_blank">caravan insurance</a> 
        and 
        <a href='https://www.nrma.com.au/business-insurance' target="_blank">home loans</a>
         in NSW, QLD, ACT, TAS, SA, WA and the NT and security in NSW, QLD, ACT, SA and WA. 
        
        <br/>
        <br/>

        * National Roads and Motorists' Association Limited, ABN 77 000 010 506, trading as NRMA, is a 
        separate and independent company from Insurance Australia Limited, ABN 11 000 016 722, trading as 
        NRMA Insurance. “NRMA” provides Membership, the “my nrma app” and other services.
      </div>
      <div className="footer-links">
        <a href="https://www.nrma.com.au/sitemap" target="_blank">Sitemap</a>
        <a href="https://www.nrma.com.au/terms" target="_blank">Online terms</a>
        <a href="https://www.nrma.com.au/privacy-security" target="_blank">Privacy and security</a>
        <a href="https://www.nrma.com.au/general-insurance-code-of-practice" target="_blank">General Insurance Code of Practice</a>
        <a href="https://moneysmart.gov.au/" target="_blank">Moneysmart</a>
      </div>
    </div>
  );
};

export default Footer;
