import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export default function Header() {
  return (
    <div className={inter.className}>
      <header className="bg-gray-50 border-b">
        <div className="bg-[#272343] text-white text-sm py-3 px-4 md:px-12 lg:px-40">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 font-light">
            <p className="text-center md:text-left">
              <span className="mx-1 text-lg">✓</span> Free Shipping On All Orders Over $50
            </p>
            <div className="flex space-x-4 items-center">
              <select className="bg-slate-800 text-white outline-none cursor-pointer p-1 rounded">
                <option value="eng">Eng</option>
                <option value="esp">Esp</option>
              </select>
              <Link href="/pages" className="hover:underline">
                FAQs
              </Link>
              <Link href="/contact" className="hover:underline">
                Need Help
              </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto py-4 flex justify-between items-center px-4 md:px-12 lg:px-40">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" width={40} height={40} alt="logo" />
            <Link href="/" className="text-2xl font-medium text-slate-900">
              Comforty
            </Link>
          </div>
          <div>
            <Link
              href="/cart"
              className="flex items-center gap-1 bg-gray-100 px-4 py-2 rounded-full"
            >
              <Image src="/cart.png" width={18} height={18} alt="Cart Icon" />
              <span className="text-slate-800 mx-1 text-sm">Cart</span>
              <div className="bg-teal-600 text-white rounded-full px-2 text-xs">
                2
              </div>
            </Link>
          </div>
        </div>

        <div className="bg-white py-3 border-t">
          <div className="container mx-auto px-4 md:px-12 lg:px-40 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-600">
              {["Home", "Shop", "Product", "Pages", "About"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="hover:text-gray-800 transition"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-600">Contact:</span>
              <span className="text-slate-900 font-medium">(808) 555-0111</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
