import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function microfinance_officer() {
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
          right: "19%", // Adjust this value to position the image horizontally
          transform: "translateY(50%)",
          transformOrigin: "center",
        }}
      >
        <div className=" text-center ">
        <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200">
            MICROFINANCE OFFICER
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 ">
            DESCRIPTION
          </h2>

          <div className="text-left">
          <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
              </h3>
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Microfinance Officers in India facilitate financial services for
                individuals in low-income communities, assisting with small
                loans and financial education.
              </p>
          


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Entry-level Microfinance Officers earn around INR 15,000 to INR
                25,000 per month.
              </p>

              <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
              </h3>
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Full-time work, typically 8 hours per day, may involve field
                visits and occasional weekends.
              </p>
            

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
              </h3>
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=q5JWp47z4bY&pp=ygUvRmluYW5jaWFsIExpdGVyYWN5IGFuZCBNaWNyb2ZpbmFuY2UgUHJpbmNpcGxlcyc%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Financial literacy and microfinance principles
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=0-ERXRCB6Nc&pp=ygVDQ3VzdG9tZXIgU2VydmljZSBhbmQgQ29tbXVuaWNhdGlvbiBTa2lsbHMgZm9yIE1pY3JvZmluYW5jZSBPZmZpY2Vycw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Customer service and communication skills
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=Fi1wkUczuyk&pp=ygUlVW5kZXJzdGFuZGluZyBGaW5hbmNpYWwgRG9jdW1lbnRhdGlvbg%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Basic understanding of financial documentation
                </a>{" "}
                <br />
              </p>

              <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
              Best Places to Work
              </h3>
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/microfinance-institution-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Microfinance institutions
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/ngo-microfinance-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Non-governmental organizations (NGOs)
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/rural-urban-development-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rural and urban development projects
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/cooperative-bank-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cooperative banks
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/financial-inclusion-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Financial inclusion programs
                </a>{" "}
                <br />
              </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
