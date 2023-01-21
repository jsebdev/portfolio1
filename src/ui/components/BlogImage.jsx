import React, { useState } from 'react'
import { BlogBlockImageContainerS, BlogBlockImageS, } from 'ui/styledComponents/BlogStyled'
import { FullSizeImage } from 'ui/components/FullSizeImage'

export const BlogImage = ({ image }) => {
  const [maximized, setMaximized] = useState(false)
  const toggleShow = () => setMaximized(m => (!m));
  return (
    <>
      <BlogBlockImageContainerS onClick={toggleShow}>
        <BlogBlockImageS src={image} alt={image} />
      </BlogBlockImageContainerS >
      {maximized && (
        <FullSizeImage img={image} toggleShow={toggleShow} />
      )}
    </>
  )
}