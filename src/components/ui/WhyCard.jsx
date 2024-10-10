import { FaArrowRight } from "react-icons/fa6";

const WhyCard = ({ icon,title,description }) => {
  return (
    <div className="font-montserrat relative h-[300px] w-[290px] flex flex-col justify-start items-start border-[2px] border-solid border-text_primary rounded-[40px] pt-[30px] pl-[30px] gap-3">
      <img className="w-[40px]" src={icon} alt="icon" />
      <h1 className="text-text_primary font-semibold text-[20px]">{ title }</h1>
      <p className="font-normal text-[14px]">{ description }</p>
      <button className="text-white bg-text_primary py-1 px-2 rounded-full absolute right-6 bottom-6">
        <FaArrowRight />
      </button>
    </div>
  );
}

export default WhyCard