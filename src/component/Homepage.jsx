import { useState } from 'react'
import './css/Homepage.css'
import Table from './Table'
import Modal from './Modal'
import Update from './Update'

function Homepage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [updateOpen, setUpdateOpen] = useState(false)

  return (
    <div className="Homepage">
      <Table />
      <button className='btn' onClick={() => setModalOpen(true)}>Add</button>
      {modalOpen && (<Modal closeModal={() => {setModalOpen(false)}}/>)}
      {updateOpen && (<Update closeModal={() => {setUpdateOpen(false)}}/>)}
      
    </div>
  )

}

export default Homepage;
