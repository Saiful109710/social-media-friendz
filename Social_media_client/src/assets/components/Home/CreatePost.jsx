import React, { useState } from 'react'
import CreatePostModal from '../Modal/CreatePostModal'



const CreatePost = () => {

    let [isOpen, setIsOpen] = useState(false)

    function open() {
      setIsOpen(true)
    }
  
    function close() {
      setIsOpen(false)
    }
  return (
    <div className='p-5 rounded-xl shadow '>
        <div className='flex gap-5'>
            <img className='w-[50px] h-[50px] border-white border' src="" alt="" />
            <div onClick={()=>setIsOpen(true)}  className='bg-slate-800 rounded-xl p-3 w-full cursor-pointer transition '>
                <h2  >Write Your Post</h2>
            </div>
            <div className='divider'></div>
            <div>
                
            </div>
            
        </div>

        <CreatePostModal open={open} close={close} isOpen={isOpen}></CreatePostModal>
    </div>
  )
}

export default CreatePost
