import React from 'react';

const RecoveredCard = ({recoverItem}) => {

    const {_id, title, recoveredLocation, thumbnail, name} = recoverItem
    return (
        <div>
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
                  <td>{recoveredLocation}</td>
                  <td>{thumbnail}</td>
                  <td>{name}</td>
                    {/* <td className="space-x-2 grid grid-cols-1 ">
          <Link to={`/updated-table/${_id}`}><button className="btn btn-xs btn-primary my-1">Update</button></Link>
          <button onClick={()=> handleDelete(_id)} className="btn btn-xs text-white bg-red-700 my-1">Delete</button>
       
        </td> */}
                </tr>
              
            </tbody>
          </table>
        </div>
        </div>
    );
};

export default RecoveredCard;