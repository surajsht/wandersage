import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { MdOutlineLuggage } from "react-icons/md";
import { BiBookOpen } from "react-icons/bi";
import { GiCruiser } from "react-icons/gi";
import { PiFlowerLotus } from "react-icons/pi";
import { MdFamilyRestroom } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GiJeep } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";

const NavbarItem = [
  {
    id: 0,
    item: "Home",
  },
  {
    id: 1,
    item: "About",
  },
  {
    id: 2,
    item: "Service",
  },
  {
    id: 3,
    item: "Contact",
  },
];

const PopularDestinationData = [
  {
    id: 0,
    image: "/popular-1.jpg",
    title: "India",
  },
  {
    id: 1,
    image: "/popular-2.jpg",
    title: "China",
  },
  {
    id: 2,
    image: "/popular-3.jpg",
    title: "Nepal",
  },
  {
    id: 3,
    image: "/popular-4.jpg",
    title: "Maldives",
  },
  {
    id: 4,
    image: "/popular-5.jpg",
    title: "Egypt",
  },
  {
    id: 5,
    image: "/popular-6.jpg",
    title: "Dubai",
  },
];

const OurServiceData = [
  {
    id: 0,
    title: "Destination Discovery",
    description:
      "Experience the joy of exploration with our comprehensive range of travel destinations.",
    icon: <BsGlobeCentralSouthAsia className="h-6 w-6 text-brand" />,
  },
  {
    id: 1,
    title: "Luxury Escapes",
    description:
      "Indulge in the epitome of opulence and relaxation with our luxury escapes.",
    icon: <MdOutlineLuggage className="h-6 w-6 text-brand" />,
  },
  {
    id: 2,
    title: "Cultural Immersion",
    description:
      "Our cultural immersion experiences allow you to connect with local traditions, taste authentic cuisines.",
    icon: <BiBookOpen className="h-6 w-6 text-brand" />,
  },
  {
    id: 3,
    title: "Cruise Voyages",
    description:
      "Set sail on luxurious Cruise Voyages and explore the world's most breathtaking coastlines and islands.",
    icon: <GiCruiser className="h-6 w-6 text-brand" />,
  },
  {
    id: 4,
    title: "Wellness Retreats",
    description:
      "Restore harmony and rejuvenate your mind, body, and soul with our Wellness Retreats.",
    icon: <PiFlowerLotus className="h-6 w-6 text-brand" />,
  },
  {
    id: 5,
    title: "Family Fun Getaways",
    description:
      "Create lasting memories with your loved ones through our family fun getaways.",
    icon: <MdFamilyRestroom className="h-6 w-6 text-brand" />,
  },
  {
    id: 6,
    title: "Historical Treasures",
    description:
      "Uncover the fascinating stories of the past through our Historical Treasures tours.",
    icon: <AiOutlineClockCircle className="h-6 w-6 text-brand" />,
  },
  {
    id: 7,
    title: "Wildlife Safaris",
    description:
      " Embark on thrilling Wildlife Safaris to witness nature's most majestic creatures in their natural habitats.",
    icon: <GiJeep className="h-6 w-6 text-brand" />,
  },
];

const BlogData = [
  {
    id: 0,
    title:
      "Discover the Hidden Gems: Off-the-Beaten-Path Destinations for Adventurous Travelers",
    description:
      "Uncover a world beyond the ordinary with our guide to lesser-known, off-the-beaten-path destinations that promise unforgettable adventures. From remote islands to secluded mountain retreats, embark on a journey of discovery with our travel agency's handpicked selection of unique and extraordinary destinations.",
    image: "/blog-1.jpg",
  },
  {
    id: 1,
    title:
      "Beyond Borders: Embrace Cultural Diversity on a Multi-Continent Tour",
    image: "/blog-2.jpg",
  },
  {
    id: 2,
    title: "Timeless Romance: Unraveling Europe's Most Enchanting Love Stories",
    image: "/blog-3.jpg",
  },
  {
    id: 3,
    title: "Escape to Paradise: Unveiling the World's Most Stunning Getaways",
    image: "/blog-4.jpg",
  },
  {
    id: 4,
    title: "Into the Wild: Unforgettable Wildlife Safaris in Africa",
    image: "/blog-5.jpg",
  },
];

const loopStar = Array.from({ length: 5 });

const TestimonialData = [
  {
    id: 0,
    star: loopStar.map((_, index) => {
      return <AiFillStar key={index} />;
    }),
    description:
      "I've always dreamed of going on a safari, and thanks to this travel agency, that dream became a reality. They meticulously planned every aspect of the safari, ensuring we had an immersive and unforgettable wildlife experience.",
    image: "/testimonial-1.jpg",
    name: "AdventureLover87",
    jobTitle: "Software Engineer",
  },
  {
    id: 1,
    star: loopStar.map((_, index) => {
      return <AiFillStar key={index} />;
    }),
    description:
      "I had the pleasure of booking my family's vacation through this travel agency, and I couldn't be happier with the results. The entire process, from the initial consultation to the journey back home, was seamless and well-organized.",
    image: "/testimonial-2.jpg",
    name: "Jenny Andres",
    jobTitle: "Footballer",
  },
  {
    id: 2,
    star: loopStar.map((_, index) => {
      return <AiFillStar key={index} />;
    }),
    description:
      "Wow! What an incredible travel agency! They truly know how to curate extraordinary travel experiences. I had the privilege of working with their dedicated team, and they went above and beyond to ensure my solo journey was unforgettable. ",
    image: "/testimonial-3.jpg",
    name: "Tom Parker",
    jobTitle: "Actor",
  },
];

const PopularDestinationDataTwo = [
  {
    id: 0,
    image: "/popular-destination-1.jpg",
    title: "Kathmandu, Nepal",
    icon: <AiFillStar />,
    rating: "4.5",
    date: "Sep 1-7",
    price: "52",
  },
  {
    id: 1,
    image: "/popular-destination-2.jpg",
    title: "Castle in Clackmannanshire",
    icon: <AiFillStar />,
    rating: "4.8",
    date: "Aug 3 -14",
    price: "114",
  },
  {
    id: 2,
    image: "/popular-destination-3.jpg",
    title: "Cottage in Huntsville",
    icon: <AiFillStar />,
    rating: "4.0",
    date: "May 7 - 12",
    price: "87",
  },
  {
    id: 3,
    image: "/popular-destination-4.jpg",
    title: "Home in El Port de la Selva,, Spain",
    icon: <AiFillStar />,
    rating: "4.4",
    date: "Dec 8 -14",
    price: "96",
  },
  {
    id: 4,
    image: "/popular-destination-5.jpg",
    title: "Villa in Kuta Utara",
    icon: <AiFillStar />,
    rating: "4.7",
    date: "June 2 - 11",
    price: "74",
  },
  {
    id: 5,
    image: "/popular-destination-6.jpg",
    title: "Villa in Skala, Greece",
    icon: <AiFillStar />,
    rating: "4.9",
    date: "April 6 -17",
    price: "147",
  },
];

export default { NavbarItem };
export {
  PopularDestinationData,
  OurServiceData,
  BlogData,
  TestimonialData,
  PopularDestinationDataTwo,
};
