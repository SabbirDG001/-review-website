import React, { useEffect, useState } from 'react';
import Classes from '../Course/Classes';
import'./Courses.css';

const Courses = () => {
    const[classes,setClasses]=useState([]);
    useEffect(()=>{
        fetch('./Courses.JSON')
        .then(res=>res.json())
        .then(data=>setClasses(data))
    }
    );
    return (
        <div>
            <h1>All courses::</h1>
            <div className='cardholder'>
                {/* mapping all courses */}
            {
                classes.map(classes=><Classes key={classes.id} classes={classes}></Classes>)
            }
            </div>
        </div>
    );
};

export default Courses;