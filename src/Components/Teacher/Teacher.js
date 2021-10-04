import React from 'react';
import './Teacher.css';
const Teacher = (props) => {
    const{name,picture,phone,email}=props.teacher;
    return (
        <div className='container'>
            <div>
                <img src={picture} alt="" />
            </div>
            <div>
            <h2>Name:{name}</h2>
            <h4>Phone no:{phone}</h4>
            <h4>Email:{email}</h4>
            </div>
        </div>
    );
};

export default Teacher;