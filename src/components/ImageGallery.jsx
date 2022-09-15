import React, { useState } from 'react'
import ImageGalleryItem from './ImageGalleryItem'
import Modal from './Modal'
import PropTypes from 'prop-types'

const ImageGallery = ({ images }) => {
  const [modalImageUrl, setModalImageUrl] = useState('')

  return (
    <>
      <ul className="ImageGallery">
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem onClick={() => setModalImageUrl(largeImageURL)} key={id} url={webformatURL} />
        ))}
      </ul>
      {modalImageUrl && <Modal closeModal={() => setModalImageUrl('')} url={modalImageUrl} />}
    </>
  )
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
  }))
}

export default ImageGallery