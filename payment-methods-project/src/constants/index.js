/**
 * External imports
 */
import { v4 as uuidv4 } from 'uuid';

/**
 * Internal imports
 */
import { facebook, instagram, linkedin, twitter  } from "../assets";


export const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "/features",
    title: "Features",
  },
  {
    id: "/gallery",
    title: "Gallery",
  },
  {
    id: "/about",
    title: "About Us",
  },
  {
    id: "/contact",
    title: "Contact Us"
  }
];



export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "4200+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "320+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$330M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    key: uuidv4(),
    links: [
      {
        name: "Content",
        link: "#",
      },
      {
        name: "How it Works",
        link: "#",
      },
      {
        name: "Create",
        link: "#",
      },
      {
        name: "Explore",
        link: "#",
      },
      {
        name: "Terms & Services",
        link: "#",
      },
    ],
  },
  {
    title: "Community",
    key: uuidv4(),
    links: [
      {
        name: "Help Center",
        link: "#",
      },
      {
        name: "Partners",
        link: "#",
      },
      {
        name: "Suggestions",
        link: "#",
      },
      {
        name: "Blog",
        link: "#",
      },
      {
        name: "Newsletters",
        link: "#",
      },
    ],
  },
  {
    title: "Partner",
    key: uuidv4(),
    links: [
      {
        name: "Our Partner",
        link: "#",
      },
      {
        name: "Become a Partner",
        link: "#",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

