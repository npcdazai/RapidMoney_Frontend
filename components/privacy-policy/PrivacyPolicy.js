import React from "react";
import { FaCheck } from "react-icons/fa6";
import "./privcy-policy.modules.scss";
// import "./privacy.scss";
 
function PrivacyPolicy() {
  return (
    <>
      <section className="container mx-auto pb-120 pt-120">
      {/* <section className="sm:container xs:container-fluid  xs:mx-4 xs:px-4 sm:px-0  sm:mx-auto"> */}
        <h1 className="top-heading">Privacy Policy</h1>
 
        <div className="flex gap-[10px]">
          <span>
            <div className="check-circle">
              <FaCheck size={10} />
            </div>
          </span>
          <p className="section1-subtitle">
            We, at RapidMoney. (“MoneyTime Technology Solutions Pvt Ltd” or
            “We”) understand Privacy and its value. Therefore, it is all the
            more important for us to make You (“You” or “Customer” or “User”),
            the User of the website www.rapidmoney.in (the “Website”) and its
            associated mobile applications, MoneyTime Technology Solutions Pvt
            Ltd (“Application" or "App”) (collectively, the “Platform”)
            understand the reason behind collection of your information and its
            usage and the manner in which we collect, use, store and share
            information about you (“Privacy Policy”)
          </p>
        </div>
        <div className="pt-8 ">
          <h1 className=" section-heading ">
            This Privacy Policy has been prepared in compliance with:
          </h1>
          <div className="mt-2  privacy ">
            <p className="section-content ">
              <strong>A.</strong>Information Technology (Reasonable Security
              Practices and Procedures and Sensitive Personal Data or
              Information) Rules, 2011
            </p>
            <p className="section-content">
              <strong>B.</strong>Information Technology (Intermediary Guidelines
              and Digital Media Ethics Code) Rules, 2021
            </p>
            <p className="section-content">
              <strong>C.</strong>Guidelines on Digital Lending issued by the
              Reserve Bank of India(RBI), 2025
            </p>
            <p className="section-content">
              <strong>D.</strong>Other applicable acts, regulations and rules
              which require the publishing of a privacy policy for handling of
              or dealing in personal information including sensitive personal
              data or information and all applicable laws, regulations,
              guidelines provided by applicable regulatory authorities including
              but not limited to the RBI
            </p>
          </div>
        </div>
        <section className="pt-8">
          <h1 className="section-heading">CONSENT</h1>
          <div className="mt-2">
            <div className="section-content ">
              <div className="check-circle">
                <FaCheck size={10} />
              </div>
              <span>
                You hereby expressly consent to provide the information that may
                be required in relation to the Services (as defined below) being
                rendered on the Platform by us. You acknowledge that we shall
                collect the information detailed under this Privacy Policy to
                facilitate lending & non-lending services by partnering with
                various financial lenders, third parties, service providers,
                etc. based on your requirement to avail such Services
                (“Services”).
              </span>
            </div>
            <div className="section-content ">
              <div className="check-circle">
                <FaCheck size={10} />
              </div>
              <span>
                MoneyTime Technology Solutions Pvt Ltd will only be using the
                information for providing the Services to you.
              </span>
            </div>
 
            <div className="section-content ">
              <div className="check-circle">
                <FaCheck size={10} />
              </div>
              <span>
                In order to avail any Services being provided by MoneyTime
                Technology Solutions Pvt Ltd by itself or in partnership with
                the lenders or other third parties, it is important that YOU
                READ, UNDERSTAND, ACKNOWLEDGE AND UNCONDITIONALLY AGREE TO BE
                BOUND BY THE TERMS AND CONDITIONS OF THIS PRIVACY POLICY.
              </span>
            </div>
            <div className="section-content ">
              <div className="check-circle">
                <FaCheck size={10} />
              </div>
              <span>
                IF YOU DO NOT AGREE TO THIS POLICY OR ANY PART THEREOF, PLEASE
                DO NOT USE/ACCESS/DOWNLOAD/INSTALL THE PLATFORM OR ANY PART
                THEREOF.
              </span>
            </div>
            <div className="section-content ">
              <div className="check-circle">
                <FaCheck size={10} />
              </div>
              <span>
                For the users consenting to continue accessing the Platform and
                avail the Services, this Privacy Policy explains our policies
                and practices regarding the collection, use, and disclosure of
                personal information.
              </span>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
 
export default PrivacyPolicy;
 
 