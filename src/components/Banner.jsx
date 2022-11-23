import React from 'react';

const Banner = () => {
    return (
        <div className='relative'>
            <img className='w-screen' src="https://i.ibb.co/pZ1dj9f/banner2.jpg" alt="alibris banner" />
            <p className='absolute top-10 left-12 md:top-52 md:left-1/3 text-base-100 text-3xl font-semibold italic'>Reading Book Is An Art</p>
        </div>
    );
};

export default Banner;