import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function car_r_tech() {
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
          right: "17%", // Adjust this value to position the image horizontally
          transform: "translateY(50%)",
          transformOrigin: "center",
        }}
      >
        <div className=" text-center ">
        <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200">
            CAR REPAIR TECHNICIAN{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 ">
            DESCRIPTION
          </h2>

          <div className="text-left">
          <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
            </h3>

            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
            Auto mechanics diagnose and fix car issues, specializing in areas like engines, transmissions, 
            brakes, and electrical systems.
            </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
            </h3>

            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
              The basic salary for a Car Repair Technician in India varies based
              on experience, location, and the employer. <br/>
              The monthly salary ranges from INR 15,000 to
              INR 25,000. 
            </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
            </h3>

            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
            Car repair technicians typically work 8 to 10 hours daily, with
            potential for overtime and weekend shifts depending on workload and employer policies.
            </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
            </h3>

            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
              *{" "}
              <a
                href="https://www.youtube.com/watch?v=hs7bABMtOMI&list=PLyqSpQzTE6M9G2SNxKfsVEjcM9MlJau4F"
                target="_blank"
                rel="noopener noreferrer"
              >
                Knowledge of automotive systems and components
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.youtube.com/watch?v=6O6Jzrj5HDs&list=PL_qYi3X0_AN5IFMFTvQhwVQpKeWEruDIN"
                target="_blank"
                rel="noopener noreferrer"
              >
                Diagnostic skills to identify issues
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.youtube.com/watch?v=ws47r89o1a8&pp=ygU1VXNpbmcgUmVwYWlyIFRvb2xzIGFuZCBFcXVpcG1lbnQgaW4gQXV0b21vdGl2ZSBSZXBhaXI%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Proficiency in using repair tools and equipment
              </a>{" "}
              <br />
            </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
              Best Places to Work
            </h3>

            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
              *{" "}
              <a
                href="https://www.naukri.com/automotive-repair-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Automotive repair shops
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/car-dealership-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Car dealerships
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/fleet-maintenance-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fleet maintenance companies
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/independent-garage-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Independent garages
              </a>{" "}
              <br />
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
