import { useState } from "react";
import Carousel from "../ui/Carousel";
import TestimonialCard from "../ui/TestimonialCard";
import { testimonialData } from "../../data";

const Testimonial = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <section className="w-full flex justify-center items-center py-20 bg-[#F5EBFE]">
        <div className="w-full flex flex-col justify-center items-center gap-12 max-w-7xl">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[40px] text-text_primary font-quicksand font-bold text-center max-w-[500px]">
              What Our Students Say About US
            </h1>
            <p className="font-montserrat font-normal text-[16px] text-text_primary text-center max-w-[500px] mt-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking.
            </p>

            <div className="w-full flex gap-4 mt-20">
              <Carousel>
                {testimonialData.map((item, index) => (
                  <TestimonialCard
                    key={index}
                    image={item.image}
                    title={item.name}
                    description={item.message}
                  />
                ))}
              </Carousel>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-[150px]">
            <h1 className="text-[40px] text-text_primary font-quicksand font-bold">
              Subscribe Our Newsletter
            </h1>
            <p className="font-montserrat font-normal text-[16px] text-text_primary text-center max-w-[500px] mt-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking.
            </p>
            <div className="relative flex items-center justify-center mt-12">
              <input
                className="border border-text_primary bg-white font-montserrat rounded-full px-6 py-3 w-[600px] text-text_primary focus:outline-none"
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="absolute right-0 bg-accent text-white font-montserrat rounded-full h-full px-5 border border-text_primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
