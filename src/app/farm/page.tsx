import Image from "next/image";
import Link from "next/link";

export default function lab() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <Image src={'/img/farm.webp'} alt="farm" fill={true}/>
        </div>
        <div>
            
            <Image src={'/img/itemfarm.png'}
              alt="showfarm"
              width={550}
              height={100}
              className="absolute top-[38%] left-[80%] -translate-x-1/2 -translate-y-1/2 z-[50]"/>
            
        </div>
        <div>
          <Link href="/mainpage">
          <Image src={'/img/goback.png'}
          alt="goback"
          width={120}
          height={100}
          className="absolute top-[45%] left-[3%] -translate-x-1/2 -translate-y-1/2 z-[30]"/>
          </Link>
      </div>
    </main>
  );
}