import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${inter.className} bg-white`}>
      <div className="flex flex-col lg:flex-row items-center justify-center my-12 lg:my-24 lg:mx-72 mx-4 gap-10">
        <div className="flex flex-col gap-y-6 text-center lg:text-left">
          <p className="text-sm text-indigo-950">WELCOME TO CHAIRY</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-950">
            Best Furniture Collection For Your Interior
          </h1>
          <button className="w-[171px] bg-customBlue text-white h-[52px] rounded-lg mx-auto lg:mx-0">
            Shop Now →
          </button>
        </div>
        <div>
          <Image
            src="/right.png"
            width={450}
            height={600}
            alt="right"
            className="w-full"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-20 my-12 px-4">
        <Image src="/logos/logo.png" width={87} height={87} alt="logo" />
        <Image src="/logos/logo2.png" width={107} height={109} alt="logo" />
        <Image src="/logos/logo3.png" width={135} height={139} alt="logo" />
        <Image src="/logos/logo4.png" width={63} height={65} alt="logo" />
        <Image src="/logos/logo5.png" width={98} height={101} alt="logo" />
        <Image src="/logos/logo6.png" width={113} height={115} alt="logo" />
        <Image src="/logos/logo7.png" width={84} height={87} alt="logo" />
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="mx-4 lg:mx-28 my-12 text-3xl text-indigo-950 font-bold">
          Featured Products
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-6 px-4">
          {[
            "/chairs/1.png",
            "/chairs/2.png",
            "/chairs/3.png",
            "/chairs/4.png",
          ].map((src, index) => (
            <div key={index} className="w-full sm:w-[312px]">
              <Image
                src={src}
                width={312}
                height={312}
                alt="chair"
                className="rounded-md my-3 w-full"
              />
              <div className="flex justify-between items-center px-2">
                <div>
                  <p className="text-teal-600">Library Stool Chair</p>
                  <p>$20</p>
                </div>
                <div>
                  <Image src="/cart.png" width={22} height={22} alt="cart" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center my-20">
        <h1 className="mx-4 lg:mx-60 my-12 text-3xl text-indigo-950 font-bold">
          Top Categories
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-6 px-4">
          {["/category/1.png", "/category/2.png", "/category/3.png"].map(
            (src, index) => (
              <div key={index} className="w-full sm:w-[312px]">
                <Image
                  src={src}
                  width={424}
                  height={424}
                  alt="category"
                  className="rounded-lg my-3 w-full"
                />
              </div>
            )
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-start items-center py-12 md:py-24 mx-4 md:mx-36">
        <p className="md:-rotate-90 text-base md:text-xl font-medium uppercase tracking-wider text-zinc-900 pt-6">
          Explore new and popular styles
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-7 mt-6 md:mt-0">
          <div>
            <Image
              src="/chairs/3.png"
              width={648}
              height={648}
              alt="chair"
              className="w-full md:w-[648px] h-auto"
            />
          </div>
          <div className="flex gap-4 md:gap-6">
            <div className="flex flex-col gap-4 md:gap-6">
              <Image
                src="/chairs/chair1.png"
                width={312}
                height={312}
                alt="chair"
                className="w-full md:w-[312px] h-auto"
              />
              <Image
                src="/chairs/chair2.png"
                width={312}
                height={312}
                alt="chair"
                className="w-full md:w-[312px] h-auto"
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
              <Image
                src="/chairs/chair3.png"
                width={312}
                height={312}
                alt="chair"
                className="w-full md:w-[312px] h-auto"
              />
              <Image
                src="/chairs/chair3.png"
                width={312}
                height={312}
                alt="chair"
                className="w-full md:w-[312px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-9 my-24">
        <h1 className="flex justify-center text-3xl text-indigo-950 font-bold">
          Our Products
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-6 px-4">
          {[
            "/chairs/1.png",
            "/chairs/2.png",
            "/chairs/3.png",
            "/chairs/4.png",
            "/chairs/9.png",
            "/chairs/5.png",
            "/chairs/7.png",
            "/chairs/7.png",
          ].map((src, index) => (
            <div key={index} className="w-full sm:w-[312px]">
              <Image
                src={src}
                width={312}
                height={312}
                alt="chair"
                className="rounded-md my-3 w-full"
              />
              <div className="flex justify-between items-center px-2">
                <div>
                  <p className="text-teal-600">Library Stool Chair</p>
                  <p>$20</p>
                </div>
                <div>
                  <Image src="/cart.png" width={22} height={22} alt="cart" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
