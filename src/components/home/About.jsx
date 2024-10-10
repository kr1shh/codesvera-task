import teamImg from "../../assets/images/about_section_team.jpeg"
import pattern from "../../assets/svg/about-pattern.svg"

const About = () => {
  return (
    <>
      <section className="w-full flex justify-center items-center py-14">
        <div className="w-full flex justify-evenly items-center max-w-7xl">
          <div className="relative">
            <div className="w-[400px] overflow-hidden rounded-[30px] z-[10]">
              <img className="w-full" src={teamImg} alt="team image" />
            </div>
            <div className="absolute top-[-30px] right-[-30px] z-[5] w-[400px] bg-[#38A5E7] h-[200px] rounded-[24px] opacity-10"></div>
            <img
              className="absolute w-[130px] bottom-[-20px] right-[-20px]"
              src={pattern}
              alt="About section overlay"
            />
          </div>
          <div className="flex flex-col gap-3 justify-start items-start">
            <h1 className="font-quicksand font-bold text-[40px] text-text_primary">About Us</h1>
            <p className="font-montserrat text-text_primary max-w-[600px] leading-[25px]">
              Upskill that prioritizes practice over theory, with thousands of
              certified mentors and thousands of students. We can produce
              thousands of graduates who are immediately ready for a
              professional career.
            </p>
            <button className="bg-accent text-white font-montserrat font-light p-3 py-2 rounded-full">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default About