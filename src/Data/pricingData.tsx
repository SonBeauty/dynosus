interface PricingData {
  title: string;
  decription: string;
  features: string[];
  pricing?: number;
  pricingMonth?: number;
  pricingYear?: number;
}

export const PricingData1: PricingData[] = [
  {
    pricingMonth: 50,
    pricingYear: 150,
    title: "Standard",
    decription: "All the basics for businesses that are just starting out.",
    features: [
      "Unlimited updates",
      "Custom permissions",
      "Custom designs & features",
      "Custom permissions",
    ],
  },
  {
    pricingMonth: 89,
    pricingYear: 150,
    title: "Essentials",
    decription: "All the basics for businesses that are just starting out.",
    features: [
      "Unlimited updates",
      "Custom permissions",
      "Custom instructors",
      "Custom permissions",
    ],
  },
  {
    pricingMonth: 129,
    pricingYear: 150,
    title: "Premium",
    decription: "Advanced features for pros who need more.",
    features: [
      "Unlimited updates",
      "Custom designs & features",
      "Custom permissions",
      "Custom instructors",
    ],
  },
  {
    pricingMonth: 129,
    pricingYear: 150,
    title: "Unlimited",
    decription: "Advanced features for pros who need more.",
    features: [
      "Unlimited updates",
      "Custom designs & features",
      "Custom permissions",
      "Custom instructors",
    ],
  },
]


export const PricingData2: PricingData[] = [
  {
    title: 'Standard',
    decription: 'All the basics for businesses that are just getting started.',
    features: [
      'Unlimited updates',
      'Custom permissions',
      'Custom designs & features'
    ],
    pricing: 35
  },
  {
    title: 'Essentials',
    decription: 'All the basics for businesses that are just getting started.',
    features: [
      'Unlimited updates',
      'Custom permissions',
      'Custom instructors'
    ],
    pricing: 89
  },
  {
    title: 'Premium',
    decription: 'Advanced features for pros who need more customization.',
    features: [
      'Unlimited updates',
      'Custom designs & features',
      'Custom permissions',
      'Custom instructors'
    ],
    pricing: 125
  },
  {
    title: 'Unlimited',
    decription: 'Advanced features for pros who need more customization.',
    features: [
      'Unlimited updates & Support',
      'Custom designs & features',
      'Custom permissions',
      'Custom instructors'
    ],
    pricing: 199
  }
];