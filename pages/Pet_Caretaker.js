import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function pet_caretaker() {
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
            PET CARETAKER{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Pet caretakers in India provide care and attention to pets in
                the absence of their owners, ensuring their well-being and
                happiness.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Entry-level pet caretakers earn around INR 8,000 to INR 15,000
                per month, depending on responsibilities and hours.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Part-time or full-time work, with hours varying based on
                clients' needs and pet care requirements.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
              </h3>


              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=Ik9dHDqlTpc&pp=ygUiVW5kZXJzdGFuZGluZyBQZXQgQnJlZWRzIGFuZCBOZWVkcw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Understanding of different pet breeds and their needs
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=s9sOynrptU0&pp=ygUdSW50cm9kdWN0aW9uIHRvIFBldCBGaXJzdCBBaWQ%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Basic knowledge of pet first aid{" "}
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=mrHSmZGSGLQ&pp=ygUVU2FmZSBIYW5kbGluZyBvZiBQZXRz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ability to handle and manage pets safely
                </a>{" "}
                <br />
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
              Best Places to Work
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/pet-care-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pet care services and businesses
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/pet-grooming-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pet grooming salons
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/veterinary-clinic-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Veterinary clinics with boarding facilities
                </a>{" "}
                <br />
              </p>

          </div>
        </div>
      </section>
    </Layout>
  );
}
