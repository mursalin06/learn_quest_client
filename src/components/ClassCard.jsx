import React from 'react';

const ClassCard = ({ classData }) => {
    const { image, title, name, description, price, totalEnrolment } = classData;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    className='md:h-[330px]'
                    src={image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <hr />
                <p><span className='font-semibold'>Short Description:</span> {description}</p>
                <div>
                    <p><span className='font-semibold'>Name:</span> {name}</p>
                    <p><span className='font-semibold'>Total Enrolment:</span> {totalEnrolment || "0"}</p>
                    <p><span className='font-semibold'>Price:</span> <span className='font-medium'>${price}</span></p>
                </div>
                <div className="card-actions justify-center">
                    <button className="btn btn-sm w-full px-6 text-sm bg-[#825afa] text-white hover:bg-[#825afa]">Enroll</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;