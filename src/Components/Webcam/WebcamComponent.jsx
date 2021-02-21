import React, {useState, useRef, useCallback, useEffect} from "react";
import Webcam from 'react-webcam'
import './WebcamComponent.css'

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const WebcamComponent = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      //updates imgSrc
      capture()

      const imgData = new FormData();
      const data = {
        'imgStr': imgSrc,
      }
      console.log(imgSrc)

      fetch('http://127.0.0.1:5000/api/images', {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }).then((err) => console.log(err))

    }, 5000);
    return () => clearInterval(interval);
  });

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);

    
  }, [webcamRef, setImgSrc]);

  return (
    <>
    <div className='border'>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
    </div>
    </>
  );
};


export default WebcamComponent;