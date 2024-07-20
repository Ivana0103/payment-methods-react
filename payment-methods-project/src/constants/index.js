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
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    key: uuidv4(),
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    key: uuidv4(),
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
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

