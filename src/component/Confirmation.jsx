import React, { forwardRef } from 'react'
import { Dialog, DialogContent, Fade, IconButton, Grid, Typography, Button } from '@mui/material'
import { Box } from '@mui/system'

const Transition = forwardRef(function Transition(props, ref) {
    return <Fade ref = {ref} {...props} />
})


function Confirmation({open, closeDialog, nama, delFunction}) {
    return (
        <Dialog className='Dialog'
            fullWidth
            open = {open}
            onClose = {closeDialog}
            onBackdropClick = {closeDialog}
            TransitionComponent = {Transition}>
            <DialogContent sx={{px: 8, py: 6, position:'relative'}}>
                <IconButton 
                    onClick={closeDialog}
                    sx={{position:'absolute', right:'1rem', top:'1rem'}}>X
                </IconButton>

                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <Box sx={{ mb: 3, display: 'flex', justifycontent: 'flex-start', flexDirection: 'column'}}>
                            <Typography variant='h5'>
                                Delete {nama}
                            </Typography>
                            <Typography variant='body1'>
                                Apakah Anda yakin ingin menghapus {nama}?
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sx={{ display:'flex', justifyContext:'flex-end'}}>
                        <Button size='medium' variant='contained' color='primary' onClick={closeDialog}>Cancel</Button>
                        <Button size='medium' variant='contained' color='error' sx={{left: '1rem'}} onClick={delFunction}>Delete</Button>
                    </Grid>
                </Grid>

            </DialogContent>
        </Dialog>
    )
}

export default Confirmation