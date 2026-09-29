import { Link } from "react-router-dom"

const tags: string[] = ["Roofinstallation", "Roofingworld", "Gaf", "Rooftiles", "Repairs", "Roofrepairs", "Stormdamage", "Waterproofing"]

const Tags = () => {
   return (
      <div className="blog-widget-4 mb-30">
         <h5 className="blog-widget-title p-relative mb-45">Tags</h5>
         <div className="tagcloud">
            {tags.map((tag, i) => (
               <Link key={i} to="#">{tag} </Link>
            ))}
         </div>
      </div>
   )
}

export default Tags
