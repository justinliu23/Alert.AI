import React, {useState, useRef, useCallback, useEffect} from "react";
import Webcam from 'react-webcam'
import './WebcamComponent.css'
import auth from '../../auth'

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const WebcamComponent = (props) => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [increment, setIncrement] = useState(0);

  const classCode = 'tester'
  const tempName = 'User1'

  useEffect(() => {
    const interval = setInterval(() => {
      //updates imgSrc
      capture()

      const data = {
        'imgStr': imgSrc,
        'username': props.username, // localStorage.getItem('username')
        'value': increment,
        'classCode': "ABCDE", 
      }
      console.log(imgSrc)

      fetch('http://127.0.0.1:5000/api/model', {
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