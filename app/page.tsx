import Image from "next/image";
import background from "/public/jetBlue.jpeg"
import booking from './booking.jsx'
import { slideAnimation } from "@/lib/config/motion.js";
import { MotionDiv } from "@/components/MotionDiv.tsx";
import jetblueside from "/public/takeflightJetblue-removebg-preview.png"
import attendent from "/public/jetblueattendant-removebg-preview.png"
import cloud from "/public/cloudspng.png"
import { CAlert } from '@coreui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {trending_data}  from "./data/trending";
import SearchForm from "@/components/SearchForm.tsx";


export default function Home() {

  const variants = {
    hidden: {opacity: 0},
    visible: {opacity: 1}
  }


  return (
    <main className="flex flex-col justify-between">
      <div className="relative w-full">
        <div className="absolute -z-10 w-full">
          <Image src={background} alt="backgroundimage" className="w-full opacity-50" width={30} height={30}/>
        </div>
        <section className="m-w-7xl mx-auto lg:px-8 flex flex-col py-2 items-center justify-center">
          <h2 className="font-bold text-4xl text-white ">It's so fly to see you.</h2>
          <MotionDiv
          {...slideAnimation("left")} {...slideAnimation("up")}

          >
            <MotionDiv
            initial={{
            transform: "translateZ(-12px) translateY(-92px)",
          }}
          animate={{
            transform: "translateZ(-22px) translateY(-18px)",
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 3,
            ease: "easeInOut",
          }}>
            <div className="relative w-[900px] h-[400px]">
              <Image src={jetblueside}  width={300} height={300} alt="plane" className="absolute mb-14 inset-0 w-[900px] h-[400px] object-cover"/>
              </div>
            </MotionDiv>
          </MotionDiv>
          <div className="absolute flex">
              <Image src={cloud} width={200} height={200} alt="cloud" className="relative opacity-100 inset-0 mt-[30px] w-[1250px] h-[350px] object-cover"/>
              <Image src={cloud} width={200} height={200} alt="cloud" className="relative opacity-100 inset-0 mt-[30px] w-[1250px] h-[350px] object-cover"/>
              <Image src={cloud} width={200} height={200} alt="cloud" className="relative opacity-100 inset-0 mt-[30px] w-[1250px] h-[350px] object-cover"/>
            </div>
          <div className=" absolute w-[600px] rounded-md  mt-8 flex items-center lg:px-8 p-2 bg-[#01205B] justify-between">
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
          Cars
        </a>
        <a href="#" className="text-sm font-light leading-6 text-white 
          border-b-4 border-transparent hover:border-orange-500 transition-colors">
          Stays
        </a>
       </div>
        </section>
      </div>
      <section className="mt-4 mt-0 px-2 lg:px-4">
          <SearchForm />
      </section>

      <section className="mx-auto max-w-7xl mt-6 p-6 bg-white rounded-t-lg">
          <div className="pt-5">
              <h3 className="text-xl font-bold">Trending Destinations</h3>
              <p className="font-light">Most popular choices for travelers from around the world</p>
          </div>

          <div className="flex space-x-4 py-5 overflow-x-scroll">
              {trending_data.map(item => (
                <div key={item.id} className="space-y-1 shrink-0 cursor-pointer">
                    <img key={item.id} 
                         className="w-80 h-72 object-cover rounded-lg pb-2"
                         src={item.src}
                         alt=""/>
                     <p className="font-bold">{item.title}</p>
                     <p>{item.location}</p>
                     <p className="font-light text-sm">{item.description}</p>
                </div>
              ))}
          </div>
      </section>
    </main>
  );
}
