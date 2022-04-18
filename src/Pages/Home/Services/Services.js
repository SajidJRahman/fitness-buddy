import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className='services' id='services'>
            <h2>My Current Programs</h2>
            <div className='services-programs'>
                <div className='programs program-one' >
                    <div className='programs-info'>
                        < h4>Glutes Program</ h4>
                        <div className='program-description mx-auto'>
                            <p>This Program Includes:</p>
                            <p>20 Squats</p>
                            <p>Squat Jumps</p>
                            <p>20 Reverse Lunges</p>
                            <p>20 Fire Hydrants</p>
                        </div>
                        <Link to='/checkout'>
                            <button className='services-button btn rounded-pill'>Book Program</button>
                        </Link>
                    </div>
                </div>
                <div className='programs program-two' >
                    <div className='programs-info'>
                        < h4>15 Minutes Program</ h4>
                        <div className='program-description mx-auto'>
                            <p>This Program Includes:</p>
                            <p>20 Lunge kicks</p>
                            <p>20 Leg Swings</p>
                            <p>30 Hip Lifts</p>
                            <p>30 Sliders</p>
                        </div>
                        <Link to='/checkout'>
                            <button className='services-button btn rounded-pill'>Book Program</button>
                        </Link>
                    </div>
                </div>
                <div className='programs program-three' >
                    <div className='programs-info'>
                        < h4>Hiit & ABS Program</ h4>
                        <div className='program-description mx-auto'>
                            <p>This Program Includes:</p>
                            <p>Warm-Up 3 Minutes</p>
                            <p>Plank Jacks</p>
                            <p>Plank</p>
                            <p>Reverse Crunch</p>
                        </div>
                        <Link to='/checkout'>
                            <button className='services-button btn rounded-pill'>Book Program</button>
                        </Link>
                    </div>
                </div>
                <div className='programs program-four' >
                    <div className='programs-info'>
                        < h4>Meditation Program</ h4>
                        <div className='program-description mx-auto'>
                            <p>This Program Includes:</p>
                            <p>Mindfullness Meditation</p>
                            <p>Spiritual Meditation</p>
                            <p>Focused Meditation</p>
                            <p>Mantra Meditation</p>
                        </div>
                        <Link to='/checkout'>
                            <button className='services-button btn rounded-pill'>Book Program</button>
                        </Link>
                    </div>
                </div>
                <div className='programs program-five'>
                    <div className='programs-info'>
                        < h4>Body & Mind Program</ h4>
                        <div className='program-description mx-auto'>
                            <p>This Program Includes:</p>
                            <p>Standing Asanas Legs</p>
                            <p>Healthy Back</p>
                            <p>Core Awakening</p>
                            <p>Hip Openers</p>
                        </div>
                        <Link to='/checkout'>
                            <button className='services-button btn rounded-pill'>Book Program</button>
                        </Link>
                    </div>
                </div>
                <div className='programs program-six'>
                    <div className='programs-info'>
                        < h4>Strength Program</ h4>
                        <div className='program-description mx-auto'>
                            <p>This Program Includes:</p>
                            <p>Heel Elevated Squats</p>
                            <p>Lateral Lunges</p>
                            <p>Walking Lunges</p>
                            <p>Seated Med Ball Twist</p>
                        </div>
                        <Link to='/checkout'>
                            <button className='services-button btn rounded-pill'>Book Program</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;