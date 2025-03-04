import { Link } from "react-router-dom";
import recruiterImage from "../assets/recruiter/req.jpg";
import SectionTitle from "../components/SectionTitle";
import SimpleParallax from "simple-parallax-js";

const RecruitInstructor = () => {
  return (
    <div className="py-12">
      <SectionTitle
        title="We are Recruiting"
        subtitle="Become a Part of Our Mission to Transform Education"
      ></SectionTitle>
      <div className="md:flex justify-center gap-5 items-center mt-12">
        <div className="md:w-1/3">
          <SimpleParallax orientation="left">
            <img
              className="md:max-h-[600px] my-5 md:my-0 px-1 rounded-lg md:rounded-none"
              src={recruiterImage}
              alt=""
            />
          </SimpleParallax>
        </div>
        <div className="text-center md:text-start">
          <h2 className="text-3xl font-bold">
            Join Our Team of Inspiring Educators
          </h2>
          <p className="font-semibold">
            Empower Learners Worldwide by Sharing Your Knowledge and Skills.
          </p>
          <Link to="teach-on-lq" className="btn bg-[#825afa]  text-white">
            Start Teaching today!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecruitInstructor;
