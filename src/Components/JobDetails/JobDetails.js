import React from 'react';
import { Link, useParams } from 'react-router-dom';
import data from "../../data/data";
import './JobDetails.css'

const JobDetails = () => {
    const { jobId } = useParams();
    const singleData = data.find(d => d.position === jobId);
    return (
        <section>

            <div className="container">
                <div className="details_wrapper">
                    <div className="details_top">
                        {/* <img src={singleData.logo} alt="" /> */}
                        <div className="">
                            <h1>{singleData.company}</h1>
                        </div>
                        <button >
                            <Link to={singleData.companySite}>Company Site</Link>
                        </button>
                    </div>

                    <div className="job_details">
                        <div className="about_job">
                            <div className="">
                                <h6>{singleData.postedAt} - {singleData.contract}</h6>
                                <h1>{singleData.position}</h1>
                                <span>{singleData.location}</span>
                            </div>
                            <button className="btn">Apply</button>
                        </div>
                        <p className="job_desc">{singleData.desc}</p>

                        <div className="requirements">
                            <h1>Requirements</h1>
                            <p>{singleData.requirements.reqTitle}</p>

                            <ul className="rquirement_item">
                                {
                                    singleData.requirements.reqItem.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>


                        <div className="responsibility">
                            <h1>What You Will Do?</h1>
                            <p>{singleData.responsibility.resTitle}</p>

                            <ol className="responsibility_item">
                                {
                                    singleData.responsibility.resItem.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))
                                }
                            </ol>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default JobDetails;