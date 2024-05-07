import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function waiter() {
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
            WAITER{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
              </h3>
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Waiters in India provide customer service in restaurants by
                taking orders, serving food, and ensuring a positive dining
                experience.
              </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
              </h3>
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Entry-level waiters earn around INR 8,000 to INR 15,000 per
                month, including tips.
              </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
              </h3>
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Part-time or full-time positions, typically 6-8 hours per shift,
                may include weekends and evenings.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
              </h3>
             
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=5swBp9tGKck&pp=ygUgTGVhcm5pbmcgTWVudSBJdGVtcyBhbmQgU3BlY2lhbHM%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Menu items and specials
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=6XUfzRVfauk&pp=ygUhIFRhYmxlIFNlcnZpY2UgRXRpcXVldHRlIFR1dG9yaWFs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Table service etiquette
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=1gJRzeiUd6s&pp=ygUZQ2FzaCBIYW5kbGluZyBmb3IgV2FpdGVycw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cash handling for bill settlements
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
                  href="https://www.naukri.com/fine-dining-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fine dining establishments
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/pub-bar-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pubs and bars
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/banquet-hall-event-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Banquet halls and event venues
                </a>{" "}
                <br />
              </p>

          </div>
        </div>
      </section>
    </Layout>
  );
}
