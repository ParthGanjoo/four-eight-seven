import Image from "next/image"
import Carousel from "../components/ImageSlider"

export default function Home() {
  const imagePaths = [
    "/1.webp",
    "/2.jpg",
    "/3.webp",
    "/4.webp",
    "/5.webp",
    "/6.webp",
  ]

  return (
    <main className="flex min-h-screen flex-col lg:flex-row items-center justify-between bg-[#F3E7DA]">
      <div className="lg:w-1/2">
        <div className="min-h-screen flex items-center justify-between">
          <Carousel imagePaths={imagePaths} />
        </div>
      </div>

      <div className="lg:w-1/2">
        <div className="min-h-screen flex flex-col flex-1">
          <div className=" w-full text-4xl flex items-center justify-center">
            <div className="flex flex-col items-center">
              <p className="pt-28">“Drizzle” & “Sizzle”</p>
              <p className="underline">Extra Virgin Olive Oil</p>
              <div className="pt-5 flex items-center">
                <Image src="/star.png" width={20} height={20} />
                <Image src="/star.png" width={20} height={20} />
                <Image src="/star.png" width={20} height={20} />
                <Image src="/star.png" width={20} height={20} />
                <Image src="/star.png" width={20} height={20} />
                <p className="text-lg pl-5">1573 Reviews</p>
              </div>
              <div className="bg-[#FDF4ED] rounded-xl mt-5 w-full text-sm border border-black ">
                <p className="p-5 pb-0">Quantity</p>
                <div className="flex">
                  <button className="bg-[#b0ed8d] p-6 flex items-center flex-col m-4 rounded-lg border border-black">
                    <p className="font-bold text-xl">1</p>
                    <p className="text-sm">Set</p>
                    <p className="text-xs">+10% off</p>
                  </button>
                  <button className="bg-[#FDF4ED] p-6 flex items-center flex-col m-4 rounded-lg border border-black hover:bg-[#F3E7DA] transition duration-300 ease-in-out">
                    <p className="font-bold text-xl">2</p>
                    <p className="text-sm">Sets</p>
                    <p className="text-xs">+14% off</p>
                  </button>
                  <button className="bg-[#FDF4ED] p-6 flex items-center flex-col m-4 rounded-lg border border-black hover:bg-[#F3E7DA] transition duration-300 ease-in-out">
                    <p className="font-bold text-xl">3</p>
                    <p className="text-sm">Sets</p>
                    <p className="text-xs">+15% off</p>
                  </button>
                  <button className="bg-[#FDF4ED] p-6 flex items-center flex-col m-4 rounded-lg border border-black hover:bg-[#F3E7DA] transition duration-300 ease-in-out">
                    <p className="font-bold text-xl">6</p>
                    <p className="text-sm">Sets</p>
                    <p className="text-xs">+17% off</p>
                  </button>
                </div>
                <div className="flex justify-center">
                  <div className="m-2 items-center border border-dashed border-black h-0 w-11/12"></div>
                </div>
                <div className="flex">
                  <button className="bg-[#FDF4ED] p-2 flex items-center flex-col m-4 w-5 h-5 rounded-full border border-black hover:bg-[#F3E7DA] transition duration-300 ease-in-out"></button>
                  <p className="text-sm py-4">One Time Purchase</p>
                  <p className="text-sm p-4 ml-auto">$37</p>
                </div>
                <div className="flex justify-center">
                  <div className="m-2 items-center border border-dashed border-black h-0 w-11/12"></div>
                </div>
                <div className="flex">
                  <button className="bg-[#b0ed8d] p-2 flex items-center flex-col m-4 w-5 h-5 rounded-full border border-black"></button>
                  <p className="text-sm py-4">Subscribe & Save</p>
                  <p className="text-sm p-4 ml-auto">
                    <s>%37 </s>$33
                  </p>
                </div>
                <div className="flex px-4">
                  <button className="border border-black rounded-full py-2 pl-4 pr-72  inline-flex items-center hover:bg-[#F3E7DA] transition duration-300 ease-in-out">
                    <span>Frequency: Every 1 Month</span>
                    <svg
                      className="fill-current h-4 w-4 "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20">
                      <path d="M10 14l-7-7h14z" />
                    </svg>
                  </button>

                </div>
                <div className="flex justify-center">
                  <div className="m-3 items-center border border-dashed border-black h-0 w-11/12"></div>
                </div>
                <div className="flex justify-center">
                  <button className="bg-[#D4DF55] font-bold py-2 px-2 w-11/12 rounded-full border border-black hover:bg-[#F3E7DA] transition duration-300 ease-in-out">
                    Subscribe - $33.30
                  </button>
                </div>
                <div className="flex justify-center">
                  <p className="text-center py-5">Skip or Cancel Anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
