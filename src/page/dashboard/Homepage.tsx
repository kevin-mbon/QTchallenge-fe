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

function Homepage() {
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
      <div className=" grid grid-cols-2 md:grid-cols-3">
        <BlogCard
          imageTitle="OIP.jpg"
          title="Blog 1"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Tempore nostrum vero id cumque officia nisi velit qui vel recusandae facere ipsum illum neque a quo, numquam maxime placeat."
          author="kevin"
        />
        <BlogCard
          imageTitle="OIP.jpg"
          title="Blog 1"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Tempore nostrum vero id cumque officia nisi velit qui vel recusandae facere ipsum illum neque a quo, numquam maxime placeat."
          author="kevin"
        />
        <BlogCard
          imageTitle="OIP.jpg"
          title="Blog 1"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Tempore nostrum vero id cumque officia nisi velit qui vel recusandae facere ipsum illum neque a quo, numquam maxime placeat."
          author="kevin"
        />
        <BlogCard
          imageTitle="OIP.jpg"
          title="Blog 1"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Tempore nostrum vero id cumque officia nisi velit qui vel recusandae facere ipsum illum neque a quo, numquam maxime placeat."
          author="kevin"
        />
        <BlogCard
          imageTitle="OIP.jpg"
          title="Blog 1"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Tempore nostrum vero id cumque officia nisi velit qui vel recusandae facere ipsum illum neque a quo, numquam maxime placeat."
          author="kevin"
        />
        <BlogCard
          imageTitle="OIP.jpg"
          title="Blog 1"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, doloribus. Tempore nostrum vero id cumque officia nisi velit qui vel recusandae facere ipsum illum neque a quo, numquam maxime placeat."
          author="kevin"
        />
      </div>
    </div>
  );
}

export default Homepage;
