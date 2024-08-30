import React from 'react';
import './ThreeDCubes.css';
const ThreeDCubes = () => {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      {/* Cube 1 */}
      <div className="cube-container cube-animation absolute left-20 top-0">
        <div className="cube">
          <div className="face face-front"></div>
          <div className="face face-right"></div>
          <div className="face face-top"></div>
        </div>
      </div>
      {/* Cube 2 */}
      <div className="cube-container cube-animation absolute right-10 top-10">
        <div className="cube">
          <div className="face face-front"></div>
          <div className="face face-right"></div>
          <div className="face face-top"></div>
        </div>
      </div>
      {/* Cube 3 */}
      <div className="cube-container cube-animation absolute left-5 bottom-10">
        <div className="cube">
          <div className="face face-front"></div>
          <div className="face face-right"></div>
          <div className="face face-top"></div>
        </div>
      </div>
      {/* Cube 4 */}
      <div className="cube-container cube-animation absolute right-20 bottom-0">
        <div className="cube">
          <div className="face face-front"></div>
          <div className="face face-right"></div>
          <div className="face face-top"></div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDCubes;
