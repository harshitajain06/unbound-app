import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from 'next/script'


export default function community_o_cord() {
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
            COMMUNITY OUTREACH COORDINATOR{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-lg font-bold mb-4 text-amber-300 ">
              Job Overview
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
              Community Outreach Coordinators in India facilitate engagement and
               collaboration between organizations and the community, promoting
                awareness and participation in programs.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-green-300">
              Basic Salary
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
              Entry-level coordinators earn around INR 20,000 to INR 40,000 per month.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-400">
              Time Consumption
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
              Full-time work, with occasional evenings and weekends for community events.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-yellow-100	">
              Basic Knowledge
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
              * Community engagement strategies <br />
              * Effective communication skills <br />
              * Networking and relationship-building <br />
                {" "}
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-200">
              Best Places to Work
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
             
  * <a href="https://www.naukri.com/non-profit-organization-jobs" target="_blank" rel="noopener noreferrer">Non-profit organizations</a> <br />
  * <a href="https://www.naukri.com/community-development-jobs" target="_blank" rel="noopener noreferrer">NGOs focused on community development</a> <br />
  * <a href="https://www.naukri.com/government-community-jobs" target="_blank" rel="noopener noreferrer">Government community programs</a> <br />
  * <a href="https://www.naukri.com/social-impact-jobs" target="_blank" rel="noopener noreferrer">Social impact initiatives</a> <br />


                {" "}
              </p>
            </h3>
          </div>
           
        </div>
      </section>
    </Layout>
  );
}

