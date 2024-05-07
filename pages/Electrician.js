import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function plumber() {
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
            ELECTRICIAN{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Electricians in India install, maintain, and repair electrical
                systems in buildings.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Entry-level electricians earn around INR 15,000 to INR 25,000
                per month.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Full-time work, typically 8 hours per day, may involve overtime
                and on-call duty.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
              </h3>

              
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=mc979OhitAg&list=PLWv9VM947MKi_7yJ0_FCfzTBXpQU-Qd3K"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Electrical systems
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=syaGf_XUMxA&pp=ygUsV2lyaW5nIGFuZCBDaXJjdWl0cnkgQmFzaWNzIGZvciBFbGVjdHJpY2lhbnM%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wiring and circuitry{" "}
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=ggJo6m8NZtA&pp=ygUhU2FmZXR5IFByb3RvY29scyBmb3IgRWxlY3RyaWNpYW5z"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Safety protocols
                </a>{" "}
                <br />
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
              Best Places to Work
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/electrical-contracting-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Electrical contracting firms
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/construction-company-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Construction companies
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/maintenance-service-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Maintenance services
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/manufacturing-facility-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Manufacturing facilities
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/real-estate-development-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Real estate development projects
                </a>{" "}
                <br />
              </p>

          </div>
        </div>
      </section>
    </Layout>
  );
}
