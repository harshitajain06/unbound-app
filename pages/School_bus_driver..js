import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function school_bus_driver() {
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
        >
        <div className="w-full md:pl-72">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200 text-center md:-mt-32 mt-16">
            SCHOOL BUS DRIVER{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8 text-center ">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
              </h3>
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                School bus drivers in India transport students to and from
                school safely and adhere to traffic and safety regulations.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Entry-level school bus drivers earn around INR 12,000 to INR
                20,000 per month.
              </p>


              <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Part-time or full-time positions, typically with fixed morning
                and afternoon schedules.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=sCXtcXD17qU&list=PLL4evDjFo88t4pK2qmmoEIVlO9ef2SBMh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Traffic rules and safety regulations
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=fbqpQ-AZiyA&pp=ygUyIFZlaGljbGUgTWFpbnRlbmFuY2UgQmFzaWNzIGZvciBTY2hvb2wgQnVzIERyaXZlcnM%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vehicle maintenance basics{" "}
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=IkbckhXiE2Q&pp=ygUuRWZmZWN0aXZlIENvbW11bmljYXRpb24gZm9yIFNjaG9vbCBCdXMgRHJpdmVycw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Communication with students and school staff
                </a>{" "}
                <br />
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
              Best Places to Work
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/school-transportation-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  School transportation services
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/school-district-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Local school districts
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/student-transport-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Private transportation companies specializing in student
                  transport
                </a>{" "}
                <br />
              </p>

          </div>
        </div>
      </section>
    </Layout>
  );
}
