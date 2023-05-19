import { Drawer } from '@material-ui/core'
import React from 'react'
import Form from '../components/Form/Form'

const CreateFormDrawer = ({ isOpen, handleClose, currentId, setCurrentId }) => {
  return (
    <Drawer open={isOpen} onClose={handleClose}>
      <div className='w-[30vw] pt-16'>
        <Form currentId={currentId} setCurrentId={setCurrentId} />
      </div>
    </Drawer>
  )
}

export default CreateFormDrawer