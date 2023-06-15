import React, { useEffect, useState } from "react";
import InstructorTable from "./InstructorTable";

const Instructorpage = () => {
  ///
  const [instructor, setInstructor] = useState([]);
  useEffect(() => {
    fetch("instructor.json")
      .then((res) => res.json())
      .then((data) => {
        setInstructor(data);
      });
  }, []);
  //
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="py-16 px-24 opacity-70  bg-[#e6c20e] text-black flex flex-col justify-center items-center">
        <h3 className="pt-20 text-[#080708] text-center font-bold text-3xl">
          Our All Instructor Page
        </h3>
      </div>
      <div className="w-[1000px] mx-auto mt-8">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="font-bold text-xl">Serial </th>
                <th className="font-bold text-xl">Image</th>
                <th className="font-bold text-xl">Name</th>
                <th className="font-bold text-xl">Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
               {
                 instructor.map((item, index)=> <InstructorTable
                   key={item._id}
                   item={item}
                   index={index}
                 ></InstructorTable>)
               }
             </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Instructorpage;
