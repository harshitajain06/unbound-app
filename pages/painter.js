import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function painter() {
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
            PAINTER{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
            </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Painters in India apply paint, varnish, or other finishes to
                surfaces for decorative or protective purposes.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
            </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Entry-level painters earn around INR 10,000 to INR 20,000 per
                month.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
            </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Full-time work, typically 8-10 hours per day, may involve
                weekends and overtime for project deadlines.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
            </h3>


              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=ah5K8PUCwns&pp=ygUrU3VyZmFjZSBQcmVwYXJhdGlvbiBUZWNobmlxdWVzIGZvciBQYWludGluZw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Surface preparation
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=bNnlz_4xJD0&pp=ygUgQ29sb3IgTWF0Y2hpbmcgVGlwcyBmb3IgUGFpbnRlcnM%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Color matching{" "}
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=rcfMSeilPkg&pp=ygUcUGFpbnRpbmcgVGVjaG5pcXVlcyBUdXRvcmlhbA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Painting techniques
                </a>{" "}
                <br />
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
              Best Places to Work
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/construction-painter-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Construction and contracting companies
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/residential-commercial-painting-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Residential and commercial painting services
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/renovation-remodeling-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Renovation and remodeling projects
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/automotive-painting-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Automotive painting workshops
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/furniture-manufacturing-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Furniture manufacturing and finishing units
                </a>{" "}
                <br />
              </p>

          </div>
        </div>
      </section>
    </Layout>
  );
}
