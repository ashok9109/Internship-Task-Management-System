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
        <section className='min-h-screen w-full bg-[#1A2546] flex flex-col items-center justify-center' >
            {task ? (
                <div>
                    <h1>{task.title}</h1>
                </div>
            ) : (
                <div>
                    <h1>....Loading</h1>
                </div>
            )}
            <div>
                {/* <h1>{task.title}</h1> */}
            </div>
        </section>
    )
}

export default TaskDetails;