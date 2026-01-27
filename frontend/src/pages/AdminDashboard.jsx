import { useEffect, useState } from 'react'
import { getAllTaskApi } from '../Apis/AdminTaskUploaderApis';
import { deleteTaskApi } from '../Apis/AdminDashboardApis';
import { toast } from 'react-toastify';

const AdminDashboard = () => {

  // ==============states==============
  const [task, setTask] = useState(null);

  // ===================================
  //Fetching all task for admin
  // ==================================
  useEffect(() => {
    const fetchingAllTask = async () => {
      try {
        const response = await getAllTaskApi();
        if (response) {
          setTask(response.tasks)
        }
      } catch (error) {
        console.log("error while fetching the all task", error)
      }
    }
    fetchingAllTask();
  }, [task])


  // =============================
  // Delete task handler and api
  // =============================

  const deleteHandler = async (taskId) => {
    try {
      const response = await deleteTaskApi(taskId);
      if (response) {
        toast.success("Task deleted Successfully", { style: { color: "#FFFFFF", background: "#0F172B" } })
      }
    } catch (error) {
      console.log("error while deleting task", error);
    }
  }

  // =========================
  // Loading task 
  // =========================

  if (!task) {
    return (
      <div className='min-h-screen w-full flex items-center justify-center bg-[#1A2546]' >
        <h1>......Loading all task</h1>
      </div>
    )
  }

  return (
    <section className='min-h-screen md:min-h-full w-full flex items-center justify-center bg-[#1A2546]' >

      {/* All interns task showing div */}
      <section className='w-full flex flex-col items-center justify-center space-y-2 border-2 border-sky-500 rounded-sm shadow-lg shadow-sky-500 bg-slate-900/50  ' >

        {/* Heading */}
        <h1 className='text-sky-500 font4 md:text-3xl' >INTERNSHIP TASK</h1>

        {/* Maping task */}
        <div className='w-full flex flex-col space-y-5 p-4' >
          {task?.map((task) => (
            <div className='text-white border-2 border-sky-500 rounded-sm p-2 shadow-lg shadow-sky-500' key={task._id} >
              <div key={task._id} className='flex items-center justify-between' >
                <h1 className='font1' >{task.title}</h1>
                <h1 onClick={() => deleteHandler(task._id)} className='bg-red-500 text-black font1 p-2 rounded-sm hover:scale-[0.9] transition' >Delete Task</h1>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}

export default AdminDashboard;