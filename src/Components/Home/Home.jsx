import React from 'react';
import './Home.css'
import videoBg from '/KutumbpurHigh-School-bg.mp4'

const Home = () => {
    return (
        <>
            <div className='banner-container'>
                <div className="overlay"></div>
                <video src={videoBg} autoPlay loop muted/>
                <div className='content'>
                    <p className='text-8xl font-sans'>
                        "<span>Discover</span>,
                        <span> Learn</span>,
                        <span> Grow</span>: <br /><br />
                        <span>Welcome to
                            <span> Kutumbpur High School</span>
                        </span>
                        <br /> <br />
                        -
                        <span>Your Path to Success</span>
                        </p>
                </div>
            </div>
        </>
    );
};

export default Home;