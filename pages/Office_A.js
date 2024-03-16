import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function office_assistant() {
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
            OFFICE ASSISTANT{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-lg font-bold mb-4 text-amber-300 ">
              Job Overview
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Office Assistants in India provide administrative support,
                helping maintain smooth office operations.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-green-300">
              Basic Salary
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Entry-level Office Assistants earn around INR 12,000 to INR
                25,000 per month.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-400">
              Time Consumption
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Full-time work, typically 8 hours per day, Monday to Friday.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-yellow-100	">
              Basic Knowledge
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=SH4oyV5AJ6A"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Proficiency in office software (e.g., MS Office){" "}
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=9HSaawhDibg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Organizational and multitasking skills{" "}
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://youtube.com/watch?v=lNaBWbpe2Dw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Communication and interpersonal skills{" "}
                </a>{" "}
                <br />
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-200">
              Best Places to Work
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/office-assistant-jobs?k=office%20assistant&nignbevent_src=jobsearchDeskGNB&qbusinessSize=211"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Corporate offices
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/office-assistant-jobs?k=office%20assistant&nignbevent_src=jobsearchDeskGNB&qbusinessSize=215"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Government offices
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/non-profit-office-assistant-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Non-profit organizations
                </a>{" "}
                <br />
              </p>
            </h3>
          </div>
        </div>
      </section>
    </Layout>
  );
}
