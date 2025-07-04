

  export  const manageRecoverPromise = (email, accessToken, logOut) =>{
  

    return fetch(`https://eleventh-assignment-server-eta.vercel.app/recover/${email}`,
{

  
      headers:{ 
        authorization:`Bearer ${accessToken}`
        
      }
}
    )
    
      .then(res => {
      if (res.status === 401 || res.status === 403) {
        // Unauthorized or Forbidden
        logOut(); // Sign out the user
        throw new Error('Unauthorized access - signing out user');
      }
      return res.json();
    })
    .catch(error => {
      console.error('Error fetching item:', error.message);
      // Optional: return something fallback or rethrow
      throw error;
    });


 }