import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function kitchen_assistant() {
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
            KITCHEN ASSISTANT{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-2xl font-bold mb-4 text-amber-300 ">
              Job Overview
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Kitchen assistants in India support kitchen operations by
                assisting in food preparation, cleaning, and maintaining a tidy
                work environment.
              </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
              </h3>
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Entry-level kitchen assistants earn around INR 8,000 to INR
                15,000 per month.
              </p>

            <h3 className="text-4xl md:text-2xl font-bold mb-4 text-green-300">
              Time Consumption
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Full-time work, typically 8-10 hours per day, may involve
                evenings and weekends in restaurants or catering services.
              </p>

            <h3 className="text-4xl md:text-2xl font-bold mb-4 text-yellow-100	">
              Basic Knowledge
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=Ddn1W3Rp-Fk&pp=ygUhS2l0Y2hlbiBIeWdpZW5lIGFuZCBTYWZldHkgQmFzaWNz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Basic kitchen hygiene and safety{" "}
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=Hn92VzDTG0s&pp=ygUrRm9sbG93aW5nIEluc3RydWN0aW9ucyBpbiBhIEtpdGNoZW4gU2V0dGluZw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ability to follow instructions
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=bvwwVddzeko&pp=ygUpVGVhbXdvcmsgYW5kIENvbW11bmljYXRpb24gaW4gdGhlIEtpdGNoZW4%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Teamwork and communication skills
                </a>{" "}
                <br />
              </p>

            <h3 className="text-4xl md:text-2xl font-bold mb-4 text-cyan-200">
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
                  href="https://www.naukri.com/food-production-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Food production units
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/institutional-kitchen-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Institutional kitchens (schools, hospitals)
                </a>{" "}
                <br />
              </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
