import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

function Details() {
  return (
    <div>
      <div className="border border-slate-300 flex flex-col gap-4 justify-between p-16">
        <div className="flex gap-2 items-center">
          <Link to="/" className="text-xs text-blue-600 font-medium">
            Home
          </Link>
          <FiChevronRight />
          <Link to="/" className="text-xs text-slate-500 font-medium">
            Blog 1
          </Link>
        </div>
        <img
          src={`../../../public/asset/nutrition.webp`}
          className="w-full h-[40vh]"
        />
        <h1 className="text-xl font-bold text-blue-500 ">Blog 1</h1>
        <p className="text-slate-500 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
          doloribus. Tempore nostrum vero id cumque officia nisi velit qui vel
          recusandae facere ipsum illum neque a quo, numquam maxime placeat.{" "}
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          alias quia dolor at mollitia vitae eius repudiandae atque quis aliquam
          odit facilis, ipsam assumenda consequuntur, tenetur neque voluptas
          voluptatibus ratione.
          <hr />
          Architecto excepturi cumque officia odio autem rem. Ipsa consectetur
          aspernatur perferendis quaerat ratione aliquid omnis et distinctio
          quas voluptate fuga, odio, iusto voluptatum totam minus libero
          assumenda nobis! Voluptates, ipsa. Recusandae maxime quasi aliquam
          itaque, debitis architecto libero ducimus magnam culpa vitae harum
          obcaecati sapiente, nemo dolores voluptatum delectus quidem facilis
          pariatur, officiis ipsam. Iste quod vel quaerat provident hic.
        </p>
        <div className="bg-slate-300 p-3 flex flex-col gap-4">
          <h3 className="text-slate-600 text-sm font-semibold">Comments</h3>
          <div className="flex flex-col gap-2">
            <div className="bg-slate-200/40 p-2 px-4 text-xs font-medium text-slate-600">
              <p className="text-xs italic text-slate-500">
                comment by: <span className="text-blue-500">@alvin</span>
              </p>
              <p className="mt-2">I love this blog</p>
            </div>

            <div className="bg-slate-200/40 p-2 px-4 text-xs font-medium text-slate-600">
              <p className="text-xs italic text-slate-500">
                comment by: <span className="text-blue-500">@alvin</span>
              </p>
              <p className="mt-2">I love this blog</p>
            </div>

            <fieldset className="bg-slate-200 p-2 px-4 text-xs font-medium text-slate-600">
              <legend className="bg-slate-200 px-4 py-2 border border-slate-300">
                Leave your comment
              </legend>
              <form className="flex gap-2">
                <input
                  type="text"
                  className="w-full p-2 px-2 outline-none bg-transparent border border-slate-300"
                  placeholder="Your comment"
                />
                <button className="bg-blue-500 px-4 text-slate-100">Comment</button>
              </form>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
