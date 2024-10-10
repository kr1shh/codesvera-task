import icon from "../../assets/images/student_2.png"

const CourseCard = ({ cover,tutor,description,courses }) => {
  return (
    <div className="flex flex-col justify-between w-[300px] h-[380px] bg-white rounded-xl p-2 font-montserrat">
      <div className="w-full rounded-lg overflow-hidden">
        <img className="w-full" src={cover} alt="Courses" />
      </div>
      <div className="flex flex-col gap-4 ml-2 mb-3">
        <div className="flex items-center justify-start gap-3">
          <div className="w-[40px] overflow-hidden rounded-full">
            <img className="w-full" src={icon} alt="teacher" />
          </div>
          <h1 className="font-bold text-text_primary">{tutor}</h1>
        </div>
        <p className="text-text_primary font-medium text-[14px]">
          {description}
        </p>
        <div className="flex gap-1">
          {courses.map((item, index) => (
            <span
              key={index}
              className="inline-block border border-text_primary rounded-full px-2 py-1 text-[12px]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseCard