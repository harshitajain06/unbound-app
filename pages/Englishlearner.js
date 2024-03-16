import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function english_learner() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Layout className="flex items-center justify-center relative">
      <Head>
        <title>{siteTitle}</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <section className="py-2">
        <div className="absolute inset-0 ...  top-12 h-16 ... mx-auto text-center ">
          <h1 className="text-4xl md:text-4xl font-bold  text-lime-200">
            LEARN ENGLISH!
          </h1>
          <h2 className="text-4xl md:text-2xl mb-4 text-green-200 mb-8">
            PICK YOUR LANGUAGE
          </h2>

          {/* Language switchers */}
          <div className="grid grid-cols-2 gap-4 justify-items-center mt-4 px-80 text-3xl" style={{ fontFamily: 'Times, serif' }}>
            <div className="border-4 w-full max-w-48 ... h-12 ... px-8 py-2 text-lime-200 hover:bg-zinc-600 hover:text-white transition duration-300">
              <h3 className="md:text-sm  mb-4 text-green-300">
                <a
                  href="https://www.youtube.com/watch?v=xTLK0iHLxFs&list=PLsXdBvuJ5ox7U8HipGaQoS95fFcIhKRRS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Hindi → English{" "}
                </a>
              </h3>
            </div>

            <div className="border-4 w-full max-w-48 ... h-12 ... px-4 py-2 text-lime-200 hover:bg-zinc-600 hover:text-white transition duration-300">
              <h3 className="text-2xl md:text-sm  mb-4 text-green-300">
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

            <div className="border-4 w-full max-w-48 ... h-12 ... px-4 py-2 text-lime-200 hover:bg-zinc-600 hover:text-white transition duration-300">
              <h3 className="text-2xl md:text-sm mb-4 text-green-300">
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

            <div className="border-4 w-full max-w-48 ... h-12 ... px-4 py-2 text-lime-200 hover:bg-zinc-600 hover:text-white transition duration-300  ">
              <h3 className="text-2xl md:text-sm mb-4 text-green-300">
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

            <div className="border-4 w-full max-w-48 ... h-12 ... px-4 py-2 text-lime-200 hover:bg-zinc-600 hover:text-white transition duration-300">
              <h3 className="text-2xl md:text-sm mb-4 text-green-300">
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

            <div className="border-4 w-full max-w-48 ... h-12 ... px-4 py-2 text-lime-200 hover:bg-zinc-600 hover:text-white transition duration-300  ">
              <h3 className="text-2xl md:text-sm mb-4 text-green-300">
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

            <div className="border-4 w-full max-w-48 ... h-12 ... px-4 py-2 text-lime-200 hover:bg-zinc-600 hover:text-white transition duration-300">
              <h3 className="text-2xl md:text-sm mb-4 text-green-300">
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

            <div className="border-4 w-full max-w-48 ... h-12 ... px-4 py-2 text-lime-200 hover:bg-zinc-600 hover:text-white transition duration-300  ">
              <h3 className="text-2xl md:text-sm mb-4 text-green-300">
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

            <div className="border-4 w-full max-w-48 ... h-12 ... px-4 py-2 text-lime-200 hover:bg-zinc-600 hover:text-white transition duration-300">
              <h3 className="text-2xl md:text-sm mb-4 text-green-300">
              <a
                  href="https://www.youtube.com/watch?v=ytzTlZy-1xA&list=PLXYb1GQQ50hpMO4FA4f9XpI_l19Gq5I29"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Malayalam → English{" "}
                </a>
              </h3>
            </div>

            <div className="border-4 w-full max-w-48 ... h-12 ... px-4 py-2 text-lime-200 hover:bg-zinc-600 hover:text-white transition duration-300  ">
              <h3 className="text-2xl md:text-sm mb-4 text-green-300">
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

            <div className="border-4 w-full max-w-48 ... h-12 ... px-4 py-2 text-lime-200 hover:bg-zinc-600 hover:text-white transition duration-300">
              <h3 className="text-2xl md:text-sm mb-4 text-green-300">
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
      </section>
    </Layout>
  );
}
