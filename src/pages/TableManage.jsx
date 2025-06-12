import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const TableManage = ({setTables, table, tables}) => {
    const {title, _id,  category,  date, location  } = table;
  const handleDelete = (_id) => {
        // console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            // console.log(result.isConfirmed)
            if (result.isConfirmed) {

                // start deleting the coffee
                fetch(`http://localhost:3000/items/${_id}`, {
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

                            // remove the task from the state
                            const remainingTable = tables.filter(ta => ta._id !== _id);
                            setTables(remainingTable);
                        }
                    })


            }
        });

    }

    return (
        <div className='w-9/12 mx-auto bg-base-300 '>

            
             <div className="overflow-x-auto  ">
          <table className="table table-zebra  ">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Deadline</th>
                <th>Budget</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            
                <tr key={_id}>
                  <td>{title}</td>
                  <td>{category}</td>
                  <td>{date}</td>
                  <td>{location}</td>
                    <td className="space-x-2 grid grid-cols-1 ">
          <Link to={`/updated-table/${_id}`}><button className="btn btn-xs btn-primary my-1">Update</button></Link>
          <button onClick={()=> handleDelete(_id)} className="btn btn-xs text-white bg-red-700 my-1">Delete</button>
       
        </td>
                </tr>
              
            </tbody>
          </table>
        </div>

        </div>
    );
};

export default TableManage;