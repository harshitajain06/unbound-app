import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function customer_s_r() {
  const handleGoBack = () => {
    router.back();
  };
return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <section className="py-2">
        <div className="conta15ner mx-auto text-center md:w-2/3 lg:w-1/2">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200">
            CUSTOMER SERVICE REPRESENTATIVE{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-lg font-bold mb-4 text-amber-300 ">
              Job Overview
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
              Customer Service Representatives in India assist customers
               with inquiries, provide information, and resolve issues to ensure a 
               positive customer experience.

              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-green-300">
              Basic Salary
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
              Entry-level Customer Service Representatives earn around 
              INR 15,000 to INR 25,000 per month.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-400">
              Time Consumption
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
              Full-time work, typically 8 hours per day, may 
              involve rotating shifts, including weekends and evenings.

              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-yellow-100	">
              Basic Knowledge
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
              * Product or service knowledge <br/>
              * Communication and problem-solving skills <br/>
              * Familiarity with customer service tools <br/>{" "}
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-200">
              Best Places to Work
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
  * <a href="https://www.naukri.com/call-center-jobs" target="_blank" rel="noopener noreferrer">Call centers and customer support centers</a> <br/>
  * <a href="https://www.naukri.com/ecommerce-customer-service-jobs" target="_blank" rel="noopener noreferrer">E-commerce and online platforms</a> <br/>
  * <a href="https://www.naukri.com/banking-customer-service-jobs" target="_blank" rel="noopener noreferrer">Banking and financial institutions</a> <br/>
  * <a href="https://www.naukri.com/telecom-customer-service-jobs" target="_blank" rel="noopener noreferrer">Telecommunication companies</a> <br/>
  * <a href="https://www.naukri.com/hospitality-customer-service-jobs" target="_blank" rel="noopener noreferrer">Hospitality and service-oriented industries</a> <br/>
</p>

            </h3>
          </div>
           
        </div>
      </section>
    </Layout>
  );
}

