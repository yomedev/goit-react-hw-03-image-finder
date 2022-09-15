import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <TailSpin
      height="100"
      width="100"
      color="#3f51b5"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass="Spinner-wrapper"
      visible={true}
    />
  )
}

export default Loader