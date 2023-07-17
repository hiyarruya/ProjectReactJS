import React, {useState} from 'react'
import './css/Modal.css'
import { useDispatch, useSelector} from 'react-redux'
import { addData } from '../DataReducer'


const Modal = ({ closeModal }) => {    
    const barang = useSelector((state) => state.barang)
    const [formState, setFormState] = useState({
        id: JSON.stringify(parseInt(barang[barang.length -1].id) + 1),
        foto: "",
        nama: "",
        hargajual: "",
        hargabeli: "",
        stok: ""
    })
    
    const dispatch = useDispatch();
    const [errors, setErrors] = useState("")

    const validateForm = () => {
        if (formState.foto && formState.nama && formState.hargajual && formState.hargabeli && formState.stok) {
            setErrors("")
            return true
        } else {
            let errorFields = [];
            for (const [key, value] of Object.entries(formState)) {
                if(!value) {
                    errorFields.push(key)
                }
            }
            setErrors(errorFields.join(", "))
            return false
        }
    }

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log(formState)
        if (!validateForm()) return
        dispatch(addData(formState))
        closeModal()
    }
    return (
        <div className='modal-container' onClick={(e) => { if (e.target.className === "modal-containter") closeModal();}}>
            <div className='modal'>
                <form action="">
                    <div className='form-group'>
                        <label htmlFor="foto">Foto</label>
                        <input name='foto' value={formState.foto} onChange={handleChange}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="nama">Nama</label>
                        <input name="nama" value={formState.nama} onChange={handleChange}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="hargajual">Harga Jual</label>
                        <input type="number" name='hargajual' value={formState.hargajual} onChange={handleChange}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="hargabeli">Harga Beli</label>
                        <input type="number" name="hargabeli" value={formState.hargabeli} onChange={handleChange}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="stok">Stok</label>
                        <input type="number" name="stok" value={formState.stok} onChange={handleChange}/>
                    </div>
                    
                    {errors && <div className='error'>Please include: {errors}</div>}
                    <button className='btn__cancel' onClick={closeModal}>Cancel</button>
                    <button type='submit' className='btn__submit' onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Modal