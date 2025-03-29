import Image from "next/image";
import Link from "next/link";

export default function menu() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Image src={'/img/main_menu.webp'} alt="mainmenu" fill={true}/>
      </div>
      <Link href="/mainpage" className="absolute text-6xl top-[49%] left-[44.5%] z-50 bg-transparent text-transparent">---play---</Link>
    </main>
    
  );
}
