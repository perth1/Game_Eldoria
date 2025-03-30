import Image from "next/image";
import Link from "next/link";

export default function mainpage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {/* background  */}
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <Image 
                src={'/img/UI_01.webp'} 
                alt="mainmenu" 
                fill={true}/>
            </div>
            {/* coin  */}
            <div>
                <Image src={'/img/Coin.png'} 
                alt="coin" 
                width={130} 
                height={100} 
                className="absolute top-[-2%] left-[78.5%] z-50 bg-transparent text-transparent"/>
            </div>
            {/* money */}
            <div>
                <Image  src={'/img/money.png'} 
                alt="money" 
                width={150} 
                height={100} 
                className="absolute top-[5.5%] left-[89.5%] -translate-x-1/2 -translate-y-1/2 z-[20]"/>
            </div>
            {/* home menu botton */}
            <div>
                <Link href="/mainmenu">
                    <Image src={'/img/homeBotton.png'} 
                    alt="homebotton"
                    width={150}
                    height={130}
                    className="absolute top-[5.3%] left-[96.5%] -translate-x-1/2 -translate-y-1/2 z-[20]"/>
                </Link>
            </div>
            {/* profile player  */}
            <div>
                    <Image src={'/img/profile.png'} 
                    alt="profile"
                    width={240}
                    height={170}
                    className="absolute top-[7.5%] left-[9%] -translate-x-1/2 -translate-y-1/2 z-[20]"/>
            </div>
             {/* go to next page  */}   
            <div>
                <Link href="/dungeon">
                <Image src={'/img/go.png'}
                alt="go"
                width={100}
                height={100}
                className="absolute top-[50%] left-[95%] -translate-x-1/2 -translate-y-1/2 z-[30]"/>
                </Link>
            </div>
            
            {/* shop  */}
            <div>
                <Link 
                href="/shop"
                className="absolute text-6xl top-[53%] left-[65.5%] 
                z-[50] bg-transparent text-transparent"
                >-SHOP-</Link>
            </div>
            <div>
                <Link href="/farm">
                <Image src={'/img/gofarm.png'}
                alt="gofarm"
                width={200}
                height={100}
                className="absolute top-[51%] left-[10%] -translate-x-1/2 -translate-y-1/2 z-[50]"/>
                </Link>
            </div>
            
        </main>
    )
}