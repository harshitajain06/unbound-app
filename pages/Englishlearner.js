
import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function english_learner() {
  // const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Layout className="flex items-center justify-center relative">
      <section  style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(56vh - 100px)", // Adjusted minHeight
          padding: "20 20px",
          boxSizing: "border-box",
        }}>
        <div className="text-center md:px-80 md:ml-56">
          <h1 className="text-4xl md:text-5xl font-bold  text-lime-200">
            LEARN ENGLISH!
          </h1>
          <h2 className="text-4xl md:text-3xl text-green-200 mb-8">
            PICK YOUR LANGUAGE
          </h2>

          <div>
            {/* Language switchers */}
            <div
              className="grid grid-cols-2 gap-6 justify-items-center mt-4 "
              // style={{ fontFamily: "Times, serif" }}
            >
              <div className="border-4 w-full h-12 md:h-16 py-3 text-lime-200 hover:bg-zinc-600 hover:text-white ">
                <h3 className="text-sm md:text-xl font-light text-green-300">
                  <a
                    href="https://www.youtube.com/watch?v=xTLK0iHLxFs&list=PLsXdBvuJ5ox7U8HipGaQoS95fFcIhKRRS"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Hindi →English{" "}
                  </a>
                </h3>
              </div>

              <div className="border-4 w-full h-12 md:h-16  py-3 text-lime-200 hover:bg-zinc-600 hover:text-white ">
              <h3 className="text-sm md:text-xl font-light text-green-300">
                  <a
                    href="https://www.youtube.com/watch?v=WmRr5x-KV1Y&list=PLnE07AIBtg_KcYOnidGx_SVg-mhvQb7-7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Bengali → English{" "}
                  </a>
                </h3>
              </div>

              <div className="border-4 w-full h-12 md:h-16  py-3 text-lime-200 hover:bg-zinc-600 hover:text-white ">
              <h3 className="text-sm md:text-xl font-light text-green-300">
                  <a
                    href="https://www.youtube.com/watch?v=d7QkMiBOZdk&list=PLsRjuO3afXH2oWYCEAXRlQzqtYvcW2rTE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Tamil → English{" "}
                  </a>
                </h3>
              </div>

              <div className="border-4 w-full h-12 md:h-16  py-3 text-lime-200 hover:bg-zinc-600 hover:text-white ">
              <h3 className="text-sm md:text-xl font-light text-green-300">
                  <a
                    href="https://www.youtube.com/watch?v=vnk4LYT0xhc&list=PLKEI4M7n-St968Bu4-JTYG4QWdZ0JTjdH"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Telugu → English{" "}
                  </a>
                </h3>
              </div>

              <div className="border-4 w-full h-12 md:h-16  py-3 text-lime-200 hover:bg-zinc-600 hover:text-white ">
              <h3 className="text-sm md:text-xl font-light text-green-300">
                  <a
                    href="https://www.youtube.com/watch?v=oxjILX9uUS0&list=PL6cUDoseFhVC4xJ_gBvwTLu_lQB8Er1x0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Punjabi → English{" "}
                  </a>
                </h3>
              </div>

              <div className="border-4 w-full h-12 md:h-16  py-3 text-lime-200 hover:bg-zinc-600 hover:text-white ">
              <h3 className="text-sm md:text-xl font-light text-green-300">
                  <a
                    href="https://www.youtube.com/watch?v=axCsKrwav8M"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Odia → English{" "}
                  </a>
                </h3>
              </div>

              <div className="border-4 w-full h-12 md:h-16  py-3 text-lime-200 hover:bg-zinc-600 hover:text-white ">
              <h3 className="text-sm md:text-xl font-light text-green-300">
                  <a
                    href="https://www.youtube.com/watch?v=Gm9Zhz9x3Kc&list=PLQxsuJ2T7pLMlE50gKnCct1leP4Na2bY8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Urdu → English{" "}
                  </a>
                </h3>
              </div>

              <div className="border-4 w-full h-12 md:h-16  py-3 text-lime-200 hover:bg-zinc-600 hover:text-white ">
              <h3 className="text-sm md:text-xl font-light text-green-300">
                  <a
                    href="https://www.youtube.com/watch?v=OrjEvwy8VJA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Assamese → English{" "}
                  </a>
                </h3>
              </div>

              <div className="border-4 w-full h-12 md:h-16  py-3 text-lime-200 hover:bg-zinc-600 hover:text-white ">
              <h3 className="text-sm md:text-xl font-light text-green-300">
                  <a
                    href="https://www.youtube.com/watch?v=ytzTlZy-1xA&list=PLXYb1GQQ50hpMO4FA4f9XpI_l19Gq5I29"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Malayalam→English{" "}
                  </a>
                </h3>
              </div>

              <div className="border-4 w-full h-12 md:h-16  py-3 text-lime-200 hover:bg-zinc-600 hover:text-white ">
              <h3 className="text-sm md:text-xl font-light text-green-300">
                  <a
                    href="https://www.youtube.com/watch?v=yEf-kYA8PRM&list=PLMvw7NZyx2D0fpz2Gg26JZEdIKybNzWye"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Marathi → English{" "}
                  </a>
                </h3>
              </div>

              <div className="border-4 w-full h-12 md:h-16  py-3 text-lime-200 hover:bg-zinc-600 hover:text-white ">
              <h3 className="text-sm md:text-xl font-light text-green-300">
                  <a
                    href="https://www.youtube.com/watch?v=yEf-kYA8PRM&list=PLMvw7NZyx2D0fpz2Gg26JZEdIKybNzWye"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Kannada → English{" "}
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}