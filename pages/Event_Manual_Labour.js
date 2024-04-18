import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function event_m_labour() {
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
         }}>
        <div className=" text-center ">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200">
            EVENT MANUAL LABOUR
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Event manual laborers in India provide physical support for
                event setup, teardown, and various tasks during events.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
            </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Entry-level event manual laborers earn around INR 8,000 to INR
                15,000 per month.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Part-time or full-time work, varying based on event schedules,
                including weekends and evenings.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
            </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=AzYl6ehvX8g&pp=ygUtTWFpbnRhaW5pbmcgUGh5c2ljYWwgRml0bmVzcyBmb3IgTWFudWFsIExhYm9y"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Physical fitness for manual tasks
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=Q_Ece-fPKuw&pp=ygUnRm9sbG93aW5nIFNldHVwIEluc3RydWN0aW9ucyBmb3IgRXZlbnRz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ability to follow setup instructions{" "}
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=I-XjdcpfXoI&pp=ygUoVGVhbXdvcmsgYW5kIENvb3JkaW5hdGlvbiBpbiBFdmVudCBTZXR1cA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Teamwork and coordination skills{" "}
                </a>{" "}
                <br />
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
              Best Places to Work
            </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/event-management-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Event management companies
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/convention-exhibition-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Convention and exhibition centers
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/wedding-event-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wedding and event venues
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/catering-hospitality-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Catering and hospitality services
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/entertainment-production-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Entertainment and production companies
                </a>{" "}
                <br />
              </p>

          </div>
        </div>
      </section>
    </Layout>
  );
}
