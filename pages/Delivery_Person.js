import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from 'next/script'


export default function delivery_person() {
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
            DELIVERY PERSON{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-lg font-bold mb-4 text-amber-300 ">
              Job Overview
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Delivery persons in India are responsible for transporting
                goods, typically food or packages, to customers' locations.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-green-300">
              Basic Salary
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Entry-level delivery persons earn around INR 10,000 to INR
                20,000 per month, including incentives or tips.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-400">
              Time Consumption
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Part-time or full-time positions, typically flexible hours with
                peak demand during meal times and evenings.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-yellow-100	">
              Basic Knowledge
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                * Familiarity with local routes <br />
                * Use of navigation apps <br />
                * Basic customer service skills <br />
                {" "}
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-200">
              Best Places to Work
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
  * <a href="https://www.naukri.com/food-delivery-jobs" target="_blank" rel="noopener noreferrer">Food delivery platforms</a> <br /> 
  * <a href="https://www.naukri.com/e-commerce-jobs" target="_blank" rel="noopener noreferrer">E-commerce companies</a> <br /> 
  * <a href="https://www.naukri.com/logistics-courier-jobs" target="_blank" rel="noopener noreferrer">Courier and logistics services</a> <br /> 
  * <a href="https://www.naukri.com/grocery-delivery-jobs" target="_blank" rel="noopener noreferrer">Grocery delivery services</a> <br /> 
</p>

            </h3>
          </div>
           
        </div>
      </section>
    </Layout>
  );
}

