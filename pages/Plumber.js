// import Head from "next/head";
// import Layout, { siteTitle } from "../components/Layout";
// import { useRouter } from "next/router";
// import React, { useState } from "react";

// export default function plumber() {
//   const handleGoBack = () => {
//     router.back();
//   };

//   return (
//     <Layout>
//       <Head>
//         <title>{siteTitle}</title>
//         <script src="https://cdn.tailwindcss.com"></script>
//       </Head>
//       <section
//         style={{
//           position: "fixed",
//           bottom: "49%",
//           right: "27%", // Adjust this value to position the image horizontally
//           transform: "translateY(50%)",
//           transformOrigin: "center",
//         }}
//       >
//         <div className=" text-center ">
//           <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200">
//             PLUMBER{" "}
//           </h1>
//           <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
//             DESCRIPTION
//           </h2>

//           <div className="text-left">
//             <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
//               Job Overview
//             </h3>
//             <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
//               Plumbers in India install, repair, and maintain plumbing systems
//               in residential and commercial buildings.
//             </p>

//             <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
//               Basic Salary
//             </h3>

//             <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
//               Entry-level plumbers earn around INR 15,000 to INR 25,000 per
//               month.
//             </p>

//             <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
//               Time Consumption
//             </h3>

//             <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
//               Full-time work, typically 8 hours per day, may include weekends
//               and emergencies.
//             </p>

//             <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
//               Basic Knowledge
//             </h3>

//             <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
//               *{" "}
//               <a
//                 href="https://www.youtube.com/watch?v=SsPtZqOAf4s&pp=ygUeVW5kZXJzdGFuZGluZyBQbHVtYmluZyBTeXN0ZW1z"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Plumbing systems{" "}
//               </a>{" "}
//               <br />*{" "}
//               <a
//                 href="https://www.youtube.com/watch?v=_2yJKfWqc4M&list=PLS7xT5I8zN6s34JBpPimBXaG4-0tlYV8O"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Blueprint reading
//               </a>{" "}
//               <br />*{" "}
//               <a
//                 href="https://www.youtube.com/watch?v=NDKEJ2E3LsM&pp=ygUnUGx1bWJpbmcgQ29kZXMgYW5kIFJlZ3VsYXRpb25zIFR1dG9yaWFs"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Plumbing codes and regulations{" "}
//               </a>{" "}
//               <br />
//             </p>

//             <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
//               Best Places to Work
//             </h3>

//             <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
//               *{" "}
//               <a
//                 href="https://www.naukri.com/plumbing-contractor-jobs"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Plumbing contractors
//               </a>{" "}
//               <br />*{" "}
//               <a
//                 href="https://www.naukri.com/construction-company-jobs"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Construction companies
//               </a>{" "}
//               <br />*{" "}
//               <a
//                 href="https://www.naukri.com/maintenance-service-jobs"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Maintenance services
//               </a>{" "}
//               <br />*{" "}
//               <a
//                 href="https://www.naukri.com/real-estate-development-jobs"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Real estate development projects
//               </a>{" "}
//               <br />*{" "}
//               <a
//                 href="https://www.naukri.com/facilities-management-jobs"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Facilities management companies
//               </a>{" "}
//               <br />
//             </p>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }


// Import necessary modules
import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React from "react";

// Define your component as a function
const Plumber = () => {
  const router = useRouter();

  // Define function to handle going back
  const handleGoBack = () => {
    router.back();
  };

  // Return JSX for the component
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "0 20px",
        boxSizing: "border-box",
      }}>
        <div className="w-full md:pl-80">
        <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200 text-center md:-mt-32 mt-16">
            PLUMBER
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8 text-center">
            DESCRIPTION
          </h2>

          <div>
            <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300">
              Job Overview
            </h3>
            <p className="text-white mb-8 leading-relaxed text-balance">
              Plumbers in India install, repair, and maintain plumbing systems
              in residential and commercial buildings.
            </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300">
              Basic Salary
            </h3>
            <p className="text-white mb-8 leading-relaxed text-balance">
              Entry-level plumbers earn around INR 15,000 to INR 25,000 per
              month.
            </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400">
              Time Consumption
            </h3>
            <p className="text-white mb-8 leading-relaxed text-balance">
              Full-time work, typically 8 hours per day, may include weekends
              and emergencies.
            </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100">
              Basic Knowledge
            </h3>
            <p className="text-white mb-8 leading-relaxed text-balance">
              *{" "}
              <a
                href="https://www.youtube.com/watch?v=SsPtZqOAf4s&pp=ygUeVW5kZXJzdGFuZGluZyBQbHVtYmluZyBTeXN0ZW1z"
                target="_blank"
                rel="noopener noreferrer"
              >
                Plumbing systems{" "}
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.youtube.com/watch?v=_2yJKfWqc4M&list=PLS7xT5I8zN6s34JBpPimBXaG4-0tlYV8O"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blueprint reading
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.youtube.com/watch?v=NDKEJ2E3LsM&pp=ygUnUGx1bWJpbmcgQ29kZXMgYW5kIFJlZ3VsYXRpb25zIFR1dG9yaWFs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Plumbing codes and regulations{" "}
              </a>{" "}
              <br />
            </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
              Best Places to Work
            </h3>
            <p className="text-white mb-8 leading-relaxed text-balance">
              *{" "}
              <a
                href="https://www.naukri.com/plumbing-contractor-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Plumbing contractors
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/construction-company-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Construction companies
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/maintenance-service-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Maintenance services
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/real-estate-development-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Real estate development projects
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/facilities-management-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facilities management companies
              </a>{" "}
              <br />
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Plumber; // Export the component