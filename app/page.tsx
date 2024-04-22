import Image from "next/image";
import background from "/public/jetBlue.jpeg"
import booking from './booking.jsx'


export default function Home() {
  return (
    <main className="flex flex-col item-center justify-between">
      <div className="relative w-full">
        <div className="absolute -z-10 w-full">
          <Image src={background} alt="backgroundimage" className="w-full opacity-50" width={1000} height={1000}/>
        </div>
      </div>
    </main>
  );
}
