import Image from "next/image";
import background from "/public/jetBlue.jpeg"
import booking from './booking.jsx'
import { slideAnimation } from "@/lib/config/motion.js";
import { MotionDiv } from "@/components/MotionDiv.tsx";
import jetblueside from "/public/blue-sapphire-removebg-preview.png"
import cloud from "/public/cloudspng.png"


export default function Home() {

  const variants = {
    hidden: {opacity: 0},
    visible: {opacity: 1}
  }


  return (
    <main className="flex flex-col item-center justify-between">
      <div className="relative w-full">
        <div className="absolute -z-10 w-full">
          <Image src={background} alt="backgroundimage" className="w-full opacity-50" width={1000} height={1000}/>
        </div>
        <section className="m-w-7xl mx-auto lg:px-8 flex flex-col py-2 items-center justify-center">
          <h2 className="font-bold text-4xl text-white ">It's so fly to see you.</h2>
          <MotionDiv
          {...slideAnimation("right")}>
            <div className="relative w-[860px] h-[500px]">
              <Image src={jetblueside}  width={200} height={200} alt="plane" className="absolute mb-14 inset-0 w-full h-full object-cover" />
              <Image src={cloud} width={300} height={400} alt="cloud" className="absolute inset-0 mt-[100px] w-full h-full object-cover"/>
              <Image src={cloud} width={300} height={400} alt="cloud" className="absolute inset-0 mt-[100px] w-full h-full object-cover"/>
            </div>
          </MotionDiv>
          <div className=" absolute w-[600px] rounded-md flex items-center bg-[#01205B] justify-between border-b-2">
        <a href="#" className="text-sm font-light leading-6 text-white  
          border-b-4 border-transparent hover:border-orange-500 transition-colors">
          Flights
        </a>
        <a href="#" className="text-sm font-light leading-6 text-white  
          border-b-4 border-transparent hover:border-orange-500 transition-colors">
          Flights + Hotel
        </a>
        <a href="#" className="text-sm font-light leading-6 text-white 
          border-b-4 border-transparent hover:border-orange-500 transition-colors">
          Flights + Cruise
        </a>
        <a href="#" className="text-sm font-light leading-6 text-white 
          border-b-4 border-transparent hover:border-orange-500 transition-colors">
          Flights + Cruise
        </a>
        <a href="#" className="text-sm font-light leading-6 text-white 
          border-b-4 border-transparent hover:border-orange-500 transition-colors">
          Flights + Cruise
        </a>
      </div>
        </section>
      </div>
      <section className="m-4 mt-0 -mb-14 px-2 lg:px-4">

      </section>

      <section>

      </section>
    </main>
  );
}
