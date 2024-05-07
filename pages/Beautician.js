import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function beautician() {
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
            BEAUTICIAN{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
              </h3>
            
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Beauticians in India provide beauty treatments and services,
                including skincare, makeup, and hair styling.
              </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
              </h3>
              
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Entry-level beauticians earn around INR 10,000 to INR 20,000 per
                month, depending on experience and location.
              </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
              </h3>
             
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Full-time work, typically 8-10 hours per day, may include
                weekends and evenings to accommodate client schedules.
              </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
              </h3>
              
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=r0_Yp3EDqRE&pp=ygUpQmVhdXR5IFRyZWF0bWVudHMgYW5kIFRlY2huaXF1ZXMgVHV0b3JpYWw%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Beauty treatments and techniques
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=F70SFquZdvw&pp=ygUtVW5kZXJzdGFuZGluZyBDb3NtZXRpY3MgYW5kIFNraW5jYXJlIFByb2R1Y3Rz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cosmetics and skincare products
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=z3Plijwwo-8&pp=ygUtRWZmZWN0aXZlIENsaWVudCBDb25zdWx0YXRpb24gZm9yIEJlYXV0aWNpYW5z"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Client consultation skills
                </a>{" "}
                <br />
              </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
              Best Places to Work
              </h3>
              
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/beauty-salon-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Beauty salons and parlors
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/spa-wellness-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Spa and wellness centers
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/bridal-makeup-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bridal and wedding makeup services
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/cosmetic-retail-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cosmetic retail outlets
                </a>{" "}
                <br />
              </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
