import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function customer_s_r() {
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
          bottom: "48%",
          right: "24%", // Adjust this value to position the image horizontally
          transform: "translateY(50%)",
          transformOrigin: "center",
        }}
      >
        <div className=" text-center ">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200">
            CUSTOMER SERVICE REPRESENTATIVE{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
            </h3>

            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
              Customer Service Representatives assist customers with
              inquiries and resolve issues to ensure a
              positive customer experience.
            </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
            </h3>

            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
              Entry-level Customer Service Representatives earn around INR
              15,000 to INR 25,000 per month.
            </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
            </h3>

            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
              Full-time work, typically 8 hours per day, may involve rotating
              shifts, including weekends and evenings.
            </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
            </h3>

            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
              *{" "}
              <a
                href="https://www.youtube.com/watch?v=LRJXMKZ4wOw&pp=ygVBUHJvZHVjdCBvciBTZXJ2aWNlIEtub3dsZWRnZSBmb3IgQ3VzdG9tZXIgU2VydmljZSBSZXByZXNlbnRhdGl2ZXM%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Product or service knowledge
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.youtube.com/watch?v=LRJXMKZ4wOw&pp=ygVBUHJvZHVjdCBvciBTZXJ2aWNlIEtub3dsZWRnZSBmb3IgQ3VzdG9tZXIgU2VydmljZSBSZXByZXNlbnRhdGl2ZXM%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Communication and problem-solving skills
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.youtube.com/watch?v=oP6_SEpvaFA&pp=ygUqOiBVc2luZyBDdXN0b21lciBTZXJ2aWNlIFRvb2xzIEVmZmVjdGl2ZWx5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Familiarity with customer service tools
              </a>{" "}
              <br />
            </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
              Best Places to Work
            </h3>

            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
              *{" "}
              <a
                href="https://www.naukri.com/call-center-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Call centers and customer support centers
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/ecommerce-customer-service-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                E-commerce and online platforms
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/banking-customer-service-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Banking and financial institutions
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/telecom-customer-service-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telecommunication companies
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/hospitality-customer-service-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hospitality and service-oriented industries
              </a>{" "}
              <br />
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
