import React from "react";

const categories = [
  {
    title: "1. Hair Cutting & Styling Tools ✂️",
    img: "/image/tools/1.jpg",
    items: [
      "Cutting Scissors - Ustraa, Nova",
      "Thinning Scissors - Wahl, Rozia",
      "Hair Clipper - Wahl, Philips",
      "Comb & Brushes - Vega",
      "Hair Dryer - Dyson, Panasonic",
    ],
  },
  {
    title: "2. Hair Care Products 🧴",
    img: "/image/tools/2.jpg",
    items: [
      "Shampoo - L'Oréal, Tresemmé",
      "Conditioner - Dove, Matrix",
      "Hair Oil - Indulekha, Parachute",
      "Hair Serum - Livon, Streax",
      "Hair Spa Cream - Biotique",
    ],
  },
  {
    title: "3. Hair Coloring 🖌",
    img: "/image/tools/3.jpg",
    items: [
      "Hair Color - L'Oréal, Godrej",
      "Hair Bleach - VLCC, Fem",
      "Keratin Kit - L'Oréal",
      "Hair Smoothening Cream - Matrix",
      "Hair Botox Kit - Professional Use",
    ],
  },
  {
    title: "4. Facial Kits 💆‍♀️",
    img: "/image/tools/4.jpg",
    items: [
      "Gold Facial Kit - VLCC",
      "Diamond Facial Kit - Lotus",
      "Fruit Facial Kit - Nature Essence",
      "Cleanup Gel - Aroma Magic",
      "D-Tan Pack - Raaga",
    ],
  },
  {
    title: "5. Wax & Hair Removal 🍯",
    img: "/image/tools/5.jpg",
    items: [
      "Wax Heater - Rica, Sleek",
      "Chocolate Wax - Rica",
      "Aloe Vera Wax - Sleek",
      "Wax Strips - Disposable",
      "Thread Roll - Facial Threading",
    ],
  },
  {
    title: "6. Beauty Tools 💅",
    img: "/image/tools/6.jpg",
    items: [
      "Blackhead Remover Tools",
      "Face Pack Brush",
      "Head Band - Facial Use",
      "Facial Sponge - Reusable",
      "Eyebrow Tweezers",
    ],
  },
  {
    title: "7. Hygiene & Disposables 🧽",
    img: "/image/tools/7.jpg",
    items: [
      "Disposable Towels",
      "Hand Gloves - Facial/Wax",
      "Face Mask - Staff Use",
      "Sanitizer Spray",
      "Bed Roll Sheet",
    ],
  },
  {
    title: "8. Big Equipment 🪑",
    img: "/image/tools/8.jpg",
    items: [
      "Hydraulic Chair",
      "Shampoo Station",
      "Facial Bed",
      "Tool Trolley",
      "Ring Light",
    ],
  },
  {
    title: "9. Reception & Waiting 🛋",
    img: "/image/tools/9.jpg",
    items: [
      "Reception Desk",
      "Waiting Chair",
      "Magazine Rack",
      "Digital Display Board",
      "Decor Plants",
    ],
  },
  {
    title: "10. Makeup Products 💄",
    img: "/image/tools/10.jpg",
    items: [
      "Foundation - MAC, Lakmé",
      "Compact Powder - Maybelline",
      "Lipsticks - Lakmé, Nykaa",
      "Makeup Brushes",
      "Setting Spray",
    ],
  },
  {
    title: "11. Nail Care 💅",
    img: "/image/tools/11.jpg",
    items: [
      "Nail Polish - Colorbar",
      "Nail Polish Remover",
      "Nail Filer & Buffer",
      "Cuticle Remover",
      "Nail Art Stickers",
    ],
  },
  {
    title: "12. Spa Essentials 🛁",
    img: "/image/tools/12.jpg",
    items: [
      "Aroma Oils",
      "Massage Creams",
      "Body Scrub",
      "Body Wrap",
      "Massage Stones",
    ],
  },
  {
    title: "13. Steam & Heat Devices 🌫",
    img: "/image/tools/13.jpg",
    items: [
      "Facial Steamer",
      "Towel Warmer",
      "Hot Stone Heater",
      "Steam Machine",
      "Infrared Lamp",
    ],
  },
  {
    title: "14. Men's Grooming 🧔",
    img: "/image/tools/14.jpg",
    items: [
      "Beard Oil - Beardo",
      "Beard Wax",
      "Aftershave Lotion",
      "Trimmers",
      "Beard Comb",
    ],
  },
  {
    title: "15. Retail Products 🛍",
    img: "/image/tools/15.jpg",
    items: [
      "Small Shampoo Bottles",
      "Face Wash - Himalaya",
      "Hair Serum Packets",
      "Hair Color Sachets",
      "Face Pack Pouch",
    ],
  },
  {
    title: "16. Branded Kits 📦",
    img: "/image/tools/16.jpg",
    items: [
      "Bridal Makeup Kit",
      "Full Salon Starter Kit",
      "5-in-1 Facial Kit",
      "Hair Treatment Kit",
      "Keratin Kit",
    ],
  },
  {
    title: "17. Towels & Linens 🧺",
    img: "/image/tools/17.jpg",
    items: [
      "Large Towels",
      "Face Towels",
      "Bed Sheets",
      "Aprons",
      "Head Bands",
    ],
  },
  {
    title: "18. Electric Tools 🔌",
    img: "/image/tools/18.jpg",
    items: [
      "Hair Straightener",
      "Curling Rod",
      "Blow Dryer",
      "Trimmer",
      "Hot Brush",
    ],
  },
  {
    title: "19. Display & Branding 🏷",
    img: "/image/tools/19.jpg",
    items: [
      "Brand Posters",
      "Product Standee",
      "Mirror Branding",
      "Menu Cards",
      "Digital Frames",
    ],
  },
  {
    title: "20. Decor & Ambience 🌿",
    img: "/image/tools/20.jpg",
    items: [
      "Fairy Lights",
      "Wall Art",
      "Indoor Plants",
      "Aroma Diffuser",
      "Music Player",
    ],
  },
  {
    title: "21. Training & Books 📚",
    img: "/image/tools/21.jpg",
    items: [
      "Haircut Books",
      "Makeup Manuals",
      "Skin Care Guide",
      "Posters",
      "Certificates",
    ],
  },
  {
    title: "22. Accessories & Add-ons ✨",
    img: "/image/tools/22.jpg",
    items: ["Neck Brush", "Mirror Set", "Spray Bottles", "Tool Bags", "Apron"],
  },
];

