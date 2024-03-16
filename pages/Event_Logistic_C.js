import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function event_logistic_c() {
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
            EVENT LOGISTICS COORDINATOR{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-lg font-bold mb-4 text-amber-300 ">
              Job Overview
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
              Event Logistics Coordinators in India manage the planning and execution of
               logistical details for events, ensuring smooth operations.

              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-green-300">
              Basic Salary
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
              Entry-level coordinators earn around INR 20,000 to INR 40,000 per month
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-400">
              Time Consumption
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
              Full-time work, varying based on event schedules, may involve weekends and evenings.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-yellow-100	">
              Basic Knowledge
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
              * Event planning and logistics < br/>
              * Vendor coordination < br/>
              * Strong organizational skills < br/>
                
                {" "}
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-200">
              Best Places to Work
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
  * <a href="https://www.naukri.com/event-management-jobs" target="_blank" rel="noopener noreferrer">Event management companies</a> <br/>
  * <a href="https://www.naukri.com/corporate-event-jobs" target="_blank" rel="noopener noreferrer">Corporate event teams</a> <br/>
  * <a href="https://www.naukri.com/wedding-planning-jobs" target="_blank" rel="noopener noreferrer">Wedding planning firms</a> <br/>
  * <a href="https://www.naukri.com/exhibition-conference-jobs" target="_blank" rel="noopener noreferrer">Exhibition and conference organizers</a> <br/>
</p>

            </h3>
          </div>
           
        </div>
      </section>
    </Layout>
  );
}

