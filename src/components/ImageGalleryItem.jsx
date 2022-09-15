import React from 'react'
import PropTypes from 'prop-types'

const ImageGalleryItem = ({ url, onClick }) => {
  return (
    <li onClick={onClick} className="ImageGalleryItem">
      <img src={url} alt="" className='ImageGalleryItem-image' />
    </li>
  )
}

ImageGalleryItem.propTypes = {
  url: PropTypes.string,
  onClick: PropTypes.func
}

export default ImageGalleryItem

