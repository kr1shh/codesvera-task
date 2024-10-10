
const ElearningCard = ({ color,title,value }) => {
  return (
    <div className=" w-[250px] h-[150px] text-text_primary font-montserrat rounded-xl p-6"
    style={{
        backgroundColor: color 
    }}>
        <h1 className="font-semibold">{title}</h1>
        <h3 className="font-bold text-[40px]">{value}<span className="text-accent">+</span></h3>
    </div>
  )
}

export default ElearningCard