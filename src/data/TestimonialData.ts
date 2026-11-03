interface DataType {
  id: number;
  page: string;
  avatar: string;
  name: string;
  designation: string;
  desc: string;
}

const testi_data: DataType[] = [
  {
    id: 1,
    page: "home_1",
    avatar: "/assets/imgs/resources/testimonials-2.png",
    name: "David Adams",
    designation: "Homeowner, NJ",
    desc: "“ Great to work with. Sent picture and room dimensions. Gave quick quote and scheduled the job for two days later. Guys showed up on time, worked quickly and delivered flawless results!”",
  },
  {
    id: 2,
    page: "home_1",
    avatar: "/assets/imgs/resources/testimonials-1.png",
    name: "Zura Zumbadze ",
    designation: "Commercial Client, NJ",
    desc: "“ I highly recommend this company. They deliver their framing and drywall work on time and to the highest standard. Outstanding service from start to finish! ”",
  },
  {
    id: 3,
    page: "home_1",
    avatar: "/assets/imgs/resources/testimonials-2.png",
    name: "Marie Gautier",
    designation: "Homeowner, NJ",
    desc: "“ MB Universal Home recently completed our drywall installation and interior painting. The team was professional, worked with great precision, and left the workspace spotless. Highly recommend their services!”",
  },
];

export default testi_data;