const Products = () => {
  return (
      <div className="relative min-h-screen bg-gradient-to-tr from-gray-200 via-pink-100 to-white dark:from-gray-900 dark:via-purple-900 dark:to-gray-800 p-10 overflow-x-hidden">
      {/* Floating soft light orbs for premium ambiance */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-20 bg-gradient-to-tr from-pink-400 via-purple-400 to-pink-300 blur-3xl animate-float-slow pointer-events-none z-0"
          style={{
            width: `${50 + Math.random() * 80}px`,
            height: `${50 + Math.random() * 80}px`,
            top: `${Math.random() * 85}%`,
            left: `${Math.random() * 90}%`,
            animationDuration: `${10 + Math.random() * 15}s`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        ></div>
      ))}

      {/* Luxurious heading */}
      <h1 className="text-center text-5xl md:text-7xl font-extralight tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-purple-600 dark:from-purple-400 dark:to-pink-400 drop-shadow-lg mb-16 z-10 relative">
        ✨ Premium Saloon Essentials Products
      </h1>

      {/* Responsive product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-14 relative z-10">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center group cursor-pointer transition-transform hover:scale-110 hover:z-20 duration-700"
          >
            {/* Image: premium card, glow, depth */}
            <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(168,85,247,0.3),0_8px_40px_rgba(236,72,153,0.15)] bg-gradient-to-tr from-white via-pink-100 to-purple-100 dark:from-purple-900 dark:via-purple-800 dark:to-pink-900 transition-shadow duration-500 group-hover:shadow-[0_0_30px_5px_rgba(168,85,247,0.5),0_0_40px_10px_rgba(236,72,153,0.35)]">
              <img
                src={category.img}
                alt={category.title}
                className="w-full h-full object-cover rounded-2xl border border-transparent group-hover:border-purple-400 transition-all duration-500"
              />
              {/* Soft-glow overlay for elegance */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none ring-4 ring-purple-300/30 opacity-75 blur-[7px] group-hover:ring-pink-400 group-hover:blur-[12px] transition-all duration-500"></div>
            </div>

            {/* Elegant glass card w/ subtle shadow and gradient border */}
            <div className="mt-6 w-full max-w-xs bg-white/70 dark:bg-gray-900/60 rounded-3xl backdrop-blur-xl border border-purple-300/30 dark:border-pink-400/20 shadow-[0_12px_40px_rgba(168,85,247,0.15),0_6px_10px_rgba(236,72,153,0.1)] hover:shadow-[0_20px_60px_rgba(168,85,247,0.3),0_12px_20px_rgba(236,72,153,0.2)] transition-shadow duration-600">
              <div className="flex items-center justify-center gap-4 py-5 px-7 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl shadow-md shadow-pink-400/40 dark:shadow-purple-700/50">
                <span className="text-3xl text-white drop-shadow-lg">💎</span>
                <h3 className="text-xl font-light text-white drop-shadow-lg tracking-wide">
                  {category.title}
                </h3>
              </div>
              <ul className="p-5 text-gray-800 dark:text-gray-200 text-base font-light space-y-3 list-disc list-inside">
                {category.items.map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-purple-600 dark:hover:text-pink-400 transition-colors duration-300 cursor-default"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Contact section */}
      <div className="text-center mt-16 z-10">
        <h2 className="text-2xl font-light text-gray-900 dark:text-gray-100 tracking-wide">
          📞 To Order, Contact:
          <a
            href="tel:8084654030"
            className="ml-3 font-semibold text-purple-600 dark:text-pink-400 underline hover:no-underline"
          >
            8084654030
          </a>
        </h2>
      </div>

      {/* Subtle floating animation keyframes */}
      <style>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(-8px);
          }
          50% {
            transform: translateY(8px);
          }
        }
        .animate-float-slow {
          animation: float-slow 14s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Products;
