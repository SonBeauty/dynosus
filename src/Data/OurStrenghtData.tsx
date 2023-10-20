interface Strenght {
  id: number;
  icon: string;
  pointName: string;
  text: string;
}

interface OurStrenghtsData {
  title: string;
  decription?: string;
  content: Strenght[];
}

export const OurStrenghts1Data: OurStrenghtsData = {
  title: 'What Makes Us Outstanding',
  decription: 'At our furniture shop, we strive to stand out from the crowd by offering a unique and exceptional shopping experience. Here are a few factors that set us apart',
  content: [
    {
      id: 1,
      icon: '/assets/imgs/template/icon-acquis.svg',
      pointName: '1. Quality',
      text: "We meticulously curate our collections to ensure that every garment we offer meets the highest standards of quality"
    },
    {
      id: 2,
      icon: '/assets/imgs/template/icon-active.svg',
      pointName: '2. Aesthetic',
      text: 'Our team of experienced experts keeps a pulse on the latest trends and emerging styles'
    },
    {
      id: 3,
      icon: '/assets/imgs/template/icon-retent.svg',
      pointName: '3. Community',
      text: 'We actively engage with our community through various initiatives'
    }
  ]
}

export const OurLocation: OurStrenghtsData = {
  title: 'Our Location',
  decription: "Welcome to our fashion hub located in the heart of Moirai. Situated in a vibrant and trendy neighborhood, our location serves as the physical embodiment of our brand's vision and values.",
  content: [
    {
      id: 1,
      icon: '/assets/imgs/page/contact/icon-home.svg',
      pointName: 'Office',
      text: '205 North Michigan Avenue, Suite 810<br/>Chicago, 60601, USA<br/>Phone: (123) 456-7890<br/>Email: vzenlabs@gmail.com'
    },
    {
      id: 2,
      icon: '/assets/imgs/page/contact/icon-flower.svg',
      pointName: 'Studio',
      text: '205 North Michigan Avenue, Suite 810<br/>Chicago, 60601, USA<br/>Phone: (123) 456-7890<br/>Email: vzenlabs@gmail.com'
    },
    {
      id: 3,
      icon: '/assets/imgs/page/contact/icon-ambulance.svg',
      pointName: 'Factory',
      text: '205 North Michigan Avenue, Suite 810<br/>Chicago, 60601, USA<br/>Phone: (123) 456-7890<br/>Email: vzenlabs@gmail.com'
    }
  ]
}
