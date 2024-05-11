// import Head from "next/head";
// import Layout, { siteTitle } from "../components/Layout";
// import { useRouter } from "next/router";
// import React, { useState } from "react";

// export default function ss_tech() {
//   const handleGoBack = () => {
//     router.back();
//   };

//     return (
//     <Layout>
//       <Head>
//       <title>{siteTitle}</title>
//         <script src="https://cdn.tailwindcss.com"></script>
//       </Head>
// <section 
//        style={{
//         position: "fixed",
//         bottom: "49%",
//         right: "27%", // Adjust this value to position the image horizontally
//         transform: "translateY(50%)",
//         transformOrigin: "center",
//       }}>
//       <div className=" text-center ">
//           <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200">
//            SECURITY SYSTEMS TECHNICIAN{" "}
//           </h1>
//           <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
//             DESCRIPTION
//           </h2>

//           <div className="text-left">
//             <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
//               Job Overview
//               </h3>
//               <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
//                 Security systems technicians in India install, maintain, and
//                 troubleshoot electronic security systems such as CCTV, access
//                 control, and alarms.
//               </p>

//             <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
//               Basic Salary
//               </h3>

//               <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
//                 Entry-level security systems technicians earn around INR 18,000
//                 to INR 30,000 per month.
//               </p>

//             <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
//               Time Consumption
//               </h3>

//               <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
//                 Full-time work, typically 8 hours per day, may involve on-call
//                 duty and irregular hours for system installations.
//               </p>

//             <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
//               Basic Knowledge
//               </h3>

//               <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
//                 *{" "}
//                 <a
//                   href="https://www.youtube.com/watch?v=qDuXFxWEjb4&pp=ygUpVW5kZXJzdGFuZGluZyBFbGVjdHJvbmljIFNlY3VyaXR5IFN5c3RlbXM%3D"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Electronic security systems
//                 </a>{" "}
//                 <br />*{" "}
//                 <a
//                   href="https://www.youtube.com/watch?v=AQ1EPl_4O2w&pp=ygUrV2lyaW5nIGFuZCBDb25uZWN0aXZpdHkgaW4gU2VjdXJpdHkgU3lzdGVtcw%3D%3D"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Wiring and connectivity
//                 </a>{" "}
//                 <br />*{" "}
//                 <a
//                   href="https://www.youtube.com/watch?v=SK8D1bdJh7s&pp=ygU2cm91Ymxlc2hvb3RpbmcgU2tpbGxzIGZvciBTZWN1cml0eSBTeXN0ZW1zIFRlY2huaWNpYW5z"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Troubleshooting skills{" "}
//                 </a>{" "}
//                 <br />
//               </p>

//             <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
//               Best Places to Work
//               </h3>

//               <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
//                 *{" "}
//                 <a
//                   href="https://www.naukri.com/security-system-integration-jobs"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Security system integration firms
//                 </a>{" "}
//                 <br />*{" "}
//                 <a
//                   href="https://www.naukri.com/surveillance-alarm-jobs"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Surveillance and alarm companies
//                 </a>{" "}
//                 <br />*{" "}
//                 <a
//                   href="https://www.naukri.com/technology-retail-jobs"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Technology and electronics retailers
//                 </a>{" "}
//                 <br />*{" "}
//                 <a
//                   href="https://www.naukri.com/facilities-management-jobs"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Facilities management companies
//                 </a>{" "}
//                 <br />*{" "}
//                 <a
//                   href="https://www.naukri.com/corporate-security-jobs"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Corporate security departments
//                 </a>{" "}
//                 <br />
//               </p>
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
export default function SsTech() {
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
        }}
      >
        <div className="w-full md:pl-44">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200 text-center md:mt-0 mt-16">
            SECURITY SYSTEMS TECHNICIAN
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold text-green-200 mb-8 text-center">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-2xl md:text-xl font-bold mb-4 text-amber-300">
              Job Overview
            </h3>
            <p className="text-white mb-8 leading-relaxed text-balance">
              Security systems technicians in India install, maintain, and
              troubleshoot electronic security systems such as CCTV, access
              control, and alarms.
            </p>

            <h3 className="text-2xl md:text-xl font-bold mb-4 text-green-300">
              Basic Salary
            </h3>

            <p className="text-white mb-8 leading-relaxed text-balance">
              Entry-level security systems technicians earn around INR 18,000 to
              INR 30,000 per month.
            </p>

            <h3 className="text-2xl md:text-xl font-bold mb-4 text-cyan-400">
              Time Consumption
            </h3>

            <p className="text-white mb-8 leading-relaxed text-balance">
              Full-time work, typically 8 hours per day, may involve on-call duty
              and irregular hours for system installations.
            </p>

            <h3 className="text-2xl md:text-xl font-bold mb-4 text-yellow-100">
              Basic Knowledge
            </h3>

            <p className="text-white mb-8 leading-relaxed text-balance">
              *{" "}
              <a
                href="https://www.youtube.com/watch?v=qDuXFxWEjb4&pp=ygUpVW5kZXJzdGFuZGluZyBFbGVjdHJvbmljIFNlY3VyaXR5IFN5c3RlbXM%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Electronic security systems
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.youtube.com/watch?v=AQ1EPl_4O2w&pp=ygUrV2lyaW5nIGFuZCBDb25uZWN0aXZpdHkgaW4gU2VjdXJpdHkgU3lzdGVtcw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wiring and connectivity
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.youtube.com/watch?v=SK8D1bdJh7s&pp=ygU2cm91Ymxlc2hvb3RpbmcgU2tpbGxzIGZvciBTZWN1cml0eSBTeXN0ZW1zIFRlY2huaWNpYW5z"
                target="_blank"
                rel="noopener noreferrer"
              >
                Troubleshooting skills{" "}
              </a>{" "}
              <br />
            </p>

            <h3 className="text-2xl md:text-xl font-bold mb-4 text-cyan-200">
              Best Places to Work
            </h3>

            <p className="text-white mb-8 leading-relaxed text-balance">
              *{" "}
              <a
                href="https://www.naukri.com/security-system-integration-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Security system integration firms
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/surveillance-alarm-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Surveillance and alarm companies
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/technology-retail-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Technology and electronics retailers
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/facilities-management-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facilities management companies
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/corporate-security-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corporate security departments
              </a>{" "}
              <br />
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}