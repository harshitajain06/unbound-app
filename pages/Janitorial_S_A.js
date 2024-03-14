import Layout, { siteTitle } from "../components/Layout";
import Head from "next/head";

export default function janitorial_s_a() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <section className="py-2">
        <div className="conta15ner mx-auto text-center md:w-2/3 lg:w-1/2">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200">
            JANITORIAL SERVICE ASSISTANT{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-lg font-bold mb-4 text-amber-300 ">
              Job Overview
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
              Janitorial Services Assistants in India maintain cleanliness and 
              hygiene in various facilities, ensuring a safe and sanitary environment.


              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-green-300">
              Basic Salary
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
              Entry-level assistants earn around INR 8,000 to INR 15,000 per month.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-400">
              Time Consumption
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
              Full-time work, typically 8-10 hours per day, may involve evening shifts and weekends.

              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-yellow-100	">
              Basic Knowledge
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
              * Cleaning techniques and procedures <br />
              * Safe handling of cleaning chemicals <br />
              * Attention to detail for maintaining cleanliness standards <br />
                
                {" "}
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-200">
              Best Places to Work
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
              * Commercial office buildings <br />
              * Educational institutions <br />
              * Healthcare facilities <br />
              * Hospitality industry (hotels, resorts) <br />
              * Shopping malls and retail stores <br />

                {" "}
              </p>
            </h3>
          </div>
        </div>
      </section>
    </Layout>
  );
}
