import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";

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
      <section className="py-2">
        <div className="conta15ner mx-auto text-center md:w-2/3 lg:w-1/2">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200">
            DATA ENTRY CLERK{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-lg font-bold mb-4 text-amber-300 ">
              Job Overview
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Data Entry Clerks in India input and manage data into computer
                systems, ensuring accuracy and efficiency
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-green-300">
              Basic Salary
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Entry-level Data Entry Clerks earn around INR 10,000 to INR
                20,000 per month.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-400">
              Time Consumption
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Full-time work, typically 8 hours per day, may involve
                occasional overtime.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-yellow-100	">
              Basic Knowledge
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                * Typing and keyboarding skills <br />
                * Attention to detail <br />
                * Familiarity with data entry software <br />
                {" "}
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-200">
              Best Places to Work
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
  * <a href="https://www.naukri.com/it-data-entry-jobs" target="_blank" rel="noopener noreferrer">IT companies and tech firms</a> <br />
  * <a href="https://www.naukri.com/administrative-data-entry-jobs" target="_blank" rel="noopener noreferrer">Administrative offices</a> <br />
  * <a href="https://www.naukri.com/online-retail-data-entry-jobs" target="_blank" rel="noopener noreferrer">Online retail and e-commerce businesses</a> <br />
  * <a href="https://www.naukri.com/data-processing-jobs" target="_blank" rel="noopener noreferrer">Data processing companies</a> <br />
  * <a href="https://www.naukri.com/government-data-entry-jobs" target="_blank" rel="noopener noreferrer">Government offices and agencies</a> <br />
</p>

            </h3>
          </div>
           
        </div>
      </section>
    </Layout>
  );
}

