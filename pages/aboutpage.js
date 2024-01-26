import Layout, { siteTitle } from "../components/Layout"
import Head from "next/head";

export default function Aboutpage() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-lime-200">
            UNBOUND
          </h1>
          <p className="text-cyan-200 mb-8 text-lg leading-relaxed tracking-normal ... ">
            Welcome to Unbound, your gateway to breaking through the invisible
            barriers that have hindered countless workers without a bachelor's
            degree from reaching their full potential. We believe in unlocking
            the true passion and potential within every individual, empowering
            them to pursue any job they desire.
          </p>

          <p className="text-green-300 mb-8 text-lg leading-relaxed tracking-normal ...">
            In today's dynamic and ever-evolving job market, possessing
            in-demand skills and valuable experience should be the key to
            unlocking higher-wage opportunities. Unfortunately, the traditional
            emphasis on a bachelor's degree has led to the oversight of millions
            of skilled workers who are more than capable of excelling in various
            roles.
          </p>
          <p className="text-cyan-400 mb-8 text-lg leading-relaxed tracking-normal ...">
            At Unbound, we are on a mission to challenge the status quo and
            redefine success in the professional realm. We understand that your
            skills and experience speak volumes, often more than any formal
            degree can convey. Our platform is designed to bridge the gap
            between your expertise and the job opportunities you deserve.{" "}
          </p>

          <a href={"/"}>
            <button className="text-lime-200  text-3xl font-MONO  relative inset-x-0 bottom-30 h-16 ... transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
              BACK
            </button>
          </a>
        </div>
      </section>
    </Layout>
  );
}

{
  /* The invisible barrier that comes at every turn for workers without
                a bachelor’s degree. This all stops now, Unbound helps these
                workers figure out their true passion and forces them to be
                limitless and pursue any job they want. Millions of workers with
                in-demand skills and experience, overlooked for higher-wage jobs
                because they don’t have a bachelor’s degree. Unbound is here to
                change that. */
}
