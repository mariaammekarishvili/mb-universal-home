interface DataType {
  id: number;
  page: string;
  thumb: string;
  images: string[];
  sub_title: string;
  title: string;
}

const project_data: DataType[] = [
  {
    id: 2,
    page: "project-two",
    images: [
      "/assets/imgs/project/project-two/a.JPG",
      "/assets/imgs/project/project-two/b.JPEG",
      "/assets/imgs/project/project-two/b1.JPG",
      "/assets/imgs/project/project-two/d.jpeg",
      "/assets/imgs/project/project-two/e.jpeg",
      "/assets/imgs/project/project-two/g1.jpeg",
      "/assets/imgs/project/project-two/v.JPG",
      "/assets/imgs/project/project-two/z.JPEG",
      "/assets/imgs/project/project-two/a2.jpeg",
      "/assets/imgs/project/project-two/g.jpeg",
    ],
    thumb: "/assets/imgs/service/service-2.1.JPG",
    sub_title: "Wood Working",
    title: "Custom Wood & Metal Framing",
  },
  {
    id: 5,
    page: "project-five",
    images: [
      "/assets/imgs/project/projevt-five/1-gigapixel-scale-2_00x (1).jpg",
      "/assets/imgs/project/projevt-five/6-gigapixel-scale-2_00x (2).jpg",
      "/assets/imgs/project/projevt-five/9-gigapixel-scale-2_00x.jpg",
      "/assets/imgs/project/projevt-five/10-gigapixel-scale-2_00x.jpg",
      "/assets/imgs/project/projevt-five/8-gigapixel-scale-2_00x.jpg",
      "/assets/imgs/project/project-six/8-gigapixel-scale-2_00x (1).jpg",
      "/assets/imgs/project/project-six/3-gigapixel-scale-2_00x (2).jpg",
      "/assets/imgs/project/project-six/4-gigapixel-scale-2_00x (3).jpg",
      "/assets/imgs/project/project-six/4-gigapixel-scale-2_00x (4).jpg",
      "/assets/imgs/project/project-six/5-gigapixel-scale-2_00x (3).jpg",
      "/assets/imgs/project/project-six/6-gigapixel-scale-2_00x (3).jpg",
      "/assets/imgs/project/project-six/7-gigapixel-scale-2_00x (4).jpg",
      "/assets/imgs/project/project-six/9-gigapixel-scale-2_00x (1).jpg",
    ],
    thumb: "/assets/imgs/project/project-n-4.jpg",
    sub_title: "Drywall Installation",
    title: "Level 5 Drywall & Finishing",
  },
  {
    id: 4,
    page: "project-four",
    images: [
      "/assets/imgs/project/project-four/1-gigapixel-scale-2_00x.jpg",
      "/assets/imgs/project/project-four/5-gigapixel-scale-2_00x (1).jpg",
      "/assets/imgs/project/project-four/6-gigapixel-scale-2_00x.jpg",
      "/assets/imgs/project/project-four/7-gigapixel-scale-2_00x.jpg",
    ],
    thumb: "/assets/imgs/project/project-n-2.jpg",
    sub_title: "Leaving Room Renovation",
    title: "Commercial Drop Ceilings",
  },
  {
    id: 1,
    page: "project-one",
    images: [
      "/assets/imgs/project/project-one/2-gigapixel-scale-2_00x.jpg",
      "/assets/imgs/project/project-one/3-gigapixel-scale-2_00x.jpg",
      "/assets/imgs/project/project-six/2-gigapixel-scale-2_00x (3).jpg",
      "/assets/imgs/project/project-six/2-gigapixel-scale-2_00x (4).jpg",
      "/assets/imgs/project/project-six/4-gigapixel-scale-2_00x (4).jpg",
    ],
    thumb: "/assets/imgs/project/project-n-3.jpg",
    sub_title: "Bathroom Redesign",
    title: "Kitchen & Bathroom Tile Work",
  },
  {
    id: 3,
    page: "project-three",
    images: [
      "/assets/imgs/project/project-three/7-gigapixel-scale-2_00x (2).jpg",

      "/assets/imgs/project/project-three/2-gigapixel-scale-2_00x (1).jpg",
      "/assets/imgs/project/project-three/3-gigapixel-scale-2_00x (1).jpg",
      "/assets/imgs/project/project-three/4-gigapixel-scale-2_00x.jpg",
      "/assets/imgs/project/project-three/5-gigapixel-scale-2_00x (2).jpg",
      "/assets/imgs/project/project-three/6-gigapixel-scale-2_00x (1).jpg",
    ],
    thumb: "/assets/imgs/project/project-n-1.jpg",
    sub_title: "Painting",
    title: "Interior Painting & Trims",
  },
];

export default project_data;
