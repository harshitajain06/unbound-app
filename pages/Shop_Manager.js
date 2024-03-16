import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";


export default function shop_manager() {

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
            SHOP MANAGER{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-lg font-bold mb-4 text-amber-300 ">
              Job Overview
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Shop managers in India oversee daily operations, manage staff,
                and ensure the smooth functioning of retail establishments.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-green-300">
              Basic Salary
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Entry-level shop managers earn around INR 20,000 to INR 35,000
                per month.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-400">
              Time Consumption
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Full-time work, typically 8-10 hours per day, may include
                weekends and peak retail hours.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-yellow-100	">
              Basic Knowledge
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                * Retail management practices <br />
                * Inventory control <br />
                * Customer service skills <br />{" "}
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-200">
              Best Places to Work
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
  * <a href="https://www.naukri.com/retail-store-manager-jobs" target="_blank" rel="noopener noreferrer">Retail stores</a> <br />
  * <a href="https://www.naukri.com/supermarket-manager-jobs" target="_blank" rel="noopener noreferrer">Supermarkets</a> <br />
  * <a href="https://www.naukri.com/specialty-shop-manager-jobs" target="_blank" rel="noopener noreferrer">Specialty shops</a> <br />
  * <a href="https://www.naukri.com/fashion-apparel-manager-jobs" target="_blank" rel="noopener noreferrer">Fashion and apparel outlets</a> <br />
  * <a href="https://www.naukri.com/electronics-appliance-manager-jobs" target="_blank" rel="noopener noreferrer">Electronics and appliance stores</a> <br />
</p>

            </h3>
          </div>
           
        </div>
      </section>
    </Layout>
  );
}

