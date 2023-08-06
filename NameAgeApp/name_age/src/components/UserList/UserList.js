import {useState} from 'react';
import styled from './UserList.module.css';

const UserList = (props) => {
        return (
            <ul className={styled.users}>
     {props.data.map((item) => {
            return(
                <li key={item.age}>
                {item.user} {`(${item.age} Years old)`}
                </li>
            )
        })}
        </ul>
        )
}

export default UserList;