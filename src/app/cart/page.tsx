import Image from "next/image";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Library Stool Chair",
      description: "Ashen Slate/Cobalt Bliss",
      size: "L",
      quantity: 1,
      price: 99,
      image: "/product/5.png",
    },
    {
      id: 2,
      name: "Library Stool Chair",
      description: "Ashen Slate/Cobalt Bliss",
      size: "L",
      quantity: 1,
      price: 99,
      image: "/product/6.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-6">Bag</h1>
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-start gap-6 py-6 border-b border-gray-200">
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                width={96}
                height={96}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-medium">{item.name}</h2>
              <p className="text-sm text-gray-500">{item.description}</p>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <span>Size: {item.size}</span>
                <span className="mx-2">|</span>
                <span>Quantity: {item.quantity}</span>
              </div>
              <div className="mt-2 flex items-center gap-3">
               <Image src="/product/like.png" width={24} height={24} alt="button" />
               <Image src="/product/delete.png" width={24} height={24} alt="button" />
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">MRP: ${item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full lg:w-1/3">
        <h2 className="text-lg font-bold mb-6">Summary</h2>
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Estimated Delivery & Handling</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between text-lg font-medium">
            <span>Total</span>
            <span>${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</span>
          </div>
        </div>
        <button className="w-full bg-[#029FAE] text-white text-center py-4 mt-6 rounded-full hover:bg-[#027d8a]">
          Member Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
