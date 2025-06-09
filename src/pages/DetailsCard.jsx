import React from 'react';

const DetailsCard = ({item}) => {


    
//         {
//     "_id": "6845b9aa57f41355bafb1f14",
//     "postType": "lost Items",
//     "thumbnail": "https://i.ibb.co/NnY9D5cB/download-5.jpg",
//     "title": "lost my gadget",
//     "category": "gadgets",
//     "description": "i lost my gadget",
//     "location": "bangladesh",
//     "date": "06/10/2025",
//     "name": "rifat",
//     "email": "mdrifatnicevedio202@gmail.com"
//   },


    const { potsType} = item

    return (
        <div>
            <p>{potsType}</p>
        </div>
    );
};

export default DetailsCard;