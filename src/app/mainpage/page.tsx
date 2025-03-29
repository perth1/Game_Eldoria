import Image from "next/image";
import Link from "next/link";

export default function mainpage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            //background
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <Image 
                src={'/img/UI_01.webp'} 
                alt="mainmenu" 
                fill={true}/>
            </div>
            //coin
            <div>
                <Image src={'/img/Coin.png'} 
                alt="coin" 
                width={150} 
                height={100} 
                className="absolute top-[-1%] left-[82%] z-50 bg-transparent text-transparent"/>
            </div>
            //money
            <div>
                <Image  src={'/img/money.png'} 
                alt="money" 
                width={150} 
                height={100} 
                className="absolute top-[5.5%] left-[91%] -translate-x-1/2 -translate-y-1/2 z-[20]"/>
            </div>
            //home menu
            <div>
                <Link href="/mainmenu">
                    <Image src={'/img/homeBottom.png'} 
                    alt="homebottom"
                    width={150}
                    height={130}
                    className="absolute top-[5.3%] left-[97%] -translate-x-1/2 -translate-y-1/2 z-[20]"/>
                </Link>
            </div>
            //profile player
            <div>
                    <Image src={'/img/profile.png'} 
                    alt="profile"
                    width={230}
                    height={170}
                    className="absolute top-[6.5%] left-[7%] -translate-x-1/2 -translate-y-1/2 z-[20]"/>
            </div>
            //go to next page    
            <div>
                <Link href="/dungeon">
                <Image src={'/img/go.png'}
                alt="go"
                width={100}
                height={100}
                className="absolute top-[50%] left-[95%] -translate-x-1/2 -translate-y-1/2 z-[30]"/>
                </Link>
            </div>
            
            //shop
            <div>
                <Link 
                href="/shop"
                className="absolute text-6xl top-[53%] left-[65.5%] 
                z-[50] bg-transparent text-transparent"
                >-SHOP-</Link>
            </div>

            
        </main>
    )
}