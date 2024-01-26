import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
       <div className="absolute items-center justify-center top-0 left-0 w-full h-full flex bg-black-100">
        <p className="text-center text-6xl  font-serif font-bold text-white tracking-wide ..  ">
          UNBOUND
          <p className="text-base text-base  font-serif font-bold text-lime-200	">
            GO BEYOND DEGREES!
          </p>
        </p>

        <a href={"/aboutpage"}>
          <button className="text-green-200 fixed top-3 left-6 z-50 p-4 text-2xl font-MONO transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... ">
            ABOUT
          </button>
        </a>
        <a href={"/newpage"}>
          <button className="text-cyan-200  text-3xl font-MONO  absolute inset-x-0 bottom-20 h-16 ... transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
            QUESTIONNAIRE
          </button>
        </a>
      </div>
    </main>
  );
}
