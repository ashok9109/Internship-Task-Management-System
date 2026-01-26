import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { axiosintance } from '../config/axiosintance';

const TaskDetails = () => {

    const { id } = useParams();

    const [task, setTask] = useState(null);

    useEffect(() => {
        async function fetchTask() {
            try {
                const response = await axiosintance.get(`/api/admin/single-task/${id}`);
                console.log("this is response", response.data.task)
                if (response) {
                    setTask(response.data.task);
                    console.log("this is the state", task)
                }
            } catch (error) {
                console.log("error fetching single task", error)
            }
        }
        fetchTask();
    }, [id])

    if (!task) {
        <h1>......Loading Task Please wait</h1>
    }


    return (
        <section className='min-h-full w-full bg-[#1A2546] flex flex-col items-center justify-center p-5 md:p-10 relative' >
            {task ? (
                <section className='h-full w-full flex flex-col space-y-4 bg-[#1A2537] border-2 border-sky-500 md:p-10 rounded-lg shadow-lg shadow-sky-500  p-3' >
                    <h1 className='text-sky-500 font-bold font4' >{task.title}</h1>

                    {/* Theory concepts div */}
                    <div className='flex flex-col gap-2' >
                        <h1 className='text-white font1' >📚 Theory Concepts: </h1>
                        <p className='text-white font1 bg-slate-900/70 md:p-10 rounded-sm' >{task.theoryConcepts}</p>
                    </div>

                    {/* Hand on practice div */}
                    <div className='flex flex-col gap-2' >
                        <h1 className='text-white font1' >🛠️ Hands-On Practice: </h1>
                        <p className='text-white font1 bg-slate-900/70 md:p-10 rounded-sm' >{task.handOnPractice}</p>
                    </div>

                    {/* Project title */}
                    <div className='text-sky-500 font4 font-bold' >
                        <h1>{task.projectTitle}</h1>
                    </div>

                    {/* Technical requirements div */}
                    <div className='flex flex-col gap-2' >
                        <h1 className='text-white font1' >🛠️ Technical Requirements: </h1>
                        <p className='text-white font1 bg-slate-900/70 md:p-10 rounded-sm' >{task.technicalRequirements}</p>
                    </div>

                    {/* Project description */}
                    <div className='flex flex-col gap-2 text-white font1 bg-slate-900/70 md:p-10 rounded-sm' >
                        <h1>📋 Step-by-Step Guide:</h1>
                        <p className='text-white font1 bg-slate-900/70 md:p-10 rounded-sm' >{task.stepByStep}</p>
                    </div>

                    <div className='w-[40%]' >
                        <div className='text-green-500 font1 bg-slate-900/70 md:p-10 rounded-sm overflow-x-auto' >
                            <code>{task.sampleOutput}</code>
                        </div>
                    </div>

                    {/* Tips and resources div */}
                    <div className='flex flex-col gap-2' >
                        <h1 className='text-white font1' >💡 Tips & Resources:</h1>
                        <p className='text-white font1 bg-slate-900/70 md:p-10 rounded-sm' >{task.tipResources}</p>
                    </div>

                    <div className='flex flex-col gap-2' >
                        <h1 className='text-white font1' >📤 Submission Requirements:</h1>
                        <p className='text-white font1 md:p-5' >{task.submissions}</p>
                    </div>
                </section>
            ) : (
                <div>
                    <h1>....Loading</h1>
                </div>
            )}
        </section>
    )
}

export default TaskDetails;