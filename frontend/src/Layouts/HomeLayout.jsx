import { Outlet } from 'react-router';
import NavLink from '../components/Navigation/NavLink';
import { useState } from 'react';

const HomeLayout = () => {


  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <section className='h-screen w-screen' >

        {/* This is mobile menu */}
        <header className='flex items-center justify-evenly gap-10 px-2 bg-slate-900 py-2 md:hidden ' >
          <div className='font-bold text-sky-500 text-xl' >UPSTARE</div>
          <button onClick={()=>setOpenMenu((perv)=> !perv)} >
            <span className='block h-[2px] w-5 mb-1 bg-white' ></span>
            <span className='block h-[2px] w-5 mb-1 bg-white' ></span>
            <span className='block h-[2px] w-5 mb-1 bg-white' ></span>
            <span className='block h-[2px] w-5 mb-1 bg-white' ></span>
          </button>
        </header>

      <div className='h-full md:flex ' >
        <aside className= {`w-full md:w-[30%] bg-slate-900 
        ${openMenu? "block":"hidden"} md:hidden lg:block 
        `}
        >
          <NavLink />
        </aside>

        {/* This is right page */}
        <div className='w-full' >
          <Outlet />
        </div>
      </div>
      </section>
    </>
  )
}

export default HomeLayout;