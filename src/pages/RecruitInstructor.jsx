import recruiterImage from '../assets/recruiter/req.jpg'
import SectionTitle from '../components/SectionTitle';

const RecruitInstructor = () => {
    return (
        <div className="py-12">
            <SectionTitle title="We are Recruiting" subtitle="Become a Part of Our Mission to Transform Education"></SectionTitle>
            <div className="md:flex justify-center gap-5 items-center mt-12">
                <div className='w-1/3'>
                    <img className='max-h-[600px]' src={recruiterImage} alt="" />
                </div>
                <div>
                    <h2 className='text-3xl font-bold'>Join Our Team of Inspiring Educators</h2>
                    <p className='font-semibold'>Empower Learners Worldwide by Sharing Your Knowledge and Skills.</p>
                    <button className='btn bg-[#825afa]  text-white'>Start Teaching today!</button>
                </div>
            </div>
        </div>
    );
};

export default RecruitInstructor;