import tour1 from "./images/tour-1.jpg";
import tour2 from "./images/tour-2.png";
import tour3 from "./images/tour-3.png";
import tour4 from "./images/tour-4.png";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "algorithmicTrading" },
];
export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "Invest Wisely",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless improvment",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "Beta test",
    title: "LSTM",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "china",
    duration: 6,
    cost: 2100,
    url: "https://colab.research.google.com/drive/1ztDuveqxF8opPAzLWOUEe2gn7JlriQSP#scrollTo=eXzXPfyVQWtF",
    message: "This will take you to Google Colab website",
  },
  {
    id: 2,
    image: tour2,
    date: "Free",
    title: "Defalt Runner",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "indonesia",
    duration: 11,
    cost: 1400,
    url: "http://127.0.0.1:5000/run_script",
    message: "The defalt runner just made a trade!",
  },
  {
    id: 3,
    image: tour3,
    date: "Beta test",
    title: "PPO",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "hong kong",
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: "Beta test",
    title: "SMA",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "kenya",
    duration: 20,
    cost: 3300,
  },
];

export const mycomponent = [
  {
    id: 1,
    url: "https://colab.research.google.com/drive/1ztDuveqxF8opPAzLWOUEe2gn7JlriQSP#scrollTo=eXzXPfyVQWtF",
    message: "This will take you to Google Colab website",
  },
];
