import { createSlice } from '@reduxjs/toolkit'
import { dataList } from './Data'

const dataSlice = createSlice({
    name: "barang",
    initialState: dataList,
    reducers: {
        addData: (state, action) => {
            state.push(action.payload)
        },
        updateData: (state, action) => {
            const { id, foto, nama, hargajual, hargabeli, stok } = action.payload
            const up = state.find(brg => brg.id === id && brg.nama === nama)
            if (up) {
                up.foto = foto
                up.hargajual = hargajual
                up.hargabeli = hargabeli
                up.stok = stok
            }
        },
        deleteData:(state, action)=> {
            const { id } = action.payload
            const del = state.find(brg => brg.id === id)
            if (del) {
                return state.filter(f => f.id !== id)
            }
        }
    }
})

export const {addData, updateData, deleteData} = dataSlice.actions
export default dataSlice.reducer