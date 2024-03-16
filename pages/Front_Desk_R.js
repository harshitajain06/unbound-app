import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from 'next/script'


export default function front_desk_r() {
  const handleGoBack = () => {
    router.back();
  };
return (
    <Layout>
      <Head>
         
      </Head>
      <section className="py-2">
        <div className="conta15ner mx-auto text-center md:w-2/3 lg:w-1/2">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200">
            FRONT DESK RECEPTIONIST{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-lg font-bold mb-4 text-amber-300 ">
              Job Overview
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
              Front Desk Receptionists in India manage the reception area, greet visitors, and 
              handle administrative tasks to ensure a smooth flow of daily operations.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-green-300">
              Basic Salary
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
              Entry-level receptionists earn around INR 12,000 to INR 20,000 per month
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-400">
              Time Consumption
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
              Full-time work, typically 8 hours per day, may include evenings and weekends
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-yellow-100	">
              Basic Knowledge
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
              * Phone handling and customer service < br/>
              * Basic office software usage < br/>
              * Organizational and multitasking skillss < br/>
                {" "}
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-200">
              Best Places to Work
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
  * <a href="https://www.naukri.com/corporate-office-jobs" target="_blank" rel="noopener noreferrer">Corporate offices</a> <br />
  * <a href="https://www.naukri.com/hotel-hospitality-jobs" target="_blank" rel="noopener noreferrer">Hotels and hospitality</a> <br />
  * <a href="https://www.naukri.com/medical-healthcare-jobs" target="_blank" rel="noopener noreferrer">Medical and healthcare facilities</a> <br />
  * <a href="https://www.naukri.com/educational-institution-jobs" target="_blank" rel="noopener noreferrer">Educational institutions</a> <br />
  * <a href="https://www.naukri.com/co-working-space-jobs" target="_blank" rel="noopener noreferrer">Co-working spaces</a> <br />
</p>

            </h3>
          </div>
           
        </div>
      </section>
    </Layout>
  );
}

