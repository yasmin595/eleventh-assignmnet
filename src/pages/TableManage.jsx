import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const TableManage = ({ setTables, table, tables }) => {
  const { title, _id, category, date, location } = table;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://eleventh-assignment-server-eta.vercel.app/items/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Task has been deleted.",
                icon: "success"
              });

              const remainingTable = tables.filter(ta => ta._id !== _id);
              setTables(remainingTable);
            }
          })
      }
    });
  }

  return (
    <div className='w-11/12 mx-auto bg-base-200 rounded-xl shadow-xl p-6 mt-10'>
      <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Manage My Items</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra text-center">
          <thead className="bg-green-800 text-white">
            <tr>
              <th className="py-3">Title</th>
              <th>Category</th>
              <th>Deadline</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr key={_id} className="hover:bg-green-50">
              <td className="font-medium text-green-900">{title}</td>
              <td>{category}</td>
              <td>{date}</td>
              <td>{location}</td>
              <td className="flex flex-col justify-center items-center gap-2">
                <Link to={`/updated-table/${_id}`}>
                  <button className="btn btn-sm bg-blue-600 text-white hover:bg-blue-800">
                    <FaEdit className="mr-1" /> Update
                  </button>
                </Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm bg-red-600 text-white hover:bg-red-800">
                  <FaTrashAlt className="mr-1" /> Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableManage;
