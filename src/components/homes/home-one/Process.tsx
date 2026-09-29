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
      title: "Consultation & Measurement",
      desc: "We discuss your project details, take precise measurements, analyze the space layout, and provide a transparent free estimate"   },
   {
      id: 2,
      icon: "icon-engineer",
      title: "Professional Execution",
      desc: "Our experienced crew handles framing, drywall hanging, taping, or custom finishes efficiently and strictly according to code."   },
   {
      id: 3,
      icon: "icon-home",
      title: "Final Inspection & Cleanup",
      desc: "We perform a meticulous quality check, clean up the job site entirely, and deliver flawless, paint-ready spaces on time."   },
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
               <span className="section-sub-title">Working Process</span>
               <h3 className="section-title mt-10">Standard Work Process</h3>
            </div>
            <div className="row g-4">
               {process_data.map((item) => (
                  <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-4">
                     <div className="work-process-box text-center ">
                        <div className="icon-box p-relative">
                           <i className={item.icon}></i>
                           <span>{item.id}</span>
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
