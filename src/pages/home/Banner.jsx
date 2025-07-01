import React from 'react';
import banner from '../../assets/banner.jpg';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
  return (
    <div className=' mx-auto mt-10'>
      <div className="relative rounded-xl overflow-hidden shadow-lg">
        {/* Background Image */}
        <img
          src={banner}
          alt="Lost and Found Banner"
          className="w-full h-[400px] md:h-[500px] object-cover brightness-75"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 text-white bg-black/30">
          <h1 className="text-2xl md:text-4xl font-semibold mb-4">
            Have You <span className="text-green-300">Lost</span> or <span className="text-green-400">Found</span> Something?
          </h1>
          
          <h2 className="text-xl md:text-3xl font-bold mb-4">
            We help you connect with the right person
          </h2>

          <p className="text-base md:text-lg mb-6 max-w-md">
            Post what you’ve lost or found and let our community help return it to the right place.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-green-200">
            We are looking for{' '}
            <span className="text-green-400 font-bold">
              <Typewriter
                words={['Honest People', 'Helpful Finders', 'Lost Owners']}
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
