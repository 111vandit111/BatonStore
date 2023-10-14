import React ,{useContext} from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import {BsBag} from 'react-icons/bs'

const Header = () => {
  const {isOpen,setIsOpen,handleClose} = useContext(SidebarContext);
  return (
    <header className="bg-red-100">
    <div>Header</div>
    <div className="cursor-pointer flex relative " onClick = {()=>setIsOpen(!isOpen)}> 
    <BsBag className='text-2xl' />
    </div>
    </header>
  )
}

export default Header