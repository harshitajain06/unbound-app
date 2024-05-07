import Layout, { siteTitle } from "../components/Layout"
import Head from "next/head";

export default function Aboutpage() {
  return (
    <Layout>
    
      <section className="py-16">
        <div className="container mx-auto text-center md:w-2/3 lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-lime-200">
            UNBOUND
          </h1>
            <p className="text-cyan-200 mb-8 text-lg leading-relaxed text-wrap ... text-balance ... ">
            Welcome to Unbound, your gateway to breaking through the invisible
            barriers that have hindered countless workers without a bachelor's
            degree from reaching their full potential. We believe in unlocking
            the true passion and potential within every individual, empowering
            them to pursue any job they desire.
            </p>

           <p className="text-green-300 mb-8 text-lg leading-relaxed text-wrap ... text-balance ...">
            In today's dynamic and ever-evolving job market, possessing
            in-demand skills and valuable experience should be the key to
            unlocking higher-wage opportunities. Unfortunately, the traditional
            emphasis on a bachelor's degree has led to the oversight of millions
            of skilled workers who are more than capable of excelling in various
            roles.
           </p>
           <p className="text-cyan-400 mb-8 text-lg leading-relaxed text-wrap ... text-balance ...">
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
