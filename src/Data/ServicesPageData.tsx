interface Stage {
  title: string;
  description: string;
}

interface Propose {
  title: string;
  description: string;
}

export const stages: Stage[] = [
  {
    title: "Let's talk",
    description: "In store, by phone, or on a video call, the first exchanges with your decorator mark the starting point of your project. The way you use each room, your constraints, your tastes and your expectations are essential elements for your decorator to fully understand your project."
  },
  {
    title: "Your space & your future furniture",
    description: "In store, by phone, or on a video call, the first exchanges with your decorator mark the starting point of your project. The way you use each room, your constraints, your tastes and your expectations are essential elements for your decorator to fully understand your project."
  },
  {
    title: "Your interior in 3d",
    description: "Using a powerful 3D design software, the image is finalised for optimal rendering of textures, reflections and colours. This rendering allows you to visualise your selection of products in your home and to discover the images of your future interior."
  },
  {
    title: "And then?",
    description: "We create your furniture in the best European workshops, then organise their delivery, assembly and installation for you by qualified professionals. Your decorator accompanies you every step of the way, taking care of every detail."
  }
];

export const Propose1Data: Propose = {
  title: "Take Advantage Of Exceptional Digital Tools",
  description: "The experience of Roche Bobois decorators and their ability to imagine solutions in accordance with your desires are important elements for the construction of your project. To help you imagine what your future interior may look like, they also rely on cutting-edge 3D design tools.",
};

export const Propose2Data: Propose = {
  title: "3D Studio",
  description: "Using powerful 3D design softwares, and starting with your floor plans, your interior is recreated and your furniture pieces positioned in their future locations. The image is then finalized for a photo-realistic rendering of textures, finishes and colours. You can then visualise from home your selection of products in your real environment.",
};