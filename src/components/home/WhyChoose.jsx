import WhyCard from "../ui/WhyCard"
import { whyCardData } from "../../data"

const WhyChoose = ( ) => {
  return (
    <>
      <section className="w-full flex justify-center items-center py-14">
        <div className="w-full flex flex-col justify-center items-center gap-12 max-w-7xl">
          <div className="flex flex-col gap-3 justify-center items-center">
            <h1 className="text-[40px] text-text_primary font-quicksand font-bold">
              Why Choose Us
            </h1>
            <p className="font-montserrat font-normal text-[16px] text-text_primary">
              Learn with us and enjoy the various advantages
            </p>
          </div>
          <div className="flex gap-12">
            {whyCardData.map((item, index) => (
              <WhyCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChoose