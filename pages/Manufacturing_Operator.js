import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function manufacturing_operator() {
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
        bottom: "48%",
        right: "28%",
        transform: "translateY(50%)",
        transformOrigin: "center",
      }}
      >
      <div className=" text-center ">
        <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200">
           MANUFACTURING OPERATOR{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
          <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
            </h3>

            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
              A Manufacturing Operator in India is responsible for running
              machinery to produce goods.
              <br />
               The role involves following schedules,
              ensuring quality, and maintaining a safe work environment.
            </p>
         

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
            </h3>

            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
              Entry-level operators earn around INR 12,000 to INR 20,000 per
              month.
            </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
            </h3>

            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
              Shift-based work, 8-12 hours, including weekends or nights as
              needed.
            </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
            </h3>

            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
              *{" "}
              <a
                href="https://www.youtube.com/watch?v=NZB-S_9aSN0&pp=ygU4TWFjaGluZSBPcGVyYXRpb24gVGVjaG5pcXVlcyBmb3IgTWFudWZhY3R1cmluZyBPcGVyYXRvcnM%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Machine operation
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.youtube.com/watch?v=sg22hhnfN2Y&pp=ygUuOiBTYWZldHkgUHJvdG9jb2xzIGluIE1hbnVmYWN0dXJpbmcgT3BlcmF0aW9ucw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Safety protocols
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.youtube.com/watch?v=ic5R4C5HRUg&pp=ygUwVHJvdWJsZXNob290aW5nIFRpcHMgZm9yIE1hbnVmYWN0dXJpbmcgT3BlcmF0b3Jz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Basic troubleshooting
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.youtube.com/watch?v=EDACGAvMxR8&pp=ygUtRWZmZWN0aXZlIFRlYW0gQ29sbGFib3JhdGlvbiBpbiBNYW51ZmFjdHVyaW5n"
                target="_blank"
                rel="noopener noreferrer"
              >
                Team collaboration
              </a>{" "}
            </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4  text-cyan-200">
              Best Places to Work
            </h3>

            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
              *{" "}
              <a
                href="https://www.naukri.com/automotive-manufacturing-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Automotive manufacturing
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/electronics-manufacturing-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Electronics and electrical goods manufacturing
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/textile-manufacturing-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Textile and apparel manufacturing
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/chemical-pharmaceutical-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chemical and pharmaceutical manufacturing
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/food-beverage-manufacturing-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Food and beverage manufacturing
                </a>{" "}
              <br />
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

