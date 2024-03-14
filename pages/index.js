import Image from "next/image";
// import VideoBackground from '../components/VideoBackground'; // Adjust the import path based on your project structure

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between p-24 bg-neutral-900 relative">
      <div className="w-1/2 ">
        <iframe
          className="w-full aspect-video size-full"
          src="bgvideo.mp4"
        ></iframe>
       </div>

      <div className="flex flex-col items-center justify-center w-1/2 text-center text-white relative">
        <a href={"/aboutpage"}>
          <button className="text-green-200 fixed top-3 left-6 z-50 p-4 text-2xl font-MONO transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... ">
            ABOUT
          </button>
        </a>

        <div className="relative z-10">
          <p className="text-6xl font-serif font-bold tracking-wide .. ">UNBOUND</p>
          <p className="text-base font-serif font-bold text-lime-200 ">
            GO BEYOND DEGREES!
          </p>

          <a href={"/questionnaire"}>
            <button className="text-cyan-200 text-3xl font-MONO h-16 mt-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
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