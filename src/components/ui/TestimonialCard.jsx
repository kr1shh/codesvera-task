import image from "../../assets/images/student_1.png"
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const TestimonialCard = ({title,description,image}) => {
  return (
    <div className="relative flex flex-col items-start justify-start w-[300px] h-[250px] bg-white rounded-3xl font-montserrat p-4 gap-2">
        <div className="w-[60px] overflow-hidden rounded-full">
            <img src={ image } className="w-full" alt="testimonial image" />
        </div>
        <h1 className="font-bold text-text_primary text-[16px]">{title}</h1>
        <p className="text-[12px] max-w-[290px]">{description}</p>
        <div className="flex text-[12px] gap-1 absolute top-[20px] right-[20px]">
            <FaStar color="#f9aa4b"/>
            <FaStar color="#f9aa4b"/>
            <FaStar color="#f9aa4b"/>
            <FaStar color="#f9aa4b"/>
            <FaRegStar color="#f9aa4b"/>
        </div>
    </div>
  )
}

export default TestimonialCard