import React from 'react'
import { motion } from "motion/react"
import { useState } from 'react'

const AdminDashboard = () => {

  // ===========loadings===========
  const [taskDetailsLoading, setTaskDetailsLoading] = useState(false);
  const [uploadImageLoading, setUploadImageLoading] = useState(false);
  const [taskCodeLoading, setTaskCodeLoading] = useState(false);




  return (
    <section className='min-h-full w-full bg-[#1A2546]' >

      {/* admin panel Heading */}
      <motion.div initial={{ x: -200 }} animate={{ x: 0 }}
        className='w-full max-w-5xl font-bold p-5 flex flex-col items-center justify-center gap-2' >
        <h1 className='font-bold text-sm text-sky-500 font4 md:text-2xl hover:scale-[1.1] transition'>🌐 Admin Task Management System</h1>
        <p className='text-sm text-gray-500 font1'>Admin panel for upload task and manage task</p>
      </motion.div>

      {/*page1 task details uploading page */}
      <section className='min-h-full w-full flex items-center justify-center p-4' >
        <div className='max-w-4xl flex flex-col items-center justify-center p-5 bg-slate-900/50 rounded-sm border-2 border-sky-500 shadow-lg shadow-sky-500' >

          {/* page1-heading */}
          <motion.div initial={{ y: -200 }} animate={{ y: 0 }}
            className='w-full max-w-5xl font-bold p-5 flex flex-col items-center justify-center gap-2' >
            <h1 className='font-bold text-sm text-sky-500 font7 md:text-2xl hover:scale-[1.1] transition'> Task Details Requirements</h1>
            <p className='text-sm text-slate-400 font5'>Fill all fields in deep explaintions are required and these details showing in interns task </p>
          </motion.div>

          {/* label and input fields */}
          <form className='w-full p-4' >

            {/* title input */}
            <motion.div initial={{ x: -150 }} animate={{ x: 0 }}
              className='w-full p-4' >
              <label className='text-sm font-bold text-sky-500' > Task-Title </label>
              <input className='w-full outline-0 text-white border-2 border-sky-500 border-dashed p-2 hover:scale-[0.9] transition'
                placeholder='Week 1: complete web development project'
                type="text" />
            </motion.div>

            {/* project title & Task number */}
            <div className='w-full flex items-center justify-between gap-5 p-4' >
              <motion.div initial={{ x: -150 }} animate={{ x: 0 }}
                className='w-full' >
                <label className='text-sm font-bold text-sky-500' >Project-Title</label>
                <input className='w-full outline-0 text-white border-2 border-sky-500 border-dashed p-2 hover:scale-[0.9] transition'
                  placeholder='Add the project title'
                  type="text" />
              </motion.div>

              <motion.div initial={{ x: 150 }} animate={{ x: 0 }}
                className='w-full' >
                <label className='text-sm font-bold text-sky-500' >Task-Number</label>
                <input className='w-full outline-0 text-white border-2 border-sky-500 border-dashed p-2 hover:scale-[0.9] transition'
                  placeholder='Task-01 [Add the unique]'
                  type="text" />
              </motion.div>
            </div>

            {/* theory concepts & hand of practices */}
            <div className='w-full flex items-center justify-between gap-5 p-4' >
              <motion.div initial={{ x: -150 }} animate={{ x: 0 }}
                className='w-full' >
                <label className='text-sm font-bold text-sky-500' >Theory Concepts</label>
                <input className='w-full outline-0 text-white border-2 border-sky-500 border-dashed p-2 hover:scale-[0.9] transition'
                  placeholder='Add the points of task'
                  type="text" />
              </motion.div>

              <motion.div initial={{ x: 150 }} animate={{ x: 0 }}
                className='w-full' >
                <label className='text-sm font-bold text-sky-500' >Hands-On-Practice</label>
                <input className='w-full outline-0 text-white border-2 border-sky-500 border-dashed p-2 hover:scale-[0.9] transition'
                  placeholder='Points that interns follow'
                  type="text" />
              </motion.div>
            </div>

            {/* submission requirements & technical requirements */}
            <div className='w-full flex items-center justify-between gap-5 p-4' >
              <motion.div initial={{ x: -150 }} animate={{ x: 0 }}
                className='w-full' >
                <label className='text-sm font-bold text-sky-500' >Submission-Requirements</label>
                <input className='w-full outline-0 text-white border-2 border-sky-500 border-dashed p-2 hover:scale-[0.9] transition'
                  placeholder='Add the submission points'
                  type="text" />
              </motion.div>

              <motion.div initial={{ x: 150 }} animate={{ x: 0 }}
                className='w-full' >
                <label className='text-sm font-bold text-sky-500' >Technical-Requirement</label>
                <input className='w-full outline-0 text-white border-2 border-sky-500 border-dashed p-2 hover:scale-[0.9] transition'
                  placeholder='Add the task structure'
                  type="text" />
              </motion.div>
            </div>

            {/* Description */}
            <div className='w-full p-4' >
              <label className='text-sm font-bold text-sky-500' >Description</label>
              <textarea className='w-full outline-0 text-white border-2 border-sky-500 border-dashed p-2 hover:scale-[0.9] transition'
                placeholder='Explain the task in detail'
                rows={5} name="" id=""></textarea>
            </div>

            <motion.button whileHover={{ background: "#141D39", color: "white" }} disabled={taskDetailsLoading}
              className='w-full bg-sky-500 rounded py-2 shadow-sm shadow-sky-500' type='submit' >
              {taskDetailsLoading ? "....Creating Task Just Wait" : "Create Task"}
            </motion.button>
          </form>

        </div>
      </section>

      {/* page2 code */}
      <section className='flex flex-col space-y-3' >

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
              <label className='w-full border-2 flex itmes-center justify-center border-sky-500 border-dashed rounded-sm p-1 hover:scale-[0.9] transition' >
                <input
                  className='w-full p-2 outline-0 text-white'
                  type="text" placeholder='Task-01' />
              </label>

              {/* uplaod image input field */}
              <label className=' text-sm text-sky-500' >
                Uploading image
              </label>
              <label className='w-full border-2 flex itmes-center justify-center border-sky-500 border-dashed rounded-sm p-6 hover:scale-[0.9] transition' >
                <h1 className='text-sm text-slate-500' >Drag and Drop</h1>
                <input className='hidden' type="file" />
              </label>

              <motion.button whileHover={{ background: "#141D39", color: "white" }} disabled={uploadImageLoading}
                className='bg-sky-500 rounded py-2 shadow-sm shadow-sky-500' >
                {uploadImageLoading ? "....Uploading Image just Wait" :"Upload Image"}
              </motion.button>
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
              <label className='w-full border-2 flex itmes-center justify-center border-sky-500 border-dashed rounded-sm p-1 hover:scale-[0.9] transition' >
                <input className='w-full p-2 outline-0 text-white' type="text" placeholder='Task-01' />
              </label>

              {/* uplaod image input field */}
              <label className=' text-sm text-sky-500' > Add the task code </label>
              <label className='w-full border-2 flex itmes-center justify-center border-sky-500 border-dashed rounded-sm hover:scale-[0.9] transition' >
                <input
                  className='h-full w-full text-white p-6 outline-0'
                  placeholder='Add Task Code'
                  type="text" />
              </label>

              <motion.button whileHover={{ background: "#141D39", color: "white" }} disabled={taskCodeLoading}
                type='submit' className='bg-sky-500 rounded py-2 shadow-sm shadow-sky-500' >
                {taskCodeLoading ? "Upoading code just wait" : "Upload Code"}
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </section>
  )
}

export default AdminDashboard