import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";


export default function waiter() {
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
            WAITER{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-lg font-bold mb-4 text-amber-300 ">
              Job Overview
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Waiters in India provide customer service in restaurants by
                taking orders, serving food, and ensuring a positive dining
                experience.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-green-300">
              Basic Salary
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Entry-level waiters earn around INR 8,000 to INR 15,000 per
                month, including tips.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-400">
              Time Consumption
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Part-time or full-time positions, typically 6-8 hours per shift,
                may include weekends and evenings.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-yellow-100	">
              Basic Knowledge
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                * Menu items and specials <br />
                * Table service etiquette <br />
                * Cash handling for bill settlements<br />
                {" "}
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-200">
              Best Places to Work
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
  * <a href="https://www.naukri.com/restaurant-cafe-jobs" target="_blank" rel="noopener noreferrer">Restaurants and cafes</a> <br />
  * <a href="https://www.naukri.com/hotel-resort-jobs" target="_blank" rel="noopener noreferrer">Hotels and resorts</a> <br />
  * <a href="https://www.naukri.com/fine-dining-jobs" target="_blank" rel="noopener noreferrer">Fine dining establishments</a> <br />
  * <a href="https://www.naukri.com/pub-bar-jobs" target="_blank" rel="noopener noreferrer">Pubs and bars</a> <br />
  * <a href="https://www.naukri.com/banquet-hall-event-jobs" target="_blank" rel="noopener noreferrer">Banquet halls and event venues</a> <br />
</p>

            </h3>
          </div>
           
        </div>
      </section>
    </Layout>
  );
}

