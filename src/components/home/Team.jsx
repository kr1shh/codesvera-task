import { teamData } from "../../data";
import TeamCard from "../ui/TeamCard";


const Team = () => {
  return (
    <section className="w-full flex justify-center items-center py-14">
      <div className="w-full flex flex-col justify-center items-center gap-12 max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="font-quicksand font-bold text-[40px] text-text_primary">Meet Our Team</h1>
          <p className="font-montserrat max-w-xl text-center text-text_primary">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking.
          </p>
        </div>
        <div className="flex gap-12">
            {
                teamData.map((item,index)=>(
                    <TeamCard
                    key={ index }
                    icon={ item.image }
                    title={ item.name }
                    designation={ item.designation }/>
                ))
            }
        </div>
        <button className="font-montserrat text-[16px] font-semibold text-text_primary border rounded-full border-text_primary py-2 px-4">
            View More
        </button>
      </div>
    </section>
  );
}

export default Team