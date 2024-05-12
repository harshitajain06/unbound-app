import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function market_stall_coordinator() {
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
        <div className="w-full md:pl-64">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200 text-center md:-mt-32 mt-16">
            MARKET STALL COORDINATOR{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8 text-center">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Market Stall Coordinators in India oversee the setup and
                management of market stalls, ensuring smooth operations and
                vendor satisfaction.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
            </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Entry-level Market Stall Coordinators earn around INR 15,000 to
                INR 25,000 per month.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Part-time or full-time work, depending on market schedules, may
                involve weekends and special events.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
            </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=I-XjdcpfXoI&pp=ygUpRXZlbnQgQ29vcmRpbmF0aW9uIGFuZCBMb2dpc3RpY3MgVHV0b3JpYWw%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Event coordination and logistics
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=RnfYqAJnbKc&pp=ygUmRWZmZWN0aXZlIFZlbmRvciBNYW5hZ2VtZW50IFN0cmF0ZWdpZXM%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Vendor management
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=NNzCegosXu8&pp=ygUgVW5kZXJzdGFuZGluZyBNYXJrZXQgUmVndWxhdGlvbnM%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Familiarity with market regulations
                </a>{" "}
                <br />
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
              Best Places to Work
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/event-management-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Event management companies
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/non-profit-organization-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Non-profit organizations organizing markets
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/festival-fair-organizer-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Festival and fair organizers
                </a>{" "}
                <br />
              </p>

          </div>
        </div>
      </section>
    </Layout>
  );
}
