import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from 'next/script'


export default function cashier() {
  const handleGoBack = () => {
    router.back();
  };
return (
    <Layout>
      <Head>
         
        </Head>
      <section className="py-16">
        <div className=" mx-auto text-center md:w-2/3 lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-lime-200">
            CASHIER{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl  text-center font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-lg font-bold mb-4 text-amber-300 ">
              Job Overview
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Cashiers in India handle financial transactions, operate cash
                registers, and provide customer service.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-green-300">
              Basic Salary
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Entry-level cashiers earn around INR 10,000 to INR 15,000 per
                month.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-400">
              Time Consumption
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Typically work in shifts, 6-8 hours a day, may include weekends
                and evenings.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-yellow-100	">
              Basic Knowledge
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                * Cash handling <br />
                * Basic math skills <br />
                * Customer service <br />
                {" "}
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-200">
              Best Places to Work
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
              * <a href="https://www.naukri.com/retail-cashier-jobs" target="_blank" rel="noopener noreferrer">Retail stores</a> <br />
* <a href="https://www.naukri.com/supermarket-cashier-jobs" target="_blank" rel="noopener noreferrer">Supermarkets</a> <br />
* <a href="https://www.naukri.com/restaurant-cashier-jobs" target="_blank" rel="noopener noreferrer">Restaurants</a> <br />
* <a href="https://www.naukri.com/bank-cashier-jobs" target="_blank" rel="noopener noreferrer">Banks </a> <br />
* <a href="https://www.naukri.com/shopping-mall-cashier-jobs" target="_blank" rel="noopener noreferrer">Shopping malls </a> <br />
                {" "}
              </p>
            </h3>
          </div>
           
        </div>
      </section>
    </Layout>
  );
}



