import Image from "next/image";
import Layout from "../components/Layout";


export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-900 relative">
      {/* Adding the GIF image without transparency */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image src="/bgpic.gif" layout="fill" objectFit="cover" />
      </div>
      {/* Text content */}
      <div className="text-center text-white relative z-10">
        <a href={"/aboutpage"}>
          <button className="text-white-800 fixed top-3 left-6 z-50 p-4 text-2xl font-MONO transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... ">
            ABOUT
          </button>
        </a>
        <a href={"/Englishlearner"}>
          <button className="text-white fixed fixed top-14 left-6 z-50 p-4 text-2xl font-MONO transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... ">
            LEARN ENGLISH
          </button>
        </a>

        <div>
          <p className="text-6xl font-serif font-bold tracking-wide">UNBOUND</p>
          <p className="text-base font-serif font-bold text-lime-200">
            GO BEYOND DEGREES!
          </p>

          <a href={"/questionnaire"}>
            <button className="text-teal-400 text-3xl font-MONO h-16 mt-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
              QUESTIONNAIRE
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}











      {/* <Image
        className="absolute -top-20 -right-20"
        alt="Spiral picture"
        src="/images/bg-spiral.jpg"
        width={500}
        height={500}
      />
      <Image
        className="absolute -bottom-20 -left-20"
        alt="Cone picture"
        src="/images/bg-cone.jpg"
        height={400}
        width={400}
      />
      */}
    

      
      // <iframe
      //     className="w-full h-full aspect-video"
      //     src="video2.mp4"
      //   ></iframe>
      //   <iframe
      //     className="w-full h-full aspect-video"
      //     src="video3.mp4"
      //   ></iframe>
      //   <iframe
      //     className="w-full h-full aspect-video"
      //     src="video4.mp4"
      //   ></iframe>
      //   <iframe
      //     className="w-full h-full aspect-video"
      //     src="video5.mp4"
      //   ></iframe>
        
      //   <iframe
      //     className="w-full h-full aspect-video"
      //     src="video6.mp4"
      //   ></iframe>
       
      //   <iframe
      //     className="w-full h-full aspect-video"
      //     src="video7.mp4"
      //   ></iframe>