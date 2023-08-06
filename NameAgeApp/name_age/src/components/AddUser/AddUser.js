import styled from './AddUser.module.css';
import {useState} from 'react';
import Button from '../../UI/Button/Button';
import Wrapper from '../Helpers/Wrapper';

const AddUser = props => {
    const initialValues = {
        user: "",
        age: ""
      };
    
      const [userData, setUserData] = useState(initialValues);
      let errorState = props.errorState;

      const handleChange = (e) => {
        setUserData((prev) => {
        return {...prev, [e.target.name]: e.target.value}
        })
      };


      const clickHandler = (e) => {
        e.preventDefault();
        if(userData.user.trim().length !== 0 && userData.age.trim().length !== 0){
          alert('Added to List!');
          props.getFromChild(userData);
          errorState = true;
        } else {
          console.log('error happened!');
          errorState = false;
        }
        props.getError(errorState)
        setUserData(initialValues);
      }


    return(
        <Wrapper onSubmit={clickHandler} className={styled.input}> 
        <label htmlFor="username">UserName:</label>
        <input type="text" name='user' autoComplete='off' value={userData.user} onChange={handleChange}></input>
        <label htmlFor="Age (Years)">Age:</label>
        <input type="number" name='age' autoComplete='off' min={1} value={userData.age} onChange={handleChange}></input>
        <Button type={"sumbit"} text={"Add User"}/>
        </Wrapper>
    )
}

export default AddUser;