import { useState } from 'react';
import './App.css';
import Card from './UI/Card/Card';
import AddUser from './components/AddUser/AddUser';
import UserList from './components/UserList/UserList';
import ErrorModel from './UI/ErrorModel/ErrorModel';

function App() {
  const [userList, setUserList] = useState([]);
  const [errorState, setErrorState] = useState(true);

  let userListComponenet = null;
  let errorComponenet = null;

  const getFromChild2 = (obj) => {
    if(errorState === true){
      setUserList([...userList, obj]);
    }
  }

  const getError2 = (error) =>{
    setErrorState(error);
  }

  if(errorState != true){
    errorComponenet = <ErrorModel message={"values invalid"} errorState={setErrorState}/>
  } else {
    errorComponenet = null;
  }


  if(userList.length === 0){
    userListComponenet = null;
  } else {
    userListComponenet = <Card componenet={UserList} getFromChild2={getFromChild2} data={userList} setData={setUserList} errorState={errorState}/>
  }

  return (
    <div className='main'>      
      <Card componenet={AddUser} getFromChild2={getFromChild2} getError2={getError2} data={null} setData={null} errorState={null}/> 
      {userListComponenet}
      {errorComponenet}
      </div>
  );
}

export default App;
