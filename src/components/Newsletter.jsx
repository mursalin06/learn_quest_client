import Swal from 'sweetalert2';
import mailIcon from '../assets/recruiter/icons8-email-100.png';

const Newsletter = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Good job!",
            text: "You're Subscribed!",
            icon: "success",
            confirmButtonColor: "#825afa",
        });
        form.reset();
    };

    return (
        <section className='pt-12 pb-24 px-3'>
            <div className='flex flex-col justify-center items-center border border-[#825afa] md:w-1/2 w-11/12 mx-auto py-16 space-y-5 text-center'>
                <img src={mailIcon} alt="Email Icon" />
                <h2 className="text-2xl font-bold md:text-4xl">Subscribe to our Newsletter</h2>
                <p>Your Weekly Dose of LearnQuest Insights</p>

                {/* Mobile form */}
                <div className='md:hidden'>
                    <form onSubmit={handleSubmit}>
                        <input type="email" required placeholder='Enter your email' className='input input-bordered' />
                        <button type="submit" className='btn bg-[#825afa] mt-1 text-white'>Subscribe</button>
                    </form>
                </div>

                {/* Desktop form */}
                <div className='hidden md:block'>
                    <form onSubmit={handleSubmit} className="join">
                        <input type="email" required className="input input-bordered rounded-none join-item" placeholder="Enter your Email" />
                        <button type="submit" className="btn bg-[#825afa] text-white rounded-none join-item">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
