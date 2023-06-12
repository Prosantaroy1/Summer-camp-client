const ClassCard = ({item}) => {
    ///
    const {name, seats,InstructorName, price,image } = item;
  return (
    <div>
      <div className="card w-96 mb-4 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
            <h2 className="font-bold">Name:  {name}</h2>
            <p className="font-semibold"><span className="font-bold">Instructor Name</span>:  {InstructorName}</p>
            <div className="flex justify-between">
                <p className="font-semibold"><span className="font-bold">
                    Available seats</span>: {seats}
                </p>
                <p className="font-semibold"><span className="font-bold">
                    Price</span>: ${price}
                </p>
            </div>
            <button className="btn mt-3 btn-warning">Add to Card</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
