export interface Product {
  id: string;
  name: string;
  category: "PET CARE" | "SPOT ON CARE" | "ANTIFUNGAL & ANTIBACTERIAL SPRAY" | "ORAL CARE & ANTIBIOTICS" | "ORAL SUSPENSION";
  image: string;
  bannerImage?: string;
  amazonUrl?: string;
  isComingSoon?: boolean;
  contactOrder?: boolean;
  tag?: string;
  subtitle?: string;
  composition?: string;
  strength?: string;
  dosageForm?: string;
  packSize?: string;
  species?: string;
  indications?: string[];
  keyFeatures?: string[];
}

export const ALL_PRODUCTS: Product[] = [
  {
    id: "coat-ease",
    name: "Coat Ease Pet Shampoo",
    category: "PET CARE",
    image: "/images/product-coat-ease.png",
    bannerImage: "/images/banner-coat-ease.jpg",
    amazonUrl: "https://amzn.in/d/04SFVe10",
    subtitle: "Nourishing Silk Protein, Aloe Vera & Argan Oil for soft, shiny coats.",
    packSize: "250 ml",
    species: "Dogs & Cats",
    composition: "Infused with Silk Protein, Aloe Vera and Argan Oil",
    keyFeatures: [
      "Natural Soft Coat formula",
      "Restores essential hydration & shine",
      "Gentle botanical formula safe for regular baths",
      "pH balanced for canine & feline skin"
    ],
    isComingSoon: false
  },
  {
    id: "itch-relief",
    name: "Itch Relief Pet Shampoo",
    category: "PET CARE",
    image: "/images/product-itch-relief.png",
    amazonUrl: "https://amzn.in/d/0axmyev9",
    subtitle: "Calming relief for dry, itchy, irritated skin with gentle botanicals.",
    packSize: "250 ml",
    species: "Dogs & Cats",
    composition: "Soothing natural extracts & skin conditioning agents",
    keyFeatures: [
      "Calms sensitive, itchy & flaky skin",
      "Reinforces natural skin barrier",
      "Moisturizing formula prevents post-bath dryness",
      "Free from harsh parabens & heavy sulfates"
    ],
    isComingSoon: false
  },
  {
    id: "selamide-spot-on",
    name: "Selamide Spot On",
    category: "SPOT ON CARE",
    image: "/images/product-selamide-v2.png",
    bannerImage: "/images/banner-selamide.jpg",
    amazonUrl: "https://amzn.in/d/0iZx5H5E",
    subtitle: "Selamectin 6% focused parasite care against fleas, mites & worms for cats.",
    strength: "6% w/v",
    dosageForm: "Spot On Topical Solution",
    packSize: "1 Pipette of 0.5 ml",
    species: "Kittens & Cats (≥0.8 kg)",
    composition: "Selamectin 6% w/v",
    indications: [
      "Flea Infestations & Prevention",
      "Ear Mites (Otodectes cynotis)",
      "Hookworms & Roundworms",
      "Heartworm Disease Prevention"
    ],
    keyFeatures: [
      "Single-dose 0.5 ml easy-squeeze pipette",
      "Quick-drying topical application",
      "Comprehensive internal & external parasite protection",
      "Veterinary assessed formulation"
    ],
    isComingSoon: false
  },
  {
    id: "wuncef-dry-syrup",
    name: "WUNCEF® Dry Syrup",
    category: "ORAL CARE & ANTIBIOTICS",
    image: "/images/product-wuncef-box.jpg",
    bannerImage: "/images/banner-wuncef.jpg",
    contactOrder: true,
    subtitle: "Cefpodoxime Proxetil For Oral Suspension I.P. 100 mg for bacterial infections in dogs & cats.",
    strength: "100 mg (12.5 gm / 30 ml)",
    dosageForm: "Dry Syrup for Oral Suspension",
    packSize: "30 ml",
    species: "Dogs & Cats",
    composition: "Cefpodoxime Proxetil IP (100 mg)",
    indications: [
      "Bacterial Skin Infections",
      "Superficial Pyoderma",
      "Urinary Tract Infections (UTI)",
      "Respiratory Tract Infections",
      "Skin Abscesses & Wound-Associated Infections"
    ],
    keyFeatures: [
      "Third-Generation Cephalosporin class beta-lactam antibiotic",
      "Broad-spectrum bactericidal action against Gram-positive & Gram-negative bacteria",
      "Convenient palatable oral suspension formulation",
      "Manufactured under stringent pharmaceutical quality standards"
    ],
    isComingSoon: false
  },
  {
    id: "chlox-antiseptic-spray",
    name: "CHLOX Antifungal & Antibacterial Spray",
    category: "ANTIFUNGAL & ANTIBACTERIAL SPRAY",
    image: "/images/product-chlox-spray.png",
    bannerImage: "/images/banner-chlox-spray.jpg",
    contactOrder: true,
    subtitle: "Ketoconazole & Chlorhexidine Gluconate spray for Malassezia, yeast infections, itching & hot spots.",
    dosageForm: "Topical Antifungal & Antibacterial Spray",
    packSize: "100 ml",
    species: "Dogs & Cats",
    composition: "Ketoconazole & Chlorhexidine Gluconate Spray (Vet)",
    indications: [
      "Malassezia & Yeast Infections",
      "Relieves Itching, Redness & Hot Spots",
      "Fights Ringworm (Dermatophytosis)",
      "Helps Eliminate Ticks & Surface Microbes"
    ],
    keyFeatures: [
      "Dual-action antifungal & antibacterial formulation",
      "Convenient trigger spray for targeted hot spot application",
      "Fast soothing relief from redness and irritation",
      "Veterinary formulated for dogs and cats"
    ],
    isComingSoon: false
  },
  {
    id: "porxolyn-20",
    name: "PORXOLYN-20 Oral Suspension",
    category: "ORAL SUSPENSION",
    image: "/images/product-porxolyn.png",
    bannerImage: "/images/banner-porxolyn.jpg",
    contactOrder: true,
    subtitle: "Itraconazole Oral Suspension 20 mg for effective management of fungal infections in pets.",
    strength: "20 mg",
    dosageForm: "Oral Suspension",
    packSize: "60 ml",
    species: "Dogs & Cats",
    composition: "Itraconazole Oral Suspension 20 mg",
    indications: [
      "Systemic & Superficial Fungal Infections",
      "Microsporum & Trichophyton Ringworm",
      "Blastomycosis, Histoplasmosis & Aspergillosis"
    ],
    keyFeatures: [
      "Effective broad-spectrum triazole antifungal agent",
      "Palatable oral liquid allows accurate dosage administration",
      "High bioavailability for stubborn fungal dermatoses",
      "Veterinary use only"
    ],
    isComingSoon: false
  }
];

export const NEW_LAUNCHES: Product[] = [
  ALL_PRODUCTS[3], // WUNCEF Dry Syrup
  ALL_PRODUCTS[4], // CHLOX Spray
  ALL_PRODUCTS[5], // PORXOLYN-20 Oral Suspension
  ALL_PRODUCTS[2]  // Selamide Spot On
];

export const BEST_SELLERS = NEW_LAUNCHES;
