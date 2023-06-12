import React from "react";
import useInstructor from "../../../Castom Hook/useInstructor";
import InstructorCard from "../../InstructorCard.jsx/InstructorCard";

const PopularInstructor = () => {
  ///
  const [instructores] = useInstructor();
  return (
    <div>
       <h2 className="text-center font-bold text-3xl underline mt-4 mb-5">
         Our Popular Instrutor
       </h2> 
      <div  className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-8">
        {
             instructores.map(instructor=> <InstructorCard
               key={instructor._id}
               instructor={instructor}
             ></InstructorCard>)
        }
      </div>
    </div>
  );
};

export default PopularInstructor;
