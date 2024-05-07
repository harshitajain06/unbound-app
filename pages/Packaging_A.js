import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function packaging_assistant() {
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
            PACKAGING ASSISTANT{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Packaging assistants in India support the packaging process by
                preparing, assembling, and labeling products for shipment.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Entry-level packaging assistants earn around INR 8,000 to INR
                15,000 per month.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Full-time work, typically 8-10 hours per day, may involve
                rotating shifts and overtime during peak production periods.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
            </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=qK1BxD6V8hg&pp=ygUkSW50cm9kdWN0aW9uIHRvIFBhY2thZ2luZyBQcm9jZWR1cmVz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Basic understanding of packaging procedures
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=jk7A4yXKxUk&pp=ygUcQWNjdXJhdGUgTGFiZWxpbmcgVGVjaG5pcXVlcw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Attention to detail for accurate labeling
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=sGFweY53CPI&pp=ygUhIFRlYW13b3JrIGluIFBhY2thZ2luZyBPcGVyYXRpb25z"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ability to work efficiently in a team{" "}
                </a>{" "}
                <br />
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
              Best Places to Work
            </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/manufacturing-production-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Manufacturing and production facilities
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/packaging-labeling-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Packaging and labeling companies
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/ecommerce-fulfillment-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  E-commerce fulfillment centers
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/food-beverage-processing-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Food and beverage processing units
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/retail-distribution-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Retail and wholesale distribution centers
                </a>{" "}
                <br />
              </p>

          </div>
        </div>
      </section>
    </Layout>
  );
}
