import { BlogCard } from "../../components";
import { blogData } from "../../data";

export const Blogs = () => {
  return (
    <>
      <section className="w-full flex justify-center items-center py-20">
        <div className="w-full flex flex-col justify-center items-center gap-12 max-w-7xl">
          <div className="flex flex-col gap-3 justify-center items-center">
            <h1 className="text-[40px] text-text_primary font-quicksand font-bold">
            Latest Blog and News
            </h1>
            <p className="font-montserrat font-normal text-[16px] text-text_primary text-center max-w-[500px]">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking.
            </p>
          </div>
          <div className="flex gap-12">
            {
                blogData.map((item,index)=>(
                    <BlogCard 
                    key={ index }
                    image={ item.coverImg }
                    title={ item.title }
                    description={ item.description }/>
                ))
            }
          </div>
        </div>
      </section>
    </>
  );
}
