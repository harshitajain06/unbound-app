import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function data_entry_clerk() {
  const handleGoBack = () => {
    router.back();
  };
    return (
    <Layout>
      <Head>
      <title>{siteTitle}</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <section 
       style={{
        position: "fixed",
        bottom: "49%",
        right: "27%", // Adjust this value to position the image horizontally
        transform: "translateY(50%)",
        transformOrigin: "center",
      }}
      >
        <div className=" text-center ">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200">
            DATA ENTRY CLERK{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 ">
            DESCRIPTION
          </h2>

          <div className="text-left ">
            <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
              </h3>
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Data Entry Clerks in India input and manage data into computer
                systems, ensuring accuracy and efficiency
              </p>
           

              <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
              </h3>
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Entry-level Data Entry Clerks earn around INR 10,000 to INR
                20,000 per month.
              </p>
            

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
              </h3>
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Full-time work, typically 8 hours per day, may involve
                occasional overtime.
              </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
              </h3>
            
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=QIlI7YquuRY&pp=ygUnSW1wcm92aW5nIFR5cGluZyBhbmQgS2V5Ym9hcmRpbmcgU2tpbGxz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Typing and keyboarding skills
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=KANJBsluSXs&pp=ygUhQXR0ZW50aW9uIHRvIERldGFpbCBpbiBEYXRhIEVudHJ5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Attention to detail
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=Mou84IUIzUQ&pp=ygU_RmFtaWxpYXJpdHkgd2l0aCBkYXRhIGVudHJ5IHNvZnR3YXJlOiBVc2luZyBEYXRhIEVudHJ5IFNvZnR3YXJl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Familiarity with data entry software
                </a>{" "}
                <br />
              </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
              Best Places to Work
              </h3>
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/it-data-entry-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IT companies and tech firms
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/administrative-data-entry-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Administrative offices
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/online-retail-data-entry-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Online retail and e-commerce businesses
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/data-processing-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Data processing companies
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/government-data-entry-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Government offices and agencies
                </a>{" "}
              <br />
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}