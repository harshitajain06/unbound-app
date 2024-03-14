import Layout, { siteTitle } from "../components/Layout";
import Head from "next/head";

export default function event_m_labour() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <section className="py-2">
        <div className="conta15ner mx-auto text-center md:w-2/3 lg:w-1/2">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200">
            EVENT MANUAL LABOUR
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-lg font-bold mb-4 text-amber-300 ">
              Job Overview
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Event manual laborers in India provide physical support for
                event setup, teardown, and various tasks during events.
              </p>
            </h3>


            <h3 className="text-4xl md:text-lg font-bold mb-4 text-green-300">
              Basic Salary
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Entry-level event manual laborers earn around INR 8,000 to INR
                15,000 per month.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-400">
              Time Consumption
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                Part-time or full-time work, varying based on event schedules,
                including weekends and evenings.
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-yellow-100	">
              Basic Knowledge
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                * Physical fitness for manual tasks <br />
                * Ability to follow setup instructions <br />
                * Teamwork and coordination skills <br />{" "}
              </p>
            </h3>

            <h3 className="text-4xl md:text-lg font-bold mb-4 text-cyan-200">
              Best Places to Work
              <p className="text-white mb-8 text-sm leading-relaxed text-wrap ... text-balance ...">
                * Event management companies <br />
                * Convention and exhibition centers <br />
                * Wedding and event venues <br />
                * Catering and hospitality services <br />
                * Entertainment and production companies <br />{" "}
              </p>
            </h3>
          </div>
        </div>
      </section>
    </Layout>
  );
}
