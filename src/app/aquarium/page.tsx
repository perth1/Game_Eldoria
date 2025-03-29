import Image from "next/image";
import Link from "next/link";

export default function aquarium() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Image src={'/img/Aquarium.png'} alt="aquarium" fill={true}/>
      </div>
      
    </main>
  );
}