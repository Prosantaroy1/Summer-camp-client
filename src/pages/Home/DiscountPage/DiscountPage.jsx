import img from "../../../assets/New folder/image-1.jpg";
const DiscountPage = () => {
  return (
    <div
      className="w-[1100px] mx-auto  mt-16 flex flex-col lg:flex-row gap-10 justify- 
       between"
    >
      <img src={img} alt="" className="w-[450px] h-[370px] rounded-2xl" />
      <div className="space-y-5">
        <h2 className="text-4xl font-extrabold">
          Welcome to Our <span className="text-[#3021ff]">Language School</span>
        </h2>
        <h4 className="text-3xl text-[#ff7d7d] font-bold">
          Choose from top industry instructors
        </h4>
        <p className="font-semibold text-xl space-y-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <br /> Non unde fugit inventore nisi a delectus alias incidunt <br />
          harum quo adipisci. Lorem ipsum dolor sit amet consectetur <br />
          adipisicing elit. Aut fuga, tempore fugit iste
          <br /> exercitationem esse?
        </p>
        <div className="flex gap-16 flex-col lg:flex-row">
          <p>
            <span className="font-bold text-2xl text-[#5e14e7]">Over</span>
            <br />
            <span className="font-bold text-3xl text-[#e7fd21]">5400</span>
            <br />
            <span className="font-bold text-2xl text-[#24d3ff]">
              Happy Students
            </span>
          </p>
          <p>
            <span className="font-bold text-2xl text-[#5e14e7]">
              Lifetime access
            </span>
            <br />
            <span className="font-bold text-3xl text-[#fff025]">2400</span>
            <br />
            <span className="font-bold text-2xl text-[#2affe3]">
              Mobile App Users
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscountPage;
