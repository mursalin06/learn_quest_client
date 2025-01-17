import mailIcon from '../assets/recruiter/icons8-email-100.png'
const Newsletter = () => {
    return (
        <section className='pt-12 pb-24'>
            <div className='flex flex-col justify-center items-center border rounded-lg border-[#825afa] md:w-1/2 w-11/12 mx-auto py-16 space-y-5 text-center'>
                <img src={mailIcon} alt="" />
                <h2 className="text-2xl font-bold md:text-4xl">Subscribe to our Newsletter</h2>
                <p>Your Weekly Dose of LearnQuest Insights</p>
                <div className='md:hidden'>
                    <input type="email" placeholder='enter your email' className='input input-bordered' />
                    <br />
                    <button className='btn bg-[#825afa] mt-1 text-white'>Subscribe</button>
                </div>
                <div className="join hidden md:block">
                    <div>
                        <div>
                            <input className="input input-bordered join-item" placeholder="Enter your Email" />
                        </div>
                    </div>
                    <div className="indicator">
                        <button className="btn bg-[#825afa] text-white join-item">Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;