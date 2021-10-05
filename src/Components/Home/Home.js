import React, { useEffect, useState } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Classes from '../Course/Classes';

const Home = () => {
    const[classes,setClasses]=useState([]);
    useEffect(()=>{
        fetch('./HomeCourses.JSON')
        .then(res=>res.json())
        .then(data=>setClasses(data))
    }
    );
    return (
        <div className='body'>
            <div className='background'>
                {/* heading part */}
            <div className='heading'>
                <h1>Welcome Sudents</h1>
                <h3>Study with fun</h3>
                <h4>Come to us, enroll exclusive courses and gain a huge amount of knowledge in this competiting world.</h4>
                <p>Develop your talents by taking courses, earning certificates, and earning degrees from <span>'Learn Zone'</span>.Different universities and companies instructors who will help you to build up yourself perfectly.</p>
            </div>
            </div>
            <div>
                <h2>Popular Courses:</h2>
                <div className='cardholder'>
                    {
                        classes.map(classes=><Classes key={classes.id} classes={classes}></Classes>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;