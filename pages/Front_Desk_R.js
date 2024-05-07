import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function front_desk_r() {
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
         }}>
        <div className=" text-center ">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200">
            FRONT DESK RECEPTIONIST{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Front Desk Receptionists manage the reception area,
                greet visitors, and handle administrative tasks
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Entry-level receptionists earn around INR 12,000 to INR 20,000
                per month
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Full-time work, typically 8 hours per day, may include evenings
                and weekends
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
              </h3>
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=UFIn7Exdri8&pp=ygU9IFBob25lIEhhbmRsaW5nIGFuZCBDdXN0b21lciBTZXJ2aWNlIFNraWxscyBmb3IgUmVjZXB0aW9uaXN0cw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Phone handling and customer service
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=cXw8xGeVUr0&pp=ygUtQmFzaWMgT2ZmaWNlIFNvZnR3YXJlIFVzYWdlIGZvciBSZWNlcHRpb25pc3Rz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Basic office software usage{" "}
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=kBwlDiW7i6g&pp=ygU4T3JnYW5pemF0aW9uYWwgYW5kIE11bHRpdGFza2luZyBTa2lsbHMgZm9yIFJlY2VwdGlvbmlzdHM%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Organizational and multitasking skillss
                </a>{" "}
                <br />
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
              Best Places to Work
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/corporate-office-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Corporate offices
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/hotel-hospitality-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hotels and hospitality
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/medical-healthcare-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Medical and healthcare facilities
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/educational-institution-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Educational institutions
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/co-working-space-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Co-working spaces
                </a>{" "}
                <br />
              </p>

          </div>
        </div>
      </section>
    </Layout>
  );
}
