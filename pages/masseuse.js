import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from 'next/script'


export default function masseuse() {
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
            MASSEUSE{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-lg font-bold mb-4 text-amber-300 ">
              Job Overview
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Masseuse in India provide massage therapy to clients for
                relaxation and therapeutic purposes.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-green-300">
              Basic Salary
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Entry-level masseuse earn around INR 8,000 to INR 15,000 per
                month
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-400">
              Time Consumption
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Varies based on appointments, typically part-time or flexible
                hours
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-yellow-100	">
              Basic Knowledge
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                * Massage techniques <br />
                * Anatomy and physiology basics <br />
                * Client communication skills <br />{" "}
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-200">
              Best Places to Work
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
  * <a href="https://www.naukri.com/spa-wellness-jobs" target="_blank" rel="noopener noreferrer">Spa and wellness centers</a> <br />
  * <a href="https://www.naukri.com/massage-therapy-jobs" target="_blank" rel="noopener noreferrer">Massage therapy clinics</a> <br />
  * <a href="https://www.naukri.com/resort-hotel-jobs" target="_blank" rel="noopener noreferrer">Resorts and hotels</a> <br />
  * <a href="https://www.naukri.com/fitness-health-club-jobs" target="_blank" rel="noopener noreferrer">Fitness and health clubs</a> <br />
</p>

            </h3>
          </div>
           
        </div>
      </section>
    </Layout>
  );
}

