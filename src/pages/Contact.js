import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus mt-3">
        <div className="col-md-6 " style={{marginRight:"10px"}}>
          <img
            src="/images/contact.jpeg"
            alt="contactus"
            style={{ width: "100%",borderRadius:"20px" }}
          />
        </div >
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <div style={{color:"black",background:"white",borderRadius:"20px",padding:"10px"}}>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;