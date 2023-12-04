import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

type Props = {
    value:string;
    onChange:React.ChangeEventHandler<HTMLInputElement>
}

export default function SearchBar  ({value , onChange}: Props)  {
  return (
        <div className='min-w-[300px w-[500px] ring-2
     ring-slate-700 rounded-md flex items-center
      gap-2 px-2 hover:ring-white'  >
      <AiOutlineSearch className='text-2xl'/>
       <input 
       value={value}
       onChange={onChange}
       type="text" 
       className='bg-inherit w-full h-[38px] 
       outline-none p-2' />
     </div>
  )
}