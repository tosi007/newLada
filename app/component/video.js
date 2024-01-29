// components/BackgroundVideo.js
import React from 'react';

const BackgroundVideo = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="relative mt-4  h-screen">
      {/* Background video */}
      <video
        className="w-full h-full object-cover   filter brightness-50"
        autoPlay
        loop
        muted
      >
        <source src="/back.mp4" type="video/mp4" />
        {/* Add additional source elements for different video formats if needed */}
      </video>

      {/* Overlay text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 style={{ fontFamily: 'Alice',  }} className=" text-sm border border-white md:text-5xl ">Lada Jewelers™</h1><br/>
        <h1 style={{ fontFamily: 'Alice',  }} className=" text-sm  md:text-5xl ">CEO M Shazad</h1><br/>
        <h1 style={{ fontFamily: 'Alice',  }} className=" text-sm  md:text-5xl ">Sarvar Gold Plaza Front Shop E.S.T 2000</h1><br/>
        <h1 style={{ fontFamily: 'Alice', }} className="w-[279px] md:text-3xl md:w-auto text-xs h-8 "> Lada Jewellers: Adorn Your Moments with Timeless Elegance and Exquisite Craftsmanship. Unveil Beauty Beyond Brilliance.</h1>
        {/* Add more text elements or customize as needed */}
      </div>
    </div>
  );
});
BackgroundVideo.displayName = 'BackgroundVideo';
export default BackgroundVideo;
