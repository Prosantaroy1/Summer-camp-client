import React, { useEffect, useState } from "react";
import ClassesTable from "./ClassesTable";

const Classespage = () => {
  ///
  const [allclass, setAllclass] = useState([]);
  useEffect(() => {
    fetch("classes.json")
      .then((res) => res.json())
      .then((data) => {
        setAllclass(data);
      });
  }, []);
  //console.log(allclass);
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="py-16 px-24 opacity-70  bg-[#e6c20e] text-black flex flex-col justify-center items-center">
        <h3 className="pt-20 text-[#080708] text-center font-bold text-3xl">
          Our All Class Page
        </h3>
      </div>
      <div className="mt-9 w-[1000px] mx-auto">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="font-bold text-xl">Serial</th>
                <th className="font-bold text-xl">Image</th>
                <th className="font-bold text-xl">Name</th>
                <th className="font-bold text-xl">Instructor name</th>
                <th className="font-bold text-xl">Abailable Seats</th>
                <th className="font-bold text-xl">Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
                 {
                  allclass.map((items, index) => <ClassesTable
                    key={items._id}
                    items={items}
                    index={index}
                  ></ClassesTable>)
                 } 
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Classespage;
