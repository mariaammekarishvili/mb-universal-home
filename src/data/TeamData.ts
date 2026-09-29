
interface DataType {
   id: number;
   page: string;
   thumb: string;
   name: string;
   designation: string;
}

const team_data: DataType[] = [
   {
      id: 1,
      page: "home_3",
      thumb: "/assets/imgs/team/team-1.jpg",
      name: "Kristin Watson",
      designation: "Project Manager"
   },
   {
      id: 2,
      page: "home_3",
      thumb: "/assets/imgs/team/team-2.jpg",
      name: "Annette Black",
      designation: "Senior QA Engineer"
   },
   {
      id: 3,
      page: "home_3",
      thumb: "/assets/imgs/team/team-3.jpg",
      name: "Ralph Edwards",
      designation: "Engineer"
   },

   // inner_page

   {
      id: 1,
      page: "inner_page",
      thumb: "/assets/imgs/team/team-1.jpg",
      name: "Kristin Watson",
      designation: "Project Manager"
   },
   {
      id: 2,
      page: "inner_page",
      thumb: "/assets/imgs/team/team-2.jpg",
      name: "Annette Black",
      designation: "Senior QA Engineer"
   },
   {
      id: 3,
      page: "inner_page",
      thumb: "/assets/imgs/team/team-3.jpg",
      name: "Ralph Edwards",
      designation: "Engineer"
   },
   {
      id: 4,
      page: "inner_page",
      thumb: "/assets/imgs/team/team-4.jpg",
      name: "Albert Flores",
      designation: "Roof Worker"
   },
   {
      id: 5,
      page: "inner_page",
      thumb: "/assets/imgs/team/team-5.jpg",
      name: "Dianne Russell",
      designation: "Project Manager"
   },
   {
      id: 6,
      page: "inner_page",
      thumb: "/assets/imgs/team/team-6.jpg",
      name: "Eleanor Pena",
      designation: "Engineer"
   },
]

export default team_data;