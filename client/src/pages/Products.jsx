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
    <div className="relative p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
      
      {/* Background bubbles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-pink-400 to-purple-400 opacity-20 blur-xl animate-ping"
          style={{
            width: `${8 + Math.random() * 12}px`,
            height: `${8 + Math.random() * 12}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${4 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        ></div>
      ))}

      {categories.map((category, idx) => (
        <div
          key={idx}
          className="
            relative
            rounded-3xl
            bg-white/20 dark:bg-white/10
            backdrop-blur-md
            border border-gray-200/30 dark:border-gray-700/30
            shadow-xl hover:shadow-2xl
            hover:scale-105
            transition duration-500
            overflow-hidden
          "
        >
          {/* Top animated gradient line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 animate-pulse" />

          {/* Header */}
          <div className="bg-gradient-to-r from-pink-100/60 to-purple-100/60 dark:from-pink-300/20 dark:to-purple-300/20 rounded-t-3xl p-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {category.title}
            </h3>
          </div>

          {/* Items */}
          <ul className="p-4 space-y-1 list-disc list-inside text-gray-800 dark:text-gray-100 text-sm">
            {category.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Products;
