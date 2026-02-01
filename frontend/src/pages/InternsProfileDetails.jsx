import React, { useEffect, useState } from 'react'
import { axiosintance } from '../config/axiosintance';
import { useParams } from 'react-router';

const InternsProfileDetails = () => {

  const { id } = useParams()
  const [internsProfile, setInternsProfile] = useState(null);

  // ===============================
  // fetching single interns
  // ===============================
  useEffect(() => {
    async function fetchInternsProfile() {
      try {
        const response = await axiosintance.get(`/api/interns/single-profile/${id}`);
        if (response) {
          setInternsProfile(response.data.intern);
        }

      } catch (error) {
        console.log("error fetching interns profile", error);
      }
    }
    fetchInternsProfile();
  }, [id]);

  // =====================================
  // Intern all submitted task fetching 
  // ====================================

  // useEffect(()=>{
  //   async function fetchInterAllTask() {
  //     try {
  //       const response = await axiosintance.get(`/api/submission/intern-submitted/tasks/${id}`);
  //       if(response){
  //         console.log("this is the response", response)
  //       }
        
  //     } catch (error) {
  //       console.log("error while fetching intern all task", error);
  //     }
      
  //   }
  //   fetchInterAllTask();
  // },[id])

  // ====================
  // Loading 
  // ====================

  if (!internsProfile) {
    return (
      <div className='min-h-screen bg-[#1A2546]' >....Loading Profile</div>
    )
  }


  return (
    <section className='min-h-screen md:min-h-full w-full bg-[#1A2546] text-white p-4' >

      {/* showing interns Profile */}
      <section className='w-full text-center bg-slate-900/50 text-sm md:text-2xl space-y-4 flex flex-col  items-center justify-center border-2 border-sky-500 shadow-lg shadow-sky-500 p-7' >
        <h1 className='font4 text-sky-500' >Intern Profile Details and Submitted task Details</h1>

        {/* main div */}
        <div className='w-full flex flex-col md:flex-row md:p-5' >

          {/* left-div */}
          <div className='w-full flex flex-col justify-start md:gap-5' >
            <div className='flex' >
              <h1>Full Name :- </h1>
              <h1>{internsProfile.fullName}</h1>
            </div>
            <div className='flex'>
              <h1>Domain :- </h1>
              <h1>{internsProfile.domain}</h1>
            </div>

            <div className='flex' >
              <h1>Email :- </h1>
              <h1>{internsProfile.email}</h1>
            </div>
            <div className='flex'>
              <h1>password :- </h1>
              <h1>{internsProfile.password}</h1>
            </div>

            <div className='flex' >
              <h1>College :- </h1>
              <h1>{internsProfile.college}</h1>
            </div>
            <div className='flex'>
              <h1>Mobile :- </h1>
              <h1>{internsProfile.mobile}</h1>
            </div>
          </div>

          {/* Right div */}
          <div className='w-full flex flex-col justify-start md:gap-5' >
            <div className='flex' >
              <h1>Location :- </h1>
              <h1>{internsProfile.location}</h1>
            </div>
            <div className='flex'>
              <h1>Duration :- </h1>
              <h1>{internsProfile.duration}</h1>
            </div>

            <div className='flex' >
              <h1>Internship Starting Date :- </h1>
              <h1>{internsProfile.startingDate?.slice(0, 10)}</h1>
            </div>
            <div className='flex'>
              <h1>Internship Ending Date :- </h1>
              <h1>{internsProfile.endingDate.slice(0, 10)}</h1>
            </div>
          </div>
        </div>


      </section>
    </section>
  )
}

export default InternsProfileDetails