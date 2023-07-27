import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { MdOutlineLuggage } from "react-icons/md";
import { BiBookOpen } from "react-icons/bi";
import { GiCruiser } from "react-icons/gi";
import { PiFlowerLotus } from "react-icons/pi";
import { MdFamilyRestroom } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GiJeep } from "react-icons/gi";

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

export default { NavbarItem };
export { PopularDestinationData, OurServiceData, BlogData };
