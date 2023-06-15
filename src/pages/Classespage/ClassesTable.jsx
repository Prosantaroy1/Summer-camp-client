import { useState } from "react";

const ClassesTable = ({items, index}) => {
    //
  const {name, price, image,InstructorName, seats} = items;
  return (
    <>
      <tr>
        <th>{index+1}</th>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-20 h-20">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td className="font-bold">{name}</td>
        <td className="font-bold">{InstructorName}</td>
        <td className="font-bold">{seats}</td>
        <td className="font-bold">{price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">Add Card</button>
        </th>
      </tr>
    </>
  );
};

export default ClassesTable;
