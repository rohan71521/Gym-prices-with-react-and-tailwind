import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import Menu from "./menu/Menu";
import { useState } from 'react';


const Navbar = () => {
   const [openMenu, setOpenMenu] = useState(false)

    const routes = [
        { id: 1, name: 'Home', url: '/' },
        { id: 2, name: 'About Us', url: '/about' },
        { id: 3, name: 'Services', url: '/services' },
        { id: 4, name: 'Contact', url: '/contact' },
        { id: 5, name: 'Blog', url: '/blog' }
      ];
      

    return (
        <div className='p-5 bg-black   text-white flex justify-between'>
           <div onClick={()=>setOpenMenu(!openMenu)} className='text-2xl md:hidden cursor-pointer'>
             {
                 openMenu ?
                 <RxCross1></RxCross1>
                 :  <AiOutlineMenuUnfold></AiOutlineMenuUnfold>
             }
           </div>
           <div className={`
           md:flex md:static absolute bg-blue-500 md:bg-transparent duration-1000 p-4  border-b rounded-xl
           ${openMenu ? 'left-0' : '-left-96'}`}>
           {
                routes.map(router=>{
                    return <Menu  key={router.id} router={router}></Menu>
                })
             }
           </div>
           <div>
            <h1 className='md:text-3xl'><span className='text-5xl text-blue-400 '>R</span>
            ocking <span className='text-green-400'>G</span>ym</h1>
           </div>
        </div>
    );
};

export default Navbar;