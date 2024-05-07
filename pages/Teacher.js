import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function teacher() {
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
            TEACHER{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
              </h3>
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Teachers in India educate students, create lesson plans, and
                foster a positive learning environment.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Entry-level teachers earn around INR 20,000 to INR 40,000 per
                month.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
              </h3>
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Full-time work, typically 6-8 hours per day, Monday to Friday.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=UCFg9bcW7Bk&pp=ygUrOiBEZXZlbG9waW5nIFN1YmplY3QgRXhwZXJ0aXNlIGFzIGEgVGVhY2hlcg%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Subject expertise
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=bSMklmxTMAk&pp=ygUsQ2xhc3Nyb29tIE1hbmFnZW1lbnQgVGVjaG5pcXVlcyBmb3IgVGVhY2hlcnM%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Classroom management skills{" "}
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=myie9BJOhZc&pp=ygUvRWZmZWN0aXZlIENvbW11bmljYXRpb24gU3RyYXRlZ2llcyBmb3IgVGVhY2hlcnM%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Effective communication{" "}
                </a>{" "}
                <br />
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
              Best Places to Work
              </h3>
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/teaching-school-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schools (public and private)
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/teaching-college-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Colleges and universities
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/coaching-center-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coaching centers
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/educational-ngo-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Educational NGOs
                </a>{" "}
                <br />
              </p>

          </div>
        </div>
      </section>
    </Layout>
  );
}
