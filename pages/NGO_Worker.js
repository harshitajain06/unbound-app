import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function ngo_workers() {
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
            NGO WORKERS{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
              </h3>
         
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Working in NGOs in India involves roles in social service,
                community development, and advocacy for various causes.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
              </h3>
             
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Varied, often depending on the NGO's funding, ranging from INR
                15,000 to INR 40,000 or more per month.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
              </h3>
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Full-time work, typically 8 hours per day, may involve fieldwork
                and occasional weekends.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
              </h3>
           
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=_9ue5TW0vgg&list=PLX5QIUdjuxZd1OgzFDnICjqLKjBsDaZjU"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Understanding of social issues and causes
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=rck3MnC7OXA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Project management and organizational skills
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=QGHBq5OEsBM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Communication and interpersonal skills
                </a>{" "}
                <br />
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
              Best Places to Work
              </h3>
             
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/ngo-jobs?k=ngo&nignbevent_src=jobsearchDeskGNB&functionAreaIdGid=21"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Social impact organizations
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/ngo-jobs?k=ngo&nignbevent_src=jobsearchDeskGNB&functionAreaIdGid=14"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Community development projects
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/ngo-jobs?k=ngo&nignbevent_src=jobsearchDeskGNB&functionAreaIdGid=23&functionAreaIdGid=25"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Health and education-focused NGOs
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/ngo-jobs?k=ngo&nignbevent_src=jobsearchDeskGNB&functionAreaIdGid=7&functionAreaIdGid=23"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Environmental and humanitarian NGOs
                </a>{" "}
                <br />
              </p>

          </div>
        </div>
      </section>
    </Layout>
  );
}
