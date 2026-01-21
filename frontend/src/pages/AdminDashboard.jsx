import React from 'react'

const AdminDashboard = () => {
  return (
    <section className='min-h-full w-full bg-[#1A2546]' >

      {/* page1 code */}
      <section className='flex flex-col space-y-3' >
        {/* Heading */}
        <div className='w-full max-w-5xl font-bold p-2 flex flex-col items-center justify-center gap-2' >
          <h1 className='font-bold text-sm text-sky-500 font4 md:text-2xl'>🌐 Admin Data Management System</h1>
          <p className='text-sm text-gray-500 font1'>Admin panel for upload task and manage task</p>
        </div>

        <div className='h-full w-full flex flex-col md:flex-row gap-20 p-4' >

          {/* Left div */}
          <div className='w-full max-w-5xl flex flex-col items-center justify-center bg-slate-900/50 shadow shadow-lg shadow-sky-500 border-2 border-sky-500 rounded-lg space-y-5 p-3' >
            <h1 className='text-white text-sm font-bold font1' >1. Upload the student task image</h1>
            <p className='text-sm text-slate-400 font5' >This for uploading Image for the internship task with the <span className='text-sky-500 text-sm font-bold ' >Task Number</span></p>

            <ul className='list-disc list-inside text-white text-sm' >
              <li className='text-sm' >Allowed Format <b>image</b>, <b>.pdf</b></li>
              <li>Make sure each task as unique number <b><span className='text-sky-500' >Task Number</span></b></li>
            </ul>

            {/* this is the form for uploading */}
            <form className='w-full space-y-2 flex flex-col ' >

              {/* upload task number */}
              <label className='text-sm text-sky-500' > Add Task Number</label>
              <label className='w-full border-2 flex itmes-center justify-center border-sky-500 border-dashed rounded-sm p-1' >
                <input
                  className='w-full p-2 outline-0 text-white'
                  type="text" placeholder='Task-01' />
              </label>

              {/* uplaod image input field */}
              <label className=' text-sm text-sky-500' >
                Uploading image
              </label>
              <label className='w-full border-2 flex itmes-center justify-center border-sky-500 border-dashed rounded-sm p-6' >
                <h1 className='text-sm text-slate-500' >Drag and Drop</h1>
                <input
                  className='hidden'
                  type="file" />
              </label>

              <button
                className='bg-sky-500 rounded py-2 shadow-sm shadow-sky-500'
              >Upload Now</button>
            </form>
          </div>

          {/* Right div */}
          <div className='w-full max-w-5xl flex flex-col items-center justify-center bg-slate-900/50 shadow shadow-lg shadow-sky-500 border-2 border-sky-500 rounded-lg space-y-5 p-3' >
            <h1 className='text-white text-sm font-bold font1' >2. Add the task code for interns</h1>
            <p className='text-sm text-slate-400 font5 ' >This task code is help the interns to complete the task and add internship task with the <span className='text-sky-500 text-sm font-bold ' >Task Number</span></p>

            <ul className='list-disc list-inside text-white text-sm' >
              <li className='text-sm' >Allowed Format <b>code</b>, <b>text</b></li>
              <li>Make sure each task as unique number <b><span className='text-sky-500' >Task Number</span></b></li>
            </ul>

            {/* this is the form for uploading */}
            <form className='w-full space-y-2 flex flex-col ' >

              {/* upload task number */}
              <label className='text-sm text-sky-500' > Add Task Number</label>
              <label className='w-full border-2 flex itmes-center justify-center border-sky-500 border-dashed rounded-sm p-1' >
                <input className='w-full p-2 outline-0 text-white'
                  type="text" placeholder='Task-01' />
              </label>

              {/* uplaod image input field */}
              <label className=' text-sm text-sky-500' >
                Add the task code
              </label>
              <label className='w-full border-2 flex itmes-center justify-center border-sky-500 border-dashed rounded-sm ' >
                <input
                  className='h-full w-full text-white p-6 outline-0'
                  placeholder='Add Task Code'
                  type="text" />
              </label>

              <button type='submit' className='bg-sky-500 rounded py-2 shadow-sm shadow-sky-500'
              >Upload Now</button>
            </form>
          </div>
        </div>
      </section>

      {/*page2 task details uploading */}
      <section className='min-h-screen w-full flex items-center justify-center ' >

        {/* main div */}
        <div>
          
        </div>
      </section>
    </section>
  )
}

export default AdminDashboard