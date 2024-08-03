import { Link } from "react-router-dom";

interface BlogProps {
  imageTitle: string
  title: string
  description: string
  author: string
}
const AdminBlog:React.FC<BlogProps> = ({imageTitle, title, description, author}) => {
    return (
      <Link to="/detail" className="p-4 border border-slate-300 cursor-pointer group">
          <img src={`../../../public/asset/${imageTitle}`} className="w-full" />
          <div className="w-full">
          <h1 className="text-slate-700 group-hover:text-blue-700 text-sm font-semibold mt-2">
            {title}
          </h1>
          <p className="text-xs italic text-slate-800 mt-2">Author @<span className="text-xs italic text-slate-800 mt-2">{author}</span></p>
          </div>
          <p className="text-slate-500 text-xs mt-1">
            {description}
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs text-slate-200 mt-4">
            <button className="bg-blue-500 p-2">
              Edit
            </button>
            <button className="bg-red-500 p-2">
              Delete
            </button>
          </div>
        </Link>
    );
  };
  
  export default AdminBlog;