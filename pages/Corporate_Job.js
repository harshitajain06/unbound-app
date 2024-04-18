import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function corporate_jobs() {
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
        right: "22%", // Adjust this value to position the image horizontally
        transform: "translateY(50%)",
        transformOrigin: "center",
         }}>
        <div className=" text-center ">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200">
            CORPORATE JOBS{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Corporate jobs in India encompass a wide range of roles across
                industries, typically in office settings, involving various
                functions.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
            </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Varied based on position and industry, ranging from INR 20,000
                to INR 100,000 or more per month.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
            </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Full-time work, typically 8 hours per day, Monday to Friday, may
                involve occasional overtime.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=E__6xOmbgR8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Industry-specific skills and knowledge
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=SH4oyV5AJ6A"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Proficiency in office software and communication tools{" "}
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=TODaNm216E8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adaptability and teamwork
                </a>{" "}
                <br />
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4  text-cyan-200">
              Best Places to Work
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/corporate-multinational-jobs?k=corporate%20multinational&nignbevent_src=jobsearchDeskGNB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Multinational corporations
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/corporate-financial-jobs?k=corporate%20financial&nignbevent_src=jobsearchDeskGNB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Financial institutions
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/corporate-jobs?k=corporate&nignbevent_src=jobsearchDeskGNB&functionAreaIdGid=8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IT and technology companies
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/corporate-jobs?k=corporate&nignbevent_src=jobsearchDeskGNB&functionAreaIdGid=19"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consulting firms
                </a>{" "}
                <br />
              </p>

          </div>
        </div>
      </section>
    </Layout>
  );
}
