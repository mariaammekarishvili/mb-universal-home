interface Datatype {
   id: number;
   icon: string;
   title: string;
   desc: string;
}

const process_data: Datatype[] = [
   {
      id: 1,
      icon: "icon-dollar-tag",
      title: "Consultation & Estimate",
      desc: "We discuss your project goals, assess the space, take the necessary measurements, and provide a clear, detailed estimate tailored to your needs."   },
   {
      id: 2,
      icon: "icon-engineer",
      title: "Professional Work & Installation",
      desc: "From drop ceilings and drywall installation to custom carpentry, tile installation, and painting, our team focuses on quality workmanship, careful preparation, and attention to detail throughout every stage of the project."   },
   {
      id: 3,
      icon: "icon-home",
      title: "Final Inspection & Cleanup",
      desc: "We review the completed work, check the quality of the finishes, and clean the work area before wrapping up the project. Our goal is to leave your space looking its best."   },
];

interface PropType {
   style: boolean;
}

const Process = ({ style }: PropType) => {
   return (
      <section className={`work-process-section section-space p-relative ${style ? "is-dark" : ""}`} style={{ backgroundImage: `url(${style ? "/assets/imgs/shapes/shape-51.png" : "/assets/imgs/bg/process-bg.png"})` }}>
         <div className="shape-1" style={{ backgroundImage: `url(${style ? "/assets/imgs/shapes/shape-52.png" : "/assets/imgs/bg/line.png"})` }}></div>
         <div className="small-container">
            <div className="title-box text-center mb-60 wow fadeInLeft" data-wow-delay=".5s">
               <span className="section-sub-title">WORKING PROCESS</span>
               <h3 className="section-title mt-10">Quality Work, Every Step of the Way
</h3>
            </div>
            <div className="row g-4">
               {process_data.map((item) => (
                  <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-4">
                     <div className="work-process-box text-center ">
                        <div className="icon-box p-relative">
                           <i className={item.icon}></i>
                           <span>{String(item.id).padStart(2, "0")}</span>
                        </div>
                        <div className="content">
                           <h4 className="pt-25 pb-25">{item.title}</h4>
                           <p>{item.desc}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Process
