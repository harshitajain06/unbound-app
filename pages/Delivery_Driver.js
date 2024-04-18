import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function delivery_driver() {
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
            DELIVERY DRIVER{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Delivery drivers in India transport goods, packages, or food
                items to designated locations using a vehicle.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Entry-level delivery drivers earn around INR 12,000 to INR
                20,000 per month, including incentives or bonuses.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
            </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Full-time or part-time positions, with hours varying based on
                delivery demand, including evenings and weekends.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
              </h3>

             
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=-tAxc6wkcc8&pp=ygUrTWFzdGVyaW5nIExvY2FsIFJvdXRlcyBhcyBhIERlbGl2ZXJ5IERyaXZlcg%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Knowledge of local routes and addresses
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=Iwo4sFjbQqY&pp=ygUrU2FmZSBEcml2aW5nIFByYWN0aWNlcyBmb3IgRGVsaXZlcnkgRHJpdmVycw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Safe driving practicess
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=BjX79GsALd8&pp=ygUuQmFzaWMgVmVoaWNsZSBNYWludGVuYW5jZSBmb3IgRGVsaXZlcnkgRHJpdmVycw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Basic vehicle maintenance
                </a>{" "}
                <br />
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
              Best Places to Work
            </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/e-commerce-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  E-commerce companies
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/food-delivery-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Food delivery services
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/logistics-courier-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Logistics and courier companies
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/retail-delivery-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Retail and grocery delivery services
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/ride-hailing-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ride-hailing and transportation services
                </a>{" "}
                <br />
              </p>

          </div>
        </div>
      </section>
    </Layout>
  );
}
