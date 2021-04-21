import React, { useState } from 'react'
import DropZone from './DropZone'


const UploadScreen = () => {

  return (
    <>

      {/* <button className="upload_photo">Add Image</button> */}
      {/* <input type="file" /> */}

      <div className="content">
        <DropZone />

      </div>
    </>
  )
}
export default UploadScreen
