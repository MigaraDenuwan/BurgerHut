"use client";

import { useState, useEffect } from 'react';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css';
import './slideShow.module.css';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(2);  // Only keeping the necessary state

  useEffect(() => {
    const sequence = [2, 0, 2, 3, 2, 1];
    let index = 0;

    const interval = setInterval(() => {
      setCurrentSlide(sequence[index]);
      index = (index + 1) % sequence.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    '/images/slideShow1.png',
    '/images/slideShow2.png',
    '/images/slideshow3.png',
    '/images/slideShow4.png'
  ]; // Define slides outside of state

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', margin: 0, padding: 0 }}>
      <DeviceFrameset device="iPhone X" color="black" width={367.98} height={726} style={{ margin: 0, padding: 0 }}>
        <div style={{ width: '100%', height: '100%', position: 'relative', margin: 0, padding: 0 }}>
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top',
                opacity: currentSlide === index ? 1 : 0,
                transform: currentSlide === index
                  ? 'translate(0, 0)'
                  : (index === 0 ? 'translate(-100%, 0)' :
                     index === 1 ? 'translate(100%, 0)' :
                     index === 2 ? 'translate(0, 0)' :
                     index === 3 ? 'translate(0, -100%)' :
                     'translate(0, 0)'),
                transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
                zIndex: currentSlide === index ? 1 : 0,
              }}
            />
          ))}
        </div>
      </DeviceFrameset>
    </div>
  );
};

export default Slideshow;
