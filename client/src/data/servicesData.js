const servicesData = {
  hairServices: [
    { _id: '1', name: 'Classic Haircut', description: 'Professional haircut for men & women.', price: 250, originalPrice: 500, discount: 50, image: '/image/10.jpg' },
    { _id: '2', name: 'Beard Styling', description: 'Shape and style your beard.', price: 150, originalPrice: 300, discount: 50, image: '/image/12.jpeg' },
    { _id: '3', name: 'Hair Coloring (Global & Highlights)', description: 'Beautiful coloring service.', price: 1200, originalPrice: 2000, discount: 40, image: '/image/9.jpg' },
    { _id: '4', name: 'Hair Smoothening', description: 'Get silky smooth hair.', price: 1800, originalPrice: 3000, discount: 40, image: '/image/17.jpeg' },
    { _id: '5', name: 'Keratin Treatment', description: 'Repair & strengthen hair.', price: 2500, originalPrice: 4000, discount: 38, image: '/image/18.jpg' },
    { _id: '6', name: 'Head Massage (Oil Based)', description: 'Relax with oil massage.', price: 300, originalPrice: 500, discount: 40, image: '/image/32.jpg' },
    { _id: '7', name: 'Hair Spa', description: 'Deep nourishment for hair.', price: 800, originalPrice: 1200, discount: 33, image: '/image/21.jpg' },
    { _id: '8', name: 'Kids Haircut', description: 'Trendy cuts for kids.', price: 200, originalPrice: 350, discount: 43, image: '/image/33.jpg' },
    { _id: '9', name: 'Mullet Cut', description: 'Modern mullet hairstyle.', price: 400, originalPrice: 600, discount: 33, image: '/image/34.jpeg' },
    { _id: '10', name: 'Fade Cut', description: 'Popular fade haircut.', price: 350, originalPrice: 550, discount: 36, image: '/image/40.jpg' },
  ],

  skinFacialServices: [
    { _id: '11', name: 'Fruit Facial', description: 'Natural fruit glow.', price: 600, originalPrice: 900, discount: 33, image: '/image/27.jpg' },
    { _id: '12', name: 'Gold Facial', description: 'Radiant gold facial.', price: 1000, originalPrice: 1500, discount: 33, image: '/image/30.jpg' },
    { _id: '13', name: 'Diamond Facial', description: 'Brightening diamond facial.', price: 1200, originalPrice: 1800, discount: 33, image: '/image/fac1.jpeg' },
    { _id: '14', name: 'Detan Pack', description: 'Remove tan instantly.', price: 400, originalPrice: 600, discount: 33, image: '/image/fac2.jpg' },
    { _id: '15', name: 'Cleanup (Normal to Oily Skin)', description: 'Clean & fresh skin.', price: 500, originalPrice: 700, discount: 29, image: '/image/fac3.jpg' },
    { _id: '16', name: 'Anti-Acne Treatment', description: 'Reduce acne & blemishes.', price: 900, originalPrice: 1300, discount: 31, image: '/image/fac4.jpeg' },
    { _id: '17', name: 'Bridal Glow Facial', description: 'Special bridal facial.', price: 1500, originalPrice: 2200, discount: 32, image: '/image/35.jpg' },
    { _id: '18', name: 'Skin Polishing', description: 'Smooth & polished skin.', price: 1000, originalPrice: 1500, discount: 33, image: '/image/38.jpg' },
    { _id: '19', name: 'Skin Brightening Facial', description: 'Glowing bright skin.', price: 1100, originalPrice: 1600, discount: 31, image: '/image/fac5.jpg' },
    { _id: '20', name: 'Anti-Aging Facial', description: 'Younger-looking skin.', price: 1300, originalPrice: 1900, discount: 32, image: '/image/fac6.png' },
  ],

  groomingOtherServices: [
    { _id: '21', name: 'Threading (Eyebrow, Upper Lip)', description: 'Perfectly shaped brows & lips.', price: 80, originalPrice: 120, discount: 33, image: '/image/gro1.jpg' },
    { _id: '22', name: 'Waxing (Full Arm, Half Leg, Underarm)', description: 'Smooth hair-free skin.', price: 600, originalPrice: 900, discount: 33, image: '/image/gro2.webp' },
    { _id: '23', name: 'Manicure', description: 'Nail & hand care.', price: 500, originalPrice: 700, discount: 29, image: '/image/gro3.jpg' },
    { _id: '24', name: 'Pedicure', description: 'Relaxing foot care.', price: 600, originalPrice: 900, discount: 33, image: '/image/gro4.webp' },
    { _id: '25', name: 'Bleach (Face / Neck)', description: 'Even skin tone.', price: 250, originalPrice: 400, discount: 38, image: '/image/gro5.jpg' },
    { _id: '26', name: 'Mehendi Design (Hand/Bridal)', description: 'Beautiful mehendi designs.', price: 700, originalPrice: 1000, discount: 30, image: '/image/gro6.jpg' },
    { _id: '27', name: 'Body Polishing', description: 'Soft glowing body skin.', price: 1500, originalPrice: 2200, discount: 32, image: '/image/gro7.jpg' },
    { _id: '28', name: 'Back Massage', description: 'Relieves back tension.', price: 400, originalPrice: 600, discount: 33, image: '/image/gro8.jpg' },
    { _id: '29', name: 'Nail Art (Basic)', description: 'Trendy nail designs.', price: 300, originalPrice: 450, discount: 33, image: '/image/gro9.webp' },
    { _id: '30', name: 'Makeup (Party / Bridal)', description: 'Professional makeup service.', price: 2500, originalPrice: 3500, discount: 28, image: '/image/gr10.jpg' },
  ],

  bridalGroomPackages: [
    { _id: '31', name: 'Full Bridal Package (Makeup, Hairstyle, Saree Draping)', description: 'Complete bridal look.', price: 10000, originalPrice: 14000, discount: 28, image: '/image/br1.jpg' },
    { _id: '32', name: 'Groom Makeover (Facial + Haircut + Beard)', description: 'Special groom styling.', price: 3000, originalPrice: 4500, discount: 33, image: '/image/br2.jpeg' },
    { _id: '33', name: 'Engagement Look', description: 'Elegant engagement makeup.', price: 3500, originalPrice: 5000, discount: 30, image: '/image/br3.jpeg' },
    { _id: '34', name: 'Haldi + Mehendi Makeup', description: 'Festive natural look.', price: 3000, originalPrice: 4200, discount: 29, image: '/image/br4.jpeg' },
    { _id: '35', name: 'Reception Look', description: 'Glamorous reception makeup.', price: 4000, originalPrice: 5800, discount: 31, image: '/image/br5.jpeg' },
  ],

  hairWashTreatments: [
    { _id: '36', name: 'Shampoo + Conditioner', description: 'Clean & soft hair.', price: 150, originalPrice: 250, discount: 40, image: '/image/hr1.jpeg' },
    { _id: '37', name: 'Anti-Dandruff Treatment', description: 'Flake-free healthy scalp.', price: 600, originalPrice: 900, discount: 33, image: '/image/hr2.jpeg' },
    { _id: '38', name: 'Hair Fall Control Treatment', description: 'Stronger hair roots.', price: 800, originalPrice: 1200, discount: 33, image: '/image/hr3.jpeg' },
    { _id: '39', name: 'Scalp Detox', description: 'Clean & refreshed scalp.', price: 700, originalPrice: 1000, discount: 30, image: '/image/hr4.jpeg' },
    { _id: '40', name: 'Split End Repair', description: 'Repair damaged ends.', price: 500, originalPrice: 750, discount: 33, image: '/image/hr5.jpg' },
  ],
};

export default servicesData;



