

const TeamCard = ({ icon,title,designation }) => {
  return (
    <div className="flex flex-col items-center justify-center font-montserrat gap-3">
        <div className="rounded-full overflow-hidden w-[200px]">
            <img className="w-full" src={ icon } alt="our team" />
        </div>
        <h1 className="font-bold text-text_primary text-[20px]">
            {title}
        </h1>
        <p className="font-noraml text-text_primary text-[14px]">
            {designation}
        </p>
    </div>
  )
}

export default TeamCard