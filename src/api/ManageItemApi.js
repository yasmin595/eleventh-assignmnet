

  export  const manageItemPromise = email =>{
  

    return fetch(`http://localhost:3000/item/${email}`).then(res =>res.json())
 }