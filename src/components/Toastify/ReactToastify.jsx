import React from 'react'
import { ToastContainer } from 'react-toastify';

const ReactToastify = () => {
  return (
    <>
         <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
    </>
  )
}

export default ReactToastify