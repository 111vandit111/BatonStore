import React ,{useContext} from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext'
import {BsBag} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Header = () => {
  const {isOpen,setIsOpen,handleClose} = useContext(SidebarContext);
  const {cart} = useContext(CartContext);
  return (
    <header className=" bg-amber-200">
    <div className="container mx-auto flex items-center justify-between h-12">
    <Link to={'/'}>Header</Link>
    <div className="cursor-pointer flex relative max-w-[50px]" onClick = {()=>setIsOpen(!isOpen)}> 
    <BsBag className='text-2xl' />
    <div className="bg-red-500 absolute -right-3 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center">{cart.length}</div>
    </div>
    </div>
    </header>
  )
}

export default Header