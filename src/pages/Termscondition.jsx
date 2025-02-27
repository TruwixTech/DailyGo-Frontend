import React, { useEffect } from 'react'
import ring from '../assets/ring.png'
import Navbar from '../Component/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../Component/Footer'
const TermsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
 
    return (
        <>
        <div className='p-4 w-full h-auto'>
            <div className='w-full md:h-[297px] h-auto relative bg-[#496f69] rounded-3xl flex flex-col  gap-2 md:pb-10 pb-6  '>
                <Navbar />
                <hr className='border-1   w-[90%] mx-auto border-gray-400  '/>
                 <img src={ring} className=' absolute top-0 w-full h-full' />
                <h1 className='text-center font-semibold text-[30px] md:text-[60px] text-white'>Terms and Conditions</h1>
                <div className='flex gap-2 items-center justify-center text-white '>
                    <span >Home</span><span>-</span><span>Terms and Conditions</span>
                </div>
 
            </div>
 
            <h1 className='text-center text-[24px] mt-4 py-6'><span className='text-[#366059]'>Last Updated:</span>21 Jan 2024</h1>
            <p className='px-4 md:px-20'>Welcome to DailyGo! These Terms and Conditions ("Terms", "Terms and Conditions") govern your use of the DailyGo mobile application (the "App") and the services provided by DailyGo ("we", "us", or "our"). By downloading, installing, or using the App, you agree to comply with and be bound by these Terms. Please read them carefully.</p>
            <div className="px-4 md:px-20 pt-28 pb-10 ">
                <h1 className="md:text-4xl  text-2xl font-bold mb-4 uppercase text-black" >
                1. Acceptance of Terms
                </h1>
 
                <section className="mb-6">
                    {/* <h2 className="text-xl font-semibold" style={{ color: '#16a34a' }}>No Refund Policy</h2> */}
                    <p className="mt-1 text-[18px]">
                    By using the DailyGo app, you acknowledge that you have read, understood, and agree to be bound by these Terms and any updates or changes made to them. If you do not agree to these Terms, you are prohibited from accessing or using the App.
                    Modifications: We may update or change these Terms periodically. We will post the updated Terms on this page with a new "Last Updated" date. It is your responsibility to review these Terms regularly. Continued use of the App after such changes constitutes your acceptance of the new Terms.
                    </p>
 
                    <h2 className=" md:text-4xl text-2xl font-bold py-6 text-black  ">2. Eligibility </h2>
                    <p className='text-[18px]'>By using the DailyGo app, you represent and warrant that you meet the following eligibility criteria:</p>
                    
                    <ul className="list-disc list-inside mt-2 pl-4 text-[18px]">

                        <li>Age Requirement: You must be at least 13 years of age or the legal age of majority in your jurisdiction (whichever is older). If you are under 18, you must have the consent of a parent or guardian to use the App.</li>
                        <li>Account Responsibility: You must provide accurate and complete information when creating an account and are responsible for maintaining the security of your account credentials. </li>
                      </ul>
                <p>If you are using the App on behalf of a company or organization, you represent and warrant that you have the authority to accept these Terms on behalf of that entity.</p>
                </section>
 
                <h2 className=" md:text-4xl text-2xl font-bold py-6 text-black  ">3. License to Use the App </h2>
                    <p className='text-[18px]'>We grant you a limited, non-exclusive, non-transferable license to install and use the DailyGo app solely for your personal, non-commercial use, subject to these Terms. This license is revocable at any ti:</p>
                    
                    <ul className="list-disc list-inside mt-2  text-[18px]">

                        <li>Restrictions: You agree not to:.</li>
                        <li className='pl-6'>Reproduce, distribute, display, or otherwise use the App or its content for commercial purposes without our prior written consent</li>
                        <li className='pl-6'>Modify, disassemble, decompile, reverse-engineer, or otherwise attempt to derive the source code of the App.</li>
                        <li className='pl-6'>Transfer or sublicense your license to use the App.</li>
                      </ul>
                
           
                      <h2 className=" md:text-4xl text-2xl font-bold py-6 text-black  ">4. User Registration and Account</h2>
                        <p className='text-[18px]'>To access certain features of the DailyGo app, you may need to register for an account. When registering, you agree to provide accurate, current, and complete information. This includes, but is not limited to, your name, email address, and any other required details:</p>
                         <ul className="list-disc list-inside mt-2  text-[18px]">
                        <li className='pl-6'>Account Security: You are responsible for the confidentiality of your account information, including your username and password. You agree to notify us immediately if you believe your account has been compromised or if unauthorized access has occurred.</li>
                        <li className='pl-6'>Account Suspension/Termination: We reserve the right to suspend or terminate your account if we believe you have violated these Terms or for any other reason. We may also ask you to provide additional verification or documentation in case of suspicious activity.</li>
                        </ul>
             
  
                        <h2 className=" md:text-4xl text-2xl font-bold py-6 text-black  ">5.Privacy</h2>
                        <p className='text-[18px]'>Your privacy is important to us. By using the DailyGo app, you agree to the collection, use, and sharing of your data as outlined in our Privacy Policy, which can be found at [link to Privacy Policy]</p>
                         <ul className="list-disc list-inside mt-2  text-[18px]">
                        <li className='pl-6'>Data Collection: We may collect personal information (e.g., name, email, payment information) and non-personal information (e.g., usage data, device information) to improve the service..</li>
                        <li className='pl-6'>Third-Party Services: The App may contain links to third-party websites or services. We are not responsible for the content or privacy practices of those third parties.</li>
                        </ul>
                    
 
                
            </div> 
        </div>
        <Footer/>
        </>
 
    )
}
export default TermsPage;
 