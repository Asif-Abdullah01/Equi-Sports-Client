import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllEquipmentTable from "../AllEquipmentTable";

const AllSportsEquipments = () => {
  const data = useLoaderData();
  const [allEquipments, setAllEquipments] = useState(data);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = () => {
    const sortedEquipments = [...allEquipments].sort((a, b) => {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    });
    setAllEquipments(sortedEquipments);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <>
      <div className="w-9/12 mx-auto bg-green-100 text-black">
        <div className="flex justify-between items-center my-4">
          <h2 className="text-2xl font-bold">All Sports Equipments</h2>
          <button
            onClick={handleSort}
            className="bg-green-500 px-4 py-2 rounded text-white"
          >
            Sort by Price ({sortOrder === "asc" ? "Ascending" : "Descending"})
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table text-center">
            
            <thead>
              <tr className="text-green-800 text-base">
                <th>Serial</th>
                <th>Picture</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock Status</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {allEquipments.length === 0 ? (
                <p>No data found</p>
              ) : (
                allEquipments.map((equipment, index) => (
                  <AllEquipmentTable key={equipment?._id} idx={index} equipment={equipment} allEquipments={allEquipments} setAllEquipments={setAllEquipments}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllSportsEquipments;
