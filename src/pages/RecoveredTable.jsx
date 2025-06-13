import React, {  } from 'react';
import { Link } from 'react-router';

const RecoveredTable = ({recoverItem}) => {


  
    return (
        <div>
              <tr>
  <td className="border p-2">{recoverItem.title}</td>
  <td className="border p-2">{recoverItem.category}</td>
  <td className="border p-2">{recoverItem.location}</td>
  <td className="border p-2">
    <Link to={`/items/${recoverItem._id}`} className="text-green-600 underline">View</Link>
  </td>
</tr>
        </div>
    );
};

export default RecoveredTable;