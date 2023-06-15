const InstructorTable = ({ item, index }) => {
  const { image, email, InstructorName } = item;
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-20 h-20">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td className="font-bold">{InstructorName}</td>
        <td className="font-bold">{email}</td>
        <th>
          <button className="btn btn-ghost btn-xs">See Class</button>
        </th>
      </tr>
    </>
  );
};

export default InstructorTable;
