import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router"; import React, { useState } from "react";
import Script from 'next/script'


export default function SalesMarketingU() {
  const [selectedOption, setSelectedOption] = useState(""); // State for selected option
  const router = useRouter();

  const handleButtonClick = (selectedValue) => {
    setSelectedOption(selectedValue);
    if (selectedValue === "Operational and Manual Labor Roles") {
      router.push("/OperationalManualLaborRolesU");
    } else if (selectedValue === "Administrative and Office Roles") {
      router.push("/AdministrativeOfficeRolesU");
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  const  salesMarketingUOptions = [
    {
      label: "Operational and Manual Labor Roles",
      value: "Operational and Manual Labor Roles",
    },
    {
      label: "Administrative and Office Roles",
      value: "Administrative and Office Roles",
    },
  ];

  return (
    <Layout SalesMarketingU>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-lime-200 text-5xl text-center tracking-wide pb-8">
          Question 4
        </h1>

        <h1 className="text-cyan-200 font-serif text-2xl text-center tracking-wide">
          Which from these do you prefer?
        </h1>

        <div className="flex flex-wrap gap-4">
          {salesMarketingUOptions.map((option) => (
            <button
              key={option.value}
              className={` border-4 p-2 text-lime-200 ${
                selectedOption === option.value ? "bg-zinc-800 text-white" : ""
              }`}
              onClick={() => handleButtonClick(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </section>
    </Layout>
  );
}
