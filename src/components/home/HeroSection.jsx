import heroBackground from "../../assets/images/hero_section.jpeg"
import pattern from "../../assets/svg/pattern.svg"
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { companiesImgs } from "../../data";

const HeroSection = () => {
  return (
    <>
      <main className="w-full flex flex-col justify-center items-center">
        <div className={`w-full flex justify-between items-center bg-no-repeat bg-cover bg-center h-screen`}
        style={{ backgroundImage: `url(${heroBackground})` }}>
          <div className="relative bg-blend-overlay bg-accent bg-opacity-65 h-full w-[60%] rounded-br-[32px] overflow-hidden">
            <div className="z-[10] absolute right-[100px] bottom-[100px] flex flex-col items-start gap-5">
              <h1 className="font-quicksand font-[700] text-5xl text-white max-w-[560px] tracking-wider">Ample Opportunity to Learn & Earn in GERMANY</h1>
              <p className="font-montserrat font-light text-white text-[16px] max-w-[560px]">
                Improve your German Learning experiences and outcomes with this
                powerful learning management system designed for everyone.
              </p>
              <div className="flex items-center justify-center gap-3">
                <button className="text-white font-montserrat p-4 py-[13px] bg-accent rounded-full">
                    <FaWhatsapp className="inline-block mr-2"/>WhatsApp
                </button>
                <div className="flex gap-2 justify-center items-center text-white font-montserrat">
                <button className="text-accent p-4 bg-white rounded-full">
                <FaPhoneAlt />
                </button>
                <p>Call us now</p>
                </div>
              </div>
            </div>
            <img className="absolute w-full object-cover object-center opacity-[.1]" src={ pattern } alt="pattern" />
          </div>
        </div>

        <div className="w-full flex justify-center items-center gap-16 my-10">
            {
                companiesImgs.map((item,index)=>(
                    <img className="w-[100px]" style={{ filter:"grayscale(100%)" }} key={ index } src={ item } alt="Course logo" />
                ))
            }
        </div>
      </main>
    </>
  );
}

export default HeroSection