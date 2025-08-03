import React from 'react';

const categories = [
  {
    title: '1. Hair Cutting and Styling Tools ✂️',
    items: [
      'Cutting Scissors - Ustraa, Nova',
      'Thinning Scissors - Wahl, Rozia',
      'Hair Clipper / Trimmer - Wahl, Philips, Nova',
      'Combs and Brushes - Vega, Alan Truman',
      'Hair Straightener - Philips, Havells',
      'Hair Curling Rod - Ikonic, Havells',
      'Hair Dryer - Dyson, Panasonic',
      'Razor and Blades - Gillette, Dorco',
      'Neck Duster Brush - Local / Branded',
      'Barber Cape / Cutting Sheet - Waterproof / Disposable',
      'Mirror Set (Hand & Table) - Local / Branded',
      'Spray Bottle - Mist Spray',
    ],
  },
  {
    title: '2. Hair Care Products 🧴',
    items: [
      'Shampoo - L\'Oréal, Tresemmé, Matrix',
      'Conditioner - Dove, L\'Oréal',
      'Hair Serum - Livon, Streax',
      'Hair Gel / Wax - Gatsby, Set Wet',
      'Hair Spa Cream - L\'Oréal, Biotique',
      'Hair Oil - Parachute, Indulekha',
      'Anti Dandruff Lotion - Scalpe, Selsun',
      'Hair Color - L\'Oréal, Godrej',
      'Hair Bleach - VLCC, Fem',
      'Keratin Kit - L\'Oréal, Organic',
      'Hair Botox Kit - Professional Use',
      'Hair Smoothening Cream - Matrix, L\'Oréal',
    ],
  },
  {
    title: '3. Facial and Skin Care Products 💆‍♀️',
    items: [
      'Gold Facial Kit - VLCC, O3+',
      'Fruit Facial Kit - Nature, VLCC',
      'Diamond Facial Kit - Lotus, Oxyglow',
      'Cleanup Gel / Cream - VLCC, Aroma Magic',
      'D-Tan Pack - Raaga, Oxy',
      'Bleach Cream - Fem, VLCC',
      'Face Scrub - Biotique, Himalaya',
      'Toner & Moisturizer - Rose Water, Nivea',
      'Facial Steamer - Local / Branded',
    ],
  },
  {
    title: '4. Beauty Tools & Accessories 💅',
    items: [
      'Wax Heater - For Hair Removal',
      'Wax (White, Chocolate, Aloe Vera) - Rica, Sleek',
      'Wax Strips - Disposable',
      'Thread Roll - For Facial Threading',
      'Blackhead Remover Tools - Steel Tools',
      'Face Pack Brush - For Facial Use',
      'Head Band - For Facial Time',
      'Facial Sponge - Soft & Reusable',
    ],
  },
  {
    title: '5. Hygiene and Disposable Items 🧽',
    items: [
      'Disposable Towel - Single Use',
      'Hand Gloves - For Waxing/Facial',
      'Face Mask - Staff Use',
      'Sanitizer / Cleaning Spray - For Tools',
      'Disinfectant Jar - For Combs/Brushes',
      'Apron - For Staff',
      'Bed Roll Sheet - For Client Bed',
    ],
  },
  {
    title: '6. Furniture & Big Equipment 🪑',
    items: [
      'Hydraulic Chair - For Hair Cutting',
      'Shampoo Station - For Hair Wash',
      'Facial Bed - For Facial & Massage',
      'Tool Trolley - For Tools',
      'Ring Light - For Proper Lighting',
      'Reception Desk - For Customer Welcome',
      'Waiting Chair - For Clients',
    ],
  },
  {
    title: '7. Retail / Resale Products 🛍',
    items: [
      'Herbal Hair Oil - Higher Margin',
      'Face Wash - Himalaya, Biotique',
      'Small Shampoo Bottles - For Retail Sale',
      'Hair Serum Packets - Livon, Streax',
      'Beard Oil / Wax - Beardo, Bombay Shaving',
      'Hair Color Packets - Godrej, Streax',
      'Face Pack Pouch - Patanjali, Biotique',
    ],
  },
  {
    title: '8. Branded Kits 📦',
    items: [
      'Bridal Makeup Kit',
      'Hair Treatment Kit',
      '5-in-1 Facial Kit',
      'Full Salon Starter Kit',
    ],
  },
];

const Products = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-50 dark:from-gray-900 dark:to-gray-800 p-6 md:p-10 overflow-hidden">

      {/* 🫧 Luxury gradient bubbles */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-pink-400 to-purple-500 opacity-20 blur-2xl animate-pulse"
          style={{
            width: `${25 + Math.random() * 40}px`,
            height: `${25 + Math.random() * 40}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        ></div>
      ))}

      {/* 🌈 Ultra premium heading */}
      <h1 className="text-center text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-xl mb-12 relative z-10">
        ✨ Discover Premium Salon Products
      </h1>

      {/* 🪟 Premium glass cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="
              group relative rounded-3xl
              bg-white/10 dark:bg-white/5
              backdrop-blur-2xl
              border border-white/20
              shadow-[0_8px_40px_rgba(0,0,0,0.15)]
              transition-all duration-500
              hover:shadow-[0_12px_50px_rgba(236,72,153,0.3)]
              overflow-hidden
              hover:scale-[1.03]
            "
          >
            {/* 🌟 Animated gradient ring on hover */}
            <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-pink-400/50 group-hover:shadow-[0_0_25px_5px_rgba(236,72,153,0.25)] transition-all duration-500"></div>

            {/* 🪄 Gradient header strip with icon */}
            <div className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-pink-50/60 to-purple-50/60 dark:from-pink-300/10 dark:to-purple-300/10">
              <span className="text-xl">💎</span>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100 text-center tracking-wide">
                {category.title}
              </h3>
            </div>

            {/* 📄 Premium list */}
            <ul className="p-6 space-y-3 text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed tracking-normal">
              {category.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 before:content-['•'] before:text-pink-500"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 📞 Contact */}
      <div className="text-center mt-14 relative z-10">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">
          📞 To Order, Contact: 
          <a
            href="tel:7633036074"
            className="ml-2 text-pink-600 dark:text-pink-400 font-bold underline hover:no-underline"
          >
            7633036074
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Products;
