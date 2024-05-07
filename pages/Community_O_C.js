import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function community_o_cord() {
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
          right: "21%", // Adjust this value to position the image horizontally
          transform: "translateY(50%)",
          transformOrigin: "center",
        }}
      >
        <div className=" text-center ">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200">
            COMMUNITY OUTREACH COORDINATOR{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
            </h3>

            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
              Community Outreach Coordinators facilitate engagement and
              collaboration between organizations and the community, promoting
              awareness 
            </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
            </h3>

            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
              Entry-level coordinators earn around INR 20,000 to INR 40,000 per
              month.
            </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
            </h3>

            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
              Full-time work, with occasional evenings and weekends for
              community events.
            </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
            </h3>

            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
              *{" "}
              <a
                href="https://www.youtube.com/watch?v=KsohoMyro9Y&pp=ygU5Q29tbXVuaXR5IEVuZ2FnZW1lbnQgU3RyYXRlZ2llcyBmb3IgT3V0cmVhY2ggQ29vcmRpbmF0b3Jz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Community engagement strategies
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.youtube.com/watch?v=I6IAhXM-vps&pp=ygU4RWZmZWN0aXZlIENvbW11bmljYXRpb24gU2tpbGxzIGZvciBPdXRyZWFjaCBDb29yZGluYXRvcnM%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Effective communication skills
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.youtube.com/watch?v=ohy48GSXZzA&list=PLLhxQtMM7yN3NIUROpY2bvt6TPp49JW8V"
                target="_blank"
                rel="noopener noreferrer"
              >
                Networking and relationship-building
              </a>{" "}
              <br />{" "}
            </p>

            <h3 className="text-4xl md:text-l font-bold mb-4  text-cyan-200">
              Best Places to Work
            </h3>

            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
              *{" "}
              <a
                href="https://www.naukri.com/non-profit-organization-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Non-profit organizations
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/community-development-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                NGOs focused on community development
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/government-community-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Government community programs
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/social-impact-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Social impact initiatives
              </a>{" "}
              <br />{" "}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
