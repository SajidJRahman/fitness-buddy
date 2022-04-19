import React from 'react';
import './About.css';
import myself from '../../../images/about/myself.jpg';

const About = () => {
    return (
        <div className='about-me text-center container'>
            <img className='rounded-pill' src={myself} alt="" />
            <h2>Hello, My name is Sajid Rahman</h2>
            <p>I've always wanted to learn web developing. But the option, the possibility the opportunity was not close to my hand. Then my best friend let me know about this course. So today by the grace of Allah & with the help of my best friend, I'm here at this point of the course. In the next few months, I'm determined of doing the hard work I need to do. I hope to see a bright future after I finish this wonderful course! Right now my goal is to give the best on the course of web developing & finish successfully. InshAllah my hard work will pay off one day. After completing the course I look forward to do a job as a web developer, fulfilling my dream! I will keep doing hard work InshAllah.</p>
        </div>
    );
};

export default About;