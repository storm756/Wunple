import { Product } from "@/components/ProductCard";

export const ALL_PRODUCTS: Product[] = [
  {
    id: "coat-ease",
    name: "Coat Ease Pet Shampoo",
    category: "PET CARE",
    image: "/images/product-coat-ease.png",
    amazonUrl: "https://amzn.in/d/04SFVe10",
    subtitle: "Nourishing Silk Protein, Aloe Vera & Argan Oil for soft, shiny coats.",
    isComingSoon: false
  },
  {
    id: "itch-relief",
    name: "Itch Relief Pet Shampoo",
    category: "PET CARE",
    image: "/images/product-itch-relief.png",
    amazonUrl: "https://amzn.in/d/04SFVe10",
    subtitle: "Calming relief for dry, itchy, irritated skin with gentle botanicals.",
    isComingSoon: false
  },
  {
    id: "selamide-spot-on",
    name: "Selamide Spot On",
    category: "SPOT ON CARE",
    image: "/images/product-selamide-box.jpg",
    amazonUrl: "https://amzn.in/d/04SFVe10",
    subtitle: "Selamectin 6% focused parasite care against fleas, mites & worms for cats.",
    isComingSoon: false
  },
  {
    id: "chlox-antifungal",
    name: "Chlox Antifungal and Antibacterial Shampoo",
    category: "MEDICATED",
    image: "/images/product-coat-ease.png",
    subtitle: "Targeted antiseptic cleansing formula for fungal and bacterial coat conditions.",
    isComingSoon: true
  },
  {
    id: "grooming-shampoo",
    name: "Grooming Shampoo",
    category: "DAILY CARE",
    image: "/images/product-itch-relief.png",
    subtitle: "Mild, tear-free everyday bathing essential keeping pets fresh and happy.",
    isComingSoon: true
  }
];

export const BEST_SELLERS: Product[] = ALL_PRODUCTS.slice(0, 3);
