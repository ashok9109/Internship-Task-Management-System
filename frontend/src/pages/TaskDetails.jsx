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
        <section className='min-h-full w-full bg-[#1A2546] flex flex-col items-center justify-center p-5 md:p-10' >
            {task ? (
                <section className='w-full flex flex-col space-y-4 bg-[#1A2537] border-2 border-sky-500 md:p-10 rounded-lg shadow-lg shadow-sky-500  p-3' >
                    <h1 className='text-sky-500 font-bold font4' >{task.title}</h1>
                    <div className='text-white font1 bg-slate-900/70 md:p-10 rounded-sm' >
                        <p>{task.theoryConcepts}</p>
                    </div>

                    <div className='text-white font1 bg-slate-900/70 md:p-10 rounded-sm'>
                        <p>{task.handOnPractice}</p>
                    </div>

                    <div className='text-sky-500 font4 font-bold' >
                        <h1>{task.projectTitle}</h1>
                    </div>

                    <div className='text-white font1 bg-slate-900/70 md:p-10 rounded-sm' >
                        <p>{task.description}</p>
                    </div>

                    <div className='text-green-500 font1 bg-slate-900/70 md:p-10 rounded-sm' >
                        <p>{task.sampleOutput}</p>
                    </div>

                    <div className='text-white font1 md:p-10' >
                        <p>{task.submissions}</p>
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