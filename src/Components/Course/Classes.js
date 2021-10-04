import React from 'react';
import './Classes.css';

const Course = (props) => {
    const{name,views,img,rate,time}=props.classes;
    return (
        <div>
                <div className="card">
                <img src={img} alt="" />
                <h3>Name:{name}</h3>
                <h3>Views:{views}</h3>
                <h4>Rated:{rate}</h4>
                <h4>Time:{time}</h4>
                </div>
        </div>
    );
};

export default Course;