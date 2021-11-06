import React from 'react'
import { useState } from 'react'
import head from "./HeadModal.module.css"
import Modal from './Modal'
const HeadModal = () => {
    const [modal, setModal] = useState(true)

    const toggleModal = () =>{
      setModal(!modal)
    }
    if(modal) {
      document.body.classList.add('activeModal')
    } else {
      document.body.classList.remove('activeModal')
    }
  

    return (
        <div className="HeadModal">
               <div className={head.modal}>
            {/* <button className={head.modalBtn} onClick={toggleModal}>Open</button> */}
            {modal && <Modal toggleModal={toggleModal}/>}
          </div>
        </div>
    )
}

export default HeadModal
