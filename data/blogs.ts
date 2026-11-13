export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  publishDate: string; // ISO date string: YYYY-MM-DD
  readTime: string;
  metaDescription: string;
  focusKeyword: string;
  image: string;
  excerpt: string;
  sections: {
    heading?: string;
    paragraphs: string[];
  }[];
  callout?: string;
}

export const ALL_BLOGS: BlogPost[] = [
  {
    slug: "simple-pet-care-routine-dogs-cats",
    title: "A Simple Pet-Care Routine for Dogs and Cats",
    category: "Everyday Pet Care",
    publishDate: "2026-11-01T00:00:00Z", // Live now
    readTime: "4 min read",
    metaDescription: "Build a practical daily routine for feeding, grooming, hygiene, exercise and early health checks.",
    focusKeyword: "daily pet care routine",
    image: "/images/about-contact-hero.jpg",
    excerpt: "Good pet care is built from small, consistent habits. A practical routine helps pets feel secure, keeps them comfortable and makes it easier to spot changes early.",
    sections: [
      {
        heading: "Start with the basics",
        paragraphs: [
          "Provide fresh water and a complete, age-appropriate diet. Keep feeding times reasonably consistent, and ask your veterinarian before making major diet changes. Treats should complement—not replace—a balanced diet."
        ]
      },
      {
        heading: "Make grooming predictable",
        paragraphs: [
          "Brush according to coat type and your pet’s tolerance. Check for tangles, redness, unusual odour, hair loss or areas your pet repeatedly licks. Use products made for pets rather than human shampoo."
        ]
      },
      {
        heading: "Keep their spaces clean",
        paragraphs: [
          "Wash bowls, clean sleeping areas and pick up waste promptly. For cats, scoop litter frequently and keep the tray somewhere quiet and accessible. For dogs, check paws and coat after outdoor walks."
        ]
      },
      {
        heading: "Add movement and enrichment",
        paragraphs: [
          "Dogs benefit from walks, sniffing and training games. Cats need play that encourages chasing and pouncing, along with safe places to climb or hide. Adjust activities to age, health and temperament."
        ]
      },
      {
        heading: "Notice changes",
        paragraphs: [
          "Changes in appetite, thirst, energy, toilet habits, skin or behaviour are worth tracking. If symptoms persist or worsen, contact a veterinarian rather than guessing at the cause."
        ]
      }
    ],
    callout: "The best routine is one you can maintain. Wunple grooming and hygiene products can support parts of everyday care when chosen for your pet’s needs and used according to the label."
  },
  {
    slug: "choosing-right-shampoo-coat-skin",
    title: "Choosing the Right Shampoo for Your Pet’s Coat and Skin",
    category: "Grooming Guide",
    publishDate: "2026-11-08T00:00:00Z", // Released: Week 2
    readTime: "4 min read",
    metaDescription: "Choose pet shampoo based on coat condition, skin needs and bathing habits, and learn when medicated products need veterinary guidance.",
    focusKeyword: "best shampoo for dogs and cats",
    image: "/images/hero-beagle.png",
    excerpt: "A good bath should leave a pet clean and comfortable—not dry, irritated or stressed. The right shampoo depends on coat, skin condition, lifestyle and veterinary advice.",
    sections: [
      {
        heading: "Choose a pet-specific product",
        paragraphs: [
          "Avoid human shampoo unless a veterinarian specifically advises it. Check the label for intended species, directions, age guidance and precautions."
        ]
      },
      {
        heading: "Match the shampoo to the need",
        paragraphs: [
          "Wunple Coat Ease is positioned for soft-coat grooming, while Itch Relief is intended for pets with itch-prone skin. A product designed for a concern does not replace finding the underlying cause."
        ]
      },
      {
        heading: "Understand medicated shampoos",
        paragraphs: [
          "Wunple Chlox is a medicated shampoo labelled with ketoconazole 2% w/v and chlorhexidine gluconate equivalent to 4% w/v. Use medicated products only as directed on the label and by a veterinary professional."
        ]
      },
      {
        heading: "Make bath time calmer",
        paragraphs: [
          "Brush out tangles where appropriate, use lukewarm water, protect eyes and ears, rinse thoroughly and dry well. Keep sessions calm and reward your pet for cooperating."
        ]
      },
      {
        heading: "Know when to seek help",
        paragraphs: [
          "Bathing frequency varies. Persistent itching, redness, sores or unusual odour should be discussed with a veterinarian instead of repeatedly switching products."
        ]
      }
    ],
    callout: "Choose shampoo by purpose, not just fragrance. Read the label, use products as directed and seek professional advice for persistent skin concerns."
  },
  {
    slug: "why-is-my-pet-itching-parasites-allergies",
    title: "Why Is My Pet Itching? Parasites, Allergies and Other Causes",
    category: "Pet Health Education",
    publishDate: "2026-11-15T00:00:00Z", // Scheduled: Week 3
    readTime: "4 min read",
    metaDescription: "Understand common causes of pet itching, including parasites and environmental triggers, and learn when to seek veterinary help.",
    focusKeyword: "why is my dog itching",
    image: "/images/product-coat-ease.png",
    excerpt: "A scratch now and then is normal. Repeated scratching, licking, chewing or head-shaking deserves attention because itching can have several causes.",
    sections: [
      {
        heading: "Parasites can cause discomfort",
        paragraphs: [
          "Fleas, mites and other parasites may cause itching or irritation. Some are difficult to spot, so a veterinary examination may be needed."
        ]
      },
      {
        heading: "Environmental allergies are different",
        paragraphs: [
          "Pollen, grasses, dust mites and mould can contribute to allergic signs in some pets. These are not parasites, so a parasite treatment will not treat an environmental allergy."
        ]
      },
      {
        heading: "Skin irritation or infection",
        paragraphs: [
          "Redness, strong odour, sores, greasy skin or recurring ear problems may need veterinary assessment. Avoid applying random human creams or leftover medicines."
        ]
      },
      {
        heading: "What to note",
        paragraphs: [
          "Record when the itching began, which areas are affected, whether it follows walks or grooming, and any recent product changes. Photos can help if symptoms come and go."
        ]
      },
      {
        heading: "When to seek help",
        paragraphs: [
          "Contact a veterinarian for persistent itching, open sores, marked hair loss or ear pain. Facial swelling, breathing difficulty or sudden severe symptoms need urgent care."
        ]
      }
    ],
    callout: "Wunple Selamide Spot-On contains selamectin 6% w/v and is labelled for kittens and cats up to 5 kg from 8 weeks for specific parasite indications. It does not treat environmental allergies. Veterinary use only."
  },
  {
    slug: "cat-parasite-care-what-parents-should-know",
    title: "Cat Parasite Care: What Pet Parents Should Know",
    category: "Product Education",
    publishDate: "2026-11-22T00:00:00Z", // Scheduled: Week 4
    readTime: "4 min read",
    metaDescription: "Learn about common cat parasites, cat-specific products and responsible parasite prevention with your veterinarian.",
    focusKeyword: "cat parasite prevention",
    image: "/images/banner-selamide.jpg",
    excerpt: "Parasites can affect a cat’s comfort even if it spends most of its time indoors. Risk varies with lifestyle, location and contact with other animals.",
    sections: [
      {
        heading: "Know common concerns",
        paragraphs: [
          "Fleas, ear mites and certain intestinal worms can affect cats. Signs may include scratching, ear irritation, coat changes or digestive symptoms."
        ]
      },
      {
        heading: "Indoor cats still need assessment",
        paragraphs: [
          "Indoor living can reduce some exposures, but does not remove every risk. Ask your veterinarian which prevention measures suit your cat."
        ]
      },
      {
        heading: "Use cat-specific products",
        paragraphs: [
          "Never assume a dog parasite product is safe for a cat. Species, weight, age and active ingredient all matter, especially for kittens."
        ]
      },
      {
        heading: "Using Selamide responsibly",
        paragraphs: [
          "Wunple Selamide Spot-On is labelled as selamectin 6% w/v in a 0.5 ml pipette for kittens and cats up to 5 kg from 8 weeks. The label lists specific parasite indications including ear mites, hookworms, roundworms, flea infestation and heartworm disease."
        ]
      },
      {
        heading: "Make prevention routine",
        paragraphs: [
          "Keep veterinary records, follow recommended schedules and seek advice for recurring symptoms. Do not add extra doses or combine treatments unless instructed."
        ]
      }
    ],
    callout: "Parasite prevention should fit the individual cat. Selamide is for veterinary use only; follow the product label and your veterinarian’s guidance."
  },
  {
    slug: "pet-grooming-india-weather-lifestyle",
    title: "Pet Grooming in India: Adapting Care to Weather and Lifestyle",
    category: "Indian Pet-Care Guide",
    publishDate: "2026-11-29T00:00:00Z", // Scheduled: Week 5
    readTime: "4 min read",
    metaDescription: "Practical grooming advice for Indian weather, including monsoon dampness, hot-weather walks and coat maintenance.",
    focusKeyword: "pet grooming tips India",
    image: "/images/corgi-bath.png",
    excerpt: "India’s weather can shift from hot and humid to rainy and dusty. Grooming should adapt to your pet’s coat and environment rather than follow a one-size-fits-all schedule.",
    sections: [
      {
        heading: "After walks and outdoor play",
        paragraphs: [
          "Check paws, belly and coat for dirt, burrs and insects. After rain, dry damp areas thoroughly and avoid leaving wet bedding in use."
        ]
      },
      {
        heading: "Brush for comfort",
        paragraphs: [
          "Regular brushing removes loose hair and helps you notice tangles or skin changes. Long-coated pets may need more frequent brushing, while short-coated pets still benefit from checks."
        ]
      },
      {
        heading: "Bathe thoughtfully",
        paragraphs: [
          "Bathing frequency depends on coat, skin and activity. Use an appropriate pet shampoo and rinse completely. Medicated products should follow veterinary directions."
        ]
      },
      {
        heading: "Keep the home fresh",
        paragraphs: [
          "Wash bedding and bowls regularly, clean litter areas and dry towels fully. Store household cleaners securely and follow pet-safe use directions."
        ]
      },
      {
        heading: "Be mindful of heat",
        paragraphs: [
          "Walk dogs during cooler hours, provide shade and water, and avoid hot surfaces. Heavy panting, weakness or collapse can be urgent signs; seek veterinary care."
        ]
      }
    ],
    callout: "Good grooming combines coat care, clean surroundings and weather-aware habits. Wunple products can support the routine when selected for the right purpose and used as directed."
  },
  {
    slug: "rise-of-pet-parenting-in-india",
    title: "The Rise of Pet Parenting in India: From Ownership to Everyday Care",
    category: "Industry & Culture",
    publishDate: "2026-12-06T00:00:00Z", // Scheduled: Week 6
    readTime: "5 min read",
    metaDescription: "Explore how pet parenting is evolving in India and what responsible growth means for products, services and animal welfare.",
    focusKeyword: "pet care industry in India",
    image: "/images/banner-coat-ease.jpg",
    excerpt: "Pet care in India is becoming more holistic as many households treat pets as family members. This changes expectations around food, grooming, veterinary care and safety.",
    sections: [
      {
        heading: "Pet parents want useful information",
        paragraphs: [
          "Online advice is easy to find, but clear, responsible education matters. Brands should help people understand labels and ask better questions—not replace veterinary advice."
        ]
      },
      {
        heading: "Care goes beyond food and toys",
        paragraphs: [
          "Daily care includes grooming, hygiene, parasite prevention, training, exercise, mental stimulation and preventive veterinary visits. Needs change with age, health and lifestyle."
        ]
      },
      {
        heading: "Trust beats exaggerated claims",
        paragraphs: [
          "Transparent labels, clear instructions and appropriate product claims help build trust. No single product should be presented as a solution to every problem."
        ]
      },
      {
        heading: "Local needs shape the category",
        paragraphs: [
          "Indian homes and climates vary. Practical advice on monsoon grooming, apartment enrichment, hot-weather comfort and outdoor exposure can be especially useful."
        ]
      },
      {
        heading: "Responsible growth benefits pets",
        paragraphs: [
          "Long-term progress depends on animal welfare, informed consumers, reliable products, responsible adoption and access to qualified veterinary care—not just more launches."
        ]
      }
    ],
    callout: "For Wunple, the future means making everyday grooming, hygiene and parasite-care information more accessible. Industry growth matters most when it improves life for pets and their people."
  },
  {
    slug: "build-pet-friendly-home-apartment",
    title: "How to Build a Pet-Friendly Home in an Apartment",
    category: "Everyday Pet Care",
    publishDate: "2026-12-13T00:00:00Z", // Scheduled: Week 7
    readTime: "4 min read",
    metaDescription: "Make apartment life safer and more enriching for dogs and cats with simple home and routine changes.",
    focusKeyword: "pet-friendly apartment tips",
    image: "/images/banner-chlox-spray.jpg",
    excerpt: "Pets can thrive in apartments when their physical, social and behavioural needs are considered. Space matters, but routine, enrichment, safety and connection matter too.",
    sections: [
      {
        heading: "Create a resting place",
        paragraphs: [
          "Give pets a comfortable area away from constant foot traffic. Cats often appreciate elevated spots and hiding places. Keep food, water and litter areas accessible."
        ]
      },
      {
        heading: "Make play part of the day",
        paragraphs: [
          "Use training and sniffing games for dogs. Cats benefit from interactive toys, scratching surfaces and climbing opportunities. Supervise toys that can break or be swallowed."
        ]
      },
      {
        heading: "Plan hygiene routines",
        paragraphs: [
          "Walk dogs consistently and clean up promptly. For cats, provide accessible litter trays and scoop frequently. Store cleaning products securely."
        ]
      },
      {
        heading: "Reduce common hazards",
        paragraphs: [
          "Secure windows and balconies, keep medicines and chemicals out of reach, and check that plants and small objects are safe for your pet."
        ]
      },
      {
        heading: "Respect neighbours and your pet",
        paragraphs: [
          "Positive training can help with barking, litter habits and comfort when alone. Seek qualified help if distress or behaviour problems persist."
        ]
      }
    ],
    callout: "A pet-friendly home makes safe behaviour easier and gives animals opportunities to rest, explore and connect. Small layout and routine changes can make apartment life better for everyone."
  },
  {
    slug: "pet-training-pads-when-they-help-how-to-use",
    title: "Pet Training Pads: When They Help and How to Use Them",
    category: "Hygiene Guide",
    publishDate: "2026-12-20T00:00:00Z", // Scheduled: Week 8
    readTime: "4 min read",
    metaDescription: "Learn when training pads help, how to use them consistently and how to keep the area hygienic.",
    focusKeyword: "how to use pet training pads",
    image: "/images/banner-porxolyn.jpg",
    excerpt: "Training pads can help with puppy toilet training, travel, recovery or limited outdoor access. They work best as part of a consistent routine, not as a replacement for patience.",
    sections: [
      {
        heading: "Choose one location",
        paragraphs: [
          "Place the pad in a quiet, accessible area and avoid moving it frequently while your pet learns. Keep it away from food and water bowls."
        ]
      },
      {
        heading: "Reward the behaviour",
        paragraphs: [
          "Take puppies to the pad after waking, eating and playing. Reward correct use promptly. Avoid punishment for accidents; clean the area thoroughly."
        ]
      },
      {
        heading: "Keep it hygienic",
        paragraphs: [
          "Replace soiled pads promptly, wash hands after handling waste and keep used pads away from children and animals. Follow the product’s disposal instructions."
        ]
      },
      {
        heading: "Plan for the long term",
        paragraphs: [
          "If your goal is outdoor toileting, transition gradually when appropriate. Some pets may need pads longer because of age, disability, weather or medical needs."
        ]
      },
      {
        heading: "Watch for medical signs",
        paragraphs: [
          "Sudden toilet changes, straining, blood or repeated accidents in a trained pet can indicate a health issue. Contact a veterinarian."
        ]
      }
    ],
    callout: "Training pads can make clean-up easier when used consistently and disposed of safely. Wunple’s hygiene range can support everyday routines; follow each product’s directions."
  },
  {
    slug: "how-to-care-for-senior-pet",
    title: "How to Care for a Senior Pet: Comfort, Routine and Early Signs",
    category: "Life-Stage Care",
    publishDate: "2026-12-27T00:00:00Z", // Scheduled: Week 9
    readTime: "4 min read",
    metaDescription: "Help older dogs and cats stay comfortable with home adjustments, gentle activity, grooming and veterinary checks.",
    focusKeyword: "senior pet care tips",
    image: "/images/banner-wuncef.jpg",
    excerpt: "As pets age, their needs may change gradually. Slower movement, altered grooming, more sleep or reduced interest in activities deserve attention rather than being dismissed.",
    sections: [
      {
        heading: "Make movement easier",
        paragraphs: [
          "Provide non-slip surfaces and easy access to resting places. Keep food, water and litter areas accessible. Choose activity suited to your pet’s ability and veterinary advice."
        ]
      },
      {
        heading: "Keep a predictable routine",
        paragraphs: [
          "Consistent meal, toilet, play and sleep times can help older pets feel secure. Make changes gradually and provide quiet resting spaces."
        ]
      },
      {
        heading: "Adapt grooming",
        paragraphs: [
          "Use short, gentle sessions and check for mats, skin changes and overgrown nails. Ask a veterinarian or qualified groomer for help if handling seems painful."
        ]
      },
      {
        heading: "Watch for changes",
        paragraphs: [
          "Weight change, reduced appetite, increased thirst, difficulty jumping, confusion or altered toilet habits warrant veterinary discussion."
        ]
      },
      {
        heading: "Continue preventive care",
        paragraphs: [
          "Senior pets still need appropriate dental care, parasite prevention, nutrition and check-ups. Plans should reflect their individual health and medicines."
        ]
      }
    ],
    callout: "Ageing well is about comfort, observation and adapting care. Ask your veterinarian how often your senior pet should be checked and which changes need prompt attention."
  },
  {
    slug: "first-time-pet-parent-checklist-first-30-days",
    title: "A First-Time Pet Parent’s Checklist for the First 30 Days",
    category: "New Pet Guide",
    publishDate: "2027-01-03T00:00:00Z", // Scheduled: Week 10
    readTime: "5 min read",
    metaDescription: "A calm first-month checklist for helping a newly adopted dog or cat settle into a home.",
    focusKeyword: "first time pet parent checklist",
    image: "/images/hero-beagle-mobile.png",
    excerpt: "Bringing home a pet is exciting, but the first month can feel overwhelming. A simple plan helps you focus on safety, routine and trust rather than trying to teach everything at once.",
    sections: [
      {
        heading: "Before arrival",
        paragraphs: [
          "Prepare bowls, a suitable diet, bedding, a carrier, grooming supplies, waste-clean-up items and safe toys. For cats, set up a litter tray and hiding places. Pet-proof your home."
        ]
      },
      {
        heading: "Week one: keep things calm",
        paragraphs: [
          "Give your pet time to adjust. Limit loud activity and visitors at first, keep routines predictable and let the animal approach at its own pace."
        ]
      },
      {
        heading: "Arrange veterinary care",
        paragraphs: [
          "Book a visit to discuss vaccination history, parasite prevention, nutrition, microchipping where available, sterilisation and health concerns. Bring records if available."
        ]
      },
      {
        heading: "Build habits through repetition",
        paragraphs: [
          "Use positive reinforcement for desired behaviours. Schedule feeding, toilet breaks, play and rest. Introduce new experiences gradually."
        ]
      },
      {
        heading: "Track questions and changes",
        paragraphs: [
          "Note appetite, stool, urination, sleep, energy and behaviour. Ask a veterinarian about persistent digestive symptoms, coughing, poor appetite or unusual itching."
        ]
      }
    ],
    callout: "The first month is about creating safety and trust. With patience, veterinary care and consistent routines, you can give your new companion a strong start."
  }
];

/**
 * Returns only the blog posts that have reached their scheduled publish date.
 * If includeFuture is true (e.g. for preview mode), returns all blogs.
 */
export function getPublishedBlogs(includeFuture: boolean = false): BlogPost[] {
  if (includeFuture) return ALL_BLOGS;
  const now = new Date();
  return ALL_BLOGS.filter((post) => new Date(post.publishDate) <= now);
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return ALL_BLOGS.find((p) => p.slug === slug);
}

