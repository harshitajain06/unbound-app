import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from 'next/script'


export default function gym_trainer() {
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
            GYM TRAINER{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-lg font-bold mb-4 text-amber-300 ">
              Job Overview
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Gym trainers in India guide individuals in fitness routines,
                provide workout plans, and ensure proper exercise techniques.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-green-300">
              Basic Salary
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Entry-level gym trainers earn around INR 15,000 to INR 25,000
                per month.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-400">
              Time Consumption
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Full-time work, typically 6-8 hours per day, including evenings
                and weekends to accommodate clients.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-yellow-100	">
              Basic Knowledge
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                * Fitness principles and techniques <br />
                * Anatomy and physiology basics <br />
                * Customer service and communication skills <br />
                {" "}
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-200">
              Best Places to Work
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
  * <a href="https://www.naukri.com/fitness-center-jobs" target="_blank" rel="noopener noreferrer">Fitness centers and gyms</a> <br />
  * <a href="https://www.naukri.com/health-club-jobs" target="_blank" rel="noopener noreferrer">Health clubs and wellness centers</a> <br />
  * <a href="https://www.naukri.com/corporate-fitness-jobs" target="_blank" rel="noopener noreferrer">Corporate fitness facilities</a> <br />
  * <a href="https://www.naukri.com/personal-training-jobs" target="_blank" rel="noopener noreferrer">Personal training studios</a> <br />
</p>

            </h3>
          </div>
           
        </div>
      </section>
    </Layout>
  );
}

