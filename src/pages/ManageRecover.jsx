
import RecoveredItems from './RecoveredItems';
import { manageRecoverPromise } from '../api/RecoverItemApi';
import { use } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import { TabTitle } from '../utils/General';

 

const ManageRecover = () => {
    TabTitle('WhereIsIt-recoverItems')
    const {user,logOut } = use(AuthContext);

    // console.log( 'token in the context',  user.accessToken)

    
  
    return (
        <div className='mx-auto my-8 w-11/12'>
         <RecoveredItems manageRecoverPromise={manageRecoverPromise(user?.email, user?.accessToken, logOut)}>
           
         </RecoveredItems>
        </div>
    );
};

export default ManageRecover;