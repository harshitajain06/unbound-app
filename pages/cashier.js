import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function cashier() {
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
        bottom: "49%",
        right: "27%", // Adjust this value to position the image horizontally
        transform: "translateY(50%)",
        transformOrigin: "center",
      }}
      >
        <div className=" text-center ">
        <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200">
            CASHIER{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl  text-center font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Cashiers in India handle financial transactions, operate cash
                registers, and provide customer service.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
              </h3>


              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Entry-level cashiers earn around INR 10,000 to INR 15,000 per
                month.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Typically work in shifts, 6-8 hours a day, may include weekends
                and evenings.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
              </h3>


             
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=lfHo6bYChlw&pp=ygUlQ2FzaCBIYW5kbGluZyBUZWNobmlxdWVzIGZvciBDYXNoaWVycw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cash handling
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=WTymHTX2bZg&pp=ygUibXByb3ZpbmcgQmFzaWMgTWF0aCBTa2lsbHMgY2FzaGllcg%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Basic math skills
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=C4qwBMhhNOo&pp=ygUkQ3VzdG9tZXIgU2VydmljZSBTa2lsbHMgZm9yIENhc2hpZXJz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Customer service{" "}
                </a>{" "}
                <br />{" "}
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
              Best Places to Work
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/retail-cashier-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Retail stores
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/supermarket-cashier-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Supermarkets
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/restaurant-cashier-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Restaurants
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/bank-cashier-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Banks{" "}
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/shopping-mall-cashier-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shopping malls{" "}
                </a>{" "}
                <br />{" "}
              </p>

          </div>
        </div>
      </section>
    </Layout>
  );
}
