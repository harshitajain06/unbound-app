import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function library_assistant() {
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
        right: "25%", // Adjust this value to position the image horizontally
        transform: "translateY(50%)",
        transformOrigin: "center",
         }}>
        <div className=" text-center ">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200">
            LIBRARY ASSISTANTS{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Library Assistants in India support library operations, aiding
                in the organization and maintenance of library resources.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
            </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Entry-level Library Assistants earn around INR 10,000 to INR
                20,000 per month.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
              </h3>
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Full-time work, typically 8 hours per day, may include weekends.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
            </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=GFVq99psOs8&list=PLNfLHWFEsU8KiGgqKXRCdyPnvxcK4ctxC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Familiarity with library software{" "}
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=CKjWZBuFciI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Customer service skills{" "}
                </a>{" "}
                <br />
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4  text-cyan-200">
              Best Places to Work
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/educational-institution-jobs-in-bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Educational institutions (schools, colleges, universities)
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/librarian-jobs?k=librarian&nignbevent_src=jobsearchDeskGNB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Public libraries
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/library-assistant-jobs?k=library%20assistant&nignbevent_src=jobsearchDeskGNB&functionAreaIdGid=30"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Research institutions
                </a>{" "}
                <br />
              </p>

          </div>
        </div>
      </section>
    </Layout>
  );
}
