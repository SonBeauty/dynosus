interface DeliveryData {
  id: number;
  title: string;
  icon: string;
  description: string;
}

export const deliveryData: DeliveryData[] = [
  {
    id: 1,
    title: "Shipping and Delivery",
    icon: "/assets/imgs/page/faqs/1/icon-delivery.svg",
    description: "Learn about our shipping policies, estimated delivery times, and tracking your order."
  },
  {
    id: 2,
    title: "Returns and Exchanges",
    icon: "/assets/imgs/page/faqs/1/icon-exchanges.svg",
    description: "Find information on our return policy, procedures for exchanging items, and refund processing."
  },
  {
    id: 3,
    title: "Design services",
    icon: "/assets/imgs/page/faqs/1/icon-draw.svg",
    description: "How to creating spaces that are functional, comfortable, aesthetically pleasing, and environmentally friendly."
  }
];