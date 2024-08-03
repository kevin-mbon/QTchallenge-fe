import AdminBlog from "../../components/card/AdminBlog";
import BlogCard from "../../components/card/BlogCard";

interface CategoryProp {
  imageName: string;
  title: string;
}

const Category: React.FC<CategoryProp> = ({ imageName, title }) => {
  return (
    <div className="flexer flex-col border-b-2 border-slate-800 px-4 py-2 cursor-pointer">
      <img src={`../../../public/asset/${imageName}`} className="w-6 md:w-10" />
      <h3 className="text-xs font-medium text-slate-600">{title}</h3>
    </div>
  );
};

function Dashboard() {
  return (
    <div>
      <div className="border border-slate-300 flex gap-4 justify-between overflow-x-hidden">
        <div className="flex gap-2">
          <Category imageName="nutrition.webp" title="Nutrition" />
          <Category imageName="sleep.webp" title="Sleeping" />
          <Category imageName="mental.webp" title="Mental Healthy" />
          <Category imageName="review.webp" title="Review" />
        </div>
      </div>
      <div className="border border-slate-300 flex flex-col gap-2 justify-between p-4">
        <h2 className="text-sm font-medium text-blue-700">Add blog</h2>
        <form action="" className="w-full flex flex-col gap-4 items-start">
        <div className="w-full flex flex-col gap-2 group">
          <label htmlFor="image" className="text-sm font-medium text-slate-700">
            Blog Image
          </label>
          <input
            type="text"
            id="image"
            placeholder="urlhttps://th.bing.com/th/id/OIP.GPFEY6kfgxbsja6gmrW6rwAAAA"
            className="w-full px-4 p-2 bg-slate-200 outline-none text-sm rounded-md text-slate-700 font-medium border-2 border-slate-300 duration-150 group-hover:border-slate-400 active:border-blue-500"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
        <div className="w-full flex flex-col gap-2 group">
          <label htmlFor="title" className="text-sm font-medium text-slate-700">
            Blog Image
          </label>
          <input
            type="text"
            id="title"
            placeholder="Title"
            className="w-full px-4 p-2 bg-slate-200 outline-none text-sm rounded-md text-slate-700 font-medium border-2 border-slate-300 duration-150 group-hover:border-slate-400 active:border-blue-500"
          />
        </div>
        <div className="w-full flex flex-col gap-2 group">
          <label htmlFor="description" className="text-sm font-medium text-slate-700">
            Description
          </label>
          <input
            type="text"
            id="description"
            placeholder="Description"
            className="w-full px-4 p-2 bg-slate-200 outline-none text-sm rounded-md text-slate-700 font-medium border-2 border-slate-300 duration-150 group-hover:border-slate-400 active:border-blue-500"
          />
        </div>
        </div>
        <input
          type="button"
          value="Add post"
          className="px-8 p-2 bg-blue-700 text-slate-300 outline-none text-sm font-semibold rounded-md"
        />
        </form>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-3">
        <AdminBlog
          imageTitle="OIP.jpg"
          title="Blog 1"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Tempore nostrum vero id cumque officia nisi velit qui vel recusandae facere ipsum illum neque a quo, numquam maxime placeat."
          author="kevin"
        />
        <AdminBlog
          imageTitle="OIP.jpg"
          title="Blog 1"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Tempore nostrum vero id cumque officia nisi velit qui vel recusandae facere ipsum illum neque a quo, numquam maxime placeat."
          author="kevin"
        />
        <AdminBlog
          imageTitle="OIP.jpg"
          title="Blog 1"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Tempore nostrum vero id cumque officia nisi velit qui vel recusandae facere ipsum illum neque a quo, numquam maxime placeat."
          author="kevin"
        />
        <AdminBlog
          imageTitle="OIP.jpg"
          title="Blog 1"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Tempore nostrum vero id cumque officia nisi velit qui vel recusandae facere ipsum illum neque a quo, numquam maxime placeat."
          author="kevin"
        />
        <AdminBlog
          imageTitle="OIP.jpg"
          title="Blog 1"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Tempore nostrum vero id cumque officia nisi velit qui vel recusandae facere ipsum illum neque a quo, numquam maxime placeat."
          author="kevin"
        />
        <AdminBlog
          imageTitle="OIP.jpg"
          title="Blog 1"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Tempore nostrum vero id cumque officia nisi velit qui vel recusandae facere ipsum illum neque a quo, numquam maxime placeat."
          author="kevin"
        />
      </div>
    </div>
  );
}

export default Dashboard;
