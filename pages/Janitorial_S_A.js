import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function janitorial_s_a() {
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
            JANITORIAL SERVICE ASSISTANT{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
            </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Janitorial Services Assistants in India maintain cleanliness and
                hygiene in various facilities, ensuring a safe and sanitary
                environment.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
            </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Entry-level assistants earn around INR 8,000 to INR 15,000 per
                month.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
            </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Full-time work, typically 8-10 hours per day, may involve
                evening shifts and weekends.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
              </h3>

              
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=Ds03J2AzkGg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cleaning techniques and procedures
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=-3-kpi2rZwc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Safe handling of cleaning chemicals
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=MwgOKhC5xfc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Attention to detail for maintaining cleanliness standards
                </a>{" "}
                <br />
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
              Best Places to Work
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/commercial-office-janitorial-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Commercial office buildings
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/educational-janitorial-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Educational institutions
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/healthcare-janitorial-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Healthcare facilities
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/hospitality-janitorial-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hospitality industry (hotels, resorts)
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/retail-janitorial-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shopping malls and retail stores
                </a>{" "}
                <br />
              </p>

          </div>
        </div>
      </section>
    </Layout>
  );
}
