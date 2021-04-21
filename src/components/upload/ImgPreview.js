import React, { useEffect, useRef } from 'react'

const ImgPreview = ({ input }) => {

  const imgRef = useRef();
  useEffect(() => {
    console.log(input);

    const reader = new FileReader();

    reader.readAsDataURL(input);
    reader.onload = function (e) {

      imgRef.current.src = reader.result;
    }



  }, [input])

  return (
    <>
      <img alt="prueba" className="img-fluid img__preview" ref={imgRef} />
    </>
  )
}

export default ImgPreview
