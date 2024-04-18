import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function event_logistic_c() {
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
            EVENT LOGISTICS COORDINATOR{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Event Logistics Coordinators in India manage the planning and
                execution of logistical details for events, ensuring smooth
                operations.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
            </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Entry-level coordinators earn around INR 20,000 to INR 40,000
                per month
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
              </h3>
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Full-time work, varying based on event schedules, may involve
                weekends and evenings.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=I-XjdcpfXoI&pp=ygUlRXZlbnQgUGxhbm5pbmcgYW5kIExvZ2lzdGljcyBUdXRvcmlhbA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Event planning and logistics{" "}
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=RnfYqAJnbKc&pp=ygUqOiBFZmZlY3RpdmUgVmVuZG9yIENvb3JkaW5hdGlvbiBmb3IgRXZlbnRz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vendor coordination
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=9HSaawhDibg&pp=ygU2RW5oYW5jaW5nIE9yZ2FuaXphdGlvbmFsIFNraWxscyBmb3IgRXZlbnQgQ29vcmRpbmF0b3Jz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Strong organizational skills{" "}
                </a>{" "}
                <br />
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
              Best Places to Work
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/event-management-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Event management companies
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/corporate-event-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Corporate event teams
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/wedding-planning-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wedding planning firms
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/exhibition-conference-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Exhibition and conference organizers
                </a>{" "}
                <br />
              </p>

          </div>
        </div>
      </section>
    </Layout>
  );
}
