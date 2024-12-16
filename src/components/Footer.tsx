import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-4 md:px-12 lg:px-32 border-t mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-700">
        <div>
          <div className="flex items-center mb-4">
            <div className="p-2">
              <Image src="/logo.png" width={50} height={50} alt="logo" />
            </div>
            <h2 className="text-2xl font-bold ml-2 text-gray-800">Comforty</h2>
          </div>
          <p className="text-sm text-gray-600">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus.
          </p>
          <div className="flex mt-4 space-x-3 items-center">
            <Link
              href="/about"
              className="text-teal-500 border border-teal-500 rounded-full p-2 hover:bg-teal-500 hover:text-white transition"
            >
              <Image src="/fb.png" width={16} height={16} alt="icon" />
            </Link>
            <Link
              href="/about"
              className="text-teal-500 rounded-full p-2 hover:bg-teal-500 hover:text-white transition"
            >
              <Image src="/tw.png" width={32} height={32} alt="icon" />
            </Link>
            <Link
              href="/about"
              className="text-teal-500 rounded-full p-2 hover:bg-teal-500 hover:text-white transition"
            >
              <Image src="/ig.png" width={16} height={16} alt="icon" />
            </Link>
            <Link
              href="/about"
              className="text-teal-500 rounded-full p-2 hover:bg-teal-500 hover:text-white transition"
            >
              <Image src="/pi.png" width={16} height={16} alt="icon" />
            </Link>
            <Link
              href="/about"
              className="text-teal-500 rounded-full p-2 hover:bg-teal-500 hover:text-white transition"
            >
              <Image src="/yt.png" width={16} height={16} alt="icon" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-medium text-gray-400 uppercase text-sm mb-4">
            Category
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-teal-500">
                Sofa
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-teal-500">
                Armchair
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-teal-500">
                Wing Chair
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-teal-500">
                Desk Chair
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-teal-500">
                Wooden Chair
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-teal-500">
                Park Bench
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-gray-400 text-sm uppercase mb-4">
            Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-teal-500">
                Help & Support
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-teal-500">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-teal-500">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-teal-500">
                Help
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-sm text-gray-400 uppercase mb-4">
            Newsletter
          </h3>
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full md:w-auto px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
            <button className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition">
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim.
          </p>
        </div>
      </div>

      <div className="border-t mt-8 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p className="text-center md:text-left">
            &copy; 2021 Blogy - Designed & Developed by{" "}
            <b className="text-[#272343]">Zakirsoft</b>
          </p>
          <div className="flex space-x-4 items-center justify-center">
            <Image src="/paypal.png" width={80} height={47} alt="cash" />
            <Image src="/express.png" width={80} height={47} alt="cash" />
            <Image src="/visa.png" width={80} height={47} alt="cash" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
