import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
    const[teachers, setTeachers]=useState([]);
    useEffect(()=>{
        fetch('./Teachers.JSON')
        .then(res=> res.json())
        .then(data=>setTeachers(data))
    })
    return (
        <div>
            {/* mapping teachers */}
            {
                teachers.map(teacher=><Teacher key={teacher._id} teacher={teacher}></Teacher>)
            }
        </div>
    );
};

export default Teachers;