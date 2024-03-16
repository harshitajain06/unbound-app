import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";


export default function plumber() {

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
            PLUMBER{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-lg font-bold mb-4 text-amber-300 ">
              Job Overview
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Plumbers in India install, repair, and maintain plumbing systems
                in residential and commercial buildings.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-green-300">
              Basic Salary
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Entry-level plumbers earn around INR 15,000 to INR 25,000 per
                month.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-400">
              Time Consumption
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Full-time work, typically 8 hours per day, may include weekends
                and emergencies.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-yellow-100	">
              Basic Knowledge
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                * Plumbing systems <br />
                * Blueprint reading <br />
                * Plumbing codes and regulations <br />{" "}
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-200">
              Best Places to Work
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
  * <a href="https://www.naukri.com/plumbing-contractor-jobs" target="_blank" rel="noopener noreferrer">Plumbing contractors</a> <br />
  * <a href="https://www.naukri.com/construction-company-jobs" target="_blank" rel="noopener noreferrer">Construction companies</a> <br />
  * <a href="https://www.naukri.com/maintenance-service-jobs" target="_blank" rel="noopener noreferrer">Maintenance services</a> <br />
  * <a href="https://www.naukri.com/real-estate-development-jobs" target="_blank" rel="noopener noreferrer">Real estate development projects</a> <br />
  * <a href="https://www.naukri.com/facilities-management-jobs" target="_blank" rel="noopener noreferrer">Facilities management companies</a> <br />
</p>

            </h3>
          </div>
           
        </div>
      </section>
    </Layout>
  );
}

