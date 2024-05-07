import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function cook() {
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
        right: "32pa%", // Adjust this value to position the image horizontally
        transform: "translateY(50%)",
        transformOrigin: "center",
         }}>
        <div className=" text-center ">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200">
            COOK{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Cooks in India prepare and cook meals, ensuring the quality and
                taste of dishes.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Entry-level cooks earn around INR 10,000 to INR 20,000 per
                month.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Full-time, 8-10 hours per day, may include weekends and peak
                meal times.
              </p>


            <h3 className="text-4xl md:text-l font-bold mb-4  text-yellow-100 ">
              Basic Knowledge
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=BHcyuzXRqLs&pp=ygUbQ29va2luZyBUZWNobmlxdWVzIFR1dG9yaWFs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cooking techniques{" "}
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=BHcyuzXRqLs&pp=ygUbQ29va2luZyBUZWNobmlxdWVzIFR1dG9yaWFs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Recipe following
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=Ddn1W3Rp-Fk&pp=ygUlIEtpdGNoZW4gU2FmZXR5IGFuZCBIeWdpZW5lIFByYWN0aWNlcw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kitchen safety and hygiene{" "}
                </a>{" "}
                <br />
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
              Best Places to Work
            </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/restaurant-cafe-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Restaurants and cafes
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/hotel-resort-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hotels and resorts
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/catering-services-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Catering services
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/food-beverage-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Food and beverage establishments
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/cafeteria-canteen-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cafeterias and canteens
                </a>{" "}
                <br />
              </p>

          </div>
        </div>
      </section>
    </Layout>
  );
}
