import bridemakeup from "../assets/BrideMakeUp.webp";
import Engagement from "../assets/EngagementMakeup.webp";
import party from "../assets/Party.webp";
import hair from "../assets/Hair.webp";
import skincare from "../assets/SkinCare.webp";

// Hair services
import hairwash from "../assets/Hairwash.webp";
import haircut from "../assets/HairCut.webp"; 
import hairstyling from "../assets/Hair Styling.webp";
import hairspa from "../assets/HairSpa.webp";
import hairstraightening from "../assets/Hair Straightening (1).webp";
import hairsmoothening from "../assets/Hair Smoothening.webp";
import botox from "../assets/BOTOX.webp";
import keratin from "../assets/Keratin treatment.webp";
import nanoplastia from "../assets/Nanoplastia.webp";
import dandruff from "../assets/Dandruff treatment.webp";

// Skin services
import threading from "../assets/Threading.webp";
import cleanup from "../assets/Clenup.webp"; // spelling fixed
import bleach from "../assets/Bleach.webp";
import dtan from "../assets/DTan.webp";
import facial from "../assets/Facial.webp";
import waxing from "../assets/Waxing.webp";
import pedicure from "../assets/Pedicure (1).webp";
import manicure from "../assets/Manicure.webp";
import nailart from "../assets/Nailart.webp";
import earpiercing from "../assets/Ear Piercings.webp";
import earlobe from "../assets/Ear lobe Repair.jpg";
import hydrafacial from "../assets/Hydra facial1.webp";

export const services = [
  {
    id: "bridal-makeup",
    category: "Bridal AND Reception makeup",
    image: bridemakeup,
    services: [
      {
        name: "Basic",
        price: 8000,
        includes: [
          "Makeup",
          "Hairstyle",
          "Draping",
          "Jewellery setting",
          "False lashes",
          "Lenses"
        ]
      },
      {
        name: "HD",
        price: 10000,
        includes: [
          "Makeup",
          "Hairstyle",
          "Draping",
          "Jewellery setting",
          "False lashes",
          "Lenses"
        ]
      },
      {
        name: "HD Ultra",
        price: 13000,
        includes: [
          "Makeup",
          "Hairstyle",
          "Draping",
          "Jewellery setting",
          "False lashes",
          "Lenses"
        ]
      },
      {
        name: "Sweat Proof",
        price: 15000,
        includes: [
          "Makeup",
          "Hairstyle",
          "Draping",
          "Jewellery setting",
          "False lashes",
          "Lenses"
        ]
      },
      {
        name: "Airbrush makeup",
        price: 17000,
        includes: [
          "Makeup",
          "Hairstyle",
          "Draping",
          "Jewellery setting",
          "False lashes",
          "Lenses",
          "Hair Extension"
        ]
      },
      {
        name: "Luxury",
        price: 20000,
        includes: [
          "Makeup",
          "Hairstyle",
          "Draping",
          "Jewellery setting",
          "False lashes",
          "Lenses",
          "Hair Extension",
          "Groom Makeup"
        ]
      }
    ]
  },

  {
    id: "engagement-makeup",
    category: "Engagement makeup",
    image: Engagement,
    services: [
      {
        name: "Basic",
        price: 5000,
        includes: ["Makeup", "Eyelash", "Eye Lenses" ,"Draping","Jewellery setting",]
      },
      {
        name: "HD",
        price: 8000,
        includes: ["Makeup", "Eyelash", "Eye Lenses"  ,"Draping","Jewellery setting",]
      },
      {
        name: "HD Ultra",
        price: 10000,
        includes: ["Makeup", "Eyelash", "Eye Lenses"  ,"Draping","Jewellery setting",]
      },
      {
        name: "Sweat Proof",
        price: 12000,
        includes: ["Makeup", "Eyelash", "Eye Lenses"  ,"Draping","Jewellery setting",]
      },
      {
        name: "Airbrush makeup",
        price: 15000,
        includes: ["Makeup", "Eyelash", "Eye Lenses", "Hair Extension"  ,"Draping","Jewellery setting",]
      },
      {
        name: "Luxury",
        price: 17000,
        includes: ["Makeup", "Eyelash", "Eye Lenses", "Hair Extension"  ,"Draping","Jewellery setting",]
      }
    ]
  },

  {
    id: "party-makeup",
    category: "Party makeup",
    image: party,
    services: [
      {
        name: "Basic",
        price: "2000-5000",
        includes: ["Makeup", "Eyelash", "Eye Lenses"]
      },
      {
        name: "HD",
        price: 8000,
        includes: ["Makeup", "Eyelash", "Eye Lenses"]
      },
      {
        name: "HD Ultra",
        price: 10000,
        includes: ["Makeup", "Eyelash", "Eye Lenses"]
      }
    ]
  },

{
  id: "hair-services",
  category: "Hair Services",
  image: hair,
  services: [
    { name: "Hairwash", image: hairwash },
    { name: "Haircut", image: haircut },
    { name: "Hair Styling", image: hairstyling },
    { name: "HairSpa", image: hairspa },
    { name: "Hair Straightening", image: hairstraightening },
    { name: "Hair Smoothening", image: hairsmoothening },
    { name: "Botox treatment", image: botox },
    { name: "Keratin treatment", image: keratin },
    { name: "Nanoplastia", image: nanoplastia },
    { name: "Dandruff treatment", image: dandruff }
  ]
},
{
  id: "skin-beauty",
  category: "Skin & Beauty Services",
  image: skincare,
  services: [
    { name: "Threading", image: threading },
    { name: "Cleanup", image: cleanup },
    { name: "Bleach", image: bleach },
    { name: "DTan", image: dtan },
    { name: "Facial", image: facial },
    { name: "Hydra facial", image: hydrafacial },
    { name: "Waxing", image: waxing },
    { name: "Pedicure", image: pedicure },
    { name: "Manicure", image: manicure },
    { name: "Nailart", image: nailart },
    { name: "Ear Piercings", image: earpiercing },
    { name: "Ear lobe Repair Treatment", image: earlobe },
  
  ]
}
];