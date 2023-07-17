import React, {useState} from 'react'
import './css/Modal.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { updateData } from '../DataReducer'

function Update( {closeModal}) {    
    const {id} = useParams()
    const barang = useSelector((state) => state.barang)

    const existData = barang.filter(f => f.id === id)
    // console.log(existData)
    const {foto, nama, hargajual, hargabeli, stok} = existData[0]

    const [fotoNew, setFoto] = useState(foto)
    const [namaNew, setNama] = useState(nama)
    const [jualNew, setJual] = useState(hargajual)
    const [beliNew, setBeli] = useState(hargabeli)
    const [stokNew, setStok] = useState(stok)


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [errors, setErrors] = useState("")

    const validateForm = () => {
        if ({foto, nama, hargajual, hargabeli, stok}) {
            setErrors("")
            return true
        } else {
            let errorFields = [];
            for (const [key, value] of Object.entries(foto, nama, hargajual, hargabeli, stok)) {
                if(!value) {
                    errorFields.push(key)
                }
            }
            setErrors(errorFields.join(", "))
            return false
        }
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        // console.log(formExist)
        if (!validateForm()) return
        dispatch(updateData({
            id: id,
            foto: fotoNew,
            nama: namaNew,
            hargajual: jualNew,
            hargabeli: beliNew,
            stok: stokNew
        }))
        navigate('/')
        // closeModal()
    }
    return (
        <div className='modal-container' onClick={(e) => { if (e.target.className === "modal-containter") closeModal();}}>
            <div className='modal'>
                <form action="">
                    <div className='form-group'>
                        <label htmlFor="foto">Foto</label>
                        <input name='foto' value={fotoNew} onChange={e => setFoto(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="nama">Nama</label>
                        <input name="nama" disabled='disabled' value={namaNew} onChange={e => setNama(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="hargajual">Harga Jual</label>
                        <input type="number" name='hargajual' value={jualNew} onChange={e => setJual(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="hargabeli">Harga Beli</label>
                        <input type="number" name="hargabeli" value={beliNew} onChange={e => setBeli(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="stok">Stok</label>
                        <input type="number" name="stok" value={stokNew} onChange={e => setStok(e.target.value)}/>
                    </div>
                    
                    {errors && <div className='error'>Please include: {errors}</div>}
                    {/* <button className='btn__cancel' onClick={navigate('/')}>Cancel</button> */}
                    <Link to='/'className='btn__cancel'>Cancel</Link>
                    <button className='btn__submit' onClick={handleSubmit}>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update