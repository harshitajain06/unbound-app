export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between p-24 bg-black">
    <div class="flex flex-col items-center justify-center w-full h-full">
      <a href={"/aboutpage"}>
        <button className="text-green-200 fixed top-3 left-6 z-50 p-4 text-2xl font-MONO transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... ">
          ABOUT
        </button>
      </a>

      <p className="text-center text-6xl  font-serif font-bold text-white tracking-wide ..  ">
        UNBOUND
      </p>
      <p className="text-base  font-serif font-bold text-lime-200	">
        GO BEYOND DEGREES!
      </p>
      <a href={"/newpage"}>
        <button className="text-cyan-200 text-3xl font-MONO h-16  mt-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
          QUESTIONNAIRE
        </button>
      </a>
    </div>
  </main>
  );
}
