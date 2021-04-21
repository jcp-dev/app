import React, { useEffect, useState, useRef } from 'react';
import Swal from 'sweetalert2'
import ImgPreview from './ImgPreview';

const DropZone = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [validFiles, setValidFiles] = useState([]);
  const modalImageRef = useRef();
  const modalRef = useRef();

  useEffect(() => {
    let filteredArray = selectedFiles.reduce((file, current) => {
      const x = file.find(item => item.name === current.name);
      if (!x) {
        return file.concat([current]);
      } else {
        return file;
      }
    }, []);
    setValidFiles([...filteredArray]);

  }, [selectedFiles]);


  const dragOver = (e) => {
    e.preventDefault();
  }

  const dragEnter = (e) => {
    e.preventDefault();
  }

  const dragLeave = (e) => {
    e.preventDefault();
  }
  const handleFiles = (files) => {
    for (let i = 0; i < files.length; i++) {
      console.log(files[i]);
      if (validateFile(files[i])) {
        setSelectedFiles(prevArray => [...prevArray, files[i]]);
      } else {
        Swal.fire('Error', 'Only images', 'error');
      }
    }
  }
  const validateFile = (file) => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
    if (validTypes.indexOf(file.type) === -1) {
      return false;
    }
    return true;
  }

  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFiles(files);

    }
  }

  const removeFile = (name) => {

    const validFileIndex = validFiles.findIndex(e => e.name === name);
    validFiles.splice(validFileIndex, 1);

    setValidFiles([...validFiles]);
    const selectedFileIndex = selectedFiles.findIndex(e => e.name === name);
    selectedFiles.splice(selectedFileIndex, 1);

    setSelectedFiles([...selectedFiles]);
  }

  const openImageModal = (file) => {
    const reader = new FileReader();
    modalRef.current.style.display = "block";
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      modalImageRef.current.style.backgroundImage = `url(${e.target.result})`;
    }
  }

  const closeModal = () => {
    modalRef.current.style.display = "none";
    modalImageRef.current.style.backgroundImage = 'none';
  }

  return (
    <>
      <div className="drop-container" onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}>
        <div className="drop-message">
          <div className="upload-icon"></div>
            Drag & Drop Images here
        </div>

      </div>
      <div className="file-display-container">
        {
          validFiles.map((data, i) =>
            <div className="file-status-bar" key={i}>
              <div onClick={!data.invalid ? () => openImageModal(data) : () => removeFile(data.name)}>
                <ImgPreview input={data} />
              </div>
              <button className="btn btn-block btn-primary" onClick={() => removeFile(data.name)} >Delete</button>
            </div>
          )
        }
      </div>
      <div className="modal" ref={modalRef}>
        <div className="overlay" ></div>
        <span className="close" onClick={(() => closeModal())}>X</span>
        <div className="modal-image" ref={modalImageRef}></div>
      </div>
    </>

  )
}
export default DropZone;