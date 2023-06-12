import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const InstructorCard = ({ instructor }) => {
  //
  const { InstructorName, email, image } = instructor;
  return (
    <div data-aos="flip-down">
      <div className=" card w-96 mb-4 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="font-bold">Name: {InstructorName}</h2>
          <div>
            <p className="font-semibold">
              <span className="font-bold">Email</span>: {email}
            </p>
          </div>
          <button className="btn mt-3 btn-warning">Add to Card</button>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
