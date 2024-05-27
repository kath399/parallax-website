import React from "react";
import "./footer.css";
import Logo from "../../assets/icons/NRMALogoWhite.svg";

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
        about our insurance, consider the Product Disclosure
        Statement and Target Market Determinations. NRMA Insurance provides car
        insurance, home insurance, travel insurance, business
        insurance, motorcycle insurance, boat insurance, caravan
        insurance and home loans in NSW, QLD, ACT, TAS, SA, WA and the NT
        and security in NSW, QLD, ACT, SA and WA. * National Roads and
        Motorists' Association Limited, ABN 77 000 010 506, trading as NRMA, is
        a separate and independent company from Insurance Australia Limited, ABN
        11 000 016 722, trading as NRMA Insurance. “NRMA” provides Membership,
        the “my nrma app” and other services.
      </div>
      <div className="footer-links">
        Sitemap | Online terms | Privacy and security | General Insurance Code
        of Practice | Moneysmart
      </div>
    </div>
  );
};

export default Footer;
