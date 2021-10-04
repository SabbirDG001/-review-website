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
        <div>
            <div className='image'>
            <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZHlpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
            </div>
            <div className='heading'>
                <h1>Welcome Sudents</h1>
                <h3>Study with fun</h3>
                <h4>Come to us, enroll exclusive courses and gain a huge amount of knowledge in this competiting world.</h4>
                <p>Develop your talents by taking courses, earning certificates, and earning degrees from Learn With Fun.Different universities and companies instructors who will help you to build up yourself perfectly.</p>
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