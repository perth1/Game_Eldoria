import Image from "next/image";
import Link from "next/link";

export default function menu() {
  
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
              <Image src={'/img/Shop.png'} alt="shop" fill={true}/>
          </div>
          <div>
              <Link href="/dungeon">
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
