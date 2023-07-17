import React, { useState } from 'react'
import {BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './css/Table.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteData } from '../DataReducer';
import  Confirmation  from './Confirmation';

const Table = () => {

  const barang = useSelector((state) => state.barang)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [delData, setDelData] = useState({})

  function openDelete(data) {
    setOpen(true) 
    setDelData(data)
  }
    
  const handleDelete = () => {
    dispatch(deleteData({id: delData?.id}))
    setOpen(false)
  }
  return (
    <>
    <div className='table-wrapper'>
      <table className='table'>
        <thead>
          <tr>
            <th>Foto Barang</th>
            <th className='expand'>Nama Barang</th>
            <th>Harga Jual</th>
            <th>Harga Beli</th>
            <th>Stok</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            barang.map((data, index) => {
              
              return (
                <tr key={index}>
                  <td>{data.foto}</td>
                  <td className='expand'>{data.nama}</td>
                  <td>{data.hargajual}</td>
                  <td>{data.hargabeli}</td>
                  <td>{data.stok}</td>
                  <td>
                    <span className='actions'>
                      <Link to={`/edit/${data.id}`}><BsFillPencilFill></BsFillPencilFill></Link>
                      <BsFillTrashFill className='btn__delete' onClick={() => openDelete(data)}/>
                    </span>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
    
    <Confirmation 
      open = {open} 
      closeDialog={() => setOpen(false)}
      title = {delData?.nama}
      delFunction = {handleDelete}
    />

  </>
  
  )
}



export default Table