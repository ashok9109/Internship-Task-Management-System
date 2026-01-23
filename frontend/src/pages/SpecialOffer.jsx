import image from '../images/WEBSITE DEVELOPMENT-8.png'
import imagehindi from '../images/WEBSITE DEVELOPMENT-8-HINDI.png'


const SpecialOffer = () => {
    return (
        <>
            <section className='min-h-full w-full bg-[#1A2546] flex items-center justify-center flex-col p-3 md:p-10 space-y-4 font1'>
                <h1 className='text-white font-bold text-sm md:text-2xl font4 ' >🌐 Website Development Service</h1>
                <div className='w-full flex items-center justify-center text-white p-5 bg-slate-900/50 rounded-lg border-2 border-sky-500 shadow-lg shadow-sky-500' >
                <p className='h-full w-full font1  ' >Website Development is the complete process of designing, building, and maintaining a professional website that helps businesses grow online. It includes attractive design, smooth functionality, mobile responsiveness, security, and performance optimization to deliver the best user experience.</p>
                </div>
                <div className='flex flex-col md:flex-row' >
                <img className='h-full w-full md:h-[300px] md:w-[400px]' src={image} alt="image for offer" />
                <img className='h-full w-full md:h-[300px] md:w-[400px]' src={imagehindi} alt="image for offer" />
                </div>
                <div className='h-full w-full md:p-[50px] font6 flex flex-col space-y-3 bg-slate-900 rounded-lg border-2 border-sky-500 shadow-lg shadow-sky-500 text-white p-2' >
                    <h1 className='font-bold ' >Key Features</h1>
                    <h1>1️⃣ Custom Website Design (Up to 10 Pages)</h1>
                    <p>We design modern, visually appealing, and business-focused websites tailored to your brand requirements.</p>
                    <h1>2️⃣ Mobile-Friendly & Fully Responsive</h1>
                    <p>The website works perfectly on mobile, tablet, laptop, and desktop, ensuring a seamless user experience on all devices.</p>
                    <h1>3️⃣ Integrated Communication Tools</h1>
                    <p>WhatsApp button, Call button, and Chatbot integration for instant customer interaction and better lead generation.</p>
                    <h1>4️⃣ SEO-Optimized & Secure Website</h1>
                    <p>SEO-friendly structure to improve search engine ranking, along with free SSL certificate for secure browsing.</p>
                    <h1>5️⃣ Complete Hosting & Business Setup</h1>
                    <p>Includes 1 year free hosting, business email, and smooth website deployment with ongoing support.</p>
                </div>

            </section>
        </>
    )
}

export default SpecialOffer;