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
    <div className="min-h-screen bg-green-50 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white border border-green-700 rounded-xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <h2 className="text-2xl font-bold text-green-700">All Sports Equipments</h2>
          
          {/* Sort Button with Border on Left */}
          <div className="pl-4 border-l-4 border-green-600">
            <button
              onClick={handleSort}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition font-medium"
            >
              Sort by Price ({sortOrder === "asc" ? "Ascending" : "Descending"})
            </button>
          </div>
        </div>

        {/* Conditional Message */}
        {allEquipments.length === 0 ? (
          <div className="text-center text-gray-600 py-10 text-lg">No equipment found.</div>
        ) : (
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full text-sm md:text-base table-auto border">
              <thead className="bg-green-100 text-green-800">
                <tr>
                  <th className="px-4 py-3 text-left">Serial</th>
                  <th className="px-4 py-3 text-left">Picture</th>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Category</th>
                  <th className="px-4 py-3 text-left">Price</th>
                  <th className="px-4 py-3 text-left">Stock</th>
                  <th className="px-4 py-3 text-left">Details</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {allEquipments.map((equipment, index) => (
                  <AllEquipmentTable
                    key={equipment?._id}
                    idx={index}
                    equipment={equipment}
                    allEquipments={allEquipments}
                    setAllEquipments={setAllEquipments}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllSportsEquipments;
