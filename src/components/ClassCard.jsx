import React from "react";
import { Link } from "react-router-dom";

const ClassCard = ({ classData }) => {
  const { _id, image, title, name, description, price, enrollCount } =
    classData;
  return (
    <div className="card card-compact bg-base-100 shadow-xl rounded-md">
      <figure className="md:h-[15vw] h-[70vw] w-full">
        <img className="w-full h-full object-cover" src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <hr />
        <p>
          <span className="font-semibold">Short Description:</span>{" "}
          {description}
        </p>
        <div>
          <p>
            <span className="font-semibold">Name:</span> {name}
          </p>
          <p>
            <span className="font-semibold">Total Enrolment:</span>
            {enrollCount || 0}
          </p>
          <p>
            <span className="font-semibold">Price:</span>{" "}
            <span className="font-medium">${price}</span>
          </p>
        </div>
        <div className="card-actions justify-center">
          <Link to={`/class/${_id}`} className="w-full">
            <button className="btn btn-sm w-full px-6 text-sm bg-[#825afa] text-white hover:bg-[#825afa]">
              Enroll
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
