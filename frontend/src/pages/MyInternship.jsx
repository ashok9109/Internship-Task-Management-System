import { useState } from 'react'
import bg from '../images/mern-stack-image.png'
import { useEffect } from 'react';
import { getAllTaskApi } from '../Apis/AdminTaskUploaderApis';
import { Upload} from "lucide-react";
import { Link } from 'react-router';


const MyInternship = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTask() {
      try {
        const response = await getAllTaskApi();
        if (response) {
          setTasks(response.tasks);
        }
      } catch (error) {
        console.log("error fetching tasks", error)
        
      }
    }
    fetchTask();
  }, [])



  return (
    <section className='min-h-full w-full flex flex-col items-center justify-center bg-[#1A2546]' >

      {/* page1 */}
      <section className='w-full flex flex-col gap-5 md:flex-row items-center justify-center p-5 ' >
        <div><img className='w-full' src={bg} alt="mern stack image" /></div>
        <div className='h- flex flex-col items-center justify-center bg-slate-900/50 text-white border-2 rounded-lg shadow-lg shadow-sky-500 border-sky-500 p-5 gap-3' >
          <h1 className='text-sm text-bold font4 text-sky-500' >MERN Stack Development</h1>
          <p className='font1 ' >This projects focuses on creating a comprehensive system that enables users to complete their projects within specified timelines while providing seamless file management capabilities. The system allows users to check the project documentation in PDF format and upload completed project as ZIP files, all wrapped in an elegant and responsive user interface</p>
          <h2 className='font1' >Project-06</h2>
        </div>
      </section>

      {/* page2 */}
      <section className='w-full p-5' >
        <div className='w-full flex flex-col space-y-4 md:p-5  bg-slate-900/50 rounded-lg border-2 border-sky-500 shadow-lg shadow-sky-500 text-white p-2' >
          <h1 className='text-sky-500 text-sm font-bold' >Node.js Backend Best Practices</h1>
          <div>
            <h1>1. Error Handling & Stability</h1>
            <p>- Always wrap async calls in try/catch. <br />- Use a global error handler and return consistent error responses.</p>
          </div>

          <div>
            <h1>2. Environment Configuration</h1>
            <p>Store secrets (DB URLs, API keys) in .env. <br />- Never hardcode credentials in code.</p>
          </div>

          <div>
            <h1>3. Request Validation</h1>
            <p>Validate request body, params, and query (e.g., with Joi/Zod). <br />- Prevent malicious or invalid data from reaching your DB</p>
          </div>

          <div>
            <h1>4. Security Practices</h1>
            <p>Use helmet and cors</p>
          </div>

          <div>
            <h1>5. Logging & Monitoring</h1>
            <p>Track errors and performance (e.g., Sentry, PM2).</p>
          </div>

          <div>
            <h1>6. Folder Structure & Modularity</h1>
            <p>Separate routes, controllers, services, and models. <br />- Follow SRP (Single Responsibility Principle) for each file.</p>
          </div>

          <div>
            <h1>7. Database & Query Safety</h1>
            <p>Use ORM (Mongoose). <br />- Always use parameterized queries to avoid injections.</p>
          </div>

          <div>
            <h1>8. Performance Optimization</h1>
            <p>Avoid blocking the event loop with heavy sync tasks.</p>
          </div>
        </div>
      </section>

      {/* Task showing section */}
      <section className='min-h-screen w-full md:p-5 flex items-center justify-center ' >
        <div className='h-screen md:h-full w-full flex flex-col items-center justify-center bg-slate-900/50 border-2 border-sky-500 rounded-lg shadow-lg shadow-sky-500 p-2 ' >

          {/* Heading */}
          <h1 className='text-white font4 md:text-3xl' >INTERNSHIP TASK</h1>
          <div className='w-full md:p-7 ' >
            {tasks?.map((task) => (
              <div className='w-full font1 border-2 border-sky-500 shadow-lg shadow-sky-500 rounded-sm flex flex-col p-4 mt-5 md:mt-10 hover:scale-[0.9] transition' key={task._id}>
                <div className='w-full flex items-center justify-between' >
                <h1 className='text-sm text-gray-400 font-bold font1'>{task.title}</h1>
                <Link to={`/home/task-details/${task._id}`} >
                <h1 className='text-white' >view Task <Upload/></h1>
                </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>

  )
}

export default MyInternship