import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { axiosintance } from '../config/axiosintance';
import { taskSubmissionApi } from '../Apis/TaskSubmissionApi';

const TaskDetails = () => {

    const { id } = useParams();

    const [task, setTask] = useState(null);
    const [gitLink, setGitLink] = useState("");
    const [docsLink, setDocsLink] = useState("");
    const [remarks, setRemarks] = useState("")
    const [loading, setLoading] = useState(false);

    // ====================================================
    // Fetching the single task and showing
    // ====================================================

    useEffect(() => {
        async function fetchTask() {
            try {
                const response = await axiosintance.get(`/api/admin/single-task/${id}`);
                if (response) {
                    setTask(response.data.task);
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


    // ==========================================
    // Task submit handler for the interns
    // ==========================================

    const taskHandlerSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);

        if (!gitLink) {
            alert("Git link are required");
        }

        if (!docsLink) {
            alert("Documentation link is required")
        }

        const playload = {
            taskId: task._id,
            taskNumber: task.taskNumber,
            gitHubLink: gitLink,
            documentationLink: docsLink,
            remarks: remarks
        }

        try {
            const response = await taskSubmissionApi(playload);
            if (response) {
                alert("Task submitted successfully ✅")
                setGitLink("");
                setDocsLink("");
                setRemarks("");
            }
        } catch (error) {
            console.log("Task submission error", error);
            alert("Failed to submit task ❌");
        } finally {
            setLoading(false);
        }
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

                    <div className='w-full md:w-[40%]' >
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

                    {/* Task submiting fields */}
                    <section className='w-full' >

                        <div className='flex flex-col items-center justify-center' >
                            <h1 className='text-sky-500 font4 font-bold md:text-2xl' > 📤 Submit Your Task</h1>

                            {/* task submission form */}
                            <form onSubmit={taskHandlerSubmit} className='w-full flex flex-col gap-4 border-2 border-sky-500 shadow-lg shadow-sky-500 rounded-lg p-5' >

                                {/* git hub input */}
                                <div className='flex flex-col gap-5' >
                                    <h1 className='text-white text-sm font-bold font1' >GitHub Repository URL *</h1>
                                    <input value={gitLink} onChange={(e) => setGitLink(e.target.value)} className='text-white border-2 border-white rounded p-2 bg-slate-900/70 rounded-lg' placeholder='https://github.com/yourusername/repo' type="url" />
                                    <h1 className='font5' >Provide the link to your GitHub repository containing the project code</h1>
                                </div>

                                {/* documentation input */}
                                <div className='flex flex-col gap-5' >
                                    <h1 className='text-white text-sm font-bold font1' >Documentation URL *</h1>
                                    <input value={docsLink} onChange={(e) => setDocsLink(e.target.value)} className='text-white border-2 border-white rounded p-2 bg-slate-900/70 rounded-lg' placeholder='https://docs.google.com/documentation' type="url" />
                                    <h3 className='font5' >Provide link to documentation (Google Docs, PDF, or any shareable link). Must include: Project description, setup instructions, screenshots, and explanations as specified above.</h3>
                                </div>

                                {/* Remark input */}
                                <div>
                                    <h1 className='text-white text-sm font-bold font1'  >Remarks *</h1>
                                    <textarea value={remarks} onChange={(e) => setRemarks(e.target.value)} placeholder='Any additional comments or notes about your submission...' className='w-full text-white border-2 border-white rounded p-2 bg-slate-900/70 rounded-lg' ></textarea>
                                    <h3 className='font5' >You can add any comments about challenges faced, features implemented, or additional information.</h3>
                                </div>

                                <button disabled={loading} type='submit' className='max-w-sm text-black bg-sky-500 py-2 shadow-lg shadow-sky-500 rounded-sm' >{loading ? "...submitting task" : "submit"}</button>
                            </form>
                        </div>

                    </section>
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