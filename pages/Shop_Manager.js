import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function shop_manager() {
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
        }}
      >
        <div className=" text-center ">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200">
            SHOP MANAGER{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
            </h3>
            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
              Shop managers in India oversee daily operations, manage staff, and
              ensure the smooth functioning of retail establishments.
            </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
            </h3>

            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
              Entry-level shop managers earn around INR 20,000 to INR 35,000 per
              month.
            </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
            </h3>

            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
              Full-time work, typically 8-10 hours per day, may include weekends
              and peak retail hours.
            </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
            </h3>

            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
              *{" "}
              <a
                href="https://www.youtube.com/watch?v=5iRDd-f1nmg&list=PLWPirh4EWFpEv7x2CU-9jcXlIvBuSx7oF"
                target="_blank"
                rel="noopener noreferrer"
              >
                Retail management practices
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.youtube.com/watch?v=yy5VHKUqGpM&pp=ygUvIEludmVudG9yeSBDb250cm9sIFRlY2huaXF1ZXMgZm9yIFNob3AgTWFuYWdlcnM%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                nventory control
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.youtube.com/watch?v=2MrBwbA3SBw&pp=ygUodXN0b21lciBTZXJ2aWNlIFNraWxscyBmb3IgU2hvcCBNYW5hZ2Vycw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Customer service skills
              </a>{" "}
              <br />
            </p>

            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
              Best Places to Work
            </h3>

            <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
              *{" "}
              <a
                href="https://www.naukri.com/retail-store-manager-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Retail stores
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/supermarket-manager-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Supermarkets
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/specialty-shop-manager-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Specialty shops
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/fashion-apparel-manager-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fashion and apparel outlets
              </a>{" "}
              <br />*{" "}
              <a
                href="https://www.naukri.com/electronics-appliance-manager-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Electronics and appliance stores
              </a>{" "}
              <br />
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
