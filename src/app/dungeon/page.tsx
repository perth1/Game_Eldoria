import Image from "next/image";
import Link from "next/link";

export default function dungeon() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <Image src={'/img/dungeon.jpg'} alt="dungeon" fill={true}/>
        </div>
        {/* <--go to science lab-->  */}
        <div>
            <Link href="/lab" 
            className="absolute text-9xl top-[53%] left-[25%] z-50 
            "><Image src={'/img/label_science.png'} 
            alt="labelsci" width={300} height={300}/></Link>
            <Link href="/lab" 
            className="absolute text-9xl top-[61.5%] left-[22%] z-50 
            bg-transparent text-transparent">-Lab--</Link>
            <Link href="/lab" 
            className="absolute text-9xl top-[73%] left-[22%] z-50 
            bg-transparent text-transparent">-Lab--</Link>
        </div>
        {/* go to pyramid  */}
        <div>
            <Link href="/pyramid" 
            className="absolute top-[5%] left-[40.5%] z-50 
            "><Image src={'/img/label_math.png'} alt="label_math" width={300} height={300}/></Link>
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
        {/* go to aquarium  */}
        <div>
            <Link href="/aquarium" 
            className="absolute top-[11.5%] left-[61%] z-50 
            "><Image src={'/img/label_english.png'} alt="labeleng" width={300} height={300}/></Link>
            <Link href="/aquarium" 
            className="absolute text-9xl top-[30%] left-[59%] z-50 
            bg-transparent text-transparent">aquar</Link>
            <Link href="/aquarium" 
            className="absolute text-8xl top-[20%] left-[61%] z-50 
            bg-transparent text-transparent">aquar</Link>
        </div>
        {/* go to dun  */}
        <div>
            <Link href="/dungeon_mon" 
            className="absolute top-[34%] left-[43.3%] z-50 
            "><Image src={'/img/label_dungeons.png'} alt="labelmon" width={270} height={300}/></Link>
            <Link href="/dungeon_mon" 
            className="absolute text-9xl top-[48%] left-[42.5%] z-50 
            bg-transparent text-transparent">aqua</Link>
            <Link href="/dungeon_mon" 
            className="absolute text-8xl top-[43%] left-[44%] z-50 
            bg-transparent text-transparent">aqua</Link>
            
        </div>
        <div>
            <Link href="/shop" 
            className="absolute top-[53%] left-[62.5%] z-50 
            "><Image src={'/img/label_shop.png'} alt="labelshop" width={270} height={300}/></Link>
            <Link href="/shop" 
            className="absolute text-8xl top-[63%] left-[60%] z-50 
            bg-transparent text-transparent">000000</Link>
            <Link href="/shop" 
            className="absolute text-8xl top-[75%] left-[60%] z-50 
            bg-transparent text-transparent">000000</Link>
            
            
        </div>
        <div>
            <Link href="/mainpage">
            <Image src={'/img/goback.png'}
            alt="goback"
            width={120}
            height={100}
            className="absolute top-[45%] left-[4%] -translate-x-1/2 -translate-y-1/2 z-[30]"/>
            </Link>
        </div>


    </main>
  );
}
