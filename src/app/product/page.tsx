import React from "react";
import Image from "next/image";
import Link from "next/link";

const LibraryStoolChair = () => {
  const products = [
    {
      id: 2,
      name: "Library Stool Chair",
      price: "$99",
      image: "/product/2.png",
    },
    {
      id: 3,
      name: "Library Stool Chair",
      price: "$99",
      image: "/product/3.jpg",
    },
    {
      id: 4,
      name: "Library Stool Chair",
      price: "$99",
      image: "/product/4.jpg",
    },
    {
      id: 5,
      name: "Library Stool Chair",
      price: "$99",
      image: "/product/5.png",
    },
    {
      id: 6,
      name: "Library Stool Chair",
      price: "$99",
      image: "/product/6.png",
    },
  ];
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg justify-around items-center overflow-hidden my-16 md:my-36 flex flex-col md:flex-row">
        <div className="relative w-full md:w-1/2 h-full">
          <Image
            src="/product/7.png"
            width={675}
            height={607}
            alt="Library Stool Chair"
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/3 p-6 flex flex-col justify-start md:justify-start">
          <h3 className="text-6xl max-md:text-center font-bold text-gray-900 my-4">
            Library Stool Chair
          </h3>
          <p className="text-xl font-bold text-white mt-4 bg-customBlue mb-4 w-[144px] text-center py-2 rounded-full mx-auto md:mx-0">
            $20.00 USD
          </p>
          <p className="text-gray-700 text-2xl my-14 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            imperdiet erat eget, lorem ipsum dolor sit amet.
          </p>
          <div className="flex gap-2 bg-customBlue py-3 w-[212px] items-center text-white rounded-lg justify-center mx-auto md:mx-0">
            <Image src="/cart3.png" width={22} height={22} alt="cart" />
            <Link href="/cart">Add To Cart</Link>
          </div>
        </div>
      </div>

      <div>
        <section className="py-12 px-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold uppercase tracking-widest">
              Featured Products
            </h2>
            <p className="text-sm font-semibold border-b-2 border-black pb-1">
              View all
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.map((product) => (
              <div key={product.id} className="text-center">
                <div className="relative w-[263px] h-[263px] mx-auto">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={263}
                    height={263}
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center my-3 justify-between">
                  <h3 className="text-gray-600">{product.name}</h3>
                  <p className="text-sm font-bold">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LibraryStoolChair;
