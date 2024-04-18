import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function gym_trainer() {
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
            GYM TRAINER{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Gym trainers in India guide individuals in fitness routines,
                provide workout plans, and ensure proper exercise techniques.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
            </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Entry-level gym trainers earn around INR 15,000 to INR 25,000
                per month.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Full-time work, typically 6-8 hours per day, including evenings
                and weekends to accommodate clients.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
              </h3>
              
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=DcTTOsptCMk&pp=ygUqRml0bmVzcyBQcmluY2lwbGVzIGFuZCBUZWNobmlxdWVzIFR1dG9yaWFs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fitness principles and techniques
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=nuzT2iJESFA&pp=ygUuQW5hdG9teSBhbmQgUGh5c2lvbG9neSBCYXNpY3MgZm9yIEd5bSBUcmFpbmVycw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Anatomy and physiology basics{" "}
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=4L_xcWCOQOA&pp=ygUzQ3VzdG9tZXIgU2VydmljZSBhbmQgQ29tbXVuaWNhdGlvbiBmb3IgR3ltIFRyYWluZXJz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Customer service and communication skills
                </a>{" "}
                <br />
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
              Best Places to Work
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/fitness-center-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fitness centers and gyms
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/health-club-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Health clubs and wellness centers
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/corporate-fitness-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Corporate fitness facilities
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/personal-training-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Personal training studios
                </a>{" "}
                <br />
              </p>

          </div>
        </div>
      </section>
    </Layout>
  );
}
