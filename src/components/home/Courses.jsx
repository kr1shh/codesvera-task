import image from "../../assets/svg/pattern.svg"
import { elearnData } from "../../data/elearnData";
import ElearningCard from "../ui/ElearningCard";

const Courses = () => {
  return (
    <div className="flex items-center justify-center bg-primary">
      <div className="w-full flex flex-col justify-center items-center gap-12 max-w-7xl">
        <div className="w-full flex items-center justify-between mt-32">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col justify-start items-start gap-3">
              <h1 className="text-[40px] text-white font-quicksand font-bold text-start max-w-[400px]">
                Start learning with Elearn
              </h1>
              <p className="font-montserrat font-light text-[16px] text-white text-start max-w-[400px]">
                Get unlimited access to structured courses and doubt clearing
                sessions
              </p>
              <button className="bg-accent text-white font-montserrat font-light p-3 py-2 rounded-full">
                Start learning
              </button>
            </div>
            <div className="w-[500px] h-[350px] opacity-10 overflow-hidden">
              <img
                className="w-[100%] scale-95 object-cover object-right-top"
                src={image}
                alt="pattern"
              />
            </div>
          </div>
          <div className=" flex flex-wrap flex-col w-[600px] h-[600px] justify-center gap-6">
            {
                elearnData.map((item,index)=>(
                    <ElearningCard
                    key={index}
                    title={item.title}
                    value={item.value}
                    color={item.color}/>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses