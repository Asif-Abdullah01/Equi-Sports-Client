import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllEquipmentTable from "../AllEquipmentTable";

const AllSportsEquipments = () => {

    const data = useLoaderData();
    const [allEquipments,setAllEquipments] = useState(data)

    return (
       <>
       <p>data : {allEquipments.length}</p>

       <div className="w-9/12 mx-auto bg-green-100 text-black">
        <div className="overflow-x-auto">
          <table className="table text-center">
            {/* head */}
            <thead>
              <tr className="text-green-800 text-base">
                <th>serial</th>
                <th>Picture</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock Status</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>

              {
                allEquipments.length === 0? <p>No data found</p>:
                allEquipments.map((equipment,index) => <AllEquipmentTable key={equipment?._id} idx={index} equipment={equipment} allEquipments={allEquipments} setAllEquipments={setAllEquipments}></AllEquipmentTable>)
              }
            </tbody>
          </table>
        </div>
      </div>
       </>
    );
};

export default AllSportsEquipments;


// <tr>
// <td>{idx+1}</td>
// <td>{title}</td>
// <td>{day}</td>
// <td>{date}</td>
// <td>{hour}</td>
// <td>
//   <div className="flex gap-4">
//     {" "}
//     <button onClick={() => handleDelete(_id)} className="bg-pink-500 px-4 py-2 rounded text-white">
//       <FaTrash className=""></FaTrash>
//     </button>
//     <button className="bg-pink-500 px-4 py-2 rounded text-white">
//       <Link to={`/update/${_id}`}>
//         {" "}
//         <FaFile />
//       </Link>
//     </button>
//     <button onClick={()=> handleUpdateStatus(_id)} className="bg-pink-500 px-4 py-2 rounded text-white">
//       {isCompleted ? <MdOutlineDoneAll /> : <MdDone />}

      
//     </button>
//   </div>
// </td>
// </tr>