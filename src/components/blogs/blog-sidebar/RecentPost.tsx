import { Link } from "react-router-dom";

interface DataType {
   id: number;
   thumb: string;
   title: string;
   date: string
}

const recent_data: DataType[] = [
   {
      id: 1,
      thumb: "/assets/imgs/blog/blog-sidebar-1.jpg",
      title: "Best Repairing For Leakage Roof In",
      date: "05 Dec, 2024"
   },
   {
      id: 2,
      thumb: "/assets/imgs/blog/blog-sidebar-2.jpg",
      title: "Rebecca’s New Album Aid for the Need",
      date: "05 Dec, 2024"
   },
   {
      id: 3,
      thumb: "/assets/imgs/blog/blog-sidebar-3.jpg",
      title: "Doing Things Correctly Loads to Success",
      date: "05 Dec, 2024"
   },
];

const RecentPost = () => {
   return (
      <div className="blog-widget-3 mb-30">
         <h5 className="blog-widget-title p-relative mb-45">Resent Post</h5>
         <div className="blog-post-sidebar-area">
            {recent_data.map((item) => (
               <div key={item.id} className="blog-post-sidebar">
                  <Link className="w-img blog-sidebar-thumb" to="/blog-details">
                     <img src={item.thumb} alt="" />
                  </Link>
                  <div className="content">
                     <span><i className="fal fa-calendar-alt"></i> {item.date}</span>
                     <h6 className="blog-sidebar-post-title mt-10"><Link to="/blog-details">{item.title}</Link></h6>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default RecentPost
