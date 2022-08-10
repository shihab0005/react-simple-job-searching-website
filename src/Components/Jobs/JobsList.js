import React, { useState } from 'react';
import './JobsList.css'
import data from '../../data/data'
import { Link } from 'react-router-dom';

const JobsList = () => {

    const [jobData, setJobData] = useState(data);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchBylocation, setSearchByLocation] = useState('');

    const handleSearchLocation = e => {
        const searchLocation = e.target.value;
        setSearchByLocation(searchLocation.toLowerCase())
    }
    const handleOnClick = () => {
        const filteredLocation = data.filter((d) =>(
             d.location.toLowerCase().includes(searchBylocation)));
        setJobData(filteredLocation);
        // alert("Click")
    }

    const handleSearchInput = e => {
        const searchValue = e.target.value;
        setSearchTerm(searchValue.toLowerCase());
        //console.log(searchTerm)
    }



    // filter data ///

    const filterJobData = e => {
        const filterValue = e.target.value;

        if (filterValue === "full-time") {
            const filteredData = data.filter(d => d.contract === "Full Time");
            setJobData(filteredData);
        }
        else if (filterValue === "part-time") {
            const filteredData = data.filter(d => d.contract === "Part Time");
            setJobData(filteredData);
        }
        else if (filterValue === "freelance") {
            const filteredData = data.filter(d => d.contract === "Freelance");
            setJobData(filteredData);
        }
        else if (filterValue === "contract") {
            const filteredData = data.filter(d => d.contract === "Contract");
            setJobData(filteredData);
        }
        else {
            //setJobData(data);
        }

    }



    return (
        <section className='job_list'>
            <div className="container">
                <div className="job_list_wrapper">
                    <div className="search_panel">
                        <div className="search_panel_01">
                            <span><i className="ri-search-line"></i></span>
                            <input type="text" placeholder='Search By Title or Company' onChange={handleSearchInput} />
                        </div>
                        <div className="search_panel_02">
                            <span><i className="ri-map-pin-line"></i></span>
                            <input type="text" placeholder='Search By Location' onChange={handleSearchLocation} />
                            <button className='btn' onClick={handleOnClick}>Search</button>
                        </div>
                        <div className="search_panel_03">
                            <select onChange={filterJobData}>
                                <option value="all">Filter Job By</option>
                                <option value="full-time">Full Time</option>
                                <option value="part-time">Part Time</option>
                                <option value="freelance">Freelance</option>
                                <option value="contract">Contract</option>

                            </select>
                        </div>
                    </div>

                    <div className="jobs_wrapper">
                        {
                            jobData?.filter((dat) => {
                                if (searchTerm === "") return dat;
                                if (
                                    dat.position.toLowerCase().includes(searchTerm) ||
                                    dat.company.toLowerCase().includes(searchTerm)
                                )
                                    return dat;
                            }).map((item) => (
                                <div className="jobs_item" key={item.id}>
                                    <img src={item.logo} alt="" />
                                    <div className="job_content">
                                        <h6>{item.postedAt} - {item.contract}</h6>
                                        <h1><Link to={`/jobs/${item.position}`}>{item.position}</Link></h1>
                                        <p>{item.company}</p>

                                        <div className="location">
                                            <p>Location : <span></span>{item.location}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </section>
    );
};

export default JobsList;