import { useEffect, useState } from 'react'
import { getAllTaskApi } from '../Apis/AdminTaskUploaderApis';
import { createInternsProfileAPi, deleteTaskApi, fetchingAllInternsProfileApi } from '../Apis/AdminDashboardApis';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { Copy, ExternalLink } from "lucide-react";

const AdminDashboard = () => {

  // ==============states==============
  const [task, setTask] = useState(null);
  const [internsProfile, setInternsProfile] = useState(null);
  const [createLoading, setCreateLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

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
      toast.error("Task is not deleted", { theme: "dark" })
      console.log("error while deleting task", error);
    }
  }

  // ====================================
  // Interns account creating handler
  // ====================================

  const CreateAccountHandler = async (data) => {
    setCreateLoading(true);
    try {
      const response = await createInternsProfileAPi(data);
      if (response) {
        toast.success("Intern LoginId, password and Profile created", { style: { color: "#FFFFFF", background: "#0F172B" } })
      }
    } catch (error) {
      toast.error("Intern is not register", { theme: "dark" })
      console.log("error while create profile", error);
    } finally {
      setCreateLoading(false);
      reset();
    }
  }

  // ===================================
  // Fetching all the interns profile
  // ====================================

  useEffect(() => {
    const fetchAllInterProfile = async () => {
      try {
        const response = await fetchingAllInternsProfileApi();
        if (response) {
          setInternsProfile(response.internsProfile)
        }
      } catch (error) {
        console.log("error while fetching interns profile", error);

      }
    }
    fetchAllInterProfile();
  }, [internsProfile])

  // =========================
  // Loading task 
  // =========================

  if (!task) {
    return (
      <div className='min-h-screen w-full flex items-center justify-center bg-[#1A2546]' >
        <h1>......Loading all task</h1>
      </div>
    )
  };

  if(!internsProfile){
    return (
      <div className='min-h-screen w-full flex flex-col items-center justify-center bg-[#1A2546]' >
        <h1>.........Loading Interns Profile </h1>
      </div>
    )
  }

  return (
    <section className='min-h-screen md:min-h-full w-full flex flex-col items-center justify-center gap-10 bg-[#1A2546] md:p-5' >

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

      {/* so this create account to interns */}
      <section className='h-full w-full flex flex-col items-center justify-center' >
        <div className='w-full flex flex-col items-center justify-center border-2 border-sky-500 bg-slate-900/50 rounded shadow-lg shadow-sky-500 md:p-5' >
          <h1 className='text-sm text-sky-500 md:text-3xl font4 font-bold p-5' >Interns Account creating And Data Saving page</h1>

          {/* form for input fields */}
          <form onSubmit={handleSubmit(CreateAccountHandler)} className='p-4 flex flex-col space-y-2 md:gap-2 ' >

            {/* Full name and Domain inputs */}
            <div className='w-full flex flex-col md:flex-row md:gap-5' >
              <div className='w-full' >
                <label className='text-white font1 text-sm' >Full Name</label>
                <input {...register("fullName", { required: "Full name is required" })}
                  className={`w-full border-1 rounded outline-0 shadow-lg shadow-sky-500 p-2 text-white ${errors.fullName ? "border-red-500" : "border-sky-500"}`} placeholder='Intern Name' type="text" />
                {errors.fullName && (<p className='text-sm text-red-500' >{errors.fullName.message}</p>)}
              </div>

              <div className='w-full' >
                <label className='text-white font1 text-sm' >Domain</label>
                <input {...register("domain", { required: "Domain is required" })}
                  className={`w-full border-1 rounded outline-0 shadow-lg shadow-sky-500 p-2 text-white ${errors.domain ? "border-red-500" : "border-sky-500"}`} placeholder='Intern Domain' type="text" />
                {errors.domain && (<p className='text-sm text-red-500' >{errors.domain.message}</p>)}
              </div>
            </div>

            {/* Email and Password inputs */}
            <div className='w-full flex flex-col md:flex-row md:gap-5' >
              <div className='w-full' >
                <label className='text-white font1 text-sm' >Email</label>
                <input {...register("email", { required: "Email is required" })}
                  className={`w-full border-1 rounded outline-0 shadow-lg shadow-sky-500 p-2 text-white ${errors.email ? "border-red-500" : "border-sky-500"}`} placeholder='Intern Email' type="email" />
                {errors.email && (<p className='text-sm text-red-500' >{errors.email.message}</p>)}
              </div>

              <div className='w-full' >
                <label className='text-white font1 text-sm' >Password</label>
                <input {...register("password", { required: "Password is required" })}
                  className={`w-full border-1 rounded outline-0 shadow-lg shadow-sky-500 p-2 text-white ${errors.password ? "border-red-500" : "border-sky-500"}`} placeholder='Intern password' type="password" />
                {errors.password && (<p className='text-sm text-red-500' >{errors.password.message}</p>)}
              </div>
            </div>

            {/* college and Mobile inputs */}
            <div className='w-full flex flex-col md:flex-row md:gap-5' >
              <div className='w-full' >
                <label className='text-white font1 text-sm' >College</label>
                <input {...register("college", { required: "Inter college name required" })}
                  className={`w-full border-1 rounded outline-0 shadow-lg shadow-sky-500 p-2 text-white ${errors.college ? "border-red-500" : "border-sky-500"}`} placeholder='Intern college Name' type="text" />
                {errors.college && (<p className='text-sm text-red-500' >{errors.college.message}</p>)}
              </div>

              <div className='w-full' >
                <label className='text-white font1 text-sm' >Mobile</label>
                <input {...register("mobile", { required: "Mobile  number is required" })}
                  className={`w-full border-1 rounded outline-0 shadow-lg shadow-sky-500 p-2 text-white ${errors.mobile ? "border-red-500" : "border-sky-500"}`} placeholder='Intern Mobile Number' type="tel" />
                {errors.mobile && (<p className='text-sm text-red-500' >{errors.mobile.message}</p>)}
              </div>
            </div>

            {/* college and intern Id inputs */}
            <div className='w-full flex flex-col md:flex-row md:gap-5' >
              <div className='w-full' >
                <label className='text-white font1 text-sm' >Location</label>
                <input {...register("location", { required: "Intern location is required" })}
                  className={`w-full border-1 rounded outline-0 shadow-lg shadow-sky-500 p-2 text-white ${errors.location ? "border-red-500" : "border-sky-500"}`} placeholder='Intern Location' type="text" />
                {errors.location && (<p className='text-sm text-red-500' >{errors.location.message}</p>)}
              </div>

              <div className='w-full' >
                <label className='text-white font1 text-sm' >Internship Duration</label>
                <input {...register("duration", { required: "Internship durations required" })}
                  className={`w-full border-1 rounded outline-0 shadow-lg shadow-sky-500 p-2 text-white ${errors.duration ? "border-red-500" : "border-sky-500"}`} placeholder='Intern Internship Duration' type="text" />
                {errors.duration && (<p className='text-sm text-red-500' >{errors.duration.message}</p>)}
              </div>
            </div>

            {/* Interns starting date and ending date */}
            <div className='w-full flex flex-col md:flex-row md:gap-5' >
              <div className='w-full' >
                <label className='text-white font1 text-sm' >Internship Starting Date</label>
                <input {...register("startingDate", { required: "Intern strating date required" })}
                  className={`w-full border-1 rounded outline-0 shadow-lg shadow-sky-500 p-2 text-white ${errors.startingDate ? "border-red-500" : "border-sky-500"}`} type="date" />
                {errors.startingDate && (<p className='text-sm text-red-500' >{errors.startingDate.message}</p>)}
              </div>

              <div className='w-full' >
                <label className='text-white font1 text-sm' >Internship Ending Date</label>
                <input {...register("endingDate", { required: "Ending date required" })}
                  className={`w-full border-1 rounded outline-0 shadow-lg shadow-sky-500 p-2 text-white ${errors.endingDate ? "border-red-500" : "border-sky-500"}`} type="date" />
                {errors.endingDate && (<p className='text-sm text-red-500' >{errors.endingDate.message}</p>)}
              </div>
            </div>
            <button disabled={createLoading} type='submit' className='w-full bg-slate-900/50 rounded-lg border-2 border-sky-500 shadow-lg shadow-sky-500 p-2 text-white hover:bg-sky-500 hover:scale-[0.9] transition' >
              {createLoading ? "....Creating Intern account" : "Create Intern Account"}
            </button>
          </form>
        </div>
      </section>

      {/* showing all interns profile details */}
      <section className='min-h-full w-full flex flex-col items-center justify-center' >

        <div className='w-full flex flex-col items-center justify-center bg-slate-900/50 border-2 border-sky-500 rounded-sm shadow-lg shadow-sky-500 md:p-4' >

          {/* Heading */}
          <h1 className='text-white font4 ' >Interns Profile data</h1>

          {/* main div interns detail showing */}

          {internsProfile.length === 0 ? (
            <section className='w-full flex flex-col items-center jsutify-center   bg-slate-900/50' >
              <h1 className='text-white text-sm md:text-2xl font1' >---No Interns Data Found---</h1>
            </section>
          ) : (
            <section className='w-full' >
              <table className='border-1 rounded' >
                <thead>
                  <tr>
                    <th className='border-2 text-[9px] md:text-lg text-white font1 p-0 ' >Name</th>
                    <th className='border-2 text-[9px] md:text-lg text-white font1 p-0 ' >Email</th>
                    <th className='border-2 text-[9px] md:text-lg text-white font1 p-0 ' >Password</th>
                    <th className='border-2 text-[9px] md:text-lg text-white font1 p-0 ' >Full Details</th>
                  </tr>
                </thead>
                <tbody>
                  {internsProfile.map((interns, index) => (
                    <tr className='' key={interns._id} >
                      <td className='border-2 text-white text-[7px] w-full font1 p-1 md:p-4 md:text-sm overflow-auto whitespace-normal' >
                        <h1>{interns.fullName} <Copy onClick={()=>{navigator.clipboard.writeText(interns.fullName); alert("Full name copy successfully")}} className='hover:text-emerald-500 hover:scale-[1.1] transition' size={13} /> </h1>
                      </td>
                      <td className='border-2 text-white text-[7px] w-full font1 p-1 md:p-4 md:text-sm overflow-auto whitespace-normal' >
                        <h1>{interns.email} <Copy onClick={()=>{navigator.clipboard.writeText(interns.email); alert("Email copy successfully")}} className='hover:text-emerald-500 hover:scale-[1.1] transition' size={13} /> </h1>
                      </td>
                      <td className='border-2 text-white text-[7px] w-full font1 p-1 md:p-4 md:text-sm overflow-auto whitespace-normal' >
                        <h1>{interns.password} <Copy onClick={()=>{navigator.clipboard.writeText(interns.password); alert("Password copy successfully")}} className='hover:text-emerald-500 hover:scale-[1.1] transition' size={13} /> </h1>
                      </td>
                      <td className='border-2 text-white text-[7px] w-full font1 p-1 md:p-4 md:text-sm overflow-auto whitespace-normal' >
                        <h1 className='text-emerald-500' >view</h1>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}


        </div>
      </section>
    </section>
  )
}

export default AdminDashboard;