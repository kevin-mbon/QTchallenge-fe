import { Link } from "react-router-dom";

interface BlogProps {
  imageTitle: string
  title: string
  description: string
  author: string
}
const BlogCard:React.FC<BlogProps> = ({imageTitle, title, description, author}) => {
    return (
      <Link to="detail" className="p-4 border border-slate-300 cursor-pointer group">
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
        </Link>
    );
  };
  
  export default BlogCard;