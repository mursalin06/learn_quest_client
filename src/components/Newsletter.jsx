import mailIcon from '../assets/recruiter/icons8-email-100.png'
const Newsletter = () => {
    return (
        <section className='pt-12 pb-24'>
            <div className='flex flex-col justify-center items-center border rounded-lg border-[#825afa] w-1/2 mx-auto py-16 space-y-5'>
            <img src={mailIcon} alt="" />
            <h2 className="md_text-3xl font-bold text-4xl">Subscribe to our Newsletter</h2>
            <p>Your Weekly Dose of LearnQuest Insights</p>
            <div className="join">
                <div>
                    <div>
                        <input className="input input-bordered join-item" placeholder="Search" />
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