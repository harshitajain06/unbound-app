import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function babysitter() {
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
        right: "26%", // Adjust this value to position the image horizontally
        transform: "translateY(50%)",
        transformOrigin: "center",
      }}
      >
      <div className=" text-center ">
      <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200">
         BABYSITTER{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
              </h3>
             <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Babysitters in India care for children in the absence of
                parents, ensuring their safety and well-being.
              </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Entry-level babysitters earn around INR 6,000 to INR 12,000 per
                month, depending on hours and responsibilities.
              </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Part-time or occasional work, with hours varying based on
                parents' needs, often evenings and weekends.
              </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=HS-LR7hHxk8&pp=ygUgQmFzaWMgQ2hpbGQgQ2FyZSBTa2lsbHMgVHV0b3JpYWw%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Basic child care skills</a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=ZNxa_xPcgm4&pp=ygUlIEVtZXJnZW5jeSBQcm9jZWR1cmVzIGZvciBCYWJ5c2l0dGVycw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Emergency procedures
                  </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=n3oKwCk5k3w&pp=ygUwZWZmZWN0aXZlIGNvbW11bmljYXRpb24gd2l0aCBwYXJlbnRzIGJhYnlzaXR0ZXJz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Communication with parents
                  </a>{" "}
                <br />
              </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
              Best Places to Work
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/babysitting-agency-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Babysitting agencies
                  </a>{" "}
                <br />
              </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
