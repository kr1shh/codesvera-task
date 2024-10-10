const BlogCard = ({ image,title,description }) => {
  return (
    <div className="flex flex-col items-center justify-between w-[330px] h-[430px] rounded-[20px] border border-text_primary overflow-hidden">
        <div className="w-full rounded-[20px] overflow-hidden border border-text_primary">
            <img className="w-full" src={ image } alt="Blog about learing" />
        </div>
        <div className="w-full h-[50%] flex flex-col p-3 justify-evenly items-start">
            <h1 className="font-quicksand font-bold text-text_primary text-[18px]">{ title }</h1>
            <p className="font-montserrat text-[12px] text-text_primary">{ description }</p>
            <button className="border border-text_primary rounded-full px-4 py-1 font-montserrat text-[14px]  hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
                Read the blog
            </button>
        </div>
    </div>
  )
}

export default BlogCard