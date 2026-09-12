export type Project = {
  number: string;
  title: string;
  type: string;
  role: string;
  description: string;
  categories: string[];
  url: string;
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "AhlaWeb",
    type: "Web Development Company",
    role: "Co-founder & Web Developer",
    description:
      "AhlaWeb is a web development company that helps businesses establish and improve their digital presence. We create professional websites, e-commerce platforms, custom web applications and interactive digital experiences.",
    categories: [
      "Web development",
      "E-commerce",
      "Custom applications",
      "Digital experiences",
    ],
    url: "https://ahlaweb.com",
    image: "/projects/ahlaweb.png",
    imageAlt: "AhlaWeb web development company homepage",
  },

  // Add future projects here using the same structure.
];