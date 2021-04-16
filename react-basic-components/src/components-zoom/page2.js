import React from 'react';
import ReactDOM from 'react-dom';
import Webcam from "react-webcam";
import Modal from '@material-ui/core/Modal';
import SimpleModal from './ModalPage';

// class newWindow extends React.Component {
//      webcamRef = React.useRef(null);
//     render() {
//         return(

//             <Webcam
//         audio={false}
//         height={720}
//         ref={webcamRef}
//         screenshotFormat="image/jpeg"
//         width={1280}
//         videoConstraints={videoConstraints}
//       />
//         )
//     }
// }


const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
  
  const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    const [open, setOpen] = React.useState(false);
  
    const capture = React.useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
      },
      [webcamRef]
    );
  
    return (
      <>
        <Webcam
          audio={false}
          height={720}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
        >
          
        </Webcam>
       
        {/* <button onClick={capture}>Capture photo</button> */}
          
        <SimpleModal/> 
             
      </>
    );
  };

export default WebcamCapture;