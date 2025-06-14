import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import LatestFoundLost from './LatestFoundLost';
import { Search } from 'lucide-react';
import { TabTitle } from '../utils/General';

const AllItems = () => {
  TabTitle('WhereIsIt-allItems')
  const loadedItems = useLoaderData();
  const [searchText, setSearchText] = useState('');
  const [filteredItems, setFilteredItems] = useState(loadedItems);

  useEffect(() => {
    const filtered = loadedItems.filter(item =>
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.location.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchText, loadedItems]);

  return (
    <div className='w-11/12 mx-auto my-8'>
      <h1 className='font-bold py-2 bg-white text-2xl text-green-800 md:flex my-4'>
       Lost & Find All Items
      </h1>
     <div className='flex justify-center '>
                  <Search className="h-6 w-6 text-green-600 m-2" />
      <input

        type="text"
        placeholder="Search by title  |  |  location..."
        className="w-full p-2 border-2 mb-6 rounded border-green-800"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
     </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <LatestFoundLost key={item._id} item={item} />
          ))
        ) : (
          <p className='text-gray-500 col-span-full text-center'>No items found.</p>
        )}
      </div>
    </div>
  );
};

export default AllItems;