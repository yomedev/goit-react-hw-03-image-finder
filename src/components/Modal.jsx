import React from 'react'
import PropTypes from 'prop-types'
import { useEffect } from 'react'

const Modal = ({ url, closeModal }) => {

  useEffect(() => {
    const handleKeydown = e => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }
    document.addEventListener('keydown', handleKeydown)
    return () => document.removeEventListener('keydown', handleKeydown)
  }, [closeModal])

  return (
    <div onClick={() => closeModal()} className="Overlay">
      <div className="Modal">
        <img src={url} alt="" />
      </div>
    </div>
  )
}

Modal.propTypes = {
  url: PropTypes.string,
  closeModal: PropTypes.func
}

export default Modal