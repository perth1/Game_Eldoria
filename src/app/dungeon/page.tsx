import Image from "next/image";
import Link from "next/link";

export default function dungeon() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <Image src={'/img/dungeon.jpg'} alt="dungeon" fill={true}/>
        </div>
        //go to science lab
        <div>
        <Link href="/lab" 
        className="absolute text-9xl top-[61.5%] left-[22%] z-50 
        bg-transparent text-transparent">-Lab--</Link>
        <Link href="/lab" 
        className="absolute text-9xl top-[73%] left-[22%] z-50 
        bg-transparent text-transparent">-Lab--</Link>
        </div>
        //go to pyramid
        <div>
            <Link href="/pyramid" 
            className="absolute text-9xl top-[18%] left-[43%] z-50 
            bg-transparent text-transparent">prm</Link>
            <Link href="/pyramid" 
            className="absolute text-6xl top-[23%] left-[40%] z-50 
            bg-transparent text-transparent">prm</Link>
            <Link href="/pyramid" 
            className="absolute text-7xl top-[13%] left-[45%] z-50 
            bg-transparent text-transparent">prm</Link>
        </div>
        //go to aquarium
        <div>
            <Link href="/aquarium" 
            className="absolute text-9xl top-[30%] left-[59%] z-50 
            bg-transparent text-transparent">aquar</Link>
            <Link href="/aquarium" 
            className="absolute text-8xl top-[20%] left-[61%] z-50 
            bg-transparent text-transparent">aquar</Link>
        </div>
    </main>
  );
}
